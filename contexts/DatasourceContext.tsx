import { createContext } from 'react';

const DatasourceContext = createContext({
	datasources: {},
	getDatasource(slug: string, dimension?: string): Promise<any> {
		return new Promise(() => {});
	}
});

export default DatasourceContext;
