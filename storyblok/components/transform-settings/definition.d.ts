import { StoryblokComponent } from 'storyblok-js-client';

export interface TransformSettings
	extends StoryblokComponent<'transform_settings'> {
	screen_size: string;
	translate_x: 'full' | '3/4' | '2/3' | '1/2' | '1/3' | '1/4' | '0' | '';
	translate_x_negative: boolean;
	translate_y: 'full' | '3/4' | '2/3' | '1/2' | '1/3' | '1/4' | '0' | '';
	translate_y_negative: boolean;
	rotation: '90' | '180' | '0' | '';
	rotation_anticlockwise: boolean;
}
