import React, { FunctionComponent, useEffect } from 'react';

import { cx } from 'linaria';
import SbEditable from 'storyblok-react';

import { MenuLinkModule } from '~/storyblok/components/menu-link-module/definition';

import { ActionBehavior } from '~/components/modules/Action';

import ActiveLabel from '~/components/kit/ActiveLabel';
import HoverLabel from '~/components/kit/HoverLabel';

const UtilityMenuLink: FunctionComponent<{
	menuItem: MenuLinkModule;
}> = (props) => {
	const { menuItem } = props;

	const behavior = menuItem.action[0];

	return (
		<>
			{!menuItem.exclude_top && (
				<SbEditable content={menuItem}>
					<ActionBehavior className="mr-6 typo-ui-label" content={behavior}>
						<ActiveLabel behavior={behavior} className="opacity-50">
							<HoverLabel>{menuItem.link_text}</HoverLabel>
						</ActiveLabel>
					</ActionBehavior>
				</SbEditable>
			)}
		</>
	);
};

const UtilityMenu: FunctionComponent<{ menu: MenuLinkModule[] }> = (props) => {
	const { menu } = props;

	return (
		<nav className="flex">
			{menu &&
				menu.map((menuItem) => (
					<UtilityMenuLink key={menuItem._uid} menuItem={menuItem} />
				))}
		</nav>
	);
};

export default UtilityMenu;
