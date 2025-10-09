// components/gallery/LazyMedia.tsx
"use client";

import React from "react";
import LazyImage from "./LazyImage";
import LazyVideo from "./LazyVideo";

export type Media = {
  type?: "image" | "video";
  src: string;
  alt?: string;
  poster?: string; // video poster
  placeholderSrc?: string; // optional small LQIP you provide
  blurDataURL?: string; // optional: next/image's blurDataURL
  // any other custom metadata
};

export default function LazyLoad({
  item,
  index,
  imgQuality = 85,
  aspect = "16/9",
  onOpen,
}: {
  item: Media;
  index: number;
  imgQuality?: number; // passed to Next/Image when mounted
  aspect?: string; // CSS aspect-ratio value like "16/9" or "4/3"
  onOpen?: () => void; // optional click handler
}) {
  const type = item.type ?? "image";
  if (type === "video") {
    return (
      <LazyVideo item={item} index={index} aspect={aspect} onOpen={onOpen} />
    );
  }
  return (
    <LazyImage
      item={item}
      index={index}
      quality={imgQuality}
      aspect={aspect}
      onOpen={onOpen}
    />
  );
}
