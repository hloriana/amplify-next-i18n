import { AssetBoxes, Dimension, Point } from './types';

export const STORYBLOK_IMAGE_SIZE_LIMIT = 4000;
export const QUALITY_DEFAULT = 75;
export const STORYBLOK_IMAGE_DOMAIN = /(https:)?\/\/(s3.amazonaws.com\/)?a.storyblok.com/;
export const IS_WEBP_SUPPORTED = 'isWebpSupported';

export interface Size {
	width: number;
	height: number;
  }
  
  export interface FocusPoint {
	x: number;
	y: number;
  }

export function computeImageBoxes(
	ratio: string,
	dimension: Dimension,
	focus: Point
): AssetBoxes {
	// get the aspect ratio
	const [aspectWidth, aspectHeight] = ratio
		.split('/')
		.map(v => parseInt(v, 10));
	// extract image sizes
	const { height: imageHeight, width: imageWidth } = dimension;
	// crop dimension
	let cropWidth = Math.floor((imageHeight / aspectHeight) * aspectWidth);
	let cropHeight = Math.floor((imageWidth / aspectWidth) * aspectHeight);
	// crop reminder
	const reminderWidth = imageWidth - cropWidth;
	const reminderHeight = imageHeight - cropHeight;

	// assign the crop dimensions back based on the biggest box available
	cropWidth = cropWidth <= imageWidth ? cropWidth : imageWidth;
	cropHeight = cropHeight <= imageHeight ? cropHeight : imageHeight;
	const cropDimensions = { width: cropWidth, height: cropHeight };

	// equal space to center
	const SPACE_DIVISION = 2;
	// extract focus
	const { x: focusX, y: focusY } = focus;
	// position box
	let [left, top, right, bottom] = [0, 0, 0, 0];
	// focus on x
	const horizontalSpace = reminderWidth / SPACE_DIVISION;
	const focusShiftX = (imageWidth * focusX) / SPACE_DIVISION;
	const focusMovementX = Math.abs(focusShiftX);
	// center the image
	left = horizontalSpace;
	right = horizontalSpace;
	// if we don't have enough space to move horizontally
	if (focusMovementX >= horizontalSpace) {
		// if the direction is left then we move of horizontalSpace to 0
		if (focusShiftX < 0) {
			left = 0;
			right = imageWidth - cropWidth;
		}
		// else we shift to the other end - the box size
		else {
			left = imageWidth - cropWidth;
			right = 0;
		}
	}
	// we have enough space
	else {
		// movement from left is a negative shift
		left += focusShiftX;
		// movement from right is a positive shift
		right -= focusShiftX;
	}
	// focus on y
	const verticalSpace = reminderHeight / SPACE_DIVISION;
	const focusShiftY = (imageHeight * focusY) / SPACE_DIVISION;
	const focusMovementY = Math.abs(focusShiftY);
	// center the image
	top = verticalSpace;
	bottom = verticalSpace;
	// if we don't have enough space to move vertically
	if (focusMovementY >= verticalSpace) {
		// if the direction is up then we move top to 0
		if (focusShiftY > 0) {
			top = 0;
			bottom = imageHeight - cropHeight;
		}
		// else we are going down
		else {
			top = imageHeight - cropHeight;
			bottom = 0;
		}
	}
	// we have enough space to move
	else {
		// movement from top is a positive shift
		top -= focusShiftY;
		// movement from bttom is a negative shift
		bottom += focusShiftY;
	}

	// create the boxes
	const positionBox = { top, right, bottom, left };
	const insetBox = {
		top: top / cropHeight,
		right: right / cropWidth,
		bottom: bottom / cropHeight,
		left: left / cropWidth
	};
	const focusBox = {
		top,
		right: imageWidth - right,
		bottom: imageHeight - bottom,
		left
	};

	// return the boxes
	return {
		ratio,
		dimension: cropDimensions,
		position: positionBox,
		focus: focusBox,
		inset: insetBox
	};
}

export function canUseWebp() {
	if (typeof document !== 'object') {
	  // not in browser
	  return false;
	}
	let isWebpSupported = sessionStorage.getItem(IS_WEBP_SUPPORTED);
  
	if (isWebpSupported === null) {
	  isWebpSupported = (
		document
		  .createElement('canvas')
		  .toDataURL('image/webp')
		  .indexOf('data:image/webp') === 0
	  ).toString();
  
	  sessionStorage.setItem(IS_WEBP_SUPPORTED, isWebpSupported);
	}
  
	return isWebpSupported === 'true';
  }

  export const getImageSize = (
	imageUrl: string
  ): { width: number; height: number } | undefined => {
	const sizeRegex = /.*a\.storyblok\.com\/f\/.+\/(\d+)x(\d+)\//;
	const sizesFound = imageUrl.match(sizeRegex);
  
	if (sizesFound) {
	  return {
		width: parseInt(sizesFound[1]),
		height: parseInt(sizesFound[2]),
	  };
	}
	
	return undefined;
  };
  
  export const calculateMaxSize = (size: Size, sizeLimit: number) => {
	const newSize = size;
  
	if (newSize.width > sizeLimit) {
	  newSize.height = Math.round((sizeLimit * size.height) / size.width);
	  newSize.width = sizeLimit;
	}
  
	if (newSize.height > sizeLimit) {
	  newSize.width = Math.round((sizeLimit * size.width) / size.height);
	  newSize.height = sizeLimit;
	}
  
	return newSize;
  };

  export const resizeWithFocusPoint = (
	image: string,
	size: Size,
	focusPoint: FocusPoint,
	quality = QUALITY_DEFAULT
  ) => {
	if (image === undefined || image.length === 0)
	  return { url: '', urlWebp: '', size: { width: 0, height: 0 } };
  
	// if we are dealing with an svg we don't crop/resize the image
	if (image.endsWith('.svg')) {
	  return {
		url: image,
		urlWebp: '',
		size,
	  };
	}
  
	let imageOptions = `filters:quality(${quality})`;
	const originalSize = getImageSize(image);
  
	if (originalSize) {
	  if (size.width > originalSize.width || size.height > originalSize.height) {
		size = originalSize;
	  }
	  // as the service only allows images up to 4000x4000 we do some math to make sure the resize is correct
	  size = calculateMaxSize(size, STORYBLOK_IMAGE_SIZE_LIMIT);
  
	  // this bit is to deal with resize coordinates if image original size is bigger than STORYBLOK_IMAGE_SIZE_LIMIT
	  const maxOriginalSize = calculateMaxSize(
		originalSize,
		STORYBLOK_IMAGE_SIZE_LIMIT
	  );
  
	  const sizeOption = `${size.width}x${size.height}/`;
	  const focusInPx = {
		x: Math.round((maxOriginalSize.width * focusPoint.x) / 100),
		y: Math.round((maxOriginalSize.height * focusPoint.y) / 100),
	  };
  
	  // https://www.storyblok.com/docs/image-service
	  // filters:focal(<left>x<top>:<right>x<bottom>)
	  const focusPointOption = `:focal(${focusInPx.x}x${focusInPx.y}:${
		focusInPx.x + 1
	  }x${focusInPx.y + 1})`;
  
	  imageOptions = sizeOption + imageOptions + focusPointOption;
	}
  
	const formatOption = ':format(webp)';
	const imageService = `https://img2.storyblok.com/`;
	const path = image.replace(STORYBLOK_IMAGE_DOMAIN, '');

	return {
	  url: imageService + imageOptions + path,
	  urlWebp: imageService + imageOptions + formatOption + path,
	  size,
	};
  };


