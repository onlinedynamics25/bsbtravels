// components/gallery/LazyImage.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Media } from "./LazyLoad";
import Button from "../ui/Button";

export default function LazyImage({
  item,
  index,
  quality = 85,
  aspect = "16/9",
  onOpen,
}: {
  item: Media;
  index: number;
  quality?: number;
  aspect?: string;
  onOpen?: () => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            obs.unobserve(e.target);
          }
        });
      },
      { root: null, rootMargin: "300px", threshold: 0.05 } // pre-load a bit earlier
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Reserve layout to avoid CLS
  return (
    <div
      ref={ref}
      className="rounded-xl overflow-hidden shadow bg-gray-50"
      style={{ aspectRatio: aspect, maxHeight: "18rem" }}
      aria-label={item.alt ?? `image-${index}`}
    >
      <Button
        type="button"
        onClick={onOpen}
        className="w-full h-full block text-left"
      >
        {!inView ? (
          // lightweight placeholder: use provided low-res placeholderSrc or poster or a simple bg
          item.placeholderSrc ? (
            // show a small placeholder image (fast)
            <img
              src={item.placeholderSrc}
              alt={item.alt ?? `placeholder-${index}`}
              className="w-full h-full object-cover"
              style={{ width: "100%", height: "100%" }}
              // don't use next/image here to avoid heavy overhead for tiny image
            />
          ) : item.blurDataURL ? (
            // If you provided a blurDataURL you can render a tiny blurred image using next/image (cheap)
            <Image
              src={item.src}
              alt={item.alt ?? `image-${index}`}
              fill
              style={{ objectFit: "cover" }}
              placeholder="blur"
              blurDataURL={item.blurDataURL}
              quality={10}
            />
          ) : (
            // fallback simple solid background with optional alt text
            <div className="w-full h-full flex items-center justify-center text-sm text-gray-400">
              {item.alt ?? "Image"}
            </div>
          )
        ) : (
          // mount the real next/image only once visible
          <Image
            src={item.src}
            alt={item.alt ?? `image-${index}`}
            width={1920}
            height={1080}
            priority={false}
            quality={quality}
            className="w-full h-full object-cover"
          />
        )}
      </Button>
    </div>
  );
}
