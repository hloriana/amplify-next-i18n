import React, { FunctionComponent, useState } from 'react';

import { cx } from 'linaria';
import SbEditable from 'storyblok-react';

import { StoryblokComponent } from 'storyblok-js-client';

import { ActionBehavior } from '~/components/modules/Action';
import { CardBehaviorCharacterSensitiveSubModule } from '~/storyblok/components/card-behavior-character-sensitive-sub-module/definition';
import { CardBehaviorFlipSubModule } from '~/storyblok/components/card-behavior-flip-sub-module/definition';
import { CardModule } from '~/storyblok/components/card-module/definition';
import { TextModule } from '~/storyblok/components/text-module/definition';

import { getBodyFlexClasses } from '~/components/settings/BodyFlex';
import { getColoringClasses } from '~/components/settings/Coloring';
import {
	getMarginSpacingComponentClasses,
	getPaddingSpacingComponentClasses
} from '~/components/settings/SpacingComponent';
import Components from '~/components';
import GraphicModule from '~/components/modules/Graphic';
import IconModule from '~/components/modules/Icon';
import ModuleWrap from '~/components/other/ModuleWrap';

// SECTION Main Module
// FIXME typescript definition
export const typeMap: any = {
	'flat': [],
	'shadow': ['shadow'],
	'deep-shadow': ['shadow-deep']
};
export const typeDefault = 'flat';

export const bodyDefault = 'flex flex-col';

const getCardClasses = (card: CardModule) =>
	cx(
		'flex flex-col flex-grow overflow-hidden align-items-stretch',
		...typeMap[card.type || typeDefault],
		card.border_radius,
		getColoringClasses(card.coloring_settings),
		getMarginSpacingComponentClasses(card.spacing_settings)
	);

const Card: FunctionComponent<{
	content: CardModule;
}> = (props) => {
	const { content } = props;

	// if there isn't a behavior, render the default
	let behaviorRenderer = null;
	if (content.behavior?.[0]) {
		switch (content.behavior[0].component) {
			case 'card_behavior_flip_sub_module': {
				// the behavior to use (typescript infer the correct type with the switch/case)
				const behavior = content.behavior[0];
				// assign the behavior and the classes
				behaviorRenderer = <CardFlip content={behavior} card={content} />;
				// exit the switch
				break;
			}

			case 'card_behavior_character_sensitive_sub_module': {
				const behavior = content.behavior[0];
				behaviorRenderer = (
					<CardCharacterSensitive content={behavior} card={content} />
				);
				break;
			}

			default: {
				// REVIEW what should happen, inform users of unknown/not implemented behavior
				break;
			}
		}
	} else {
		// else use the default behavior
		behaviorRenderer = <CardDefault card={content} />;
	}

	return (
		<SbEditable content={content}>
			<ModuleWrap
				settings={content.module_settings}
				className={cx('flex flex-col flex-grow')}
			>
				{behaviorRenderer}
			</ModuleWrap>
		</SbEditable>
	);
};

// function useBody(body: StoryblokComponent<string>[] | null, className: string) {
// 	const [element, setElement] = useState<Element>(<div />);

// 	if (body && body.length !== 0) {
// 		const rendered = (
// 			<div className={className}>
// 				{body.map(blok => Components(blok))}
// 			</div>
// 		);

// 		setElement(rendered);
// 	}

// 	return element;
// }

// SECTION Sub Module
const CardDefault: FunctionComponent<{
	card: CardModule;
}> = (props) => {
	const { card } = props;
	// NOTE margin will be applied to card and padding to body

	// FIXME THIS THING need to be rewritten to a clearer code

	// cover graphic content
	const coverContent = card.cover?.[0];
	// get the action content
	const actionContent = card.action?.[0];
	const actionBehavior = actionContent?.action_behavior?.[0];
	const iconContent = actionContent?.icon?.[0];

	const iconContainerClasses = 'flex flex-row';
	const actionIcon = (
		<div
			className={cx(
				'flex-shrink-0 flex flex-col',
				actionContent?.icon_position &&
					`justify-content-${actionContent?.icon_position}`
			)}
		>
			{iconContent && <IconModule content={iconContent} />}
		</div>
	);

	const spacing = getPaddingSpacingComponentClasses(card.spacing_settings);

	// SECTION cover
	const coverContainerClasses = cx(
		'absolute top-0 left-0 h-full w-full',
		spacing
	);
	const coverClasses = cx(
		'flex-grow',
		getBodyFlexClasses(card.overlay_body_settings) || bodyDefault
	);

	let coverBody = (
		<div className={cx(coverContainerClasses, coverClasses)}>
			{card.overlay_body.map((blok) => Components(blok))}
		</div>
	);
	if (
		actionContent?.clickable_area === 'cover' &&
		actionContent?.icon_placement === 'cover'
	) {
		coverBody = (
			// place the action behavior for the clickable area
			<ActionBehavior
				content={actionBehavior}
				className={cx(iconContainerClasses, coverContainerClasses)}
			>
				<div className={coverClasses}>
					{card.overlay_body.map((blok) => Components(blok))}
				</div>

				{/* place the icon */}
				{actionIcon}
			</ActionBehavior>
		);
	} else if (
		actionContent?.clickable_area === 'cover' &&
		actionContent?.icon_placement !== 'cover'
	) {
		coverBody = (
			<ActionBehavior
				content={actionBehavior}
				className={cx(coverContainerClasses, coverClasses)}
			>
				{card.overlay_body.map((blok) => Components(blok))}
			</ActionBehavior>
		);
	} else if (
		actionContent?.clickable_area !== 'cover' &&
		actionContent?.icon_placement === 'cover'
	) {
		coverBody = (
			<div className={cx(iconContainerClasses, coverContainerClasses)}>
				<div className={coverClasses}>
					{card.overlay_body.map((blok) => Components(blok))}
				</div>

				{/* place the icon */}
				{actionIcon}
			</div>
		);
	}

	const coverElement = (
		<div className="flex-shrink-0 relative">
			{coverContent && <GraphicModule content={coverContent} wrap={false} />}

			{coverBody}
		</div>
	);

	// SECTION content
	let bodyClasses =
		getBodyFlexClasses(card.content_body_settings) || bodyDefault;

	let content = (
		<>{card?.content_body?.map((blok, index) => Components(blok))}</>
	);

	if (card.last_item_at_end) {
		// force justify-content-between
		bodyClasses = bodyClasses
			.split(' ')
			.filter((bodyClass) => bodyClass.indexOf('justify-content') === -1)
			.concat(['justify-content-between'])
			.join(' ');

		// separate out last item that will align to the bottom
		if (card?.content_body.length !== 0) {
			content = (
				<>
					<div>
						{card?.content_body
							?.slice(0, card.content_body.length - 1)
							?.map((blok, index) => Components(blok))}
					</div>
					{Components(card.content_body[card.content_body.length - 1])}
				</>
			);
		}
	}

	const contentClasses = cx('flex-grow', bodyClasses);

	let contentBody = (
		<div className={cx(contentClasses, spacing)}>{content}</div>
	);
	if (
		actionContent?.clickable_area === 'content' &&
		actionContent?.icon_placement === 'content'
	) {
		contentBody = (
			<ActionBehavior
				content={actionBehavior}
				className={cx(iconContainerClasses, spacing)}
			>
				<div className={contentClasses}>{content}</div>

				{actionIcon}
			</ActionBehavior>
		);
	} else if (
		actionContent?.clickable_area === 'content' &&
		actionContent?.icon_placement !== 'content'
	) {
		contentBody = (
			<ActionBehavior
				content={actionBehavior}
				className={cx(contentClasses, spacing)}
			>
				{content}
			</ActionBehavior>
		);
	} else if (
		actionContent?.clickable_area !== 'content' &&
		actionContent?.icon_placement === 'content'
	) {
		contentBody = (
			<div className={cx(iconContainerClasses, spacing)}>
				<div className={contentClasses}>{content}</div>

				{actionIcon}
			</div>
		);
	}

	const contentElement =
		card.content_body && card.content_body.length !== 0 && contentBody;

	const cardClasses = getCardClasses(card);

	return actionContent?.clickable_area === 'whole' ? (
		<ActionBehavior
			content={actionBehavior}
			className={cardClasses}
			data-name="card-default-module"
		>
			{coverElement}

			{contentElement}
		</ActionBehavior>
	) : (
		<div className={cardClasses} data-name="card-default-module">
			{coverElement}

			{contentElement}
		</div>
	);
};

// SECTION Sub Module
const CardFlip: FunctionComponent<{
	content: CardBehaviorFlipSubModule;
	card: CardModule;
}> = (props) => {
	const { content, card } = props;

	// handle for the flip
	const [flipped, setFlipped] = useState(false);
	const flipHandler = () => setFlipped(!flipped);

	// cover graphic content
	const coverContent = card.cover?.[0];
	const coverModule = coverContent && (
		<GraphicModule content={coverContent} wrap={false} />
	);
	// remove the gradient from expanded one
	const coverContentNoGradient = Object.assign({}, coverContent);
	coverContentNoGradient.gradient = [];
	const coverNoGradientModule = coverContent && (
		<GraphicModule content={coverContentNoGradient} wrap={false} />
	);

	// color classes, will be applied to both front and back
	const colorsClasses = getColoringClasses(card.coloring_settings);

	// extra content
	const iconContent = content.icon?.[0];
	// icon position
	const iconPosition = content.icon_position || 'end';

	// NOTE margin will be applied to card and padding to body (same as default behavior)
	return (
		<div
			className={cx(
				'flipper',
				content.flip_direction === 'vertical' && 'flipper-vertical',
				content.screen_size && `flipper-expand-${content.screen_size}`,
				flipped && 'flipper-flipped',
				...typeMap[card.type || typeDefault],
				card.border_radius,
				getMarginSpacingComponentClasses(card.spacing_settings)
			)}
			data-name="card-flipper-module"
		>
			<button
				className="flipper-collapsed absolute top-0 left-0 w-full h-full z-20"
				type="button"
				onClick={flipHandler}
			/>

			<div className={cx('flipper-front', colorsClasses)}>
				{/* how should behave with the gradient */}
				{!content.show_gradient ? (
					<>
						{/* show the gradient when collapsed */}
						<div className="flipper-collapsed">{coverModule}</div>
						{/* hide when expanded */}
						<div className="flipper-expanded">{coverNoGradientModule}</div>
					</>
				) : (
					coverModule
				)}

				{/* cover body */}
				{card.overlay_body && card.overlay_body.length !== 0 && (
					<div className="flipper-collapsed">
						<div
							className={cx(
								'absolute w-full h-full top-0 left-0',
								getBodyFlexClasses(card.overlay_body_settings) || bodyDefault
							)}
						>
							{card.overlay_body.map((blok) => Components(blok))}
						</div>
					</div>
				)}

				{/* icon extra */}
				{iconContent && (
					<div className="flipper-collapsed">
						<div
							className={`absolute bottom-0 w-full flex justify-content-${iconPosition}`}
						>
							<IconModule content={iconContent} />
						</div>
					</div>
				)}
			</div>

			{card.content_body && card.content_body.length !== 0 && (
				<div
					className={cx(
						'flipper-back',
						colorsClasses,
						getBodyFlexClasses(card.content_body_settings) || bodyDefault,
						getPaddingSpacingComponentClasses(card.spacing_settings)
					)}
				>
					{card.content_body.map((blok) => Components(blok))}
				</div>
			)}
		</div>
	);
};

// SECTION Sub Module
const CHAR_COUNT_LIMIT = 140;

const getCharacterCount = (card: CardModule) => {
	let charCount = 0;

	card.content_body.forEach((component, index) => {
		if (component.component === 'text_module') {
			(component as TextModule).text.content?.forEach((doc: any) => {
				doc.content?.forEach((paragraph: any) => {
					charCount += paragraph.text?.length;
				});
			});
		}
	});

	return charCount;
};

const CardCharacterSensitive: FunctionComponent<{
	content: CardBehaviorCharacterSensitiveSubModule;
	card: CardModule;
}> = (props) => {
	const { content, card } = props;

	const characterCountLimit = content?.character_limit || CHAR_COUNT_LIMIT;

	const characterCount = getCharacterCount(card);

	if (characterCount <= characterCountLimit) {
		return <CardDefault card={card} />;
	}

	const cardClasses = getCardClasses(card);

	const coverContent = card.cover?.[0];

	// get the action content
	const actionContent = card.action?.[0];
	const actionBehavior = actionContent?.action_behavior?.[0];

	// SECTION cover
	const cover = coverContent && (
		<div className="w-16">
			<GraphicModule content={coverContent} wrap={false} profilePicture />
		</div>
	);

	// SECTION content
	let bodyClasses =
		getBodyFlexClasses(card.content_body_settings) || bodyDefault;

	// force justify-content-between
	bodyClasses = bodyClasses
		.split(' ')
		.filter((bodyClass) => bodyClass.indexOf('justify-content') === -1)
		.concat(['justify-content-between'])
		.join(' ');

	let top = card?.content_body;
	let left: StoryblokComponent<string>[] = [];

	if (card.last_item_at_end && card?.content_body.length !== 0) {
		top = top.slice(0, card.content_body.length - 1);
		left = [card.content_body[card.content_body.length - 1]];
	}

	const spacing = getPaddingSpacingComponentClasses(card.spacing_settings);

	const contentClasses = cx('flex-grow', bodyClasses);

	const cardContent = (
		<div className={cx(contentClasses, spacing)}>
			<div>{top.map((blok, index) => Components(blok))}</div>
			<div className="mt-4 flex align-items-end justify-content-between">
				<div>{left.map((blok, index) => Components(blok))}</div>
				<div className="flex-shrink-0 relative">{cover}</div>
			</div>
		</div>
	);

	return actionContent ? (
		<ActionBehavior
			content={actionBehavior}
			className={cardClasses}
			data-name="card-default-module"
		>
			{cardContent}
		</ActionBehavior>
	) : (
		<div className={cardClasses}>{cardContent}</div>
	);
};

export default Card;
