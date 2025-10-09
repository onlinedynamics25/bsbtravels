// src/components/gallery/MediaModal.tsx
"use client";

import React, { useEffect } from "react";
import Modal from "@/components/layout/Modal"; // your existing Modal
import { Media as MediaType } from "./LazyLoad";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  open: boolean;
  media: MediaType[]; // flat media array
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function MediaModal({
  open,
  media,
  index,
  onClose,
  onPrev,
  onNext,
}: Props) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onNext, onPrev]);

  if (!open || media.length === 0) return null;
  const m = media[index];

  return (
    <Modal open={open} onClose={onClose} title={m?.alt ?? ""}>
      <div className="w-full flex items-center justify-center">
        <div className="relative max-w-[95vw] max-h-[80vh]">
          <button
            aria-label="Previous"
            onClick={onPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white/80 px-3 py-2"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex items-center justify-center bg-black rounded-lg overflow-hidden">
            {m.type === "video" ? (
              <video
                src={m.src}
                controls
                autoPlay
                className="max-w-full max-h-[80vh] object-contain"
              />
            ) : (
              <img
                src={m.src}
                alt={m.alt ?? "media"}
                className="max-w-full max-h-[80vh] object-contain"
              />
            )}
          </div>

          <button
            aria-label="Next"
            onClick={onNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white/80 px-3 py-2"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm text-gray-800 bg-white/60 px-3 py-1 rounded">
            {index + 1} / {media.length}
          </div>
        </div>
      </div>
    </Modal>
  );
}
