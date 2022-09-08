import React from 'react';

import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext
} from 'next/document';
import { useRouter } from 'next/router';
import sprite from 'svg-sprite-loader/runtime/sprite.build';

import get from 'lodash/get';
import head from 'lodash/head';

import markets from '~/utils/markets.json';

class MyDocument extends Document<{ spriteContent: any; lang: string }> {
	public static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		const spriteContent = sprite.stringify();

		const { query } = ctx;

		const { slug } = query;

		const defaultMarket = '';
		// check if the first path is a language
		const first = head(slug);
		// get the market info if exists
		const market = get(
			markets,
			first as keyof typeof markets,
			markets[defaultMarket]
		);

		return {
			lang: market.code,
			spriteContent,
			...initialProps
		};
	}

	public render() {
		return (
			<Html lang={this.props.lang}>
				<Head>
					{/* anti-flicker snippet (recommended) */}
					<style>{`.async-hide { opacity: 0 !important} `}</style>
                    {<script
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{
							__html: `if(window.location.pathname=="/no-no/clp/no-local/vgs-destinations/" || window.location.pathname=="/no-no/clp/no-local/vgs-destinations-cta/"){(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function() {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)}; a.queue=[];var s='script';r=t.createElement(s);r.async=!0; r.src=n;var u=t.getElementsByTagName(s)[0]; u.parentNode.insertBefore(r,u);})(window,document, 'https://sc-static.net/scevent.min.js'); snaptr('init', 'cb7326d2-04e7-4381-88cd-f48f8650963b', { 'user_email': '__INSERT_USER_EMAIL__' }); snaptr('track', 'PAGE_VIEW');}`
						}}
					/>}
				</Head>
				<body className="relative">
					<div
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{
							__html: this.props.spriteContent
						}}
					/>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
