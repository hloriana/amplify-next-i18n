import React, { FunctionComponent } from 'react';

import SbEditable from 'storyblok-react';

import { MenuLinkModule } from '~/storyblok/components/menu-link-module/definition';

import { ActionBehavior } from '~/components/modules/Action';
import ActiveLabel from '~/components/kit/ActiveLabel';

const SidebarMenuLink: FunctionComponent<{
	menuItem: MenuLinkModule;
	last?: boolean;
}> = (props) => {
	const { menuItem, last } = props;

	const behavior = menuItem.action[0];

	return (
		<>
			{!menuItem.exclude_side && (
				<SbEditable content={menuItem}>
					<ActionBehavior
						className="relative typo-ui-label py-4 md:py-3"
						content={behavior}
					>
						<ActiveLabel behavior={behavior}>{menuItem.link_text}</ActiveLabel>
						{!last && (
							<div className="absolute bottom-0 left-0 right-0 border-b border-white opacity-25" />
						)}
					</ActionBehavior>
				</SbEditable>
			)}
		</>
	);
};

const SidebarMenu: FunctionComponent<{ menu: MenuLinkModule[] }> = (props) => {
	const { menu } = props;

	return (
		<nav className="flex flex-col">
			{menu &&
				menu.map((menuItem, index) => (
					<SidebarMenuLink
						key={menuItem._uid}
						menuItem={menuItem}
						last={index === menu.length - 1}
					/>
				))}
		</nav>
	);
};

export default SidebarMenu;
