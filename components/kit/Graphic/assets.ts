import { Asset, AssetBoxes } from './types';

export function storyblokAsset(src: string): Asset | null {
	// is src a stroyblok asset
	const file =
		src.match(/(.*storyblok\.com.*)\/(f\/.+)/) ||
		/// FIXME: Review for a better aproach to check assets
		src.match(/(.*data:image\/png;base64*)/) ||
		src.match(/(.*\/blog*)/);
	// return null as it is not a storyblok url
	if (!file) return null;
	// get the bits of the source
	const [, host, resource] = file;
	// extract dimension
	const dimensionMatches = src.match(/\/(\d+)x(\d+)\//);
	// get the image natural dimensions (if no dimensions are set, means its a vector graphic)
	const [isSvg, width, height] = dimensionMatches
		? dimensionMatches.map((value) => parseInt(value, 10))
		: [true, 0, 0];

	// return the object
	return {
		src,
		host,
		resource,
		dimension: { width, height },
		svg: isSvg === true
	};
}

export function generateOptimizeAssets(
	src: string,
	box: AssetBoxes,
	widths: number[],
	format: string = 'webp'
): Asset[] {
	// matches from stroyblok
	const matches = src.match(/(.*storyblok\.com.*)\/(f\/.+)/);
	// throw error if not a storyblok URL
	if (!matches) throw new Error('not a storyblok asset url');
	// get the bits of the source
	const [, base, resource] = matches;
	// enable the image service
	const host = base.replace('a.storyblok.com', 'img2.storyblok.com');
	// the filters of the Storyblok service
	const filters: string[] = [];
	// extract the cropped dimension
	const { width, height } = box.dimension;
	// set the focal point of the image
	const { left, top, right, bottom } = box.focus;
	filters.push(
		`focal(${left.toFixed(0)}x${top.toFixed(0)}:${right.toFixed(
			0
		)}x${bottom.toFixed(0)})`
	);
	// optimize format
	filters.push(`format(${format})`);
	// generate this source
	const srcSet: Asset[] = [];
	// go through the widths needed
	widths.forEach((size) => {
		// scale the image
		const scale = size / width;
		const scaledWidth = Math.floor(width * scale);
		const scaledHeight = Math.floor(height * scale);
		// the param of the Storyblok service
		const param = `${scaledWidth}x${scaledHeight}`;
		// url
		const newSrc = [host, param, `filters:${filters.join(':')}`, resource].join(
			'/'
		);
		// push the source set
		srcSet.push({
			src: newSrc,
			host,
			resource,
			svg: false,
			dimension: { width: scaledWidth, height: scaledHeight }
		});
	});

	// return the srcSet generated
	return srcSet;
}

export function generateLQIPAsset(asset: Asset, size: number): Asset {
	// matches from stroyblok
	const matches = asset.src.match(/(.*storyblok\.com.*)\/(f\/.+)/);
	// throw error if not a storyblok URL
	if (!matches) throw new Error('not a storyblok asset url');
	// get the bits of the source
	const [, base, resource] = matches;
	// enable the image service
	const host = base.replace('a.storyblok.com', 'img2.storyblok.com');
	// the filters of the Storyblok service
	const filters: string[] = [];
	// optimize format
	filters.push('format(jpeg)');
	// quality of the LQIP
	filters.push('quality(10)');
	// scale the image
	const scale = size / asset.dimension.width;
	const scaledWidth = Math.floor(asset.dimension.width * scale);
	const scaledHeight = Math.floor(asset.dimension.height * scale);
	// the param of the Storyblok service
	const param = `${scaledWidth}x${scaledHeight}`;
	// url
	const newSrc = [host, param, `filters:${filters.join(':')}`, resource].join(
		'/'
	);

	// return the srcSet generated
	return {
		src: newSrc,
		host,
		resource,
		svg: false,
		dimension: { width: scaledWidth, height: scaledHeight }
	};
}
