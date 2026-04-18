import { ImageWithFallback } from './figma/ImageWithFallback';

interface Photo {
  src: string;
  alt: string;
  caption?: string;
}

interface PhotoBreakProps {
  photos: Photo[];
  variant?: 'full' | 'dual' | 'triple' | 'offset-left' | 'offset-right' | 'inline-left' | 'inline-right';
  caption?: string;
  className?: string;
}

export function PhotoBreak({ photos, variant = 'full', caption, className = '' }: PhotoBreakProps) {
  
  // Full-width single photo
  if (variant === 'full') {
    return (
      <div className={`my-16 lg:my-20 ${className}`}>
        <div className="relative rounded-[20px] overflow-hidden border border-[rgba(17,17,17,0.1)] shadow-soft bg-white">
          <ImageWithFallback 
            src={photos[0].src} 
            alt={photos[0].alt}
            className="w-full h-auto"
          />
        </div>
        {(caption || photos[0].caption) && (
          <p className="mt-4 text-center text-sm text-[#4b5563] italic">
            {caption || photos[0].caption}
          </p>
        )}
      </div>
    );
  }

  // Side-by-side dual photos
  if (variant === 'dual') {
    return (
      <div className={`my-16 lg:my-20 ${className}`}>
        <div className="grid md:grid-cols-2 gap-6">
          {photos.slice(0, 2).map((photo, index) => (
            <div key={index} className="relative rounded-[20px] overflow-hidden border border-[rgba(17,17,17,0.1)] shadow-soft bg-white">
              <ImageWithFallback 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-auto"
              />
              {photo.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-xs text-white">{photo.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        {caption && (
          <p className="mt-4 text-center text-sm text-[#4b5563] italic">
            {caption}
          </p>
        )}
      </div>
    );
  }

  // Three-photo strip
  if (variant === 'triple') {
    return (
      <div className={`my-16 lg:my-20 ${className}`}>
        <div className="grid md:grid-cols-3 gap-4">
          {photos.slice(0, 3).map((photo, index) => (
            <div key={index} className="relative rounded-[16px] overflow-hidden border border-[rgba(17,17,17,0.1)] shadow-soft bg-white">
              <ImageWithFallback 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-auto aspect-[4/3] object-cover"
              />
              {photo.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-xs text-white">{photo.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        {caption && (
          <p className="mt-4 text-center text-sm text-[#4b5563] italic">
            {caption}
          </p>
        )}
      </div>
    );
  }

  // Offset left - breaks the grid elegantly
  if (variant === 'offset-left') {
    return (
      <div className={`my-16 lg:my-20 -mx-6 lg:-mx-16 ${className}`}>
        <div className="relative rounded-[20px] overflow-hidden border border-[rgba(17,17,17,0.1)] shadow-soft bg-white max-w-[900px]">
          <ImageWithFallback 
            src={photos[0].src} 
            alt={photos[0].alt}
            className="w-full h-auto"
          />
        </div>
        {(caption || photos[0].caption) && (
          <p className="mt-4 ml-0 text-sm text-[#4b5563] italic">
            {caption || photos[0].caption}
          </p>
        )}
      </div>
    );
  }

  // Offset right - breaks the grid elegantly
  if (variant === 'offset-right') {
    return (
      <div className={`my-16 lg:my-20 -mx-6 lg:-mx-16 flex justify-end ${className}`}>
        <div className="w-full max-w-[900px]">
          <div className="relative rounded-[20px] overflow-hidden border border-[rgba(17,17,17,0.1)] shadow-soft bg-white">
            <ImageWithFallback 
              src={photos[0].src} 
              alt={photos[0].alt}
              className="w-full h-auto"
            />
          </div>
          {(caption || photos[0].caption) && (
            <p className="mt-4 text-right text-sm text-[#4b5563] italic">
              {caption || photos[0].caption}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Inline left - floats within content
  if (variant === 'inline-left') {
    return (
      <div className={`float-left mr-6 mb-6 w-full md:w-[45%] lg:w-[40%] ${className}`}>
        <div className="relative rounded-[16px] overflow-hidden border border-[rgba(17,17,17,0.1)] shadow-soft bg-white">
          <ImageWithFallback 
            src={photos[0].src} 
            alt={photos[0].alt}
            className="w-full h-auto"
          />
        </div>
        {(caption || photos[0].caption) && (
          <p className="mt-3 text-xs text-[#4b5563] italic">
            {caption || photos[0].caption}
          </p>
        )}
      </div>
    );
  }

  // Inline right - floats within content
  if (variant === 'inline-right') {
    return (
      <div className={`float-right ml-6 mb-6 w-full md:w-[45%] lg:w-[40%] ${className}`}>
        <div className="relative rounded-[16px] overflow-hidden border border-[rgba(17,17,17,0.1)] shadow-soft bg-white">
          <ImageWithFallback 
            src={photos[0].src} 
            alt={photos[0].alt}
            className="w-full h-auto"
          />
        </div>
        {(caption || photos[0].caption) && (
          <p className="mt-3 text-xs text-[#4b5563] italic">
            {caption || photos[0].caption}
          </p>
        )}
      </div>
    );
  }

  return null;
}
