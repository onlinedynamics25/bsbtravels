import EventCard, { Event } from "../EventCard";

const londonBSBTravels: Event = {
    title: "London BSB Travels",
    year: 2025,
    description: "The historic first BSB Travels event — a week of networking, business insights, and cultural exploration across London’s iconic sights and sounds.",
    schedule: []
};

export default function London25() {
    return <EventCard event={londonBSBTravels} />;
}