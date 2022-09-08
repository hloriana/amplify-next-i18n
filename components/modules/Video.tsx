import React, { FunctionComponent, useContext } from 'react';

import { MediaContext } from 'react-media-query-hoc';
import { css, cx } from 'linaria';
import ReactPlayer from 'react-player/lazy';
import SbEditable from 'storyblok-react';

import { Icon } from '~/components/kit';

import { VideoModule } from '~/storyblok/components/video-module/definition';
import { getAspectRatioClasses } from '~/components/settings/AspectRatio';
import { getSpacingComponentClasses } from '~/components/settings/SpacingComponent';
import Gradient from '~/components/modules/Gradient';
import ModuleWrap from '~/components/other/ModuleWrap';

const Video: FunctionComponent<{ content: VideoModule, modal: boolean }> = (props) => {
	const { content, modal } = props;

	const play: boolean = modal !== false;

	const PlayIcon = (
		<button type="button" className="w-24 h-24 rounded-full bg-white shadow">
			<Icon type="icons" icon="play" className="m-8" />
		</button>
	);

	const mediaContext = useContext<any>(MediaContext);

	const url =
		content.video_url ||
		(!mediaContext.md && content.mobile_file
			? content.mobile_file
			: content.video_file);

	return (
		<SbEditable content={content}>
			<ModuleWrap settings={content.module_settings}>
				<div
					className={cx(
						'relative',
						getAspectRatioClasses(content.aspect_ratio_settings) ||
							'ratio-16/9',
						// TODO handle spacing correctly, how should the padding behave on this element?
						getSpacingComponentClasses(content.spacing_settings)
					)}
					data-name="video-module"
				>
					<ReactPlayer
						className="absolute top-0 left-0"
						url={url}
						loop={content.loop}
						controls={content.controls}
						light={!content.auto_play ? content.thumbnail.image : false}
						playIcon={PlayIcon}
						width="100%"
						height="100%"
						volume={content.auto_play ? 0 : undefined}
						muted={content.auto_play}
						playing={content.auto_play && play}
						playsinline={content.auto_play}
						config={{ file: { attributes: { className: 'object-cover' } } }}
					/>
					{content.gradient &&
						content.gradient.map((gradient) => (
							<Gradient
								// eslint-disable-next-line no-underscore-dangle
								key={gradient._uid}
								content={gradient}
								className="absolute h-full w-full top-0 left-0"
							/>
						))}
				</div>
			</ModuleWrap>
		</SbEditable>
	);
};

export default Video;
