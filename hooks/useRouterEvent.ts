import { useEffect } from 'react';

import { useRouter } from 'next/router';

const useRouterEvent = (event: string, cb: () => void) => {
	const router = useRouter();

	useEffect(() => {
		router.events.on(event, cb);

		return () => {
			router.events.off(event, cb);
		};
	}, []);
};

export default useRouterEvent;
