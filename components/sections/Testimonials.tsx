// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/no-onchange */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable sort-imports-es6-autofix/sort-imports-es6 */
import React, {
	FunctionComponent,
	DetailedHTMLProps,
	HTMLAttributes,
	useState,
	ChangeEvent,
	useRef,
	createContext
} from 'react';

import { cx } from 'linaria';
import SbEditable from 'storyblok-react';
import { uniq } from 'lodash';

import { stringify } from 'uuid';
import { Icon } from '../kit';
import { CardTestimonialsSection } from '~/storyblok/components/card-testimonials-section/definition';
import { StoryblokDatasourceEntry } from '~/storyblok/space';
import { getBackgroundElement } from '~/components/settings/BackgroundSettings';
import { getBodyGridClasses } from '~/components/settings/BodyGrid';
import { getColoringClasses } from '~/components/settings/Coloring';
import { getSpacingLayoutClasses } from '~/components/settings/SpacingLayout';
import Components from '~/components';
import useDatasource from '~/hooks/useDatasource';

// eslint-disable-next-line import/exports-last
export const TestimonialContext = createContext({
	filters: {
		program: '',
		campus: '',
		type: '',
		country: ''
	},
	addCountry: (name: string) => {}
});

interface Filters {
	program: string
	campus: string
	type: string
	country: string
}

const TestimonialSection: FunctionComponent<
	{
		content: CardTestimonialsSection;
	} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
> = (props) => {
	const { content, className, ...rest } = props;
	const bodyRef = useRef<HTMLDivElement>(null);
	const [filters, setFilter] = useState<Filters>({
		program: '',
		campus: '',
		type: '',
		country: ''
	});
	const [countries, setCountries] = useState<string[]>([]);

	const programDatasource = useDatasource('program').map(option => option.value);
	const campusDatasource = useDatasource('campus').filter(
		(campus) => campus.name !== 'all'
	).map(option => option.value);
	const typeDatasource = useDatasource('testimonial-type').map(option => option.value);
	// default type of grid
	const bodyGridDefault = 'gud-content-grid';

	const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setFilter({
			...filters,
			[event.target.name]: event.target.value
		});
	};

	const resetFilters = (event: React.SyntheticEvent) => {
		event.preventDefault();
		setFilter({
			program: '',
			campus: '',
			type: '',
			country: ''
		});
	};

	const addCountry = (name: string) => {
		const countriesList = uniq([...countries, name]).sort();
		setCountries(countriesList);
	};

	const renderFilterSelect = (
		placeholder: string,
		name: keyof Filters,
		options: string[]
	) => (
		<div className="col-span-4 md:col-span-3 flex flex-col flex-grow mb-4">
			<div className="relative">
				<select
					name={name}
					value={filters[name]}
					onChange={handleFilterChange}
					className="shadow bg-white py-3 pl-4 pr-12 text-ui-label appearance-none w-full"
				>
					<option value="">{placeholder}</option>
					{options.map((option) => (
						<option key={option} value={option}>
							{option}
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
		</div>
	);

	return (
		<TestimonialContext.Provider value={{ filters, addCountry }}>
			<SbEditable content={content}>
				<section
					className={cx(
						className,
						'overflow-hidden relative',
						getSpacingLayoutClasses(content.spacing_settings),
						getColoringClasses(content.coloring_settings)
					)}
					{...rest}
					data-section-id={content._uid}
				>
					<div className="absolute top-0 left-0 w-full h-full">
						{content.background_settings &&
							getBackgroundElement(content.background_settings)}
					</div>
					<div
						className={cx(
							'relative',
							getBodyGridClasses(content.body_settings) || bodyGridDefault
						)}
					>
						<div className="mb-4 col-start-10 col-end-13 text-right">
							<a href="#" onClick={resetFilters}>
								Reset filters
							</a>
						</div>
					</div>
					<div
						className={cx(
							'relative',
							'md:mb-10',
							getBodyGridClasses(content.body_settings) || bodyGridDefault
						)}
					>
						{renderFilterSelect('All campuses', 'campus', campusDatasource)}
						{renderFilterSelect('All programs', 'program', programDatasource)}
						{renderFilterSelect('All types', 'type', typeDatasource)}
						{renderFilterSelect('All nationalities', 'country', countries)}
					</div>
					<div
						ref={bodyRef}
						className={cx(
							'relative',
							getBodyGridClasses(content.body_settings) || bodyGridDefault
						)}
					>
						{content.body && content.body.map((blok) => Components(blok))}
					</div>
				</section>
			</SbEditable>
		</TestimonialContext.Provider>
	);
};

export default TestimonialSection;
