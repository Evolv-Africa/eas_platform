import { TEAM_PEOPLE } from "@/constants/people";
import { FC, useState } from "react";
import PeopleCard from "./PeopleCard";
import PeopleImage from "./PeopleImage";

export interface OurPeopleProps {
  people?: typeof TEAM_PEOPLE;
  title?: string;
  subtitle?: string;
}

const OurPeople: FC<OurPeopleProps> = ({
  people = TEAM_PEOPLE,
  title = "The People You're Looking For",
  subtitle = "The people behind the ideas, the work, and the moments that bring this community to life.",
}) => {
  const [activePersonId, setActivePersonId] = useState<string>(people[0]?.id);

  const activePerson = people.find((p) => p.id === activePersonId) || people[0];

  return (
    <section className="py-20 px-5 font-sans">
      <div className="mx-auto w-full max-w-320">
        <div className="mb-12 w-full text-left md:mb-16 md:text-center">
          <h2 className="mb-4 font-neue-machina text-3xl font-extrabold leading-tight text-[#0D152E] sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="w-full text-base leading-7 text-gray-600 md:mx-auto md:leading-8">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:gap-16 md:flex-row">
          <div className="hidden w-full shrink-0 md:block md:w-[40%] lg:w-[35%]">
            <div className="sticky top-24">
              <PeopleImage activePerson={activePerson} />
            </div>
          </div>

          <div className="flex w-full flex-col md:w-[60%] lg:w-[65%]">
            {people.map((person) => (
              <PeopleCard
                key={person.id}
                person={person}
                isActive={person.id === activePersonId}
                onSelect={setActivePersonId}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPeople;
