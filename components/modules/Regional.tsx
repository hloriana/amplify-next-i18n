import React, {
	FunctionComponent,
	useContext,
	useState,
	useEffect,
	useRef,
	ChangeEvent
} from 'react';

import RegionContext from '~/contexts/RegionContext';

import { RegionalModule } from '~/storyblok/components/regional-module/definition';

import Component from '~/components';

import useDatasource from '~/hooks/useDatasource';

import { Icon } from '~/components/kit';

const RegionSelector: FunctionComponent<{}> = (props) => {
	const regionContext = useContext(RegionContext);

	const selectorRef = useRef<HTMLSelectElement>(null);

	const handleChange = (e: ChangeEvent) => {
		regionContext.updateRegion((e.currentTarget as HTMLSelectElement).value);
	};

	const regionDatasource = useDatasource('region');

	return (
		<div className="relative mb-4">
			<select
				ref={selectorRef}
				onChange={handleChange}
				onBlur={handleChange}
				value={regionContext.regionCode.toLowerCase()}
				className="shadow bg-burgundy py-3 pl-4 pr-12 text-ui-label appearance-none w-full"
			>
				<option value="xx" disabled>
					Select your country
				</option>
				{[...regionDatasource].reverse().map((option: any) => (
					<option value={option.name.toLowerCase()} key={option.id}>
						{option.dimension_value || option.value}
					</option>
				))}
			</select>
			<div className="absolute top-0 right-0 bottom-0 pointer-events-none left-0 flex align-items-center justify-content-end ">
				<Icon
					type="icons"
					icon="chevron-down"
					className="w-4 fill-current mx-4"
				/>
			</div>
		</div>
	);
};

const Regional: FunctionComponent<{ content: RegionalModule }> = (props) => {
	const { content } = props;

	const regionContext = useContext(RegionContext);

	const [currentContent, setCurrentContent] = useState(
		content?.default_content
	);

	useEffect(() => {
		const newContent = content.regional_content
			.filter(
				(regionalContent) => regionalContent.region === regionContext.regionCode
			)
			.pop()?.body;

		setCurrentContent(newContent || content.default_content);
	}, [regionContext.regionCode]);

	return <>{currentContent.map((blok) => Component(blok))}</>;
};

export default Regional;

export { RegionSelector };
