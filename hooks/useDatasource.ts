import { useContext, useState, useEffect } from 'react';

import DatasourceContext from '~/contexts/DatasourceContext';

import { StoryblokDatasourceEntry } from '~/storyblok/space';

const useDatasource = (datasourceId: string, dimension?: string) => {
	const datasources = useContext(DatasourceContext);

	const [datasource, setDatasource] = useState<StoryblokDatasourceEntry[]>([]);

	useEffect(() => {
		if (datasourceId && typeof datasourceId === 'string') {
			(async () => {
				try {
					const resolvedDatasource = await datasources.getDatasource(
						datasourceId,
						dimension
					);

					setDatasource(resolvedDatasource);
				} catch (err) {
					console.error(err);
				}
			})();
		}
	}, [datasourceId]);

	return datasource;
};

export default useDatasource;
