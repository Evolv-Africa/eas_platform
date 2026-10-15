import { HowWeWork, OurPeople, TeamPageHero } from "@/components/landing-pages/team";
import { TEAM_PEOPLE } from "@/constants/people";
import { getTeamMembers } from "@/services/sanity/queries";
import type { Person } from "@/types";
import { toPerson } from "@/utils/teamMembers";
import { FC, useEffect, useState } from "react";

const Team: FC = () => {
  const [people, setPeople] = useState<Person[]>(TEAM_PEOPLE);

  useEffect(() => {
    let isMounted = true;

    getTeamMembers()
      .then((members) => {
        if (!isMounted) return;
        const published = (members ?? []).filter((member) => member.name?.trim());
        if (published.length > 0) setPeople(published.map(toPerson));
      })
      .catch(() => {
        if (isMounted) setPeople(TEAM_PEOPLE);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <TeamPageHero />
      <HowWeWork />
      <OurPeople people={people} />
    </>
  );
};

export default Team;
