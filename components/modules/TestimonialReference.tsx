import React, { FunctionComponent, useEffect, useState } from 'react';
import SbEditable from 'storyblok-react';
import { TestimonialModule } from '~/storyblok/components/testimonial-module/definition';

import useStory from '~/hooks/useStory';
import { cx } from 'linaria';
import {
	getMarginSpacingComponentClasses,
	getPaddingSpacingComponentClasses
} from '../settings/SpacingComponent';
import { getColoringClasses } from '../settings/Coloring';
import { bodyDefault, typeDefault, typeMap } from './Card';
import Graphic from './Graphic';
import Text from './Text';
import { getBodyFlexClasses } from '../settings/BodyFlex';
import { TextModule } from '~/storyblok/components/text-module/definition';

const TestimonialReference: FunctionComponent<{
	content: TestimonialModule;
}> = (props) => {
	const { content } = props;
	const testimonial = useStory(content.testimonial_reference);

	const graphicModule: any = {
		name: '',
		graphic: testimonial?.content?.graphic,
		action: [],
		is_centered: content.is_centered,
		border_radius: content.graphic_border_radius,
		gradient: content.gradient,
		aspect_ratio_settings: content.aspect_ratio_settings,
		sizing_settings: content.sizing_settings,
		spacing_settings: content.graphic_spacing_settings,
		module_settings: content.graphic_module_settings ?? []
	};

	const quoteTextModule: any = {
		text_level: content.quote_text_type,
		font_settings: content.quote_font_settings,
		coloring_settings: content.quote_coloring_settings,
		spacing_settings: content.quote_spacing_settings,
		text: testimonial?.content?.quote,
		module_settings: content.quote_module_settings
	};

	const detailsTextModule: any = {
		text_level: content.details_text_type,
		font_settings: content.details_font_settings,
		coloring_settings: content.details_coloring_settings,
		spacing_settings: content.details_spacing_settings,
		text: testimonial?.content?.details,
		module_settings: content.details_module_settings
	};

	const [quote, setQuote] = useState(quoteTextModule);
	const [details, setDetails] = useState(detailsTextModule);
	const [graphic, setGraphic] = useState(graphicModule);

	useEffect(() => {
		graphicModule.graphic = testimonial?.content?.graphic;
		setGraphic(graphicModule);

		quoteTextModule.text = testimonial?.content?.quote;
		setQuote(quoteTextModule);

		detailsTextModule.text = testimonial?.content?.details;
		setDetails(detailsTextModule);
	}, [testimonial]);

	const getCharacterCount = () => {
		let charCount = 0;

		if (quote) {
			(quote as TextModule).text.content?.forEach((doc: any) => {
				doc.content?.forEach((paragraph: any) => {
					charCount += paragraph.text?.length;
				});
			});
		}

		if (details) {
			(details as TextModule).text.content?.forEach((doc: any) => {
				doc.content?.forEach((paragraph: any) => {
					charCount += paragraph.text?.length;
				});
			});
		}

		return charCount;
	};

	if (
		quote.text &&
		details.text &&
		content.behavior &&
		content.behavior[0] &&
		content.behavior[0].character_limit &&
		getCharacterCount() > content.behavior[0].character_limit
	) {
		// SECTION cover
		const cover = graphic && (
			<div className="w-16">
				<Graphic content={graphic} wrap={false} profilePicture />
			</div>
		);

		// SECTION content
		let bodyClasses =
			getBodyFlexClasses(content.content_body_settings) || bodyDefault;

		// force justify-content-between
		bodyClasses = bodyClasses
			.split(' ')
			.filter((bodyClass) => bodyClass.indexOf('justify-content') === -1)
			.concat(['justify-content-between'])
			.join(' ');

		const spacing = getPaddingSpacingComponentClasses(content.spacing_settings);

		const contentClasses = cx('flex-grow', bodyClasses);

		const cardContent = (
			<div className={cx(contentClasses, spacing)}>
				<Text content={quote}></Text>
				<div className="mt-4 flex align-items-end justify-content-between">
					<Text content={details}></Text>
					<div className="flex-shrink-0 relative">{cover}</div>
				</div>
			</div>
		);

		return (
			<div
				className={cx(
					'flex-grow overflow-hidden',
					...typeMap[content.type || typeDefault],
					content.border_radius,
					getBodyFlexClasses(content.card_body_settings) || bodyDefault,
					getColoringClasses(content.coloring_settings),
					getMarginSpacingComponentClasses(content.spacing_settings)
				)}
			>
				{cardContent}
			</div>
		);
	}

	return (
		<SbEditable content={content}>
			<div
				className={cx(
					'flex-grow overflow-hidden',
					...typeMap[content.type || typeDefault],
					content.border_radius,
					getBodyFlexClasses(content.card_body_settings) || bodyDefault,
					getColoringClasses(content.coloring_settings),
					getMarginSpacingComponentClasses(content.spacing_settings)
				)}
			>
				<div className="flex-shrink-0 relative">
					{graphic.graphic && <Graphic content={graphic} />}
				</div>

				<div
					className={cx(
						'flex-grow',
						content.border_radius,
						getBodyFlexClasses(content.content_body_settings) || bodyDefault,
						getPaddingSpacingComponentClasses(content.spacing_settings)
					)}
				>
					<Text content={quote}></Text>
					<Text content={details}></Text>
				</div>
			</div>
		</SbEditable>
	);
};

export default TestimonialReference;
