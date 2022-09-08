import React, {
	FunctionComponent,
	useMemo,
	DetailedHTMLProps,
	LiHTMLAttributes
} from 'react';

import { cx, css } from 'linaria';
import SbEditable from 'storyblok-react';
import dynamic from 'next/dynamic';

import { GraphicModule } from '~/storyblok/components/graphic-module/definition';
import { IconModule } from '~/storyblok/components/icon-module/definition';
import { ListItemSubModule } from '~/storyblok/components/list-item-sub-module/definition';
import { ListModule } from '~/storyblok/components/list-module/definition';
import {
	getPaddingSpacingComponentClasses,
	getMarginSpacingComponentClasses
} from '~/components/settings/SpacingComponent';
import ModuleWrap from '~/components/other/ModuleWrap';
import Text from '~/components/modules/Text';

// SECTION Sub Module
const ListItem: FunctionComponent<{
	content: ListItemSubModule;
} & DetailedHTMLProps<
	LiHTMLAttributes<HTMLLIElement>,
	HTMLLIElement
>> = props => {
	const { content, className, ...rest } = props;

	// get the icon
	const icon = content.icon?.[0];
	const dynamicIconComponent = useMemo(() => {
		// don't render if not valid
		if (!icon) return <></>;

		// check if the type is a valid component
		switch (icon.component) {
			case 'graphic_module': {
				const Graphic = dynamic({
					loader: () =>
						import(
							/* webpackChunkName: "list-item-type" */
							'./Graphic'
						)
				});

				return (
					<>
						<Graphic
							className="flex-shrink-0"
							content={icon as GraphicModule}
						/>
						{/* NOTE hardcoded spacing, will be doubled (as it is horizontal) */}
						<div className="mx-3" />
					</>
				);
			}

			case 'icon_module': {
				const Icon = dynamic({
					loader: () =>
						import(
							/* webpackChunkName: "list-item-type" */
							'./Icon'
						)
				});

				return (
					<>
						<Icon className="flex-shrink-0" content={icon as IconModule} />
						{/* NOTE hardcoded spacing, will be doubled (as it is horizontal) */}
						<div className="mx-1" />
					</>
				);
			}

			default:
				// unkown
				return <></>;
		}
	}, [icon]);
	// the text item
	const text = content.text[0];

	return (
		<SbEditable content={content}>
			<li data-name="list-item-module" {...rest}>
				<div className={cx('flex flex-row align-items-center', className)}>
					{dynamicIconComponent}
					{text && <Text className="flex-grow" content={text} wrap={false} />}
				</div>
			</li>
		</SbEditable>
	);
};

// SECTION Main Module
const List: FunctionComponent<{ content: ListModule }> = props => {
	const { content } = props;

	return (
		<SbEditable content={content}>
			<ModuleWrap settings={content.module_settings}>
				{/* className={cx('flex flex-col')} */}
				<ul
					className={cx(
						getMarginSpacingComponentClasses(content.spacing_settings),
						content.list_style_type,
						['list-disc', 'list-decimal'].includes(content.list_style_type) &&
							'pl-5'
					)}
					data-name="list-module"
				>
					{content.body &&
						content.body.map(blok => (
							<ListItem
								// eslint-disable-next-line no-underscore-dangle
								key={blok._uid}
								content={blok}
								className={cx(
									getPaddingSpacingComponentClasses(content.spacing_settings)
								)}
							/>
						))}
				</ul>
			</ModuleWrap>
		</SbEditable>
	);
};

export default List;
