import { ImageLoaderProps } from 'next/image';
import { resizeWithFocusPoint, canUseWebp } from './utils';

export const SBLoader = ({ src, width, quality }: ImageLoaderProps) => {
  const resizedImage = resizeWithFocusPoint(
    src,
    { width, height: 0 },
    { x: 50, y: 50 },
    quality
  );

  return canUseWebp() && resizedImage.urlWebp !== ''
    ? resizedImage.urlWebp
    : resizedImage.url;
};