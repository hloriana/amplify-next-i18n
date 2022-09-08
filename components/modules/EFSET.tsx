import React, { useEffect, FunctionComponent, useState } from 'react';

import { Efset } from '~/storyblok/components/efset/definition';

declare global {
	interface Window {
		efset: any;
	}
}

const EfsetPlugin: FunctionComponent<{ content: Efset }> = (props) => {
	const { content } = props;
	const [userId, setUserId] = useState<string | null | undefined>();

	const loadScript = (src: any) => {
		const script = document.createElement('script');
		script.src = src;
		script.crossOrigin = 'anonymous';
		document.body.appendChild(script);
	};

	useEffect(() => {
		if (userId) {
			const listener = () =>
				window.efset.init(content.test_id, {
					userId,
					domElement: 'efset',
					languageCode: 'en' // optional - defaults to "en"
				});

			document.addEventListener('efset_loader_ready', listener);
			loadScript(`${process.env.EFSET_URL}`);

			return () => document.removeEventListener('efset_loader_ready', listener);
		}

		return () => {};
	}, [userId]);

	if (typeof window !== 'undefined') {
		if (
			localStorage.getItem('userId') &&
			localStorage.getItem('userId') !== 'null'
		) {
			setUserId(localStorage.getItem('userId'));
			localStorage.clear();
		} else {
			localStorage.clear();
		}
	}

	return userId ? <div id="efset" style={{ width: '100%' }} /> : <></>;
};

export default EfsetPlugin;
