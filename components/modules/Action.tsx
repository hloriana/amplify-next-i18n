import React, {
	FunctionComponent,
	DetailedHTMLProps,
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	useState,
	ClassAttributes,
	HTMLAttributes,
	useEffect,
	useContext,
	useRef
} from 'react';

import { cx, css } from 'linaria';
import { useRouter } from 'next/router';
import AnimateHeight from 'react-animate-height';
import Link from 'next/link';
import SbEditable from 'storyblok-react';

import { ActionBehaviorLinkSubModule } from '~/storyblok/components/action-behavior-link-sub-module/definition';
import { ActionBehaviorMenuSubModule } from '~/storyblok/components/action-behavior-menu-sub-module/definition';
import { ActionBehaviorModalSubModule } from '~/storyblok/components/action-behavior-modal-sub-module/definition';
import { ActionBehaviorScrollSubModule } from '~/storyblok/components/action-behavior-scroll-sub-module/definition';
import { ActionBehaviorPopUpFormSubModule } from '~/storyblok/components/action-behavior-pop-up-form-sub-module/definition';
import { ActionBehaviorPopUpFormSubmitSubModule } from '~/storyblok/components/action-behavior-pop-up-form-submit-sub-module/definition';
import { ActionModule } from '~/storyblok/components/action-module/definition';
import { BodyFlexSettings } from '~/storyblok/components/body-flex-settings/definition';
import { BodyGridSettings } from '~/storyblok/components/body-grid-settings/definition';

import { FormStatus } from '~/components/modules/FormIntegration';
import { getBodyFlexClasses } from '~/components/settings/BodyFlex';
import { getBodyGridClasses } from '~/components/settings/BodyGrid';
import { getColoringClasses } from '~/components/settings/Coloring';
import { getMarginSpacingComponentClasses } from '~/components/settings/SpacingComponent';
import { getPaddingSpacingComponentClasses } from '~/components/settings/SpacingComponent';
import Icon from '~/components/kit/Icon';
import IconModule from '~/components/modules/Icon';
import Modal from '~/components/kit/Modal/index';
import ModuleWrap from '~/components/other/ModuleWrap';

import ModalContext from '~/contexts/ModalContext';

import useRouterEvent from '~/hooks/useRouterEvent';

const iconTransitionCSS = css`
	transition: transform 0.2s ease-in-out;
`;

import Components from '~/components';
import ActiveLabel from '~/components/kit/ActiveLabel';
import MarketContext from '~/contexts/EnvContext';
import HoverLabel from '../kit/HoverLabel';

// SECTION Sub Module
const ActionScroll: FunctionComponent<
	{
		content: ActionBehaviorScrollSubModule;
		// FIXME seen the name, this is a temporary workaround to monkey patch EF forms
		formHack?: [FormStatus, Element | null, (() => void) | null];
	} & DetailedHTMLProps<
		AnchorHTMLAttributes<HTMLAnchorElement>,
		HTMLAnchorElement
	>
> = (props) => {
	const { children, content, formHack, ...rest } = props;

	const router = useRouter();

	// grab the URL
	const [url, setUrl] = useState('');

	useEffect(() => {
		const uid = content?.section_reference?.selected;

		if (uid) {
			const el = document
				.querySelectorAll(`[data-section-id="${uid}"]`)
				.item(0);

			if (el) {
				setUrl(`#${el.id}`);
			}
		}
	}, [content.section_reference]);

	const modalContext = useContext(ModalContext);

	const getScrollHandler = (position: number, el: HTMLElement) => {
		return () => {
			if (window.scrollY === Math.floor(position)) {
				window.removeEventListener('scroll', getScrollHandler(position, el));

				// Set focus to scrolled section to aid accessability
				el.setAttribute('tabindex', '-1');
				el.focus();
				el.setAttribute('tabindex', '');

				if (el.id) {
					// Push anchor slug to the url
					const newURL = new URL(window.location.href);
					newURL.host = '';
					newURL.hash = el.id;
					router.push(newURL.toString().replace(newURL.origin, ''));
				}
			}
		};
	};

	const scrollToSection = (e: any) => {
		const uid = content?.section_reference?.selected;

		if (uid) {
			// Find corresponding section.
			const el = document
				.querySelectorAll(`[data-section-id="${uid}"]`)
				.item(0) as HTMLElement;

			if (el) {
				// Scroll to relevant section
				e.preventDefault();

				const scrollTop = window.scrollY + el.getBoundingClientRect().top;

				window.scrollTo({ top: scrollTop, behavior: 'smooth' });

				window.addEventListener('scroll', getScrollHandler(scrollTop, el));
			}
		}
	};

	// FIXME part of the temporary workaround to monkey patch EF forms
	useEffect(() => {
		if (formHack) {
			if (formHack[0] === FormStatus.DONE) window.location.href = url;
		}
	}, [formHack?.[0]]);

	return (
		<a
			href={url}
			onClick={(e) => {
				// FIXME part of the temporary workaround to monkey patch EF forms
				if (formHack) {
					// prevent default behavior
					e.preventDefault();
					// if not loaded yet
					if (formHack[0] !== FormStatus.DONE)
						formHack[1]?.dispatchEvent(new Event('click'));
				}

				scrollToSection(e);

				modalContext.eventEmitter.emit('modal', 'close');
			}}
			{...rest}
		>
			{children}
		</a>
	);
};

// SECTION Sub Module
const ActionLink: FunctionComponent<
	{
		content: ActionBehaviorLinkSubModule;
		// FIXME seen the name, this is a temporary workaround to monkey patch EF forms
		formHack?: [FormStatus, Element | null, (() => void) | null];
	} & DetailedHTMLProps<
		AnchorHTMLAttributes<HTMLAnchorElement>,
		HTMLAnchorElement
	>
> = (props) => {
	const { children, content, formHack, ...rest } = props;

	const market = useContext(MarketContext);

	const router = useRouter();
	// grab the URL
	let url = content.link.cached_url || content.link.url;

	// check if should carry the params
	if (content.carry_params) {
		try {
			const currentSearch = new URLSearchParams(router.asPath.split('?')?.[1]);
			const newSearch = new URLSearchParams(url.split('?')?.[1]);
			currentSearch.forEach((v, k) => newSearch.append(k, v));
			if (url.indexOf('?') !== -1)
				url = url.replace(/\?(.+)/, `?${newSearch.toString()}`);
			else url += `?${newSearch.toString()}`;
		} catch (e) {
			// console.log(e);
		}
	}
	// if it's a story we need internal routing
	const isStory = content.link.linktype === 'story';

	// FIXME part of the temporary workaround to monkey patch EF forms
	useEffect(() => {
		if (formHack) {
			if (formHack[0] === FormStatus.DONE) window.location.href = url;
		}
	}, [formHack?.[0]]);

	// Trim homepage urls
	if (url === `/${market.marketCode}/home`) {
		url = `/${market.marketCode}/`;
	} else if (url === 'home') {
		url = '/';
	}

	// Append leading slash for stories that don't have one already
	if (isStory && url && url.substr(0, 1) !== '/') {
		url = `/${url}`;
	}

	if (content.campus_parameter) {
		let [path, search] = url.split('?');

		let searchParams = new URLSearchParams(search);

		searchParams.set(
			'campus',
			content.campus_parameter.toLowerCase().replace(/\s/g, '-')
		);

		url = path + '?' + searchParams.toString();
	}

	return isStory ? (
		<Link href={url}>
			<a target={content.open_external ? '_blank' : ''} {...rest}>
				{children}
			</a>
		</Link>
	) : (
		<a
			href={url}
			target={content.open_external ? '_blank' : ''}
			onClick={(e) => {
				// FIXME part of the temporary workaround to monkey patch EF forms
				if (formHack) {
					// prevent default behavior
					e.preventDefault();
					// if not loaded yet
					if (formHack[0] !== FormStatus.DONE)
						formHack[1]?.dispatchEvent(new Event('click'));
				}
			}}
			{...rest}
		>
			{children}
		</a>
	);
};

const ActionModal: FunctionComponent<
	{
		content: ActionBehaviorModalSubModule;
		// FIXME seen the name, this is a temporary workaround to monkey patch EF forms
		formHack?: [FormStatus, Element | null, (() => void) | null];
	} & DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	>
> = (props) => {
	const { children, content, onClick, formHack, ...rest } = props;
	// modal state
	const [modal, setModal] = useState(false);
	const toggleModal = () => setModal(!modal);

	const modalContext = useContext(ModalContext);

	const handleModalClose = () => {
		setModal(false);
	};

	const bodyGridSettings = content.body_settings?.filter(
		(s) => s.component === 'body_grid_settings'
	) as BodyGridSettings[];
	const gridClasses = getBodyGridClasses(bodyGridSettings);

	const bodyFlexSettings = content.body_settings?.filter(
		(s) => s.component === 'body_flex_settings'
	) as BodyFlexSettings[];
	const flexClasses = getBodyFlexClasses(bodyFlexSettings);

	// FIXME part of the temporary workaround to monkey patch EF forms
	useEffect(() => {
		if (formHack) {
			if (formHack[0] === FormStatus.DONE) toggleModal();
		}

		modalContext.eventEmitter.on('modal', handleModalClose);

		return () => {
			modalContext.eventEmitter.off('modal', handleModalClose);
		};
	}, [formHack?.[0]]);

	return (
		<>
			<button
				type="button"
				onClick={(e) => {
					// FIXME part of the temporary workaround to monkey patch EF forms
					if (formHack) {
						// if not loaded yet
						if (formHack[0] !== FormStatus.DONE && formHack[1])
							formHack[1]?.dispatchEvent(new Event('click'));
						// if successfully sent already just toggle the modal
						else toggleModal();
					}
					// normal behavior
					else toggleModal();
					// TODO handle a possible onClick function better
					onClick?.(e);
				}}
				{...rest}
			>
				{children}
			</button>
			{/* modal portal */}
			<Modal
				modal={modal}
				toggleModal={toggleModal}
				colorsClasses={getColoringClasses(content.coloring_settings)}
				paddingClasses={
					!gridClasses &&
					getPaddingSpacingComponentClasses(content.spacing_settings)
				}
				borderRadiusClasses={content.border_radius}
				hideOverflow={content.hide_overflow}
				variant={content.variant}
			>
				<SbEditable content={content}>
					<div className={cx(gridClasses || flexClasses || 'flex flex-col')}>
						{content.body &&
							content.body.map((blok) => Components(blok, '', { modal }))}
					</div>
				</SbEditable>
			</Modal>
		</>
	);
};

const ActionPopupForm: FunctionComponent<
	{
		content: ActionBehaviorPopUpFormSubModule;
		// FIXME seen the name, this is a temporary workaround to monkey patch EF forms
		formHack?: [FormStatus, Element | null, (() => void) | null];
	} & DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	>
> = (props) => {
	const { children, content, onClick, formHack, ...rest } = props;
	// modal state
	const [modal, setModal] = useState(false);
	const toggleModal = () => {
		setModal(!modal);
		setFormSubmitted(false);
	};

	const [formSubmitted, setFormSubmitted] = useState(false);
	const handleFormSubmit = () => setFormSubmitted(true);

	const modalContext = useContext(ModalContext);

	const handleModalClose = () => {
		setModal(false);
	};

	const bodyGridSettings = content.body_settings?.filter(
		(s) => s.component === 'body_grid_settings'
	) as BodyGridSettings[];
	const gridClasses = getBodyGridClasses(bodyGridSettings);

	const bodyFlexSettings = content.body_settings?.filter(
		(s) => s.component === 'body_flex_settings'
	) as BodyFlexSettings[];
	const flexClasses = getBodyFlexClasses(bodyFlexSettings);

	// FIXME part of the temporary workaround to monkey patch EF forms
	useEffect(() => {
		modalContext.eventEmitter.on('modal', handleModalClose);

		return () => {
			modalContext.eventEmitter.off('modal', handleModalClose);
		};
	}, [formHack?.[0]]);

	return (
		<>
			<button
				type="button"
				onClick={(e) => {
					toggleModal();
					// TODO handle a possible onClick function better
					onClick?.(e);
				}}
				{...rest}
			>
				{children}
			</button>
			{/* modal portal */}
			<Modal
				modal={modal}
				toggleModal={toggleModal}
				colorsClasses={getColoringClasses(content.coloring_settings)}
				paddingClasses={
					!gridClasses &&
					getPaddingSpacingComponentClasses(content.spacing_settings)
				}
				borderRadiusClasses={content.border_radius}
				hideOverflow={content.hide_overflow}
				variant={content.variant}
			>
				<SbEditable content={content}>
					{formSubmitted ? (
						<div className={cx(gridClasses || flexClasses || 'flex flex-col')}>
							{content.thank_you_page &&
								content.thank_you_page.map((blok: any) => Components(blok))}
						</div>
					) : (
						<div className={cx(gridClasses || flexClasses || 'flex flex-col')}>
							{content.body &&
								content.body.map((blok: any) => Components(blok))}
							{content.form &&
								content.form.map((blok: any) =>
									Components(blok, '', { handleFormSubmit })
								)}
						</div>
					)}
				</SbEditable>
			</Modal>
		</>
	);
};

const ActionPopupFormSubmit: FunctionComponent<
	{
		content: ActionBehaviorPopUpFormSubmitSubModule;
		// FIXME seen the name, this is a temporary workaround to monkey patch EF forms
		formHack?: [FormStatus, Element | null, (() => void) | null];
	} & DetailedHTMLProps<
		AnchorHTMLAttributes<HTMLAnchorElement>,
		HTMLAnchorElement
	>
> = (props) => {
	const { children, formHack, ...rest } = props;

	return (
		<a
			onClick={(e) => {
				// FIXME part of the temporary workaround to monkey patch EF forms
				if (formHack) {
					// prevent default behavior
					e.preventDefault();
					// if not loaded yet
					if (formHack[0] !== FormStatus.DONE)
						formHack[1]?.dispatchEvent(new Event('click'));

					if (formHack[2]) {
						formHack[2]();
					}
				}
			}}
			{...rest}
		>
			{children}
		</a>
	);
};

const ActionMenu: FunctionComponent<{
	content: ActionBehaviorMenuSubModule;
	className?: string;
}> = (props) => {
	const { content, children, className } = props;

	const [open, setOpen] = useState(false);
	const [opening, setOpening] = useState(false);

	const handleBodyClick = function (this: Document, ev: MouseEvent): any {
		if (
			wrapperRef.current &&
			!wrapperRef.current.contains(ev.target as HTMLElement)
		) {
			setOpening(false);
		}
	};

	const wrapperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Handle second click to close menu
		document.addEventListener('click', handleBodyClick);

		return () => {
			// Remove event listeners on component destroy
			document.removeEventListener('click', handleBodyClick);
		};
	}, []);

	const handleMenuToggle = () => {
		if (!open) {
			setOpen(true);
			setOpening(true);
		} else {
			setOpening(false);
		}
	};

	// close menu on route change
	useRouterEvent('routeChangeStart', () => {
		setOpening(false);
	});

	return (
		<div
			className={cx(className, 'relative overflow-visible')}
			ref={wrapperRef}
		>
			<div
				role="button"
				tabIndex={0}
				onClick={handleMenuToggle}
				onKeyUp={handleMenuToggle}
				className={cx('flex', 'align-items-center')}
			>
				{children}
				<Icon
					type="icons"
					icon="chevron-down"
					className={cx(
						'w-2 ml-2 transform opacity-50 fill-current',
						iconTransitionCSS,
						opening && 'rotate-180'
					)}
				/>
			</div>
			{
				<div
					className={cx(
						'absolute bg-white text-ink-black text-ui-label rounded-sm whitespace-nowrap left-1/2 transform -translate-x-1/2 shadow mt-2 z-10 hidden',
						open && 'md:block'
					)}
				>
					<AnimateHeight
						height={opening ? 'auto' : 0}
						onAnimationEnd={() => {
							if (!opening) {
								setOpen(false);
							}
						}}
					>
						<div className="py-1 pl-4 pr-12 ">
							{content.children.map((child) => {
								return (
									<div key={child._uid} className="py-1">
										<SbEditable content={child}>
											<ActionBehavior content={child.action[0]}>
												<ActiveLabel behavior={child.action[0]}>
													<HoverLabel>{child.link_text}</HoverLabel>
												</ActiveLabel>
											</ActionBehavior>
										</SbEditable>
									</div>
								);
							})}
						</div>
					</AnimateHeight>
				</div>
			}
		</div>
	);
};

// SECTION Sub Modules renderer
const ActionBehavior: FunctionComponent<
	{
		content:
			| ActionBehaviorLinkSubModule
			| ActionBehaviorMenuSubModule
			| ActionBehaviorModalSubModule
			| ActionBehaviorScrollSubModule
			| ActionBehaviorPopUpFormSubModule
			| ActionBehaviorPopUpFormSubmitSubModule;
		// FIXME seen the name, this is a temporary workaround to monkey patch EF forms
		formHack?: [FormStatus, Element | null, (() => void) | null];
	} & ClassAttributes<HTMLElement> &
		HTMLAttributes<HTMLElement>
> = (props) => {
	// NOTE ref would be ignored due to the generics
	const { content: behavior, children, ref, formHack, ...rest } = props;

	// render the correct one
	switch (behavior?.component) {
		case 'action_behavior_scroll_sub_module': {
			return (
				<ActionScroll content={behavior} formHack={formHack} {...rest}>
					{children}
				</ActionScroll>
			);
		}

		case 'action_behavior_link_sub_module': {
			return (
				<ActionLink content={behavior} formHack={formHack} {...rest}>
					{children}
				</ActionLink>
			);
		}

		case 'action_behavior_menu_sub_module': {
			return (
				<ActionMenu content={behavior} {...rest}>
					{children}
				</ActionMenu>
			);
		}

		case 'action_behavior_modal_sub_module': {
			return (
				<ActionModal content={behavior} formHack={formHack} {...rest}>
					{children}
				</ActionModal>
			);
		}

		case 'action_behavior_pop_up_form_sub_module': {
			return (
				<ActionPopupForm content={behavior} formHack={formHack} {...rest}>
					{children}
				</ActionPopupForm>
			);
		}

		case 'action_behavior_pop_up_form_submit_sub_module': {
			return (
				<ActionPopupFormSubmit content={behavior} formHack={formHack} {...rest}>
					{children}
				</ActionPopupFormSubmit>
			);
		}

		default: {
			// REVIEW what should happen
			// TODO inform users of unknown behavior? render a generic button?
			return <></>;
		}
	}
};

// SECTION Main Module
const Action: FunctionComponent<{
	content: ActionModule;
	// FIXME seen the name, this is a temporary workaround to monkey patch EF forms
	formHack?: [FormStatus, Element | null, (() => void) | null];
}> = (props) => {
	const { content, formHack } = props;
	const formState =
		Array.isArray(formHack) && formHack.length > 0 ? formHack[0] : null;
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

	// behavior
	const behavior = content.behavior?.[0];

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
					{formState === FormStatus.LOADING ? (
						<div className="h-8">
							<div className="spinner" />
						</div>
					) : (
						<ActionBehavior
							content={behavior}
							formHack={formHack}
							className={cx(
								buttonClasses,
								`justify-content-${content.justify_content}`,
								content.justify_content === 'center' && 'text-center',
								'cursor-pointer'
							)}
							data-name="action-module"
						>
							<span>{content.text}</span>
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

export default Action;

export { ActionBehavior };
