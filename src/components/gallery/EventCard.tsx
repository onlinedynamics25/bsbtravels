// src/components/gallery/EventCard.tsx
"use client";

import React, { useEffect, useState } from "react";
import EventPlaceholder from "@/components/gallery/EventPlaceholder";
import Button from "@/components/ui/Button";
import MediaModal from "./MediaModal";
import LazyLoad from "./LazyLoad";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import type { Media as MediaType } from "./LazyLoad";

export type DaySchedule = {
  day: string;
  activities: {
    title: string;
    photos?: MediaType[];
    media?: MediaType[];
  }[];
};

export type Event = {
  title: string;
  year: number;
  description: string;
  ctaNext?: { label: string; href: string };
  schedule: DaySchedule[];
};

type FlatItem = {
  media: MediaType;
  day: string;
  activityTitle: string;
};

export default function EventCard({ event }: { event: Event }) {
  const getMedia = (activity: { photos?: MediaType[]; media?: MediaType[] }) =>
    activity.media ?? activity.photos ?? [];

  const noEventPhotos = event.schedule.every((day) =>
    day.activities.every((a) => getMedia(a).length === 0)
  );

  // Build flat list of all media with metadata (day + activity)
  const [flatList, setFlatList] = useState<FlatItem[]>([]);
  useEffect(() => {
    const arr: FlatItem[] = [];
    event.schedule.forEach((day) =>
      day.activities.forEach((act) => {
        const items = getMedia(act) ?? [];
        items.forEach((m) =>
          arr.push({ media: m, day: day.day, activityTitle: act.title })
        );
      })
    );
    setFlatList(arr);
  }, [event]);

  // modal state
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openAt = (idx: number) => {
    if (!flatList.length) return;
    const clamped = Math.max(0, Math.min(idx, flatList.length - 1));
    setCurrentIndex(clamped);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };
  const next = () =>
    setCurrentIndex((i) => (flatList.length ? (i + 1) % flatList.length : i));
  const prev = () =>
    setCurrentIndex((i) =>
      flatList.length ? (i - 1 + flatList.length) % flatList.length : i
    );

  return (
    <div className="max-w-full mx-auto bg-linen-base rounded-2xl shadow-lg p-6 mb-10">
      <div className=" w-full flex flex-col md:flex-row md:justify-between md:items-start gap-4">
        <div>
          <h2 className="text-3xl font-bold text-deepteal-100">
            {event.title} {event.year}
          </h2>
          <p className="mt-2 text-deepteal-100">{event.description}</p>
        </div>
      </div>

      <div className="mt-6">
        {noEventPhotos ? (
          <EventPlaceholder />
        ) : (
          // Use Accordion as a single container (not grouped by day).
          <Accordion
            type="single"
            collapsible={false}
            defaultValue="all"
            className="w-full"
          >
            <AccordionItem value="all">
              {/* Make the trigger visually hidden (or keep it visible if you want a heading) */}
              <AccordionTrigger
                className="sr-only font-baskervvilleSC font-bold text-golden-100 "
                hidden={false}
              >
                Gallery
              </AccordionTrigger>

              <AccordionContent className="">
                {/* Flat responsive grid: 2 cols small, 3 cols md, 4 cols lg */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {flatList.map((item, idx) => (
                    <figure key={item.media.src ?? idx} className="group">
                      <div className="relative rounded-lg overflow-hidden shadow bg-gray-50">
                        {/* LazyLoad should accept onOpen and call it when thumbnail clicked */}
                        <LazyLoad
                          item={item.media}
                          index={idx}
                          imgQuality={85}
                          aspect="16/9"
                          onOpen={() => openAt(idx)}
                        />

                        {/* overlay caption: bottom band visible on hover + always show small caption below */}
                        <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2 text-white text-sm opacity-100">
                          <div className="font-semibold text-sm truncate">
                            {item.activityTitle}
                          </div>
                          <div className="text-xs opacity-90">{item.day}</div>
                        </div>
                      </div>

                      {/* If you prefer the caption below instead of overlay, replace with a figcaption */}
                      {/* <figcaption className="mt-2 text-sm text-gray-700">
                        <div className="font-semibold text-gray-800 truncate">{item.activityTitle}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{item.day}</div>
                      </figcaption> */}
                    </figure>
                  ))}
                </div>
                <div className="flex gap-4 justify-end ">
                  {event.ctaNext?.label && (
                    <Button
                      href={event.ctaNext.href}
                      className="px-4 py-2 bg-golden-30 rounded-xl hover:bg-deepteal-20 text-deepteal-100"
                    >
                      {event.ctaNext.label}
                    </Button>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </div>

      {/* MediaModal overlay */}
      {isOpen && flatList.length > 0 && (
        <MediaModal
          open={isOpen}
          media={flatList.map((f) => f.media)}
          index={currentIndex}
          onClose={closeModal}
          onNext={next}
          onPrev={prev}
        />
      )}
    </div>
  );
}
