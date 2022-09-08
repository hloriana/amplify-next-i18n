declare module 'tailwindcss/resolveConfig';
declare module 'react-media-query-hoc';
declare module 'color-convert';

// webpack SVG loader
declare module 'svg-sprite-loader/runtime/sprite.build';
declare module '*.svg?sprite' {
	const element: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	export default element;
}

declare module 'react-livechat';
