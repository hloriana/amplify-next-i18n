/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-duplicate-disable */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/order */
import { cx } from 'linaria';
import React, {
	FunctionComponent,
	useContext,
	useEffect,
	useMemo,
	useState
} from 'react';
import SbEditable from 'storyblok-react';

import GraphicModule from '~/components/modules/Graphic';
import ModuleWrap from '../other/ModuleWrap';
import useStory from '~/hooks/useStory';

import { CardTestimonialModule } from '~/storyblok/components/card-testimonial-module/definition';
import { TestimonialContext } from '../sections/Testimonials';
import Modal from '../kit/Modal';
import Text from './Text';

const Cover: FunctionComponent<{
	testimonial: any;
}> = ({ testimonial }) => {
	const graphicModule: any = {
		name: '',
		graphic: testimonial?.content?.graphic,
		aspect_ratio_settings: [{ ratio: '1/1' }],
		action: [],
		module_settings: []
	};

	return (
		<div className="flex-shrink-0 relative">
			{graphicModule?.graphic && (
				<GraphicModule content={graphicModule} wrap={false} />
			)}
			<div className="absolute top-0 left-0 h-full w-full flex-grow flex flex-col justify-content-end">
				<div className="relative overflow-hidden m-8">
					<h2 className="typo-h2 text-white">{testimonial?.name}</h2>
					<div className="relative z-10 flex flex-row flex-wrap">
						{testimonial?.content?.program && (
							<span
								className="typo-richtext typo-ui-label text-center font-book text-white bg-burgundy m-1 px-2"
								style={{ textTransform: 'capitalize' }}
							>
								{testimonial.content.program}
							</span>
						)}
						{testimonial?.content?.campus && (
							<span
								className="typo-richtext typo-ui-label text-center font-book text-white bg-burgundy m-1 px-2"
								style={{ textTransform: 'capitalize' }}
							>
								{testimonial.content.campus}
							</span>
						)}
						{testimonial?.content?.type && (
							<span
								className="typo-richtext typo-ui-label text-center font-book text-white bg-burgundy m-1 px-2"
								style={{ textTransform: 'capitalize' }}
							>
								{testimonial.content.type}
							</span>
						)}
						{testimonial?.content?.country && (
							<span
								className="typo-richtext typo-ui-label text-center font-book text-white bg-burgundy m-1 px-2"
								style={{ textTransform: 'capitalize' }}
							>
								{testimonial.content.country}
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

const Content: FunctionComponent<{
	testimonial: any;
}> = ({ testimonial }) => {
	const quote = useMemo(
		() => ({
			text_level: 'paragraph',
			font_settings: [
				{
					alignment: '',
					component: 'font_settings',
					screen_size: '',
					size: ''
				}
			],
			coloring_settings: [],
			spacing_settings: [],
			text: testimonial?.content?.quote,
			module_settings: []
		}),
		[testimonial]
	);

	return (
		<div>
			<h3 className="typo-h3 mb-4">{testimonial?.content?.name}</h3>
			<div className="typo-richtext typo-paragraph font-light mt-4">
				<Text content={quote as any} />
			</div>
		</div>
	);
};

const CardTestimonialModal: FunctionComponent<{
	content: CardTestimonialModule;
	testimonial: any;
}> = ({ content, testimonial }) => {
	const [modal, setModal] = useState(false);
	const toggleModal = () => setModal(!modal);

	const handleModalClose = () => {
		setModal(false);
	};

	return (
		<div className="flex flex-col flex-grow overflow-hidden align-items-stretch shadow rounded mt-8">
			<button
				type="button"
				onClick={(e) => {
					toggleModal();
				}}
			>
				<Cover testimonial={testimonial} />
			</button>
			{/* modal portal */}
			<Modal modal={modal} toggleModal={toggleModal}>
				<div className="flex-grow flex-shrink flex flex-col py-16 px-6 md:px-16">
					<Content testimonial={testimonial} />
				</div>
			</Modal>
		</div>
	);
};

const CardTestimonialFlip: FunctionComponent<{
	content: CardTestimonialModule;
	testimonial: any;
}> = ({ content, testimonial }) => {
	const [flipped, setFlipped] = useState(false);
	const flipHandler = () => setFlipped(!flipped);

	return (
		<div
			className={cx(
				'flipper',
				'shadow',
				'rounded',
				'mt-8',
				flipped && 'flipper-flipped'
			)}
			data-name="card-flipper-module"
		>
			<button
				className="flipper-collapsed absolute top-0 left-0 w-full h-full z-20"
				type="button"
				onClick={flipHandler}
			/>

			<div className="flipper-front relative">
				<Cover testimonial={testimonial} />
			</div>
			<div className="flipper-back flex flex-col">
				<div className="relative z-10 flex flex-col p-10 h-full">
					<Content testimonial={testimonial} />
				</div>
			</div>
		</div>
	);
};

const CardTestimonial: FunctionComponent<{
	content: CardTestimonialModule;
}> = ({ content }) => {
	const testimonial = useStory(content.testimonial);
	const { filters, addCountry } = useContext(TestimonialContext);

	const charsCount = useMemo(() => {
		let charCount = 0;
		const { quote, details } = testimonial?.content || {};
		if (quote) {
			quote.content?.forEach((doc: any) => {
				doc.content?.forEach((paragraph: any) => {
					charCount += paragraph.text?.length;
				});
			});
		}

		if (details) {
			details.content?.forEach((doc: any) => {
				doc.content?.forEach((paragraph: any) => {
					charCount += paragraph.text?.length;
				});
			});
		}

		return charCount;
	}, [testimonial]);

	useEffect(() => {
		if (addCountry && testimonial?.content?.country) addCountry(testimonial.content.country)
	}, [testimonial])

	if (
		(filters.program && testimonial?.content?.program !== filters?.program) ||
		(filters.campus && testimonial?.content?.campus !== filters?.campus) ||
		(filters.type && testimonial?.content?.type !== filters?.type) ||
		(filters.country && testimonial?.content?.country !== filters?.country)
	)
		return null;

	return (
		<SbEditable content={content}>
			<ModuleWrap
				settings={content.module_settings}
				className={cx('flex flex-col flex-grow testimonial-card')}
				data-program={testimonial?.content?.program}
				data-campus={testimonial?.content?.campus}
				data-type={testimonial?.content?.type}
				data-country={testimonial?.content?.country}
			>
				{charsCount >= content.flipper_characters_limit ? (
					<CardTestimonialModal content={content} testimonial={testimonial} />
				) : (
					<CardTestimonialFlip content={content} testimonial={testimonial} />
				)}
			</ModuleWrap>
		</SbEditable>
	);
};

export default CardTestimonial;
