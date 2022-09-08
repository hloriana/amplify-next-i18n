import React, {
	FunctionComponent,
	useContext,
	useEffect,
	useState,
	ReactElement
} from 'react';

import ReactHtmlParser from 'react-html-parser';

import OfficeContext from '~/contexts/OfficeContext';
import RegionContext from '~/contexts/RegionContext';
import useDatasource from '~/hooks/useDatasource';

const DEFAULT_REGION = 'ch';

const RegionalOffice: FunctionComponent<{ mapLabel: string }> = (props) => {
	const [address, setAddress] = useState<ReactElement[]>([]);
	const [mapLink, setMapLink] = useState('');

	const regionContext = useContext(RegionContext);
	const officeContext = useContext(OfficeContext);

	const addressDatasource = useDatasource('office-address', 'street');
	const mapDatasource = useDatasource('office-address', 'map');

	const { mapLabel } = props;

	useEffect(() => {
		const region = regionContext.getRegionFallback(DEFAULT_REGION);

		(async () => {
			try {
				const officeCode = officeContext.getOfficeOverride(region);

				if (addressDatasource.length !== 0) {
					const street =
						addressDatasource
							.filter(
								(p: any) => p.name.toLowerCase() === officeCode.toLowerCase()
							)
							.shift()?.dimension_value ?? '';

					if (street) {
						setAddress(ReactHtmlParser(street));
					} else {
						throw new Error('local office address not found');
					}
				}

				if (mapDatasource.length !== 0) {
					const map =
						mapDatasource
							.filter(
								(p: any) => p.name.toLowerCase() === officeCode.toLowerCase()
							)
							.shift()?.dimension_value ?? '';

					if (map) {
						setMapLink(map);
					}
				}
			} catch (error) {
				console.error(error);
			}
		})();
	}, [regionContext.regionCode, addressDatasource, mapDatasource]);

	return (
		<>
			<div className="typo-ui-label mb-2">{address}</div>
			{mapLink.length > 0 && (
				<a
					href={mapLink}
					target="_blank"
					rel="noopener noreferrer"
					className="underline text-ui-label"
				>
					{mapLabel}
				</a>
			)}
		</>
	);
};

export default RegionalOffice;
