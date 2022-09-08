import React, { FunctionComponent, useState, useEffect } from 'react';

import { cx, css } from 'linaria';
import SbEditable from 'storyblok-react';

import { StepModule } from '~/storyblok/components/step-module/definition';
import { StepperModule } from '~/storyblok/components/stepper-module/definition';
import Components from '~/components';

import ModuleWrap from '~/components/other/ModuleWrap';

const bodyGridDefault = 'gud-content-grid';

const bodyTransition = css`
	transition: opacity 0.3s linear;
`;

const stepTransition = css`
	transition: color 0.3s linear, background-color 0.3s linear;
`;

const gradientTransition = css`
	transition: opacity 0.3s linear;
`;

const Step: FunctionComponent<{
	step: StepModule;
	handleClick: Function;
	index: number;
	selected: boolean;
}> = props => {
	const { step, handleClick, index, selected } = props;

	return (
		<SbEditable content={step}>
			<button
				onClick={() => {
					handleClick(step);
				}}
				type="button"
				className={cx(
					'col-span-2 md:col-span-3',
					'relative ratio-1/1 rounded overflow-hidden',
					'mb-6',
					stepTransition,
					selected ? 'text-white' : '',
					'bg-white'
				)}
			>
				<div
					className={cx(
						'absolute top-0 left-0 w-full h-full',
						gradientTransition,
						selected ? 'opacity-100' : 'opacity-0'
					)}
					style={{
						background: 'linear-gradient(225deg, #FFA89A 0%, #F48580 100%)'
					}}
				/>
				<div
					className={cx(
						'absolute top-0 left-0 w-full h-full p-4 md:p-6 overflow-hidden flex flex-col justify-content-between'
					)}
				>
					<div className={cx('w-10 h-10')}>
						<div
							className={cx(
								'ratio-1/1 rounded-full relative',
								stepTransition,
								selected ? 'bg-white text-eraser' : 'bg-eraser text-white'
							)}
						>
							<div
								className={cx(
									'absolute top-0 left-0 w-full h-full flex align-items-center justify-content-center'
								)}
							>
								{index}
							</div>
						</div>
					</div>
					{step.title.map(title => Components(title))}
				</div>
			</button>
		</SbEditable>
	);
};

const Stepper: FunctionComponent<{ content: StepperModule }> = props => {
	const { content } = props;

	const [selected, setSelected] = useState('');

	const updateSelected = (step: StepModule) => {
		setSelected(step._uid);
	};

	useEffect(() => {
		if (selected.length === 0 && content.steps.length !== 0) {
			setSelected(content.steps[0]._uid);
		}
	});

	return (
		<SbEditable content={content}>
			<ModuleWrap settings={content.module_settings}>
				<div className={cx(bodyGridDefault)}>
					{content.steps.map((step: StepModule, index) => {
						const isSelected = step._uid === selected;

						return (
							<React.Fragment key={`step-${step._uid}`}>
								<Step
									step={step}
									handleClick={updateSelected}
									index={index + 1}
									selected={isSelected}
								/>
								<div
									className={cx(
										'col-start-1 col-end-5 md:col-end-8 row-start-3 relative',
										bodyTransition,
										isSelected ? 'opacity-1 z-10' : 'opacity-0'
									)}
								>
									{step.body.map(component => Components(component))}
								</div>
							</React.Fragment>
						);
					})}
				</div>
			</ModuleWrap>
		</SbEditable>
	);
};

export default Stepper;
