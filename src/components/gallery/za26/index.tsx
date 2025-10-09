import EventCard, { Event } from "../EventCard";

const southAfrica2026: Event = {
    title: "BSB in ZA – South Africa",
    year: 2026,
    description: "From Cape Town’s coastline to Johannesburg’s bustling business hubs, join leaders for our first South African edition.",
    schedule: []
};

export default function SouthAfrica26() {
    return <EventCard event={southAfrica2026} />;
}