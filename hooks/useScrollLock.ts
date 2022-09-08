import { useEffect, useRef, useState } from 'react';

const useScrollLock = (state: boolean) => {
	const [fixedHeader, setFixedHeader] = useState<HTMLDivElement | null>(null);

	useEffect(() => {
		setFixedHeader(
			document.querySelectorAll('[data-header]').item(0) as HTMLDivElement
		);
	}, []);

	useEffect(() => {
		if (state) {
			if (document.body.scrollHeight > window.outerHeight) {
				document.body.classList.add('overflow-y-scroll');

				if (fixedHeader) {
					fixedHeader.classList.add('overflow-y-scroll');
				}
			}

			document.documentElement.classList.add('overflow-hidden');
		} else {
			document.documentElement.classList.remove('overflow-hidden');
			document.body.classList.remove('overflow-scroll');

			if (fixedHeader) {
				fixedHeader.classList.remove('overflow-y-scroll');
			}
		}
	}, [state]);
};

export default useScrollLock;
