import { StoryblokComponent } from 'storyblok-js-client';

export interface GridSettings extends StoryblokComponent<'grid_settings'> {
	alignment: 'top' | 'middle' | 'bottom' | 'stretch';
	justify: 'start' | 'center' | 'end' | 'space-around' | 'space-between';
	vertical_gutter: number;
	horizontal_gutter: number;
}
