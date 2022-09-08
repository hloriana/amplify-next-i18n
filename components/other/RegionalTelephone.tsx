import React, {
	FunctionComponent,
	useContext,
	useEffect,
	useState
} from 'react';

import { cx } from 'linaria';

import { Icon } from '~/components/kit';
import OfficeContext from '~/contexts/OfficeContext';
import RegionContext from '~/contexts/RegionContext';
import useDatasource from '~/hooks/useDatasource';

const DEFAULT_REGION = 'ch';

const RegionalTel: FunctionComponent<{ className: string }> = (props) => {
	const { className } = props;

	const [number, setNumber] = useState('');

	const phoneDatasource = useDatasource('office-address', 'phone');

	const regionContext = useContext(RegionContext);
	const officeContext = useContext(OfficeContext);

	useEffect(() => {
		const region = regionContext.getRegionFallback(DEFAULT_REGION);

		(async () => {
			try {
				const officeCode = officeContext.getOfficeOverride(region);

				if (phoneDatasource.length !== 0) {
					const phone =
						phoneDatasource
							.filter(
								(p: any) => p.name.toLowerCase() === officeCode.toLowerCase()
							)
							.shift()?.dimension_value ?? '';

					if (phone) {
						setNumber(phone);
					} else {
						throw new Error('local office number not found');
					}
				}
			} catch (error) {
				console.error(error);
			}
		})();
	}, [regionContext.regionCode, phoneDatasource]);

	return (
		<div className={cx(className, 'flex typo-ui-label align-items-center')}>
			{number.length !== 0 && (
				<>
					{number}
					<Icon type="icons" icon="phone" className="w-4 ml-2" />
				</>
			)}
		</div>
	);
};

export default RegionalTel;
