import { HowWeWork, OurPeople, TeamPageHero } from "@/components/landing-pages/team";
import { FC } from "react";

const Team: FC = () => {
  return (
    <>
      <TeamPageHero />
      <HowWeWork />
      <OurPeople />
    </>
  );
};

export default Team;
