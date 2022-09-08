module.exports = {
	sbmigWorkingDirectory: 'storyblok',
	componentDirectories: ['storyblok/component_groups', 'storyblok/components'],
	datasourcesDirectory: 'storyblok/datasources',
	schemaFileExt: 'sb.js',
	storyblokApiUrl: 'https://api.storyblok.com/v2',
	oauthToken: process.env.SB_OAUTH_TOKEN,
	spaceId: process.env.SB_SPACE_ID,
	accessToken: process.env.SB_PREVIEW_TOKEN
};
