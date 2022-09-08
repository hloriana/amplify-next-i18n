// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/no-onchange */

import React, {
	FunctionComponent,
	ChangeEvent,
	useState,
	useEffect
} from 'react';

import { cx } from 'linaria';
import SbEditable from 'storyblok-react';

import { Icon } from '../kit';
import { getSpacingComponentClasses } from '~/components/settings/SpacingComponent';
import Components from '~/components';
import ModuleWrap from '~/components/other/ModuleWrap';

import { SwitcherBodySubModule } from '~/storyblok/components/switcher-body-sub-module/definition';
import { SwitcherModule } from '~/storyblok/components/switcher-module/definition';

import { SwitcherBehaviorDropdownSubModule } from '~/storyblok/components/switcher-behavior-dropdown-sub-module/definition';
import { SwitcherBehaviorToggleSubModule } from '~/storyblok/components/switcher-behavior-toggle-sub-module/definition';

const SwitcherDropdown: FunctionComponent<{
	behavior: SwitcherBehaviorDropdownSubModule;
	body: SwitcherBodySubModule[];
	selected?: SwitcherBodySubModule;
	setSelected: (arg0: SwitcherBodySubModule) => void;
}> = (props) => {
	const { behavior, body, selected, setSelected } = props;

	const updateSelection = (e: ChangeEvent) => {
		const next = body
			.filter(
				(component) =>
					component._uid === (e.currentTarget as HTMLSelectElement).value
			)
			.pop();

		setSelected(next || body[0]);
	};

	return (
		<div
			className={cx(
				'pb-4',
				'border-b',
				`mb-8 md:mb-${behavior?.margin_bottom}`
			)}
		>
			<div className={cx('relative', 'flex')}>
				<select
					onChange={updateSelection}
					value={selected?._uid}
					className={cx(
						'shadow bg-transparent py-3 pl-4 pr-12 text-ui-label appearance-none w-full',
						'flex-grow',
						'min-w-35',
						'cursor-pointer'
					)}
				>
					{body &&
						body.map((component) => (
							<option
								key={component._uid}
								value={component._uid}
								className="text-ink-black"
							>
								{component?.name}
							</option>
						))}
				</select>
				<div className="absolute top-0 right-0 bottom-0 pointer-events-none left-0 flex align-items-center justify-content-end ">
					<Icon
						type="icons"
						icon="chevron-down"
						className="w-4 h-4 fill-current mx-4"
					/>
				</div>
			</div>
		</div>
	);
};

const SwitcherToggle: FunctionComponent<{
	behavior: SwitcherBehaviorToggleSubModule;
	body: SwitcherBodySubModule[];
	selected?: SwitcherBodySubModule;
	setSelected: (arg0: SwitcherBodySubModule) => void;
}> = (props) => {
	const { behavior, body, selected, setSelected } = props;

	const [next, setNext] = useState<SwitcherBodySubModule>();

	useEffect(() => {
		if (!selected) {
			return;
		}
		const currentIndex = body.indexOf(selected);

		const nextIndex = currentIndex + 1 === body.length ? 0 : currentIndex + 1;

		setNext(body[nextIndex]);
	}, [selected]);

	const updateSelection = () => {
		if (next) {
			setSelected(next);
		}
	};

	return (
		<div className="flex flex-col align-items-center">
			<button
				type="button"
				onClick={updateSelection}
				className={cx('mb-8', `md:mb-${behavior?.margin_bottom}`)}
			>
				{next?.heading &&
					next.heading.map((component) => Components(component))}
			</button>
		</div>
	);
};

const SwitcherBehavior: FunctionComponent<{
	behavior?:
		| SwitcherBehaviorDropdownSubModule
		| SwitcherBehaviorToggleSubModule;
	body: SwitcherBodySubModule[];
	selected?: SwitcherBodySubModule;
	setSelected: (selected: SwitcherBodySubModule) => void;
}> = (props) => {
	const { behavior, body, selected, setSelected } = props;

	switch (behavior?.component) {
		case 'switcher_behavior_dropdown_sub_module':
			return (
				<SwitcherDropdown
					behavior={behavior}
					body={body}
					selected={selected}
					setSelected={setSelected}
				/>
			);
		case 'switcher_behavior_toggle_sub_module':
			return (
				<SwitcherToggle
					behavior={behavior}
					body={body}
					selected={selected}
					setSelected={setSelected}
				/>
			);
		default:
			return <></>;
	}
};

const SwitcherBody: FunctionComponent<{
	content: SwitcherBodySubModule;
}> = (props) => {
	const { content } = props;

	return (
		<SbEditable content={content}>
			<div className="gud-content-grid -mx-6 md:-mx-8">
				{content.body.map((blok) => Components(blok))}
			</div>
		</SbEditable>
	);
};

const Switcher: FunctionComponent<{ content: SwitcherModule }> = (props) => {
	const { content } = props;

	const [selected, setSelected] = useState<SwitcherBodySubModule>();

	useEffect(() => {
		if (content.body && content.body.length !== 0) {
			setSelected(content.body[0]);
		}
	}, []);

	return (
		<SbEditable content={content}>
			<ModuleWrap settings={content.module_settings}>
				<div
					className={cx(
						'relative',
						getSpacingComponentClasses(content.spacing_settings)
					)}
				>
					<div className="md:absolute bottom-100 right-0">
						<SwitcherBehavior
							behavior={content.switcher_behavior[0]}
							body={content.body}
							selected={selected}
							setSelected={setSelected}
						/>
					</div>
					<div>{selected && SwitcherBody({ content: selected })}</div>
				</div>
			</ModuleWrap>
		</SbEditable>
	);
};

export { SwitcherDropdown, SwitcherToggle };

export default Switcher;
