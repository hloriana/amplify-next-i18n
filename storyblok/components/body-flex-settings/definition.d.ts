import { StoryblokComponent } from 'storyblok-js-client';

export interface BodyFlexSettings
	extends StoryblokComponent<'body_flex_settings'> {
	screen_size: string;
	direction: 'col' | 'col-reverse' | 'row' | 'row-reverse';
	justify:
		| 'start'
		| 'center'
		| 'end'
		| 'stretch'
		| 'between'
		| 'around'
		| 'evenly'
		| '';
	align:
		| 'start'
		| 'center'
		| 'end'
		| 'stretch'
		| 'between'
		| 'around'
		| 'evenly'
		| '';
	wrap: boolean;
}
