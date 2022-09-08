import { StoryblokComponent } from 'storyblok-js-client';

export interface ColumnComponentSettings
	extends StoryblokComponent<'column_component_settings'> {
	screen_size: string;
	slides_columns: '4' | '6' | '12' | '3' | '';
}
