const Joi = require('@hapi/joi');

/**
 * Ensures all needed variables are set, and returns the validated JavaScript object
 * including the applied default values.
 */
module.exports = function validateConfig(env) {
	// the expected environment variables
	const envSchema = Joi.object({
		// running environment variables
		ENVIRONMENT: Joi.string()
			.valid('development', 'editor', 'staging', 'production', 'test')
			.default('development'),
		PORT: Joi.number().default(3000),
		HOST: Joi.string().default('0.0.0.0'),
		LOG_LEVEL: Joi.string()
			.valid('trace', 'debug', 'info', 'warn', 'error', 'fatal', 'silent')
			.default('trace'),
		ANALYZE: Joi.boolean().default(false),
		// Heroku variables
		WEB_MEMORY: Joi.number(),
		WEB_CONCURRENCY: Joi.number(),
		// Storyblok related variables
		SB_CONTENT_API: Joi.string().default('https://api.storyblok.com/v2/cdn'),
		SB_SPACE_ID: Joi.number().required(),
		SB_PUBLIC_TOKEN: Joi.string().required(),
		SB_PREVIEW_TOKEN: Joi.string().required(),
		SB_CACHE_VERSION: Joi.number().default(new Date().getTime()),
		// GTM stuff
		GTM_ID_360: Joi.string(),
		// Integration API
		INTEGRATION_API: Joi.string(),
		LIVECHAT_ID: Joi.number(),
		EFSET_URL:Joi.string()
	});
	// validation options, unkown allowed and stripped away
	const joiOptions = {
		allowUnknown: true,
		stripUnknown: true
	};
	// run the validation on the env passed (throws on errors)
	const envConfig = Joi.attempt(env, envSchema, joiOptions);

	// return the passed env config
	return envConfig;
};
