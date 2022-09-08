import React, { FunctionComponent } from 'react';

import SbEditable from 'storyblok-react';

import { SharedActionContentType as SharedActionContentTypeDefinition } from '~/storyblok/components/shared-action-content-type/definition';

import { ActionBehavior } from '../modules/Action';

const SharedActionContentType: FunctionComponent<{
	content: SharedActionContentTypeDefinition;
}> = (props) => {
	const { content } = props;

	return (
		<SbEditable content={content}>
			{content.text && content.behavior && (
				<ActionBehavior content={content.behavior[0]} data-name="action-module">
					<span>{content.text}</span>
				</ActionBehavior>
			)}
		</SbEditable>
	);
};

export default SharedActionContentType;
