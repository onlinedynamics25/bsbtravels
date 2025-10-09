import EventCard, { Event } from "../EventCard";

const netherlandsSummit2025: Event = {
  title: "Let's Go to Netherlands!",
  year: 2025,
  description:
    "Access Schengen | Explore Agribusiness Opportunities. Join global leaders in agribusiness for an immersive summit in the Netherlands.",
  ctaNext: { label: "Next Year Summit 2026", href: "/events/nl26" },
  schedule: [
    {
      day: "Day 1 – Tuesday, 23 September 2025 - Arrival & Reception",
      activities: [
        {
          title: "Arrival & Hotel Check-in",
          media: [
            {
              type: "image",
              src: "/images/events/nl25/day1/arrival/arrival.jpg",
              alt: "Delegates arrival",
            },
            {
              type: "image",
              src: "/images/events/nl25/day1/arrival/riva.jpg",
              alt: "Hotel Pamphlet",
            },
            {
              type: "image",
              src: "/images/events/nl25/day1/arrival/riva-hotel.jpg",
              alt: "Delegates arrival at hotel",
            },
          ],
        },
        {
          title: "Welcome Dinner at Hotel Riva, Delft",
          media: [
            {
              type: "image",
              src: "/images/events/nl25/day1/welcome-dinner/dinner1.jpg",
              alt: "Welcome dinner",
            },
            {
              type: "image",
              src: "/images/events/nl25/day1/welcome-dinner/dinner2.jpg",
              alt: "Welcome dinner",
            },
          ],
        },
      ],
    },

    {
      day: "Day 2 – Wednesday, 24 September 2025 - Orientation & First Visits",
      activities: [
        {
          title: "Company Visit – Biota Nutri BV (09:00–12:00)",
          media: [
            {
              type: "image",
              src: "/images/events/nl25/day2/biota3.jpg",
              alt: "Biota Nutri visit",
            },
            {
              type: "image",
              src: "/images/events/nl25/day2/biota1.jpg",
              alt: "Biota Nutri visit",
            },
            {
              type: "image",
              src: "/images/events/nl25/day2/biota2.jpg",
              alt: "Biota Nutri visit",
            },
            {
              type: "video",
              src: "/images/events/nl25/day2/biota-video.mp4",
              alt: "Biota Nutri visit (video)",
            },
          ],
        },
      ],
    },

    {
      day: "Day 3 – Thursday, 25 September 2025 - Company Visits",
      activities: [
        {
          title: "Floral Holland (09:00–11:00)",
          media: [], // no media provided yet
        },
        {
          title:
            "Boerderij Het Lansingerland (12:30–15:00) – Focus: organic farming",
          media: [
            {
              type: "image",
              src: "/images/events/nl25/day3/farm-visit.jpg",
              alt: "Farm visit",
            },
            {
              type: "image",
              src: "/images/events/nl25/day3/farm3.jpg",
              alt: "Farm visit",
            },
            {
              type: "image",
              src: "/images/events/nl25/day3/farm-entrance.jpg",
              alt: "Farm visit",
            },
            {
              type: "image",
              src: "/images/events/nl25/day3/farm2.jpg",
              alt: "Farm visit",
            },
            {
              type: "image",
              src: "/images/events/nl25/day3/farm.jpg",
              alt: "Farm visit",
            },
          ],
        },
        {
          title: "Delegation Debrief (17:00–18:00)",
          media: [], // empty for now
        },
      ],
    },

    {
      day: "Day 4 – Friday, 26 September 2025 - Knowledge Exchange",
      activities: [
        {
          title: "Fresh for You – Amsterdam Food Center (09:30–11:30)",
          media: [], // empty for now
        },
        {
          title: "Boats at Spido Rotterdam (15:00–17:30)",
          media: [], // empty for now
        },
      ],
    },

    {
      day: "Day 5 – Saturday, 27 September 2025 - Departure",
      activities: [
        {
          title: "Transfers to Amsterdam Airport",
          media: [], // empty
        },
      ],
    },
  ],
};

export default function Netherlands25() {
  return <EventCard event={netherlandsSummit2025} />;
}
