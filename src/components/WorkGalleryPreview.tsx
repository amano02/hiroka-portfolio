import Image from "next/image";

interface WorkGalleryPreviewProps {
  images: string[];
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
}

export function WorkGalleryPreview({
  images,
  className = "relative aspect-[16/10] overflow-hidden bg-black-base",
  imageClassName = "object-cover object-center",
  priority = false,
  sizes = "(max-width: 768px) 33vw, 300px",
}: WorkGalleryPreviewProps) {
  if (images.length === 0) {
    return <div className={`${className} bg-black-muted/40`} aria-hidden />;
  }

  if (images.length === 1) {
    return (
      <div className={className}>
        <Image
          src={images[0]}
          alt=""
          fill
          className={imageClassName}
          priority={priority}
          sizes={sizes}
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <div
        className="absolute inset-0 grid"
        style={{ gridTemplateColumns: `repeat(${images.length}, minmax(0, 1fr))` }}
      >
        {images.map((src, index) => (
          <div
            key={src}
            className="relative h-full border-r border-black-base last:border-r-0"
          >
            <Image
              src={src}
              alt=""
              fill
              className={imageClassName}
              priority={priority && index === 0}
              sizes={sizes}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
