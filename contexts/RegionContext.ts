import { createContext } from 'react';

const RegionContext = createContext({
	regionCode: '',
	updateRegion: (newRegion: string) => {},
	getRegionFallback: (fallbackRegion: string): string => ''
});

export default RegionContext;
