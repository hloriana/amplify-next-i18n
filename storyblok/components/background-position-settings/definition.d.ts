import { StoryblokComponent } from 'storyblok-js-client';

export interface BackgroundPositionSettings
	extends StoryblokComponent<'background_position_settings'> {
	screen_size: string;
	alignment_1: 'center' | 'left' | 'right' | 'top' | 'bottom' | '';
	adjustment_1: '1/4' | '1/3' | '2/3' | '3/4' | '';
	alignment_2: 'left' | 'right' | 'top' | 'bottom' | '';
	adjustment_2: '1/4' | '1/3' | '2/3' | '3/4' | '';
}
