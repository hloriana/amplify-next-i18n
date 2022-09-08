import React, { FunctionComponent } from 'react';
import SbEditable from 'storyblok-react';

import Components from '~/components';

import useStory from '~/hooks/useStory';

const SharedSection: FunctionComponent<{
	content: any;
}> = props => {
	const { content } = props;
	const section = useStory(content.section);

	return (
		<SbEditable content={content}>
			<div>
				{section?.content?.section &&
					section.content.section.map((blok: any) => Components(blok))}
			</div>
		</SbEditable>
	);
};

export default SharedSection;
