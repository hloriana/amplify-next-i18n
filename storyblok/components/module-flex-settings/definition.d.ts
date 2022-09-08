import { StoryblokComponent } from 'storyblok-js-client';

export interface ModuleFlexSettings
	extends StoryblokComponent<'module_flex_settings'> {
	screen_size: string;
	flex_grow: '0' | '1' | '';
	flex_shrink: '0' | '1' | '';
	equal_width: boolean;
	scroll_container: boolean;
}
