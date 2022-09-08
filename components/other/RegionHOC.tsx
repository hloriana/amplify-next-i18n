import React, { useState, FunctionComponent, useEffect } from 'react';
import { Cookies } from 'react-cookie-consent';

import RegionContext from '~/contexts/RegionContext';

const defaultRegion = 'XX';

const RegionHOC: FunctionComponent<{regionFallback: string | null}> = (props) => {
	const { children, regionFallback } = props;

	const [region, setRegion] = useState(defaultRegion);

	const updateRegion = (newRegion: string) => {
		setRegion(newRegion);
	};

	const getRegionFallback = (fallback: string) => {
		return region.length === 0 || region === 'XX' ? (regionFallback ?? fallback) : region;
	};

	useEffect(() => {

		(async () => {
			try {

				const response = await fetch('https://json.geoiplookup.io/');
				// 'https://www.cloudflare.com/cdn-cgi/trace'
				// 'https://ip-api.com/json/'
				// 'https://ipinfo.io/json?token=14eb80811faf83'
				const data = await response.json();

				setRegion(data.country_code.toLowerCase());
				Cookies.set('efcc', data.country_code.toLowerCase());
				// setRegion(data.country.toLowerCase());
			} catch (error) {
				if (regionFallback) 
					setRegion(regionFallback.toLowerCase());

				console.log(error);
			}
		})();

		
	}, []);

	return (
		<RegionContext.Provider
			value={{ regionCode: region, updateRegion, getRegionFallback }}
		>
			{children}
		</RegionContext.Provider>
	);
};

export default RegionHOC;
