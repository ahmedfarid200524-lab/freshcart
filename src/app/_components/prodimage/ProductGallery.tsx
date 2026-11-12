"use client"
import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";

type ProductGalleryProps = {
  images: string[];
  alt?: string;
};

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={direction === "left" ? "m15 6-6 6 6 6" : "m9 6 6 6-6 6"} />
    </svg>
  );
}

export default function ProductGallery({ images, alt = "Product image" }: ProductGalleryProps) {
  const [index, setIndex] = useState(0);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const startX = useRef<number | null>(null);

  const count = images.length;
  const goTo = (i: number) => setIndex((i + count) % count); // wraps around
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  // keep the active thumbnail visible in the thumbnail row
  useEffect(() => {
    thumbRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [index]);

  // swipe support for touch / mouse drag
  const onPointerDown = (e: PointerEvent) => {
    startX.current = e.clientX;
  };
  const onPointerUp = (e: PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  if (count === 0) {
    return (
      <div className="flex aspect-square w-full items-center justify-center rounded-xl bg-gray-100 text-sm text-gray-400">
        No images available
      </div>
    );
  }

  return (
    <div
      className="w-full select-none outline-none"
      tabIndex={0}
      onKeyDown={onKeyDown}
      aria-roledescription="carousel"
      aria-label="Product images"
    >
      {/* Main image slider */}
      <div
        className="group relative touch-pan-y overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (startX.current = null)}
      >
        <div
          className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={src + i} className="aspect-square w-full shrink-0">
              <img
                src={src}
                alt={`${alt} ${i + 1} of ${count}`}
                draggable={false}
                loading={i === 0 ? "eager" : "lazy"}
                className="h-full w-full object-contain p-4"
              />
            </div>
          ))}
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-md transition hover:bg-white hover:text-emerald-600 md:opacity-0 md:group-hover:opacity-100"
            >
              <Chevron direction="left" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-md transition hover:bg-white hover:text-emerald-600 md:opacity-0 md:group-hover:opacity-100"
            >
              <Chevron direction="right" />
            </button>

            <span className="absolute bottom-3 right-3 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white">
              {index + 1} / {count}
            </span>
          </>
        )}
      </div>

      {/* Thumbnails below the main image */}
      {count > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-hidden p-1 justify-center items-center">
          {images.map((src, i) => (
            <button
              key={src + i}
              type="button"
              ref={(el) => {
                thumbRefs.current[i] = el;
              }}
              onClick={() => goTo(i)}
              aria-label={`Show image ${i + 1}`}
              aria-current={i === index}
              className={`h-20 w-20 shrink-0 overflow-hidden rounded-lg border bg-white transition ${
                i === index
                  ? "border-emerald-500 ring-2 ring-emerald-500"
                  : "border-gray-200 opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={src}
                alt=""
                draggable={false}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}