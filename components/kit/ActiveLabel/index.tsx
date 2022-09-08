import React, { FunctionComponent, useEffect, useState } from 'react';

import { cx } from 'linaria';
import { useRouter } from 'next/router';

import useRouterEvent from '~/hooks/useRouterEvent';

import { ActionBehaviorLinkSubModule } from '~/storyblok/components/action-behavior-link-sub-module/definition';
import { ActionBehaviorMenuSubModule } from '~/storyblok/components/action-behavior-menu-sub-module/definition';

function isLink(arg: any): arg is ActionBehaviorLinkSubModule {
	return 'link' in arg;
}

const ActiveLabel: FunctionComponent<{
	behavior: ActionBehaviorLinkSubModule | ActionBehaviorMenuSubModule;
	className?: string;
}> = (props) => {
	const { behavior, children, className } = props;

	const router = useRouter();

	const [isActive, setIsActive] = useState(false);

	const checkIsActive = (
		checkBehavior: ActionBehaviorLinkSubModule | ActionBehaviorMenuSubModule
	) => {
		if (isLink(behavior)) {
			const { link } = behavior;

			return (
				router.asPath.split('?')[0].replace(/^\/|\/$/g, '') ===
				link.cached_url.replace(/^\/|\/$/g, '')
			);
		}

		return false;
	};

	useRouterEvent('routeChangeComplete', () => {
		setIsActive(checkIsActive(behavior));
	});

	useEffect(() => {
		setIsActive(checkIsActive(behavior));
	}, []);

	return (
		<div className={cx(className, isActive && 'font-bold')}>{children}</div>
	);
};

export default ActiveLabel;
