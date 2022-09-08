import React, { FunctionComponent, useState } from 'react';

import superagent from 'superagent';

import LegalContext from '~/contexts/LegalContext';

const legalApiUrl = 'https://www.ef.com/central-api/gn/footer/v2/getlegal';

const LegalHOC: FunctionComponent<{}> = (props) => {
	const { children } = props;

	const [legals, setLegals] = useState<any[]>([]);

	const getLegal = (marketCode: string) => {
		return new Promise<any>((resolve, reject) => {
			const desiredLegal = legals
				.filter((legal) => legal.marketCode === marketCode)
				.pop();

			if (desiredLegal) {
				resolve(desiredLegal);
			}

			const promiseLegal = superagent
				.get([legalApiUrl, marketCode.toLowerCase(), 'ia/'].join('/'))
				.accept('json')
				.type('json');

			(async () => {
				try {
					const resLegal = await promiseLegal;

					const newLegal = JSON.parse(resLegal.text);

					if (newLegal) {
						newLegal.marketCode = marketCode;
						setLegals([newLegal, ...legals]);

						resolve(newLegal);
					}

					throw new Error(`Legal could not be found for ${marketCode}`);
				} catch (error) {
					reject(error);
				}
			})();

			return {};
		});
	};

	return (
		<LegalContext.Provider value={{ legals, getLegal }}>
			{children}
		</LegalContext.Provider>
	);
};

export default LegalHOC;
