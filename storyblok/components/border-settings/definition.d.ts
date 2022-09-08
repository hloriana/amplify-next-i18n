import { StoryblokComponent } from 'storyblok-js-client';

export interface BorderSettings extends StoryblokComponent<'border_settings'> {
	screen_size: string;
	border_colour: string;
	border_shade:
		| '-650'
		| '-600'
		| '-550'
		| ''
		| '-450'
		| '-400'
		| '-350'
		| '-300'
		| '';
	border_side: 't' | 'b' | 'l' | 'r' | '';
	border_width: '1' | '2' | '4' | '0' | '';
}
