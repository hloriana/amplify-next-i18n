import React, { FunctionComponent } from 'react';

import { cx, css } from 'linaria';
import SbEditable from 'storyblok-react';

import Components from '~/components';

import { ActionBehavior } from '~/components/modules/Action';
import { RegionSelector } from '~/components/modules/Regional';
import LanguageSelector from '~/components/other/LanguageSelector';
import LegalCopyright from '~/components/other/LegalCopyright';
import LegalLinks from '~/components/other/LegalLinks';
import RegionalOffice from '~/components/other/RegionalOffice';

import { ActionModule } from '~/storyblok/components/action-module/definition';
import { GraphicModule } from '~/storyblok/components/graphic-module/definition';
import { MenuLinkModule } from '~/storyblok/components/menu-link-module/definition';
import { ScrollTopModule } from '~/storyblok/components/scroll-top-module/definition';
import { TextModule } from '~/storyblok/components/text-module/definition';

const footerGradientCss = css`
	background: linear-gradient(224deg, #7f182c, #4c0000);
`;

const footerMenuGrid = css`
	display: grid;
	grid-template-columns: 1fr 1fr;
	row-gap: 0.5rem;
	column-gap: 1.5rem;
`;

const Footer: FunctionComponent<{ footer: any; labels: any[] }> = (props) => {
	const { footer, labels } = props;

	return (
		<>
			{footer && footer?.content && (
				<SbEditable content={footer?.content}>
					<footer
						className={cx(footerGradientCss, 'text-white pt-32 pb-10 md:pb-8')}
					>
						<div className="gud-content-grid">
							<div className="col-start-1 col-end--1 flex align-items-center mb-6">
								{footer &&
									footer?.content?.icon?.map((blok: GraphicModule) =>
										Components(blok)
									)}
								{footer &&
									footer?.content?.academy_logo?.map((blok: GraphicModule) =>
										Components(blok)
									)}
							</div>
							<div className="col-span-4 md:col-span-5 mb-12 md:mb-10">
								{footer &&
									footer?.content?.text?.map((blok: TextModule) =>
										Components(blok)
									)}
							</div>
							<div className="col-span-3 mb-6 md:col-start-7 md:row-span-2">
								<RegionSelector />
								{footer && footer?.content?.office_text && (
									<div className="text-ui-label font-bold mb-3">
										{footer?.content?.office_text}
									</div>
								)}
								<RegionalOffice mapLabel={footer?.content?.map_link_text} />
							</div>
							<div className="col-span-4 flex align-items-center md:flex-col md:align-items-end mb-12 md:col-span-3 md:row-span-2">
								{footer &&
									footer?.content?.actions?.map((blok: ActionModule) =>
										Components(blok)
									)}
							</div>
							<div className="col-span-4 md:col-span-5">
								<div className={cx(footerMenuGrid, 'mb-8')}>
									{footer &&
										footer?.content?.menu?.map((blok: MenuLinkModule) => (
											<SbEditable content={blok} key={blok._uid}>
												<ActionBehavior
													className="text-ui-label text-center md:text-left"
													content={blok.action[0]}
												>
													{blok.link_text}
												</ActionBehavior>
											</SbEditable>
										))}
								</div>
								<div className="flex justify-content-center md:justify-content-start">
									{footer &&
										footer?.content?.social_menu
											?.filter((blok: MenuLinkModule) => !blok.exclude_top)
											.map((blok: MenuLinkModule) => (
												<SbEditable content={blok} key={blok._uid}>
													<ActionBehavior content={blok.action[0]}>
														{blok.icon.map((icon) => Components(icon))}
														<span className="sr-only">{blok.link_text}</span>
													</ActionBehavior>
												</SbEditable>
											))}
								</div>
							</div>
							<div className="col-start-1 col-end--1 flex flex-col md:flex-row border-t border-white pt-12 mt-12 md:pt-8 md:mt-16 opacity-50">
								<div className="flex-grow md:flex-basis-0 flex flex-col-reverse md:flex-row align-items-center mb-10 md:mb-0">
									<LegalLinks />
									<LanguageSelector
										title={footer?.content?.select_language_text}
										labels={labels}
									/>
								</div>
								<div className="flex justify-content-center mx-6 mb-10 md:mb-0">
									{footer &&
										footer?.content?.ef_logo?.map((blok: GraphicModule) =>
											Components(blok)
										)}
								</div>
								<div className="flex-grow md:flex-basis-0 flex justify-content-center md:justify-content-end align-items-center">
									<LegalCopyright />
								</div>
							</div>
						</div>

						{footer?.content?.scroll_top &&
							footer?.content?.scroll_top.map((blok: ScrollTopModule) =>
								Components(blok)
							)}
					</footer>
				</SbEditable>
			)}
		</>
	);
};

export default Footer;
