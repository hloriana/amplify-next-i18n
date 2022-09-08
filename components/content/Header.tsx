import React, {
	FunctionComponent,
	useState,
	TransitionEvent,
	useContext
} from 'react';

import { Waypoint } from 'react-waypoint';
import { cx, css } from 'linaria';
import SbEditable from 'storyblok-react';

import HoverLabel from '../kit/HoverLabel';
import useScrollLock from '~/hooks/useScrollLock';

import CampusContext from '~/contexts/CampusContext';
import MenuContext from '~/contexts/MenuContext';

import { ActionBehavior } from '~/components/modules/Action';
import { ModalScrollBar } from '~/components/kit/Modal';
import ActiveLabel from '~/components/kit/ActiveLabel';
import CampusMenu from '~/components/kit/CampusMenu';
import Components from '~/components';
import Icon from '~/components/kit/Icon';
import RegionalTel from '~/components/other/RegionalTelephone';
import SidebarMenu from '~/components/kit/SidebarMenu';
import UtilityMenu from '~/components/kit/UtilityMenu';

import { ActionModule } from '~/storyblok/components/action-module/definition';
import { CampusMenuModule } from '~/storyblok/components/campus-menu-module/definition';
import { GraphicModule } from '~/storyblok/components/graphic-module/definition';
import { MenuLinkModule } from '~/storyblok/components/menu-link-module/definition';
import useRouterEvent from '~/hooks/useRouterEvent';

const headerColumn = cx(
	'flex-grow flex-shrink-0',
	'md:flex-basis-auto md:flex-grow-0',
	'flex'
);

const menuTray = css`
	width: 375px;
	max-width: 90%;
	transition: transform 0.4s ease-in-out;
`;

const menuOverlayTransition = css`
	transition: opacity 0.4s linear;
`;

const fixedMenuTransition = css`
	transition: transform 0.4s ease-in-out;
`;

const menuGradientCSS = css`
	background: linear-gradient(236deg, #841227, #660013);
`;

const Header: FunctionComponent<{ variant?: string; header: any }> = (
	props
) => {
	const { variant, header } = props;

	const menuContext = useContext(MenuContext);

	// Menu state controls the entire main menu (including overlay)
	const [menuOpen, setMenuOpen] = useState(false);
	// Tray state controls opacity of overlay and tray translation
	const [trayOpen, setTrayOpen] = useState(false);
	// Fixed state controls fixed menu show/hide
	const [fixedOpen, setFixedOpen] = useState(false);

	const handleMenuOpen = () => {
		// Open both menu and tray.
		setTrayOpen(true);
		setMenuOpen(true);

		menuContext.eventEmitter.emit('open');
	};

	const handleMenuClose = () => {
		// Only trigger tray closing. Menu closing handled after transition
		setTrayOpen(false);

		menuContext.eventEmitter.emit('close');
	};

	const handleTransition = (e: TransitionEvent) => {
		// maintain tray and menu state.
		setMenuOpen(trayOpen);
	};

	// use menu open state to lock scroll
	useScrollLock(menuOpen);

	const campusContext = useContext(CampusContext);

	// close menu on route change
	useRouterEvent('routeChangeStart', () => {
		setTrayOpen(false);
	});

	return (
		<>
			{/* Page header */}
			<header
				className={cx(
					variant === 'light' && 'text-white',
					'absolute w-full z-40'
				)}
			>
				<div className="gud-content-grid relative">
					<div className="col-start-1 col-end--1 flex align-items-center py-4">
						<div className={cx(headerColumn)}>
							{(!variant || variant === 'dark') &&
								header &&
								header?.content?.dark_icon?.map((icon: GraphicModule) =>
									Components(icon)
								)}
							{variant === 'light' &&
								header &&
								header?.content?.light_icon?.map((icon: GraphicModule) =>
									Components(icon)
								)}
							<span className="sr-only">{header?.content?.home_text}</span>
						</div>
						<div
							className={cx(
								headerColumn,
								'justify-content-center',
								'md:justify-content-start md:flex-grow'
							)}
						>
							{(!variant || variant === 'dark') &&
								header &&
								header?.content?.dark_logo?.map((icon: GraphicModule) =>
									Components(icon)
								)}
							{variant === 'light' &&
								header &&
								header?.content?.light_logo?.map((icon: GraphicModule) =>
									Components(icon)
								)}
							<span className="sr-only">{header?.content?.logo_text}</span>
						</div>
						<div className={cx(headerColumn, 'justify-content-end')}>
							<div className="hidden md:block">
								{header && header?.content?.main_menu && (
									<UtilityMenu menu={header?.content?.main_menu} />
								)}
							</div>
							<button
								type="button"
								onClick={handleMenuOpen}
								className="flex align-items-center opacity-50"
							>
								<div className="md:mr-2">
									<span className="sr-only md:not-sr-only typo-ui-label align-top">
										{header?.content?.menu_text}
									</span>
								</div>
								<Icon className="w-4 fill-current" type="icons" icon="menu" />
							</button>
						</div>
					</div>
					<div
						className={cx(
							'hidden md:block absolute bottom-0 left-0 right-0 border-b opacity-25',
							variant === 'light' && 'border-white'
						)}
					/>
				</div>

				{/* Campus sub menu */}
				{header?.content?.campus_menus
					?.filter(
						(menu: CampusMenuModule) =>
							campusContext.formatCampus(menu.campus) ===
							campusContext.getCurrentCampus()
					)
					.map((menu: CampusMenuModule) => (
						<div key={menu._uid} className="relative hidden lg:block">
							<div className="gud-content-grid">
								<div className="col-start-1 col-end--1 flex align-items-baseline pt-6">
									<div className="typo-h3 mr-10">
										{menu.title || menu.campus}
									</div>
									{menu.menu.map((menuItem: MenuLinkModule) => (
										<SbEditable key={menuItem._uid} content={menuItem}>
											<ActionBehavior
												content={menuItem.action[0]}
												className="mr-6"
											>
												<ActiveLabel behavior={menuItem.action[0]}>
													<HoverLabel>{menuItem.link_text}</HoverLabel>
												</ActiveLabel>
											</ActionBehavior>
										</SbEditable>
									))}
								</div>
							</div>
						</div>
					))}
			</header>

			{/* {Fixed menu} */}
			<div
				data-header
				className={cx(
					'fixed top-0 left-0 right-0 z-50 bg-white transform',
					fixedMenuTransition,
					fixedOpen ? 'translate-y-0 shadow' : '-translate-y-full'
				)}
			>
				<div className="gud-content-grid">
					<div className="col-start-1 col-end--1 py-5">
						<div className="flex align-items-center justify-content-between">
							<div className="flex align-items-center">
								<div className="flex align-items-center">
									{header &&
										header?.content?.dark_icon?.map((icon: GraphicModule) =>
											Components(icon)
										)}
									<span className="sr-only">{header?.content?.home_text}</span>
									{header &&
										header?.content?.dark_logo?.map((icon: GraphicModule) =>
											Components(icon)
										)}
									<span className="sr-only">{header?.content?.logo_text}</span>
								</div>
								{campusContext?.campus?.length !== 0 && (
									<div className="typo-ui-label ml-8 hidden md:block">
										{
											header?.content?.campus_menus
												?.filter(
													(menu: CampusMenuModule) =>
														campusContext.formatCampus(menu.campus) ===
														campusContext.getCurrentCampus()
												)
												.pop()?.campus
										}
									</div>
								)}
							</div>
							<div className="flex align-items-center">
								<div className="hidden md:flex align-items-center">
									<RegionalTel className="mr-6" />
									{header?.content?.secondary_action.map(
										(action: ActionModule) => Components(action)
									)}
								</div>
								<div className="flex align-items-center">
									{header?.content?.primary_action.map((action: ActionModule) =>
										Components(action)
									)}
								</div>
								<button
									type="button"
									onClick={handleMenuOpen}
									className="flex align-items-center -m-3 p-3"
								>
									<span className="sr-only typo-ui-label align-top">
										{header?.content?.menu_text}
									</span>
									<Icon className="w-4" type="icons" icon="menu" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Waypoint
				onPositionChange={({ currentPosition }) => {
					setFixedOpen(currentPosition === 'above');
				}}
			>
				<div className="absolute top-0 left-0 h-screen" />
			</Waypoint>

			{/* Overlay & Tray */}
			<div
				className={cx(
					'fixed top-0 left-0 right-0 z-50 overflow-hidden',
					menuOpen ? 'bottom-0' : 'bottom-100'
				)}
			>
				<div
					className={cx(
						'absolute top-0 left-0 bottom-0 right-0 bg-ink-black',
						trayOpen ? 'opacity-50' : 'opacity-0',
						menuOverlayTransition
					)}
					onClick={handleMenuClose}
					onKeyPress={handleMenuClose}
					onTransitionEnd={handleTransition}
					role="button"
					tabIndex={menuOpen ? 1 : -1}
				/>

				<div
					className={cx(
						menuTray,
						'absolute top-0 right-0 bottom-0 bg-white flex flex-col',
						'transform',
						trayOpen ? 'translate-x-0' : 'translate-x-full'
					)}
				>
					<div className="px-10 py-6 flex-shrink-0 flex justify-content-end relative border-t-2 border-transparent">
						<button
							type="button"
							onClick={handleMenuClose}
							className="-m-4 p-3"
						>
							<Icon type="icons" icon="close" className="w-4" />
							<span className="sr-only">{header?.content?.close_text}</span>
						</button>
						<div className="absolute bottom-0 left-0 right-0 border-b border-ink-black opacity-25" />
					</div>
					<div
						className={cx(
							ModalScrollBar,
							'flex-grow overflow-y-auto flex flex-col'
						)}
					>
						<div className="flex-grow flex flex-col min-h-full">
							<div className="flex-shrink-0">
								<div className="px-10 pt-8 typo-ui-label font-bold">
									{header?.content?.our_campuses_text}
								</div>
								{header?.content?.campus_menus && (
									<CampusMenu menu={header?.content?.campus_menus} />
								)}
							</div>
							<div
								className={cx(
									'flex-grow text-white px-10 py-3',
									menuGradientCSS
								)}
							>
								{header?.content?.main_menu && (
									<SidebarMenu menu={header?.content?.main_menu} />
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
