import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryProps {
  images: string[];
  altBase?: string;
  className?: string;
}

const FALLBACK = ['https://images.unsplash.com/photo-1505691723518-36a5ac3b2d88?w=1200&q=80&auto=format&fit=crop'];

const Gallery: React.FC<GalleryProps> = ({ images, altBase = 'Gallery image', className = '' }) => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const startX = useRef<number | null>(null);
  const deltaX = useRef<number>(0);
  const imgs = images && images.length > 0 ? images : FALLBACK;

  
  const go = (dir: number) => {
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return imgs.length - 1;
      if (next >= imgs.length) return 0;
      return next;
    });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (isHovered || imgs.length <= 1) return;
    const id = window.setInterval(() => go(1), 4500);
    return () => window.clearInterval(id);
  }, [isHovered, imgs.length]);

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    deltaX.current = 0;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (startX.current !== null) {
      deltaX.current = e.clientX - startX.current;
    }
  };

  const onPointerUp = () => {
    if (Math.abs(deltaX.current) > 50) {
      if (deltaX.current > 0) go(-1);
      else go(1);
    }
    startX.current = null;
    deltaX.current = 0;
  };

  return (
    <div className={`w-full ${className}`} role="region" aria-roledescription="carousel" aria-label={`${altBase} gallery`}>
      <div
        className="relative overflow-hidden rounded-2xl group select-none shadow-sm"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full h-64 md:h-80">
          {imgs.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${altBase} ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Controls */}
        <button
          aria-label="Previous"
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur border border-white/30 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft />
        </button>
        <button
          aria-label="Next"
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur border border-white/30 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight />
        </button>

        {/* Dots (mobile) */}
        <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-1 md:hidden">
          {imgs.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full ring-1 ring-white/50 ${i === index ? 'bg-white' : 'bg-white/60'}`}
              aria-label={`Go to slide ${i + 1}`}
            />)
          )}
        </div>
      </div>

      {/* Thumbnails (desktop) */}
      {imgs.length > 1 && (
        <div className="hidden md:flex gap-2 mt-3 overflow-x-auto">
          {imgs.map((src, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`relative w-20 h-16 rounded-md overflow-hidden border ring-1 ${i === index ? 'border-primary ring-primary' : 'border-transparent ring-transparent'} hover:scale-105 transition-transform`}
              aria-label={`Select slide ${i + 1}`}
            >
              <img src={src} alt={`${altBase} thumbnail ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
