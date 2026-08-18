import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";

export type ImageAsset = {
  name: string;
  width: number;
  height: number;
  widths: readonly number[];
  fallback?: string;
};

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "width" | "height"> & {
  asset: ImageAsset;
  priority?: boolean;
};

const srcSet = (asset: ImageAsset, format: "avif" | "webp") =>
  asset.widths.map((width) => `/optimized/${asset.name}-${width}.${format} ${width}w`).join(", ");

// Route components may remount, but decoded images remain in the browser cache. Remember
// successful assets so cached media is painted immediately instead of fading from blank again.
const decodedAssets = new Set<string>();

export function OptimizedImage({
  asset,
  priority = false,
  alt,
  className = "",
  sizes = "100vw",
  onLoad,
  onError,
  style,
  ...props
}: Props) {
  const [loaded, setLoaded] = useState(() => decodedAssets.has(asset.name));
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const fallback = asset.fallback ?? `/optimized/${asset.name}-${asset.widths.at(-1)}.webp`;

  useEffect(() => {
    if (imgRef.current?.complete && !loaded) {
      setLoaded(true);
    }
  }, [loaded, asset.name]);

  if (failed) {
    return (
      <span
        role={alt ? "img" : undefined}
        aria-label={alt || undefined}
        aria-hidden={alt ? undefined : true}
        className={`inline-block bg-gradient-to-br from-zinc-800 to-zinc-950 ${className}`}
        style={{ aspectRatio: `${asset.width}/${asset.height}`, ...style }}
      />
    );
  }

  return (
    <picture className="contents">
      <source type="image/avif" srcSet={srcSet(asset, "avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet(asset, "webp")} sizes={sizes} />
      <img
        {...props}
        src={fallback}
        srcSet={srcSet(asset, "webp")}
        sizes={sizes}
        ref={imgRef}
        width={asset.width}
        height={asset.height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "low"}
        onLoad={(event) => {
          decodedAssets.add(asset.name);
          setLoaded(true);
          onLoad?.(event);
        }}
        onError={(event) => {
          setFailed(true);
          onError?.(event);
        }}
        className={`${className} transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
        style={{
          backgroundImage: `url("/optimized/${asset.name}-blur.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          ...style,
        }}
      />
    </picture>
  );
}
