import { createContext } from 'react';

const LegalContext = createContext({
	legals: [] as any[],
	getLegal: async (marketCode: string) => {
		return {} as any;
	}
});

export default LegalContext;
