import { createContext } from 'react';

const CampusContext = createContext({
	campus: '',
	getCurrentCampus: (): string => '',
	formatCampus: (string: string): string => ''
});

export default CampusContext;
