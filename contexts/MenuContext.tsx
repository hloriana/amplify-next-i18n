import { createContext } from 'react';

import { EventEmitter } from 'events';

const menuContext = createContext({
	eventEmitter: new EventEmitter()
});

export default menuContext;
