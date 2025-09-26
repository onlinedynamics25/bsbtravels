"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import EventPlaceholder from "@/components/gallery/EventPlaceholder";
import ActivityPlaceholder from "@/components/gallery/ActivityPlaceholder";

export type Photo = {
  src: string;
  alt: string;
};

export type DaySchedule = {
  day: string;
  activities: {
    title: string;
    photos: Photo[];
  }[];
};

export type Event = {
  title: string;
  year: number;
  description: string;
  ctaNext?: { label: string; href: string };
  schedule: DaySchedule[];
};

export default function EventCard({ event }: { event: Event }) {
  const [expanded, setExpanded] = useState(false);

  // detect if *all* activities have no photos
  const noEventPhotos = event.schedule.every((day) =>
    day.activities.every((a) => a.photos.length === 0)
  );

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-10">
      <h2 className="text-3xl font-bold">
        {event.title} {event.year}
      </h2>
      <p className="text-gray-600 mt-2">{event.description}</p>

      <div className="flex gap-4 mt-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          {expanded ? "Hide Event" : "View Event"}
        </button>
        {event.ctaNext && (
          <Link
            href={event.ctaNext.href}
            className="px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300"
          >
            {event.ctaNext.label}
          </Link>
        )}
      </div>

      {expanded && (
        <div className="mt-6">
          {noEventPhotos ? (
            <EventPlaceholder />
          ) : (
            <Accordion type="single" collapsible className="w-full">
              {event.schedule.map((day, i) => (
                <AccordionItem key={i} value={`day-${i}`}>
                  <AccordionTrigger className="text-2xl font-semibold text-blue-700">
                    {day.day}
                  </AccordionTrigger>
                  <AccordionContent>
                    {day.activities.map((activity, j) => (
                      <div key={j} className="mb-6">
                        <h4 className="text-xl font-medium text-gray-800 mb-2">
                          {activity.title}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                          {activity.photos.length > 0 ? (
                            activity.photos.map((photo, k) => (
                              <figure
                                key={k}
                                className="flex flex-col items-center"
                              >
                                <Image
                                  src={photo.src}
                                  alt={photo.alt}
                                  width={400}
                                  height={300}
                                  className="rounded-xl max-w-full max-h-72 object-cover shadow"
                                />
                              </figure>
                            ))
                          ) : (
                            <ActivityPlaceholder />
                          )}
                        </div>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      )}
    </div>
  );
}
