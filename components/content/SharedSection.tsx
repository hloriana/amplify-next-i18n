import React, { FunctionComponent } from 'react';

import SbEditable from 'storyblok-react';

import { SharedSectionContentType as SharedSectionContentTypeDefinition } from '~/storyblok/components/shared-section-content-type/definition';

import Components from '~/components';

const SharedSectionContentType: FunctionComponent<{
	content: SharedSectionContentTypeDefinition;
}> = props => {
	const { content } = props;

	return (
		<SbEditable content={content}>
			<div>
				{content.section && content.section.map(blok => Components(blok))}
			</div>
		</SbEditable>
	);
};

export default SharedSectionContentType;
