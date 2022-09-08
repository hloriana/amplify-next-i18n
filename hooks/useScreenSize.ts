import { useContext } from 'react';

import { MediaContext } from 'react-media-query-hoc';

export default function useScreenSize() {
	const media = useContext<any>(MediaContext);

	if (media.xl) return 'xl';
	if (media.lg) return 'lg';
	if (media.md) return 'md';

	return '';
}
