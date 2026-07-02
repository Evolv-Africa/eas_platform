import { Icon } from "@/components/core/icon/Icon";
import type { Person } from "@/types";
import { motion } from "motion/react";
import PeopleImage from "./PeopleImage";

interface PeopleCardProps {
  person: Person;
  isActive: boolean;
  onSelect: (id: string) => void;
}

const PeopleCard = ({ person, isActive, onSelect }: PeopleCardProps) => {
  return (
    <motion.article
      onMouseEnter={() => onSelect(person.id)}
      className="group scroll-mt-24 border-b border-gray-900 py-6 font-poppins last:border-b-0 md:scroll-mt-0"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
        <div className="w-full md:hidden">
          <PeopleImage activePerson={person} />
        </div>

        <div className="w-full min-w-0 shrink-0 space-y-[3px] md:w-[25%] md:space-y-[11px]">
          <h3
            className={`font-neue-machina text-xl font-bold transition-colors ${
              isActive
                ? "text-[#0A3D91]"
                : "text-gray-900 group-hover:text-[#0A3D91]"
            }`}
          >
            {person.name}
          </h3>
          <p className="text-xs text-sem-text-secondary">{person.role}</p>
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-center">
          <p className="mb-1 text-[10px] text-gray-700">{person.qa.question}</p>
          <p className="whitespace-normal break-words text-sm leading-[20px] text-gray-900">
            {person.qa.answer}
          </p>

          <div className="mt-4 flex flex-col flex-wrap gap-2 text-xs text-gray-600 lg:flex-row lg:items-center lg:gap-5">
            <div className="flex items-center">
              <Icon
                name="AppleMusic"
                className="mr-1 h-5 w-5 shrink-0 text-[#141B34]"
              />
              <span className="text-gray-900">Music Mood</span>
            </div>
            <div className="flex min-w-0 flex-wrap items-center gap-1 text-xs leading-[14px] text-gray-900">
              <span className="mr-1 font-semibold">{person.musicMood.song}</span>
              <span>-</span>
              <span className="italic break-words">
                {person.musicMood.artist}
              </span>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center gap-3 pt-1 md:w-auto md:justify-start md:pt-0">
          {person.socials.linkedin && (
            <a href={person.socials.linkedin} className="inline-block">
              <Icon name="Linkedin" className="h-6 w-6 shrink-0 text-[#141B34]" />
            </a>
          )}
          {person.socials.behance && (
            <a href={person.socials.behance} className="inline-block">
              <Icon name="Behance" className="h-6 w-6 shrink-0 text-[#141B34]" />
            </a>
          )}
          {person.socials.twitter && (
            <a href={person.socials.twitter} className="inline-block">
              <Icon
                name="TwitterSquare"
                className="h-6 w-6 shrink-0 text-[#141B34]"
              />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default PeopleCard;
