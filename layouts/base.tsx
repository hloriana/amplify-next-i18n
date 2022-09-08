import React, { FunctionComponent, useRef } from 'react';

import { EventEmitter } from 'events';
import { MediaQueryProvider } from 'react-media-query-hoc';
import Head from 'next/head';

// local modules and services
import { getQueries } from '~/utils/responsive';
import Analytics from '~/components/other/Analytics';

// SECTION import CSS as global styles
// import normalize style (first reset the global styles)
import '~/styles/tailwind/normalize.css';
// import tailwind components (then add the components which overrides them)
import '~/styles/tailwind/components.css';
// import tailwind utilities classes (then the utilities so that we can overrides components)
import '~/styles/tailwind/utilities.css';

// custom fallback fonts
// import '~/styles/ef/fonts.webpack';
// other globals css
import '~/styles/globals.css';

import LegalHOC from '~/components/other/LegalHOC';
import MenuContext from '~/contexts/MenuContext';
import ModalContext from '~/contexts/ModalContext';
import OfficeHOC from '~/components/other/OfficeHOC';

const BaseLayout: FunctionComponent = (props) => {
	const { children } = props;
	// build up the queries from tailwind
	const queries = getQueries();

	const modalEventEmitter = new EventEmitter();

	const modalContainerRef = useRef<HTMLDivElement>(null);

	const getModalContainerRef = () => modalContainerRef;

	const menuEventEmitter = new EventEmitter();

	return (
		// Media Query provider for dynamic DOM render
		<MediaQueryProvider
			queries={queries}
			values={{
				width: 375,
				type: 'screen'
			}}
		>
			{/* Storyblok asset manager preconnect */}
			<Head key="assets-preload">
				<link rel="dns-prefetch" href="//a.storyblok.com/" />
				<link rel="dns-prefetch" href="//img2.storyblok.com/" />
				<link rel="preconnect" href="//a.storyblok.com/" />
				<link rel="preconnect" href="//img2.storyblok.com/" />
			</Head>
			{/* Storyblok api preconnect */}
			<Head key="third-party-preload">
				<link rel="dns-prefetch" href="//api.storyblok.com/" />
				<link rel="preconnect" href="//api.storyblok.com/" />
				<link rel="dns-prefetch" href="//json.geoiplookup.io/" />
				<link rel="preconnect" href="//json.geoiplookup.io/" />
			</Head>
			{/* Polyfills script */}
			<Head key="polyfills-script">
				<script
					async
					src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver%2CResizeObserver%2Csmoothscroll"
				/>
			</Head>
			{/* Favicon */}
			<Head key="favicon">
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
			</Head>
			{/* Font preload */}
			<Head>
				<link
					rel="preload"
					href="/fonts/circular-west/EFCircularWeb-Light.woff2"
					as="font"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/circular-west/EFCircularWeb-Book.woff2"
					as="font"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/circular-west/EFCircularWeb-Bold.woff2"
					as="font"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/circular-west/EFCircularWeb-Black.woff2"
					as="font"
					crossOrigin=""
				/>
			</Head>
			<OfficeHOC>
				<LegalHOC>
					<MenuContext.Provider value={{ eventEmitter: menuEventEmitter }}>
						<ModalContext.Provider
							value={{
								eventEmitter: modalEventEmitter,
								getModalContainerRef
							}}
						>
							{children}

							{/* Analytics scripts (GTM atm) */}
							<Analytics />
							<div ref={modalContainerRef} />
						</ModalContext.Provider>
					</MenuContext.Provider>
				</LegalHOC>
			</OfficeHOC>
		</MediaQueryProvider>
	);
};

export default BaseLayout;
