import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
const DUMMAY_MEET = [
  {
    id: 1,
    title: "Dummay Meetup",
    image:
      "https://images.unsplash.com/photo-1643886024303-64ec3b023b60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=60",
    address: "mumbai",
    description: "Dummay Meetup",
  },
  {
    id: 1,
    title: "Dummay Meetup",
    image:
      "https://images.unsplash.com/photo-1643886024303-64ec3b023b60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=60",
    address: "mumbai",
    description: "Dummay Meetup",
  },
];

export default function Home() {
  const [lodermeetup, setlodermeetup] = useState([]);
  useEffect(() => {}, []);
  return (
    <div>
      <MeetupList meetups={DUMMAY_MEET} />
    </div>
  );
}
