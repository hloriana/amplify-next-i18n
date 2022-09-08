import React, { FunctionComponent } from 'react';

import SbEditable from 'storyblok-react';

import Components from '~/components';

import ModuleWrap from '~/components/other/ModuleWrap';

import { TeamMemberContentType } from '~/storyblok/components/team-member-content-type/definition';

const TeamMember: FunctionComponent<{ content: TeamMemberContentType }> = ({
	content
}) => {
	const { image, name, position } = content;

	return (
		<SbEditable content={content}>
			{image && image.map(blok => Components(blok))}
			{name && name.map(blok => Components(blok))}
			{position && position.map(blok => Components(blok))}
		</SbEditable>
	);
};

export default TeamMember;
