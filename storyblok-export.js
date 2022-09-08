const fse = require('fse');

const _ = require('lodash');
const sbmig = require('sb-mig/dist/api');
const config = require('sb-mig/dist/config');
const prettier = require('prettier');

const prettierOptions = prettier.resolveConfig.sync(__dirname);

const getFileName = (name) => {
	return name.toLowerCase().replace(/[^a-z0-9]/g, '-');
};

const convertName = (name) => {
	// convert the name
	const newName = _.camelCase(name).replace(/^\w/, (c) => c.toUpperCase());

	return `${newName}`;
};

const base = () => {
	const output = [];

	// Multilink (basic) field
	output.push(`export interface MultilinkField {`);
	output.push('\tid: string;');
	output.push('\tcached_url: string;');
	output.push('\turl: string;');
	output.push('\tlinktype: string;');
	output.push('}');
	output.push(``);

	// AdvancedImage (plugin) field
	output.push(`export interface AdvancedImageField {`);
	output.push('\talt_tag: string;');
	output.push('\tcaption: string;');
	output.push('\tcopyright_info: string;');
	output.push('\timage: string;');
	output.push('\tplugin: string;');
	output.push('}');
	output.push(``);

	// NativeColor (plugin) field
	output.push(`export interface NativeColorPickerField {`);
	output.push('\tcolor: string;');
	output.push('\tplugin: string;');
	output.push('}');
	output.push(``);

	// Seo metatags (plugin) field
	output.push(`export interface SeoMetatagsField {`);
	output.push(`\ttitle: string;`);
	output.push(`\tdescription: string;`);
	output.push(`\tog_title: string;`);
	output.push(`\tog_description: string;`);
	output.push(`\tog_image: string;`);
	output.push(`\ttwitter_title: string;`);
	output.push(`\ttwitter_description: string;`);
	output.push(`\ttwitter_image: string;`);
	output.push('}');
	output.push(``);

	// Optimizely (plugin) field
	output.push(`export interface OptimizelyField {`);
	output.push(`\tsegments: number[];`);
	output.push('}');
	output.push(``);

	// Component selector (plugin) field
	output.push(`export interface ComponentSelectorField {`);
	output.push(`\tversion: "draft" | "published";`);
	output.push(`\ttype: string;`);
	output.push(`\treference: string;`);
	output.push(`\tname: string;`);
	output.push(`\tselected: string;`);
	output.push('}');
	output.push(``);

	// Image Focus (plugin) field
	output.push(`export interface ImageFocusField {`);
	output.push(`\tsrc: string;`);
	output.push(`\tx: string;`);
	output.push(`\ty: string;`);
	output.push('}');
	output.push(``);

	// generic type of props used for storyblok components
	output.push(
		`export interface StoryblokProps<T> extends ClassAttributes<T> {`
	);
	output.push(`\tcontent: T;`);
	output.push(`}`);
	output.push(``);

	// space components definition
	output.push(`export type StoryblokReactComponent =`);
	output.push(`\t| FunctionComponent<StoryblokProps<any>>`);
	output.push(`\t| ComponentClass<StoryblokProps<any>>;`);
	output.push(``);

	output.push(`export type StoryblokSpaceComponents = Partial<`);
	output.push(`\tRecord<StoryblokNames, StoryblokReactComponent>`);
	output.push(`> &`);
	output.push(`\tRecord<string, StoryblokReactComponent>;`);
	output.push(``);

	output.push(`export interface StoryblokDatasourceEntry {`);
	output.push(`\tname: string;`);
	output.push(`\tvalue: string;`);
	output.push(`\tid: number;`);
	output.push(`\tdimension_value: string;`);
	output.push(`}`);

	// last clearance space
	output.push(`\n`);

	// combine them together
	return output.join('\n');
};

const buildCustomElement = (key, element, output, imports) => {
	switch (element.field_type) {
		case 'advanced-image': {
			imports.AdvancedImageField = '~/storyblok/space';
			output.push(`${key}: AdvancedImageField;`);
			break;
		}

		case 'native-color-picker': {
			imports.NativeColorPickerField = '~/storyblok/space';
			output.push(`${key}: NativeColorPickerField;`);
			break;
		}

		case 'seo-metatags': {
			imports.SeoMetatagsField = '~/storyblok/space';
			output.push(`${key}: SeoMetatagsField;`);
			break;
		}

		case 'optimizely': {
			imports.OptimizelyField = '~/storyblok/space';
			output.push(`${key}: OptimizelyField;`);
			break;
		}

		case 'ef-sbe-component-selector': {
			imports.ComponentSelectorField = '~/storyblok/space';
			output.push(`${key}: ComponentSelectorField;`);
			break;
		}

		case 'ef-sbe-image-focus': {
			imports.ImageFocusField = '~/storyblok/space';
			output.push(`${key}: ImageFocusField;`);
			break;
		}

		default: {
			console.error(`Plugin: ${key}`, element);
			output.push(`${key}: any;`);
			break;
		}
	}
};

const buildInterfaceBody = (schema, imports) => {
	const output = [];
	// iterate over the schema
	Object.keys(schema).forEach((key) => {
		const element = schema[key];
		// const required = element.required === true ? '' : '?'
		// console.log(key, element)
		switch (element.type) {
			case 'textarea':
			case 'markdown':
			case 'text':
			case 'image':
				output.push(`${key}: string;`);
				break;

			case 'number':
				output.push(`${key}: number;`);
				break;

			case 'multilink':
				imports.MultilinkField = '~/storyblok/space';
				output.push(`${key}: MultilinkField;`);
				break;

			case 'boolean':
				output.push(`${key}: boolean;`);
				break;

			case 'datetime':
				output.push(`${key}: Date;`);
				break;

			case 'bloks': {
				let type = 'StoryblokComponent<string>[]';
				if (element.restrict_components) {
					// if has whitelist and it's not empty
					if (
						element.component_whitelist &&
						element.component_whitelist.length !== 0
					) {
						const max = element.maximum;
						const list = element.component_whitelist;
						const mapped = list.map((name) => {
							const convertedName = convertName(name);

							imports[convertedName] = `~/storyblok/components/${getFileName(
								name
							)}/definition`;

							return convertedName;
						});
						// max === 0 ? convertName(name) : `${convertName(name)}[]`
						type = mapped.join(' | ');
						// list.length > 1 &&
						// if (max !== 0)
						type = list.length > 1 ? `(${type})[]` : `${type}[]`;
					}
				}

				output.push(`${key}: ${type};`);
				break;
			}

			case 'option': {
				let type = 'string';
				// if not empty the self options
				if (element.options && element.options.length !== 0) {
					type = element.options.map((pair) => `'${pair.value}'`).join(' | ');
					// FIXME
					if (!element.required) type += ` | ''`;
				}
				// TODO download datasource
				// if (element.source === 'internal') {
				// 	try {
				// 		// TODO should cache?
				// 		const { datasource_slug: datasource } = element;
				// 		// eslint-disable-next-line no-await-in-loop
				// 		const ds = await Storyblok.get('cdn/datasource_entries', {
				// 			datasource
				// 		});
				// 		const dsOptions = ds.data.datasource_entries.reduce(
				// 			(prev, option) =>
				// 				`${prev.value ? `'${prev.value}'` : prev} | '${option.value}'`
				// 		);
				// 		type = dsOptions;
				// 	} catch (error) {
				// 		console.error(error);
				// 	}
				// }

				output.push(`${key}: ${type};`);
				break;
			}

			case 'custom': {
				buildCustomElement(key, element, output, imports);
				break;
			}

			case 'tab': {
				break;
			}

			default:
				console.error(`Unknown: ${key}`, element);
				output.push(`${key}: any;`);
				break;
		}
	});
	// if has some body insert ending new line
	if (output.length !== 0) return `\n\t${output.join('\n\t')}\n`;

	// otherwise just return an empty string
	return '';
};

const buildInterface = (component, imports) => {
	const name = convertName(component.name);
	const output = [
		`export interface ${name} extends StoryblokComponent<'${component.name}'> {`
	];
	output.push(buildInterfaceBody(component.schema, imports));
	output.push('}');

	return output.join('');
};

const exportComponentGroups = async (component_groups) => {
	await component_groups.forEach((component_group) => {
		delete component_group.id;

		const name = getFileName(component_group.name);

		const path = `${__dirname}/storyblok/component_groups/${name}/component_group.js`;

		const content = prettier.format(
			`module.exports = ${JSON.stringify(component_group)}`,
			{
				parser: 'babel',
				...prettierOptions
			}
		);

		fse.writeFileSync(path, content);
	});
};

const exportDatasources = async (datasources) => {
	await datasources.forEach(async (datasource) => {
		delete datasource.id;
		delete datasource.dimensions;

		const path = `./${config.datasourcesDirectory}/${datasource.slug}/datasource.datasource.js`;

		const { datasource_entries } = await sbmig.getDatasourceEntries(
			datasource.name
		);

		datasource_entries.forEach((entry) => {
			delete entry.id;
		});

		datasource.datasource_entries = datasource_entries;

		const output = prettier.format(
			`module.exports = ${JSON.stringify(datasource)}`,
			{ parser: 'babel', ...prettierOptions }
		);

		fse.writeFileSync(path, output);
	});
};

const getComponentGroupName = (uid, groups) => {
	const component_group = groups
		.filter((component_group) => component_group.uuid === uid)
		.pop();

	return component_group ? component_group.name : null;
};

const exportComponents = (components, component_groups) => {
	let fileContent = [];

	fileContent.push(
		`import { FunctionComponent, ComponentClass, ClassAttributes } from 'react';`
	);
	fileContent.push(`import { StoryblokComponent } from 'storyblok-js-client';`);
	fileContent.push(``);

	const sharedImports = {};
	// joint names and type
	const names = ['export type StoryblokNames ='];
	const types = ['export type StoryblokComponents ='];

	components.forEach((component) => {
		delete component.id;
		delete component.created_at;
		delete component.updated_at;

		const fileName = getFileName(component.name);
		const path = `${__dirname}/storyblok/components/${fileName}`;

		const defOutput = [];
		const imports = [];

		const iface = buildInterface(component, imports);

		defOutput.push(
			`import { StoryblokComponent } from 'storyblok-js-client';\n\n`
		);

		defOutput.push(
			Object.keys(imports)
				.sort()
				.map((key) => {
					return `import { ${key} } from '${imports[key]}';`;
				})
				.join('\n')
				.concat('\n\n')
		);

		defOutput.push(iface);

		// Get component group name
		const component_group = component_groups
			.filter(
				(component_group) =>
					component_group.uuid === component.component_group_uuid
			)
			.pop();

		component.component_group_name = getComponentGroupName(
			component.component_group_uuid,
			component_groups
		);

		// Resolve whitelist groups
		Object.keys(component.schema).forEach((key) => {
			if (
				component.schema[key].component_group_whitelist &&
				component.schema[key].component_group_whitelist.length !== 0
			) {
				component.schema[
					key
				].component_group_whitelist_names = component.schema[
					key
				].component_group_whitelist.map((component_group_id) =>
					getComponentGroupName(component_group_id, component_groups)
				);
			}
		});

		const schemaOutput = prettier.format(
			`module.exports = ${JSON.stringify(component)}`,
			{ parser: 'babel', ...prettierOptions }
		);

		fse.writeFileSync(`${path}/schema.${config.schemaFileExt}`, schemaOutput);

		const defintionOutput = prettier.format(defOutput.join(''), {
			parser: 'typescript',
			...prettierOptions
		});

		fse.writeFileSync(`${path}/definition.d.ts`, defintionOutput);

		const convertedName = convertName(component.name);

		sharedImports[convertedName] = `~/storyblok/components/${getFileName(
			component.name
		)}/definition`;

		// push component to group list
		names.push(`\t| '${component.name}'`);
		types.push(`\t| ${convertedName}`);
	});

	fileContent.push(
		Object.keys(sharedImports)
			.sort()
			.map((key) => {
				return `import { ${key} } from '${sharedImports[key]}';`;
			})
			.join('\n')
			.concat('\n\n')
	);

	fileContent.push(base());
	// push a line for the joint
	names.push(';\n\n');
	types.push(';\n\n');
	// Add the joint type
	fileContent.push(types.join('\n'));
	fileContent.push(names.join('\n'));

	fileContent = prettier.format(fileContent.join('\n'), {
		parser: 'typescript',
		...prettierOptions
	});
	// write out definition file
	fse.writeFileSync('./storyblok/space.d.ts', fileContent);
};

const exportPresets = (presets, components) => {
	presets.forEach((preset) => {
		delete preset.id;
		delete preset.space_id;
		delete preset.created_at;
		delete preset.updated_at;

		const presetComponent = components
			.filter((component) => component.id === preset.component_id)
			.pop();

		if (presetComponent) {
			preset.component_name = presetComponent.name;
		}

		const path = `./storyblok/presets/${getFileName(
			preset.name
		)}/preset.preset.js`;

		const output = prettier.format(
			`module.exports = ${JSON.stringify(preset)}`,
			{ parser: 'babel', ...prettierOptions }
		);

		fse.writeFileSync(path, output);
	});
};

(async () => {
	const { component_groups } = await sbmig.getAllComponentsGroups();
	const { components } = await sbmig.getAllComponents();
	const { presets } = await sbmig.getAllPresets();
	const { datasources } = await sbmig.getAllDatasources();

	await exportDatasources(datasources);
	await exportPresets(presets, components);
	await exportComponentGroups(component_groups);
	await exportComponents(components, component_groups);
})();
