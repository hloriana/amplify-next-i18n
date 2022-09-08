import React, {
	FunctionComponent,
	useState,
	useContext,
	useEffect
} from 'react';

import SbEditable from 'storyblok-react';

import { cx, css } from 'linaria';

import { Waypoint } from 'react-waypoint';

import { MediaContext } from 'react-media-query-hoc';

import { StickyModule } from '~/storyblok/components/sticky-module/definition';
import { getColoringClasses } from '~/components/settings/Coloring';
import { getSpacingComponentClasses } from '~/components/settings/SpacingComponent';
import Components from '~/components';

const StickyTransition = css`
	transition: transform 0.2s ease-in-out;
`;

const Sticky: FunctionComponent<{
	content: StickyModule;
}> = props => {
	const { content } = props;

	// FIXME typescript definition
	const typeMap: any = {
		none: [],
		regular: ['shadow'],
		deep: ['shadow-deep']
	};

	const shadowDefault = 'none';

	const mediaContext = useContext<any>(MediaContext);

	const [transform, setTransform] = useState(false);
	const [targetSectionVisible, setTargetSectionVisible] = useState(false);

	// Fires when the waypoint leaves or enters the screen
	const handlePositionChange = (e: Waypoint.CallbackArgs) => {
		// If its entered from the top
		if (e.currentPosition === 'inside' && e.previousPosition === 'above') {
			setTransform(false);
			// If its above the top of the screen (could also happen on init)
		} else if (e.currentPosition === 'above') {
			setTransform(true);
		}
	};

	// Fires when the observed element enters the viewport
	const handleIntersection = (entries: IntersectionObserverEntry[]) => {
		const visible =
			// handle posibility of multiple entries
			entries.filter((entry: IntersectionObserverEntry) => entry.isIntersecting)
				.length > 0;

		setTargetSectionVisible(visible);
	};

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection);

		const uid = content?.section_reference?.selected;

		const el = document.querySelectorAll(`[data-section-id="${uid}"]`).item(0);
		// Only observe the observer if the element is present
		if (el) observer.observe(el);

		return () => {
			// Disconnect from the observer on destroy
			observer.disconnect();
		};
	}, [content?.section_reference]);

	return (
		<>
			<SbEditable content={content}>
				{content.body && content.body.map(blok => Components(blok))}
				<Waypoint onPositionChange={handlePositionChange} />
			</SbEditable>
			<div
				className={cx(
					StickyTransition,
					'fixed left-0 top-100 w-full border-solid border-t border-ef-grey z-20',
					getColoringClasses(content.coloring_settings),
					getSpacingComponentClasses(content.spacing_settings),
					...typeMap[content.shadow_type || shadowDefault]
				)}
				style={{
					transform:
						transform && !targetSectionVisible && !mediaContext.md
							? 'translateY(-100%)'
							: 'none'
				}}
			>
				{content.body && content.body.map(blok => Components(blok))}
			</div>
		</>
	);
};

export default Sticky;
