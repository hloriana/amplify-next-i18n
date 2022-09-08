import { StoryblokComponent } from 'storyblok-js-client';

export interface CookieConsent extends StoryblokComponent<'cookie_consent'> {
	text: any;
	button_text: string;
}
