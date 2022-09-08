import React, { FunctionComponent } from 'react';

import Image from 'next/image'
import SbEditable from 'storyblok-react';
import parse from 'html-react-parser';

import { storyblokAsset } from '../kit/Graphic/assets';

import { SharedTestimonialContentType } from '~/storyblok/components/shared-testimonial-content-type/definition';

import RichTextResolver from '~/utils/richtext.service';
// Get Storyblok content resolver
const richTextResolver = new RichTextResolver();

const Testimonial: FunctionComponent<{
	content: SharedTestimonialContentType;
}> = (props) => {
	const { content } = props;

	const asset = storyblokAsset(content.graphic.src);
	// REVIEW how to handle this case?
	if (!asset) throw new Error('not a storyblok asset');

	return (
		<SbEditable content={content}>
			<div>
				{asset && <Image src={asset.src} alt="" layout="fill"/>}
				<br />
				{content.quote &&
					parse(
						richTextResolver
							.render(content.quote)
							// replaces escaped '&nbsp;' back to html
							.replace(/&ampnbsp;/g, '&nbsp;')
							// replaces empty p tag as br for new lines
							.replace(/<p><\/p>/g, '<br />')
					)}
				<br />
				{content.details &&
					parse(
						richTextResolver
							.render(content.details)
							// replaces escaped '&nbsp;' back to html
							.replace(/&ampnbsp;/g, '&nbsp;')
							// replaces empty p tag as br for new lines
							.replace(/<p><\/p>/g, '<br />')
					)}
			</div>
		</SbEditable>
	);
};

export default Testimonial;
