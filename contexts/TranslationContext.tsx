import { createContext } from 'react';

const TranlationContext = createContext<{
	path: string;
	locales: string[];
}>({
	path: '',
	locales: []
});
export default TranlationContext;
