import Link from 'next/link';
import React, {
	FunctionComponent,
	useContext,
	useEffect,
	useState
} from 'react';

import LegalContext from '~/contexts/LegalContext';
import RegionContext from '~/contexts/RegionContext';

const DEFAULT_REGION = 'gb';

const LegalLinks: FunctionComponent<{}> = (props) => {
	const [links, setLinks] = useState([]);

	const regionContext = useContext(RegionContext);
	const legalContext = useContext(LegalContext);

	useEffect(() => {
		const region = regionContext.getRegionFallback(DEFAULT_REGION);

		(async () => {
			try {
				const legal = await legalContext.getLegal(region);

				const { legalLinks } = legal;

				setLinks(legalLinks.reverse());
			} catch (error) {
				console.error(error);
			}
		})();
	}, [regionContext.regionCode]);

	return (
		<>
			{links.map((link: any) => (
				<a
					key={link.slug}
					href={`${link.anchorUrl}`}
					target="_blank"
					rel="noopener noreferrer"
					className="md:mr-8 mt-4 md:mt-0 text-ui-label"
				>
					<div>{link.anchorText}</div>
				</a>
			))}
		</>
	);
};

export default LegalLinks;
