import get from 'lodash/get';
import has from 'lodash/has';
import isArray from 'lodash/isArray';
import isString from 'lodash/isString';
import keys from 'lodash/keys';

// FIXME share config correctly with tailwind.config.js
const tailwindScreens: Record<string, string> = {
	md: '768px',
	lg: '1024px',
	xl: '1264px'
};

// https://github.com/tailwindcss/tailwindcss/blob/master/src/util/buildMediaQuery.js
/* eslint-disable no-param-reassign */
function buildMediaQuery(screens: any) {
	if (isString(screens)) {
		screens = { min: screens };
	}

	if (!isArray(screens)) {
		screens = [screens];
	}

	return Object.keys(screens)
		.map(key => {
			const screen = screens[key];

			if (has(screen, 'raw')) {
				return screen.raw;
			}

			return (
				Object.keys(screen)
					// eslint-disable-next-line no-shadow
					.map(key => {
						const value = screen[key];
						// const feature =
						key = get(
							{
								min: 'min-width',
								max: 'max-width'
							},
							key,
							key
						);

						return `(${key}: ${value})`;
					})
					.join(' and ')
			);
		})
		.join(', ');
}
/* eslint-enable no-param-reassign */

function getQueries() {
	const queries = { ...tailwindScreens };

	keys(queries).forEach(key => {
		queries[key as keyof typeof tailwindScreens] = buildMediaQuery(
			queries[key as keyof typeof tailwindScreens]
		);
	});

	return queries;
}

// REVIEW if could use get from lodash rather than these ifs
// FIXME types are broken, should be state correctly that uses tailwind screens as key
function getObjectFromMedia<T>(
	object: Record<string, T>,
	media: any
): T | undefined {
	const xlItem = object.xl;
	const lgItem = object.lg;
	const mdItem = object.md;
	const emptyItem = object[''];

	// check the queries
	if (media.xl) return xlItem || lgItem || mdItem || emptyItem;
	if (media.lg) return lgItem || mdItem || emptyItem;
	if (media.md) return mdItem || emptyItem;

	return emptyItem;
}

export { getQueries, getObjectFromMedia };
