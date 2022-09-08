import React, { FunctionComponent, useEffect, useRef } from 'react';

import { LeadooModule } from '~/storyblok/components/leadoo-module/definition';


type ScriptElt = HTMLScriptElement | null;

const Leadoo: FunctionComponent<{ content: LeadooModule }> = ({ content }) => {
	const { code } = content;
	const ref = useRef<HTMLDivElement>(null);

	useEffect(
		() => {
			const src = `https://bot.leadoo.com/bot/inpage.js?code=${code}#seamless`;

			let script: ScriptElt = document.querySelector(`script[src="${src}"]`);

			if (!script && ref?.current) {
				// Create script
				script = document.createElement('script');
				script.src = src;
				script.async = true;
				script.setAttribute('data-status', 'loading');
				// Add script to document body
				ref.current.appendChild(script);

				// Store status in attribute on script
				// This can be read by other instances of this hook
				const setAttributeFromEvent = (event: Event) => {
					script?.setAttribute(
						'data-status',
						event.type === 'load' ? 'ready' : 'error'
					);
				};

				script.addEventListener('load', setAttributeFromEvent);
				script.addEventListener('error', setAttributeFromEvent);
			}
		},
		[ref] // Only re-run effect if script src changes
	);

	return <div ref={ref} className="col-start-1 col-end--1" />;
};

export default Leadoo;
