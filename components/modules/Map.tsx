import React, { FunctionComponent, useEffect, useState } from 'react';

import { css, cx } from 'linaria';
import SbEditable from 'storyblok-react';

import Components from '~/components';
import Gradient from '~/components/modules/Gradient';
import ModuleWrap from '~/components/other/ModuleWrap';

import { ColoringSettings } from '~/storyblok/components/coloring-settings/definition';
import { GradientModule } from '~/storyblok/components/gradient-module/definition';
import { ListItemSubModule } from '~/storyblok/components/list-item-sub-module/definition';
import { MapModule } from '~/storyblok/components/map-module/definition';

import { getColoringClasses } from '~/components/settings/Coloring';

import { ModalScrollBar } from '~/components/kit/Modal';

const gridAutoRowCSS = css`
	grid-auto-rows: auto 1fr;
`;

const columnsCSS = css`
	columns: 2;
`;

const MapItem: FunctionComponent<{
	content: ListItemSubModule;
	active: boolean;
	color: ColoringSettings[];
	className: string;
}> = (props) => {
	const { content, active, color, className } = props;

	const colorClasses = getColoringClasses(color);

	return (
		<div className={cx(className, 'inline-block w-full')}>
			<div className="flex align-items-start mb-4">
				<div
					className={cx(
						'rounded-full p-1 mr-2',
						active && colorClasses
							? cx(colorClasses, 'text-white')
							: 'bg-ef-grey'
					)}
				>
					{content.icon.map((icon) => Components(icon))}
				</div>
				{content.text.map((text) => Components(text))}
			</div>
		</div>
	);
};

const MapFilter: FunctionComponent<{
	onClick: () => void;
	active: boolean;
	gradient: GradientModule;
}> = (props) => {
	const { children, onClick, active, gradient } = props;

	return (
		<button
			type="button"
			onClick={onClick}
			className={cx(
				'px-5 py-1 mr-2 mb-2 shadow-light rounded relative overflow-hidden',
				active && gradient && 'text-white'
			)}
		>
			{active && gradient && (
				<Gradient
					content={gradient}
					className="absolute top-0 left-0 w-full h-full"
				/>
			)}
			<div className="relative">{children}</div>
		</button>
	);
};

const MapComponent: FunctionComponent<{ content: MapModule }> = (props) => {
	const { content } = props;

	const [active, setActive] = useState('');

	useEffect(() => {
		setActive(content.sections[0]?.id || '');
	}, []);

	return (
		<SbEditable content={content}>
			<ModuleWrap settings={content.module_settings}>
				<div className={cx('gud-page-grid', gridAutoRowCSS)}>
					<div
						className={cx(
							'col-start-1 col-end--1 md:col-start-2 md:col-end-7 overflow-x-auto md:overflow-visible mb-6 whitespace-nowrap md:whitespace-normal px-6 pt-2 -mt-2 md:px-0 md:pt-0 md:mt-0',
							ModalScrollBar
						)}
					>
						{content.sections.map((section) => (
							<MapFilter
								key={`filter:${section._uid}`}
								onClick={() => {
									setActive(section.id);
								}}
								active={section.id === active}
								gradient={section.gradient[0]}
							>
								{section.label.map((label) => Components(label))}
							</MapFilter>
						))}
					</div>
					<div className="col-span-6 md:col-span-7 md:row-span-2 mb-8 md:mb-0">
						{content.sections.map((section) => (
							<div
								className={cx(section.id === active ? 'block' : 'hidden')}
								key={`image:${section._uid}`}
							>
								{section.image.map((image) => Components(image))}
							</div>
						))}
					</div>
					<div className="col-start-2 col-end--2 md:col-end-7">
						<div className={cx(columnsCSS)}>
							{content.sections.map((section) =>
								section.items.map((item) => (
									<MapItem
										key={item._uid}
										content={item}
										active={section.id === active}
										color={section.active_icon_background_color}
										className={cx(
											content.hide_inactive && section.id !== active && 'hidden'
										)}
									/>
								))
							)}
						</div>
					</div>
				</div>
			</ModuleWrap>
		</SbEditable>
	);
};

export default MapComponent;
