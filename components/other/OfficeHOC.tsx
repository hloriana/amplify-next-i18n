import React, { FunctionComponent } from 'react';

import OfficeContext from '~/contexts/OfficeContext';
import useDatasource from '~/hooks/useDatasource';

const OfficeHOC: FunctionComponent<{}> = (props) => {
	const { children } = props;

	const officeDatasource = useDatasource('office');

	const getOfficeOverride = (officeCode: string) => {
		const override =
			officeDatasource
				?.filter(
					(officeEntry) =>
						officeEntry.name.toLowerCase() === officeCode.toLowerCase()
				)
				.pop()?.value || officeCode;

		return override;
	};

	return (
		<OfficeContext.Provider value={{ getOfficeOverride }}>
			{children}
		</OfficeContext.Provider>
	);
};

export default OfficeHOC;
