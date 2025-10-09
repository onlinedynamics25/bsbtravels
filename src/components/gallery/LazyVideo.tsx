"use client";

import { useEffect, useRef, useState } from "react";

import { PlayIcon } from "lucide-react";
import Image from "next/image";
import type { Media } from "./LazyLoad";
import Button from "../ui/Button";

export default function LazyVideo({
  item,
  index,
  aspect,
  onOpen,
}: {
  item: Media;
  index: number;
  aspect?: string;
  onOpen?: () => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [userStarted, setUserStarted] = useState(false); // optional: require click to start

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
      { root: null, rootMargin: "300px", threshold: 0.08 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // If you prefer click-to-load to avoid autoplay or data usage, use userStarted toggle
  const shouldRenderVideo = inView || userStarted;

  return (
    <div
      ref={ref}
      className="rounded-xl overflow-hidden shadow bg-black relative"
      style={{ aspectRatio: aspect, maxHeight: "18rem" }}
      aria-label={item.alt ?? `video-${index}`}
    >
      {!shouldRenderVideo ? (
        item.poster ? (
          <div className="w-full h-full relative">
            <Image
              src={item.poster}
              alt={item.alt ?? `poster-${index}`}
              fill
              className="object-cover"
            />
            <Button
              type="button"
              aria-label="Play video"
              onClick={() => {
                setUserStarted(true);
                onOpen?.();
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center">
                <PlayIcon className="w-6 h-6 text-white" />
              </div>
            </Button>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">
            <button
              type="button"
              onClick={() => {
                setUserStarted(true);
                onOpen?.();
              }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center">
                <PlayIcon className="w-6 h-6 text-white" />
              </div>
              {item.alt && <div className="text-sm">{item.alt}</div>}
            </button>
          </div>
        )
      ) : (
        <video
          src={item.src}
          poster={item.poster}
          controls
          preload="metadata"
          className="w-full h-full object-cover"
          playsInline
        />
      )}
    </div>
  );
}
