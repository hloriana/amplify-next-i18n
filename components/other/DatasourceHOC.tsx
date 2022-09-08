import React, { useState, FunctionComponent, useContext } from 'react';

import superagent from 'superagent';

import DatasourceContext from '~/contexts/DatasourceContext';
import MarketContext from '~/contexts/EnvContext';

const DatasourceHOC: FunctionComponent<{ children: any }> = (props) => {
	const [datasources, setDatasources] = useState<any>({});

	const marketContext = useContext(MarketContext);

	const getDatasource = (slug: string, dimension?: string) => {
		return new Promise<any>((resolve, reject) => {
			if (datasources[slug]) {
				resolve(datasources[slug]);
			} else {
				const promiseDatasource = superagent
					.get([process.env.SB_CONTENT_API, 'datasource_entries'].join('/'))
					.accept('json')
					.type('json')
					.query({
						datasource: slug,
						dimension: dimension || marketContext.marketCode,
						// eslint-disable-next-line @typescript-eslint/camelcase
						per_page: 1000,
						token: process.env.SB_CONTENT_TOKEN,
						version: process.env.SB_CONTENT_VERSION,
						cv: process.env.SB_CACHE_VERSION
					});

				(async () => {
					try {
						const response = await promiseDatasource;

						const resolvedDatasource = response.body.datasource_entries;

						const newDatasources = { ...datasources };

						newDatasources[slug] = resolvedDatasource;

						setDatasources(newDatasources);
						resolve(newDatasources[slug]);
					} catch (error) {
						reject(error);
					}
				})();
			}
		});
	};

	return (
		<DatasourceContext.Provider value={{ datasources, getDatasource }}>
			{props.children}
		</DatasourceContext.Provider>
	);
};

export default DatasourceHOC;
