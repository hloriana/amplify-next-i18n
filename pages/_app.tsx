// pages/_app.tsx
import React from 'react';

import type { AppProps, NextWebVitalsMetric } from 'next/app';

// import the available components
import content from '../components/content';
import modules from '../components/modules';
import sections from '../components/sections';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

declare global {
	interface Window {
		EFWebPerfMetrics: any;
	}
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
	if (!window.EFWebPerfMetrics) {
		window.EFWebPerfMetrics = {};
	}

	const { name, value } = metric;

	if (metric.label === 'web-vital') {
		// nextjs docs suggest multiplying CLS by 1000 to make it easier to interpret
		window.EFWebPerfMetrics[name] = name === 'CLS' ? value * 1000 : value;
	}
}

export default MyApp;


// declare available components
// FIXME typescript definition
export const Components: any = {
	// extract the registered content types
	...content,
	// extract the registered sections
	...sections,
	// extract the registered modules
	...modules
};