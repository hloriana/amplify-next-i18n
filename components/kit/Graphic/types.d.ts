// FIXME this type should be somewhat global / inherited from the theme
export type TailwindScreens = '' | 'md' | 'lg' | 'xl';

export interface Box {
	top: number;
	right: number;
	bottom: number;
	left: number;
}

export interface Dimension {
	width: number;
	height: number;
}

export interface Point {
	x: number;
	y: number;
}

export interface AssetBoxes {
	ratio: string;
	dimension: Dimension;
	position: Box;
	focus: Box;
	inset: Box;
}

export interface Asset {
	src: string;
	host: string;
	resource: string;
	dimension: Dimension;
	svg: boolean;
}

export interface Sizes {
	[key: string]: number[];
}
