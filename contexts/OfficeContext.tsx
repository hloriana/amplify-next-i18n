import { createContext } from 'react';

const OfficeContext = createContext({
	getOfficeOverride: (office: string): string => ''
});

export default OfficeContext;
