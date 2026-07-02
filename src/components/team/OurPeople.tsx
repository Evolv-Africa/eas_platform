import { Person } from "@/types";
import React, { useState } from "react";
import PeopleCard from "./PeopleCard";
import PeopleImage from "./PeopleImage";

// Mock Data (Not exported to prevent react-refresh errors)
const PEOPLE_DATA: Person[] = [
  {
    id: "1",
    name: "Oladotun Ajayi",
    role: "Production and Engineering",
    image:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=800&auto=format&fit=crop",
    qa: {
      question: "What is an ideology you live by?",
      answer:
        "This is my response to your questions This is my response to your questions This is my response to your questions",
    },
    musicMood: {
      song: "Oga Sorry",
      artist: "Omawumi Super Sand of Ghana",
    },
    socials: { linkedin: "#", behance: "#", twitter: "#" },
  },
  {
    id: "2",
    name: "Oladotun Ajayi",
    role: "Production and Engineering",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    qa: {
      question: "What is an ideology you live by?",
      answer:
        "This is my response to your questions This is my response to your questions This is my response to your questions",
    },
    musicMood: {
      song: "Oga Sorry",
      artist: "Omawumi Super Sand of Ghana",
    },
    socials: { linkedin: "#", behance: "#", twitter: "#" },
  },
  {
    id: "3",
    name: "Oladotun Ajayi",
    role: "Production and Engineering",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    qa: {
      question: "What is an ideology you live by?",
      answer:
        "This is my response to your questions This is my response to your questions This is my response to your questions",
    },
    musicMood: {
      song: "Oga Sorry",
      artist: "Omawumi Super Sand of Ghana",
    },
    socials: { linkedin: "#", behance: "#", twitter: "#" },
  },
  {
    id: "4",
    name: "Oladotun Ajayi",
    role: "Production and Engineering",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    qa: {
      question: "What is an ideology you live by?",
      answer:
        "This is my response to your questions This is my response to your questions This is my response to your questions",
    },
    musicMood: {
      song: "Oga Sorry",
      artist: "Omawumi Super Sand of Ghana",
    },
    socials: { linkedin: "#", behance: "#", twitter: "#" },
  },
  {
    id: "5",
    name: "Oladotun Ajayi",
    role: "Production and Engineering",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
    qa: {
      question: "What is an ideology you live by?",
      answer:
        "This is my response to your questions This is my response to your questions This is my response to your questions",
    },
    musicMood: {
      song: "Oga Sorry",
      artist: "Omawumi Super Sand of Ghana",
    },
    socials: { linkedin: "#", behance: "#", twitter: "#" },
  },
];

export interface OurPeopleProps {
  people?: Person[];
  title?: string;
  subtitle?: string;
}

const OurPeople: React.FC<OurPeopleProps> = ({
  people = PEOPLE_DATA,
  title = "The People You're Looking For",
  subtitle = "The people behind the ideas, the work, and the moments that bring this community to life.",
}) => {
  const [activePersonId, setActivePersonId] = useState<string>(people[0]?.id);

  const activePerson = people.find((p) => p.id === activePersonId) || people[0];

  return (
    <section className="py-20 px-5 font-sans">
      <div className="max-w-320 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0D152E] mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-lg mx-auto">{subtitle}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          {/* Left Column: Image with Pattern */}
          <div className="w-full md:w-[40%] lg:w-[35%] shrink-0">
            <PeopleImage activePerson={activePerson} />
          </div>

          {/* Right Column: People List */}
          <div className="w-full md:w-[60%] lg:w-[65%] flex flex-col">
            {people.map((person) => (
              <PeopleCard
                key={person.id}
                person={person}
                setActivePersonId={setActivePersonId}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPeople;
