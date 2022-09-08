import React, { FunctionComponent } from 'react';

import { cx } from 'linaria';
import SbEditable from 'storyblok-react';

import useStory from '~/hooks/useStory';

import { TeamMemberModule } from '~/storyblok/components/team-member-module/definition';

import { getSpacingComponentClasses } from '~/components/settings/SpacingComponent';
import Component from '~/components';
import ModuleWrap from '~/components/other/ModuleWrap';

const TeamMember: FunctionComponent<{ content: TeamMemberModule }> = props => {
	const { content } = props;

	const teamMember = useStory(content.team_member);

	return (
		<SbEditable content={content}>
			<ModuleWrap settings={content.module_settings}>
				<div
					className={cx(getSpacingComponentClasses(content.spacing_settings))}
				>
					{teamMember && teamMember.content && Component(teamMember.content)}
				</div>
			</ModuleWrap>
		</SbEditable>
	);
};

export default TeamMember;
