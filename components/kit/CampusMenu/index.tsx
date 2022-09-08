import React, {
	FunctionComponent,
	useState,
	useContext,
	useEffect
} from 'react';

import { css, cx } from 'linaria';
import AnimateHeight from 'react-animate-height';
import SbEditable from 'storyblok-react';

import { CampusMenuModule } from '~/storyblok/components/campus-menu-module/definition';
import { MenuLinkModule } from '~/storyblok/components/menu-link-module/definition';

import { ActionBehavior } from '~/components/modules/Action';
import Icon from '~/components/kit/Icon';

import ActiveLabel from '~/components/kit/ActiveLabel';
import CampusContext from '~/contexts/CampusContext';
import MenuContext from '~/contexts/MenuContext';

const MenuSectionShadowCSS = css`
	box-shadow: rgba(0, 0, 0, 0.3) 0px 30px 30px -30px inset;
`;

const iconTransitionCSS = css`
	transition: transform 0.2s ease-in-out;
`;

const buttonTransitionCSS = css`
	transition: padding 0.2s ease-in-out;
`;

const CampusMenuItem: FunctionComponent<{
	item: MenuLinkModule;
	last?: boolean;
	parentStatus?: boolean;
	cb?: (arg0: string) => void;
	activeSubItem?: string;
}> = (props) => {
	const { item, last, parentStatus, cb, activeSubItem } = props;

	const [menuOpen, setMenuOpen] = useState(false);

	const behavior = item.action[0];

	useEffect(() => {
		if (!parentStatus) {
			setMenuOpen(false);
		}
	}, [parentStatus]);

	useEffect(() => {
		if (cb && menuOpen) cb(item._uid);
	}, [menuOpen]);

	useEffect(() => {
		if (activeSubItem !== item._uid && menuOpen) setMenuOpen(false);
	}, [activeSubItem]);

	return (
		<SbEditable content={item}>
			<div>
				{behavior &&
					((behavior.component === 'action_behavior_link_sub_module' && (
						<div className="px-10">
							<div className="relative">
								<ActionBehavior content={behavior}>
									<ActiveLabel
										behavior={behavior}
										className="py-4 md:py-3 text-ui-label"
									>
										{item.link_text}
									</ActiveLabel>
								</ActionBehavior>
								<div
									className={cx(
										'absolute bottom-0 left-0 right-0 border-b',
										!last ? 'opacity-25' : 'opacity-0'
									)}
								/>
							</div>
						</div>
					)) ||
						(behavior.component === 'action_behavior_menu_sub_module' && (
							<>
								<button
									type="button"
									onClick={() => {
										setMenuOpen(!menuOpen);
									}}
									className="px-10 w-full"
								>
									<div className="py-4 md:py-3 w-full flex align-items-center justify-content-between text-ui-label relative">
										{item.link_text}
										<Icon
											className={cx(
												'w-4 transform',
												menuOpen && 'rotate-180',
												iconTransitionCSS
											)}
											type="icons"
											icon="chevron-down"
										/>
										<div
											className={cx(
												'absolute bottom-0 left-0 right-0 border-b',
												last && !menuOpen ? 'opacity-0' : ' opacity-25'
											)}
										/>
									</div>
								</button>
								<AnimateHeight height={menuOpen ? 'auto' : 0}>
									{behavior.children &&
										behavior.children.map((child, index) => (
											<CampusMenuItem
												key={child._uid}
												item={child}
												last={last && index === behavior.children.length - 1}
											/>
										))}
								</AnimateHeight>
							</>
						)))}
			</div>
		</SbEditable>
	);
};

const CampusMenu: FunctionComponent<{ menu: CampusMenuModule[] }> = (props) => {
	const { menu } = props;

	const [activeItem, setActiveItem] = useState('');
	const [activeSubItem, setActiveSubItem] = useState('');

	const campusContext = useContext(CampusContext);

	const handleSectionButtonClick = (item: string) => () => {
		setActiveItem(
			campusContext.formatCampus(item) === activeItem
				? ''
				: campusContext.formatCampus(item)
		);
	};

	useEffect(() => {
		setActiveItem(campusContext.getCurrentCampus());
	}, [campusContext.campus]);

	const getMenuListener = () => {
		setActiveItem(campusContext.getCurrentCampus());
	};

	const menuContext = useContext(MenuContext);

	useEffect(() => {
		menuContext.eventEmitter.addListener('close', getMenuListener);

		return () => {
			menuContext.eventEmitter.removeListener('close', getMenuListener);
		};
	}, [menuContext]);

	const cb = (id: string) => {
		setActiveSubItem(id);
	};

	const getActiveIndex = () =>
		menu.findIndex(
			(menuItem) => campusContext.formatCampus(menuItem.campus) === activeItem
		);

	return (
		<div
			className={cx(
				buttonTransitionCSS,
				getActiveIndex() === menu.length - 1 ? 'pt-2 md:pt-3' : 'py-2 md:py-3'
			)}
		>
			{menu.map((menuItem: CampusMenuModule, index) => {
				return (
					<SbEditable key={menuItem._uid} content={menuItem}>
						<div className="flex flex-col">
							<button
								type="button"
								className="px-10"
								onClick={handleSectionButtonClick(menuItem.campus)}
							>
								<div
									className={cx(
										buttonTransitionCSS,
										'flex align-items-center justify-content-between text-ui-label relative',
										'pb-4 md:pb-3',
										index === 0 && 'pt-4 md:pt-3',
										index !== 0 && getActiveIndex() === index - 1
											? 'pt-6 md:pt-6'
											: 'pt-4 md:pt-3'
									)}
								>
									{menuItem.title || menuItem.campus}
									<Icon
										className={cx(
											'w-4 transform',
											campusContext.formatCampus(menuItem.campus) ===
												activeItem && 'rotate-180',
											iconTransitionCSS
										)}
										type="icons"
										icon="chevron-down"
									/>
									{index !== menu.length - 1 && (
										<div
											className={cx(
												'absolute bottom-0 left-0 right-0 border-b',
												campusContext.formatCampus(menuItem.campus) ===
													activeItem
													? 'opacity-0'
													: ' opacity-25'
											)}
										/>
									)}
								</div>
							</button>
							<AnimateHeight
								height={
									campusContext.formatCampus(menuItem.campus) === activeItem
										? 'auto'
										: 0
								}
							>
								<div
									className={cx(
										'py-4 md:py-3 bg-ef-paper',
										MenuSectionShadowCSS
									)}
								>
									{menuItem.menu.map((subMenuItem, index) => (
										<CampusMenuItem
											key={subMenuItem._uid}
											item={subMenuItem}
											last={index === menuItem.menu.length - 1}
											parentStatus={
												campusContext.formatCampus(menuItem.campus) ===
												activeItem
											}
											cb={cb}
											activeSubItem={activeSubItem}
										/>
									))}
								</div>
							</AnimateHeight>
						</div>
					</SbEditable>
				);
			})}
		</div>
	);
};

export default CampusMenu;
