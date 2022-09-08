import { StoryblokComponent } from 'storyblok-js-client';

import { NativeColorPickerField } from '~/storyblok/space';

export interface GradientModule extends StoryblokComponent<'gradient_module'> {
	degrees: number;
	from_color: NativeColorPickerField;
	from_position: number;
	to_color: NativeColorPickerField;
	to_position: number;
	opacity: number;
}
