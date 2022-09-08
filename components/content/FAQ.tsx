import React, { FunctionComponent } from 'react';

import SbEditable from 'storyblok-react';

import { FaqContentType } from '~/storyblok/components/faq-content-type/definition';

import Components from '~/components';

const FAQ: FunctionComponent<{ content: FaqContentType }> = props => {
	const { content } = props;

	return (
		<SbEditable content={content}>
			<div>
				{content.head && content.head.map(blok => Components(blok))}
				{content.body && content.body.map(blok => Components(blok))}
			</div>
		</SbEditable>
	);
};

export default FAQ;
