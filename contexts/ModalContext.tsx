import { createContext, RefObject } from 'react';

import { EventEmitter } from 'events';

const ModalContext = createContext({
	eventEmitter: new EventEmitter(),
	getModalContainerRef: () => (null as unknown) as RefObject<HTMLDivElement>
});

export default ModalContext;
