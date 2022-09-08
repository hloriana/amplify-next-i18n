import React, { FunctionComponent, useEffect, useState } from 'react';

import { cx } from 'linaria';
import SbEditable from 'storyblok-react';

import { FormStatus } from '~/components/modules/FormIntegration';
import { getMarginSpacingComponentClasses } from '~/components/settings/SpacingComponent';
import IconModule from '~/components/modules/Icon';
import ModuleWrap from '~/components/other/ModuleWrap';
import useStory from '~/hooks/useStory';
import { ActionReferenceModule } from '~/storyblok/components/action-reference-module/definition';
import { ActionBehavior } from './Action';
import { ActionBehaviorLinkSubModule } from '~/storyblok/components/action-behavior-link-sub-module/definition';

// SECTION Main Module
const ActionReference: FunctionComponent<{
	content: ActionReferenceModule;
	// FIXME seen the name, this is a temporary workaround to monkey patch EF forms
	formHack?: [FormStatus, Element | null, (() => void) | null];
}> = (props) => {
	const { content, formHack } = props;

	// if no behavior is set, we don't render the module
	// if (content.behavior?.length === 0) return <></>;

	// NOTE links have no horizontal space
	const isNotLink = content.type !== 'link';
	// FIXME typescript definition
	const sizeMap: any = {
		extraSmall: [...(isNotLink ? ['px-6'] : []), 'py-2', 'text-caption'],
		small: [...(isNotLink ? ['px-6'] : []), 'py-3', 'text-caption'],
		normal: [...(isNotLink ? ['px-6'] : []), 'py-4', 'text-ui-label'],
		cta: [...(isNotLink ? ['px-10'] : []), 'py-5', 'text-paragraph']
	};

	// FIXME typescript definition
	const shapeMap: any = {
		rounded: ['rounded-full'],
		square: ['rounded-lg']
	};

	// FIXME typescript definition
	// On dark => Is the light variant which goes on dark backgrounds
	// On light the inverse of above
	const typeMap: any = {
		'primary:light': ['bg-fire-alarm', 'text-white', 'hover:shadow'],
		'primary:dark': ['bg-white', 'text-ink-black', 'hover:opacity-75'],
		'secondary:light': [
			'border',
			'border-ui-light-gray',
			'text-ink-black',
			'hover:shadow',
			'hover:bg-white'
			// 'hover:border-white'
		],
		'secondary:dark': [
			'border',
			'border-ui-light-gray',
			'text-white',
			'hover:shadow',
			'hover:bg-white',
			'hover:text-ink-black'
			// 'hover:border-white'
		],
		'link:light': ['text-ink-black'],
		'link:dark': ['text-white']
	};

	const shadowMap: any = {
		'flat': [],
		'shadow': ['shadow'],
		'deep-shadow': ['shadow-deep']
	};

	const buttonClasses = cx(
		'w-full flex align-items-center',
		...shapeMap[content.shape || 'rounded'],
		...sizeMap[content.size || 'normal'],
		...typeMap[`${content.type || 'primary'}:${content.variant || 'dark'}`],
		...shadowMap[content.shadow || 'flat']
	);

	const actionFallback: ActionBehaviorLinkSubModule = {
		_uid: '',
		component: 'action_behavior_link_sub_module',
		link: {
			id: '',
			cached_url: '',
			url: 'https://efacademy.com',
			linktype: ''
		},
		carry_params: false,
		open_external: false,
		campus_parameter: ''
	};

	const [actionText, setActionText] = useState('Test');
	const [actionBehavior, setActionBehavior] = useState(actionFallback);

	const actionReference = useStory(content.action_reference);

	useEffect(() => {
		setActionText(actionReference?.content?.text ?? '');
		setActionBehavior(actionReference?.content?.behavior[0] ?? actionFallback);
	}, [actionReference]);

	return (
		<SbEditable content={content}>
			<ModuleWrap settings={content.module_settings}>
				{/* SECTION actual module DOM */}
				{/* <div
					className={cx(getSpacingComponentClasses(content.spacing_settings))}
					data-name="action-module"
				> */}
				<div
					className={cx(
						getMarginSpacingComponentClasses(content.spacing_settings)
					)}
				>
					{actionText && actionBehavior && (
						<ActionBehavior
							content={actionBehavior}
							formHack={formHack}
							className={cx(
								buttonClasses,
								`justify-content-${content.justify_content}`,
								content.justify_content === 'center' && 'text-center'
							)}
							data-name="action-module"
						>
							<span style={{wordBreak: 'normal'}} >{actionText}</span>
							{content.icon?.[0] && (
								<>
									{/* NOTE hardcoded spacer for RTL languages support (mx-2 = 2 * 2 * 4) */}
									<div
										className="mx-2"
										// className={cx('mx-2', !content.group_content && 'flex-grow')}
									/>
									<IconModule content={content.icon[0]} />
								</>
							)}
						</ActionBehavior>
					)}
				</div>
				{/* </div> */}
			</ModuleWrap>
		</SbEditable>
	);
};

export default ActionReference;
