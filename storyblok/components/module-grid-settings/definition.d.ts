import { StoryblokComponent } from 'storyblok-js-client';

export interface ModuleGridSettings
	extends StoryblokComponent<'module_grid_settings'> {
	screen_size: string;
	column_span: number;
	column_start: number;
	column_end: number;
	row_start: number;
	row_end: number;
	z_index: '0' | '10' | '20' | '30' | '40' | '50' | 'auto' | '';
	justify: 'start' | 'center' | 'end' | '';
	align: 'start' | 'center' | 'end' | '';
}
