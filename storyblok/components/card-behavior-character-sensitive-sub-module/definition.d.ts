import { StoryblokComponent } from 'storyblok-js-client';

export interface CardBehaviorCharacterSensitiveSubModule
	extends StoryblokComponent<'card_behavior_character_sensitive_sub_module'> {
	character_limit: number;
}
