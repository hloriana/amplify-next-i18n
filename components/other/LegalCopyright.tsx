import React, {
	FunctionComponent,
	useContext,
	useEffect,
	useState
} from 'react';

import LegalContext from '~/contexts/LegalContext';
import RegionContext from '~/contexts/RegionContext';

const DEFAULT_REGION = 'gb';
const CHINESE_ICP_LICENSE = ' | 沪B2-20070075-22';
const CHINESE_ORIGIN = 'efacademy.cn';

const LegalCopyright: FunctionComponent<{}> = () => {
	const [copyright, setCopyright] = useState(
		`© EF Education First ${new Date().getFullYear()}`
	);

	const regionContext = useContext(RegionContext);
	const legalContext = useContext(LegalContext);

	const addChineseICP = React.useCallback((copyrightText: string) => {
		if (
			window.location.origin.includes(CHINESE_ORIGIN) &&
			!copyrightText.includes(CHINESE_ICP_LICENSE)
		) {
			return copyrightText + CHINESE_ICP_LICENSE;
		}

		return copyrightText;
	}, []);

	useEffect(() => {
		const region = regionContext.getRegionFallback(DEFAULT_REGION);

		(async () => {
			try {
				const legal = await legalContext.getLegal(region);
				const copyrightLinks = legal?.copyrightLinks.pop();
				setCopyright((currentCopyright) =>
					addChineseICP(copyrightLinks?.anchorText.toString().replace('EF Education First Ltd','Signum International AG') || currentCopyright)
				);
			} catch (error) {
				setCopyright((currentCopyright) => addChineseICP(currentCopyright));
				console.error(error);
			}
		})();
	}, [regionContext.regionCode, addChineseICP]);

	return <div className="text-ui-label">{copyright}</div>;
};

export default LegalCopyright;
