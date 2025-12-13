import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { createPortal } from 'react-dom';

interface GalleryProps {
  images: string[];
  altBase?: string;
  className?: string;
}

const FALLBACK = ['https://images.unsplash.com/photo-1505691723518-36a5ac3b2d88?w=1200&q=80&auto=format&fit=crop'];

const Gallery: React.FC<GalleryProps> = ({ images, altBase = 'Gallery image', className = '' }) => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const deltaX = useRef<number>(0);
  const imgs = images && images.length > 0 ? images : FALLBACK;

  // Preload next/previous images for instant slide switch
  useEffect(() => {
    if (!imgs || imgs.length <= 1) return;
    const preload = (src: string) => {
      const img = new Image();
      img.decoding = 'async';
      // @ts-ignore
      img.fetchPriority = 'low';
      img.src = src;
    };
    const next = (index + 1) % imgs.length;
    const prev = (index - 1 + imgs.length) % imgs.length;
    preload(imgs[next]);
    preload(imgs[prev]);
  }, [index, imgs]);

  
  const go = (dir: number) => {
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return imgs.length - 1;
      if (next >= imgs.length) return 0;
      return next;
    });
  };

  const goModal = (dir: number) => {
    setModalIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return imgs.length - 1;
      if (next >= imgs.length) return 0;
      return next;
    });
  };

  const openModal = (idx: number) => {
    setModalIndex(idx);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (isModalOpen) {
        if (e.key === 'ArrowLeft') goModal(-1);
        if (e.key === 'ArrowRight') goModal(1);
        if (e.key === 'Escape') closeModal();
      } else {
        if (e.key === 'ArrowLeft') go(-1);
        if (e.key === 'ArrowRight') go(1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isModalOpen]);

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

  const modalStartX = useRef<number | null>(null);
  const modalDeltaX = useRef<number>(0);

  const onModalPointerDown = (e: React.PointerEvent) => {
    modalStartX.current = e.clientX;
    modalDeltaX.current = 0;
  };

  const onModalPointerMove = (e: React.PointerEvent) => {
    if (modalStartX.current !== null) {
      modalDeltaX.current = e.clientX - modalStartX.current;
    }
  };

  const onModalPointerUp = () => {
    if (Math.abs(modalDeltaX.current) > 50) {
      if (modalDeltaX.current > 0) goModal(-1);
      else goModal(1);
    }
    modalStartX.current = null;
    modalDeltaX.current = 0;
  };

  return (
    <>
      <div className={`w-full ${className}`} role="region" aria-roledescription="carousel" aria-label={`${altBase} gallery`}>
        <div
          className="relative overflow-hidden rounded-2xl group select-none shadow-sm cursor-pointer"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => openModal(index)}
        >
          <div className="relative w-full h-64 md:h-80">
            {imgs.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${altBase} ${i + 1}`}
                loading={i === index ? 'eager' : 'lazy'}
                decoding="async"
                // @ts-ignore React 18 supports fetchPriority
                fetchPriority={i === index ? 'high' : 'low'}
                sizes="(min-width: 768px) 768px, 100vw"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = FALLBACK[0]; }}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 will-change-[opacity] ${i === index ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </div>

          {/* Controls */}
          <button
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); go(-1); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur border border-white/30 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft />
          </button>
          <button
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); go(1); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur border border-white/30 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight />
          </button>

          {/* Dots (mobile) */}
          <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-1 md:hidden">
            {imgs.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setIndex(i); }}
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
                onClick={() => { setIndex(i); openModal(i); }}
                className={`relative w-20 h-16 rounded-md overflow-hidden border ring-1 ${i === index ? 'border-primary ring-primary' : 'border-transparent ring-transparent'} hover:scale-105 transition-transform`}
                aria-label={`Select slide ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`${altBase} thumbnail ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = FALLBACK[0]; }}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fadeIn"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery modal"
        >
          <div 
            className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
            onPointerDown={onModalPointerDown}
            onPointerMove={onModalPointerMove}
            onPointerUp={onModalPointerUp}
            onPointerLeave={onModalPointerUp}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 shadow-xl transition-all hover:scale-110"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 z-10 px-4 py-2 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 shadow-xl font-medium">
              {modalIndex + 1} / {imgs.length}
            </div>

            {/* Main Image */}
            <img
              src={imgs[modalIndex]}
              alt={`${altBase} ${modalIndex + 1}`}
              className="max-w-full max-h-full object-contain select-none"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = FALLBACK[0]; }}
            />

            {/* Navigation Buttons */}
            {imgs.length > 1 && (
              <>
                <button
                  onClick={() => goModal(-1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 shadow-xl transition-all hover:scale-110"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={() => goModal(1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 shadow-xl transition-all hover:scale-110"
                  aria-label="Next image"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Gallery;
