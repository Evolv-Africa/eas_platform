import { HowWeWork, OurPeople, TeamPageHero } from "@/components/team";
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
