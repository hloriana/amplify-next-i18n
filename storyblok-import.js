const sbmig = require('sb-mig/dist/api');
const config = require('sb-mig/dist/config');
const migrate = require('sb-mig/dist/migrate');
const discover = require('sb-mig/dist/discover');
const api = require('sb-mig/dist/api/config');

const glob = require(`glob`);
const path = require(`path`);

function findPresets() {
	const rootDirectory = './';
	const directory = path.resolve(process.cwd(), rootDirectory);

	return (
		glob
			.sync(
				path.join(`${directory}/storyblok/presets`, `**`, `[^_]*.preset.js`)
			)
			// eslint-disable-next-line global-require, import/no-dynamic-require
			.map(file => require(path.resolve(directory, file)))
	);
}

const syncPresets = async specifiedPresets => {
	const localPresets = findPresets('.preset.js');

	const remotePresets = await sbmig.getAllPresets();
	const filteredLocalPresets = localPresets.filter(preset => {
		return specifiedPresets.some(
			specifiedPreset => preset.name === specifiedPreset.name
		);
	});

	const remoteComponents = await sbmig.getAllComponents();

	filteredLocalPresets.forEach(preset => {
		const presetToBeUpdated = remotePresets.presets.find(
			remotePreset => preset.name === remotePreset.name
		);

		const remoteComponent = remoteComponents.components
			.filter(component => component.name === preset.component_name)
			.pop();

		if (remoteComponent) {
			preset.component_id = remoteComponent.id;
		}

		if (presetToBeUpdated) {
			sbmig.updatePreset({ preset: { ...preset, id: presetToBeUpdated.id } });
		} else {
			sbmig.createPreset({ preset });
		}
	});
};

const getGroupUid = (name, groups) => {
	const componentGroup = groups.filter(group => group.name === name).pop();

	return componentGroup ? componentGroup.uuid : null;
};

const updateComponentWhitelists = async components => {
	const { component_groups } = await sbmig.getAllComponentsGroups();
	const remoteComponents = await sbmig.getAllComponents();

	let componentsToUpdate = components.filter(component => {
		let update = false;
		Object.keys(component.schema).forEach(key => {
			if (
				component.schema[key].component_group_whitelist_names &&
				component.schema[key].component_group_whitelist_names.length !== 0
			) {
				update = true;
			}
		});

		return update;
	});

	componentsToUpdate = await componentsToUpdate.map(component => {
		Object.keys(component.schema).forEach(key => {
			const names = component.schema[key].component_group_whitelist_names;

			if (names && names.length !== 0) {
				component.schema[key].component_group_whitelist = names.map(name =>
					getGroupUid(name, component_groups)
				);

				delete component.schema[key].component_group_whitelist_names;
			}
		});

		component.component_group_uuid = getGroupUid(
			component.component_group_name,
			component_groups
		);

		return component;
	});

	await componentsToUpdate.forEach(component => {
		const componentToUpdate = remoteComponents.components
			.filter(remoteComponent => remoteComponent.name === component.name)
			.pop();

		if (componentToUpdate) {
			sbmig.updateComponent({ id: componentToUpdate.id, ...component }, false);
		}
	});
};

function findComponents() {
	const rootDirectory = './';
	const directory = path.resolve(process.cwd(), rootDirectory);

	return (
		glob
			.sync(path.join(`${directory}/storyblok/components`, `**`, `[^_]*.sb.js`))
			// eslint-disable-next-line global-require, import/no-dynamic-require
			.map(file => require(path.resolve(directory, file)))
	);
}

(async () => {
	const components = discover
		.findComponentsWithExt(config.schemaFileExt)
		.map(component => component.name);

	await migrate.syncComponents(components, config.schemaFileExt, false);

	await updateComponentWhitelists(
		discover.findComponentsWithExt(config.schemaFileExt)
	);

	await syncPresets(findPresets());

	await sbmig.syncDatasources(
		discover.findDatasources('datasource.js').map(datasource => datasource.name)
	);
})();
