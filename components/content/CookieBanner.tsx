import React, {
	FunctionComponent,
	useContext,
	useEffect,
	useState
} from 'react';
import parse from 'html-react-parser';
import superagent from 'superagent';

import CookieConsent, { Cookies } from 'react-cookie-consent';

import { CookieConsent as CookieConsentTypeDefinition } from '~/storyblok/components/cookie-consent/definition';

import EnvContext from '~/contexts/EnvContext';

import RichTextResolver from '~/utils/richtext.service';
// Get Storyblok content resolver
const richTextResolver = new RichTextResolver();

const CookieBanner: FunctionComponent<{}> = () => {
	const [cookieContent, setCookieContent] = useState<
		CookieConsentTypeDefinition | undefined
	>(undefined);

	const [hideCookieConsent, setHideCookieConsent] = useState(false);

	const { marketCode: langCode } = useContext(EnvContext);

	// get the language fallback if it is a valid language
	const fallbackMarket = langCode?.replace('-', '_');

	// get cookie consent
	const promiseCookieConsent = superagent
		.get(
			[
				process.env.SB_CONTENT_API,
				'stories',
				`${langCode.length !== 0 ? `${langCode}/` : ''}shared/cookie-consent`
			].join('/')
		)
		.accept('json')
		.type('json')
		.query({
			token: process.env.SB_CONTENT_TOKEN,
			version: process.env.SB_CONTENT_VERSION,
			cv: process.env.SB_CACHE_VERSION,
			// eslint-disable-next-line @typescript-eslint/camelcase
			fallback_lang: fallbackMarket
		});

	const getCookieConsent = (mounted: boolean) => {
		(async () => {
			try {
				const response = await promiseCookieConsent;
				const cookieSettingsContent = response.body.story.content;

				if (mounted) {
					setCookieContent(cookieSettingsContent);
				}				
			} catch (error) {
				console.error(error);
			}
		})();
	};

	const setCookie = () => {
		const expires = 365;

		const cookieSecurity = location ? location.protocol === 'https:' : true;

		let cookieOptions = { expires, secure: cookieSecurity };

		// Fallback for older browsers where can not set SameSite=None, SEE: https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients
		Cookies.set('CookieConsent-legacy', true, cookieOptions);

		// set the regular cookie
		Cookies.set('CookieConsent', true, cookieOptions);
	};

	const acceptConsent = () => {
		setCookie();
		setHideCookieConsent(true);
	};

	useEffect(() => {
		let mounted = true;
		getCookieConsent(mounted);

		const hideTimeout = setTimeout(() => acceptConsent(), 10000);

		// Specify how to clean up after this effect:
		return function cleanup() {
			mounted = false;
			clearTimeout(hideTimeout);
		};
	}, []);

	return cookieContent &&
		!hideCookieConsent &&
		cookieContent?.text &&
		['development', 'staging', 'production'].includes(
			`${process.env.ENVIRONMENT}`
		) ? (
		<CookieConsent
			buttonClasses="flex justify-center m-2 py-3 px-6 text-caption rounded-full bg-fire-alarm text-white hover:shadow"
			contentClasses="text-caption mb-0 md:mb-4 text-center md:text-left leading-tight"
			disableButtonStyles
			buttonText={cookieContent?.button_text}
			style={{ justifyContent: 'center' }}
			contentStyle={{ marginBottom: 8 }}
		>
			{parse(
				richTextResolver
					.render(cookieContent?.text)
					// replaces escaped '&nbsp;' back to html
					.replace(/&ampnbsp;/g, '&nbsp;')
					// replaces empty p tag as br for new lines
					.replace(/<p><\/p>/g, '<br />')
			)}
		</CookieConsent>
	) : (
		<></>
	);
};

export default CookieBanner;
