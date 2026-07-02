import { HowWeWork, TeamPageHero } from "@/components/team";
import OurPeople from "@/components/team/OurPeople";
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
