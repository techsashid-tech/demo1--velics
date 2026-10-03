import { useState, type ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'onError'> {
  src: string;
  fallbackSrc?: string;
}

export function OptimizedImage({
  src,
  fallbackSrc,
  width = 1200,
  height = 896,
  sizes = '100vw',
  loading = 'lazy',
  decoding = 'async',
  ...props
}: OptimizedImageProps) {
  const [recovery, setRecovery] = useState<{ src: string; stage: 'original' | 'fallback' | 'failed' } | null>(null);
  const recoveryStage = recovery?.src === src ? recovery.stage : undefined;
  const useImageCdn = import.meta.env.PROD && !recoveryStage;
  const imageSrc = recoveryStage === 'fallback' || recoveryStage === 'failed' ? fallbackSrc || src : src;
  const sourceWidth = Number(width);
  const widths = [...new Set([320, 640, 960, sourceWidth].filter(candidate => candidate <= sourceWidth))];
  const optimizedUrl = (imageWidth: number) => `/.netlify/images?url=${encodeURIComponent(src)}&w=${imageWidth}&q=78`;

  return (
    <img
      {...props}
      src={useImageCdn ? optimizedUrl(Math.min(960, sourceWidth)) : imageSrc}
      srcSet={useImageCdn ? widths.map(imageWidth => `${optimizedUrl(imageWidth)} ${imageWidth}w`).join(', ') : undefined}
      sizes={useImageCdn ? sizes : undefined}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      onError={recoveryStage === 'failed' ? undefined : () => {
        const stage = useImageCdn ? 'original' : fallbackSrc && imageSrc !== fallbackSrc ? 'fallback' : 'failed';
        setRecovery({ src, stage });
      }}
    />
  );
}
