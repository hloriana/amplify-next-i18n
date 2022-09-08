import { createContext } from 'react';

const MarketContext = createContext({
	// Language market code (Code that is needed for forms or infomeetings)
	efMarketCode: 'we',
	// Academy market code (Language set up in storyblok)
	marketCode: '',
	fallback: '' as string | null,
	regionFallback: '' as string | null,
});

export default MarketContext;
