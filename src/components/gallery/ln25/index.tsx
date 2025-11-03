import EventCard, { Event } from "../EventCard";

const londonBSBTravels: Event = {
  title: "London BSB Travels",
  year: 2025,
  description:
    "The historic first BSB Travels event — a week of networking, business insights, and cultural exploration across London’s iconic sights and sounds.",
  schedule: [
    {
      day: "Day 1 – Nov. 3: Arrival & Reception",
      activities: [
        {
          title: "Arrival at Gatwick Airport",
          media: [
            {
              src: "/images/events/ln25/day1/arrival.jpg",
              alt: "Delegates arrival to Gatwick Airport",
            },
            {
              type: "video",
              src: "/images/events/ln25/day1/arrival-com.mp4",
              alt: "Delegates arrival to Gatwick Airport",
            },
          ],
        },
        {
          title: "Enroute London Barking",
          media: [
            {
              src: "/images/events/ln25/day1/enroute.jpg",
              alt: "Delegates enroute to London Barking",
            },
            {
              type: "video",
              src: "/images/events/ln25/day1/enroute2.mp4",
              alt: "Delegates enroute to London Barking",
            },
          ],
        },
      ],
    },
  ],
};

export default function London25() {
  return <EventCard event={londonBSBTravels} />;
}
