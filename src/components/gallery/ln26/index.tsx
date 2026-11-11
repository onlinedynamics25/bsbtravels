import EventCard, { Event } from "../EventCard";

const londonBSBTravels: Event = {
  title: "Come To London 2026",
  year: 2026,
  description:
    "November 3–10, 2026 — A week of international business engagements at World Travel Market, cultural encounters in Nottingham, historic exploration in Cardiff, and meaningful connections across the UK.",
  schedule: [
    {
      day: "Day 1 – Nov. 3: Arrival & Heartwarming Reception at Slough",
      activities: [
        {
          title: "Arrival in London & Check-in at PremierLux Service Apartment, Ilford",
          media: [
            {
              src: "/images/events/ln26/day1/arrival-ilford.jpg",
              alt: "Delegates arrival and accommodation at PremierLux Service Apartment, Ilford",
            },
          ],
        },
        {
          title: "Heartwarming Visit to the Adekunle Family in Slough",
          media: [
            {
              src: "/images/events/ln26/day1/slough-visit1.jpg",
              alt: "Reunion with Muyiwa Adekunle (Bubblemaster) and family in Slough",
            },
            {
              src: "/images/events/ln26/day1/slough-visit2.jpg",
              alt: "Adekunle family reception in Slough",
            },
          ],
        },
      ],
    },
    {
      day: "Day 2 – Nov. 4: From Arrival to Business Engagements at ExCeL London",
      activities: [
        {
          title: "Departure from Ilford to ExCeL London",
          media: [
            {
              src: "/images/events/ln26/day2/depart-ilford.jpg",
              alt: "Delegates departing PremierLux Service Apartment for ExCeL London",
            },
          ],
        },
        {
          title: "World Travel Market (WTM) 2026 Networking & Business Mobility",
          media: [
            {
              src: "/images/events/ln26/day2/wtm-excel1.jpg",
              alt: "Business engagements and networking at ExCeL London",
            },
            {
              type: "video",
              src: "/images/events/ln26/day2/wtm-excel-video.mp4",
              alt: "BSB International delegation at World Travel Market 2026",
            },
          ],
        },
      ],
    },
    {
      day: "Day 3 – Nov. 5: WTM Final Day & London Family Escape",
      activities: [
        {
          title: "World Travel Market 2026 – Nigeria Pavilion Engagements",
          media: [
            {
              src: "/images/events/ln26/day3/nigeria-pavilion1.jpg",
              alt: "Engaging tourism stakeholders at the Nigeria Pavilion, WTM 2026",
            },
            {
              type: "video",
              src: "/images/events/ln26/day3/nigeria-pavilion-video.mp4",
              alt: "Strategic partnerships at World Travel Market final day",
            },
          ],
        },
        {
          title: "London Family Escape & Iconic Landmarks Tour",
          media: [
            {
              src: "/images/events/ln26/day3/london-escape1.jpg",
              alt: "Delegates exploring iconic London landmarks during the Family Escape",
            },
            {
              src: "/images/events/ln26/day3/london-escape2.jpg",
              alt: "London Family Escape cultural heritage tour",
            },
          ],
        },
        {
          title: "Evening Dinner Outing in Woolwich, London",
          media: [
            {
              src: "/images/events/ln26/day3/woolwich-dinner.jpg",
              alt: "Delegates enjoying dinner in Woolwich, London",
            },
          ],
        },
      ],
    },
    {
      day: "Day 4 – Nov. 6: Journey to Nottingham & YONN Cultural Welcome",
      activities: [
        {
          title: "Morning Stop at Shepherd’s Bush & Victoria Coach Station",
          media: [
            {
              src: "/images/events/ln26/day4/shepherds-bush.jpg",
              alt: "Breakfast and shopping stop at Shepherd’s Bush, London",
            },
          ],
        },
        {
          title: "Arrival at Broad Marsh, Nottingham & Welcome by YONN",
          media: [
            {
              src: "/images/events/ln26/day4/yonn-welcome.jpg",
              alt: "Warm reception by Asiwaju Alfred Savage, President of Yorubas of Nottinghamshire (YONN)",
            },
            {
              type: "video",
              src: "/images/events/ln26/day4/nottingham-arrival.mp4",
              alt: "BSB delegation arriving in Nottingham",
            },
          ],
        },
        {
          title: "Check-in at Mama’s Inn Boutique & Dinner at Ladoski Kitchen",
          media: [
            {
              src: "/images/events/ln26/day4/ladoski-dinner.jpg",
              alt: "Delegates dining at Ladoski Kitchen in Nottingham",
            },
          ],
        },
      ],
    },
    {
      day: "Day 5 – Nov. 7: Nottingham Cultural Immersion & Diaspora Engagement",
      activities: [
        {
          title: "Cultural & Community Engagement with Yorubas of Nottinghamshire (YONN)",
          media: [
            {
              src: "/images/events/ln26/day5/yonn-cultural1.jpg",
              alt: "Celebrating Yoruba heritage with the Nigerian community in Nottinghamshire",
            },
          ],
        },
      ],
    },
    {
      day: "Day 6 – Nov. 8: Conclusion in Nottingham & Journey to Cardiff, Wales",
      activities: [
        {
          title: "Wrap-up of Nottingham Cultural Engagements",
          media: [
            {
              src: "/images/events/ln26/day6/nottingham-wrapup.jpg",
              alt: "Closing moments with YONN in Nottingham",
            },
          ],
        },
        {
          title: "Arrival in Cardiff, Wales & Reunion with Ayodeji Eyitayo",
          media: [
            {
              src: "/images/events/ln26/day6/cardiff-arrival.jpg",
              alt: "Arrival in Cardiff, Wales and warm reception by Ayodeji Eyitayo",
            },
          ],
        },
      ],
    },
    {
      day: "Day 7 – Nov. 9: Cardiff Castle, Upside Down House & City Exploration",
      activities: [
        {
          title: "Historic Visit to Cardiff Castle",
          media: [
            {
              src: "/images/events/ln26/day7/cardiff-castle1.jpg",
              alt: "Exploring the historic architecture of Cardiff Castle",
            },
            {
              type: "video",
              src: "/images/events/ln26/day7/cardiff-castle-video.mp4",
              alt: "Tour inside Cardiff Castle",
            },
          ],
        },
        {
          title: "Cardiff Upside Down House Experience",
          media: [
            {
              src: "/images/events/ln26/day7/upside-down-house.jpg",
              alt: "Visit to the Cardiff Upside Down House attraction",
            },
          ],
        },
        {
          title: "Cardiff City Centre Tour & Cardiff Central Railway Station",
          media: [
            {
              src: "/images/events/ln26/day7/cardiff-centre.jpg",
              alt: "Exploring Cardiff City Centre and Cardiff Central Station",
            },
          ],
        },
      ],
    },
    {
      day: "Day 8 – Nov. 10: Heathrow to Gatwick Transit & Departure",
      activities: [
        {
          title: "Coach Transit from Heathrow Terminal 5 to Gatwick Airport",
          media: [
            {
              src: "/images/events/ln26/day8/gatwick-transit.jpg",
              alt: "National Express journey from Heathrow Terminal 5 to Gatwick Airport",
            },
          ],
        },
        {
          title: "Wrapping Up Come To London 2026 & Departure",
          media: [
            {
              src: "/images/events/ln26/day8/gatwick-departure.jpg",
              alt: "Come To London 2026 final departure at Gatwick Airport",
            },
          ],
        },
      ],
    },
  ],
};

export default function London26() {
  return <EventCard event={londonBSBTravels} />;
}
