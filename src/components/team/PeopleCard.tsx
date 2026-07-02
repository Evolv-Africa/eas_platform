import { Icon } from "@/components/core/icon/Icon";
import { motion } from "motion/react";
import type { Person } from "@/types";

interface PeopleCardProps {
  person: Person;
  setActivePersonId: (id: string) => void;
}
const PeopleCard = ({ person, setActivePersonId }: PeopleCardProps) => {
  return (
    <motion.div
      key={person.id}
      onMouseEnter={() => setActivePersonId(person.id)}
      className="flex flex-col sm:flex-row items-start sm:items-center py-6 border-b border-gray-900 last:border-b-0 gap-4 sm:gap-6 group cursor-pointer font-poppins"
    >
      {/* Name and Role */}
      <div className="w-full sm:w-[25%] shrink-0 space-y-[3px] md:space-y-[11px]">
        <h3 className="text-xl font-neue-machina font-bold text-gray-900 group-hover:text-[#0A3D91] transition-colors">
          {person.name}
        </h3>
        <p className="text-sem-text-secondary text-xs">{person.role}</p>
      </div>

      {/* Q&A and Music Mood */}
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-gray-700 mb-1 text-[10px]">{person.qa.question}</p>
        <p className="text-sm text-gray-900 leading-[20px]">
          {person.qa.answer}
        </p>

        <div
          className="mt-4 flex flex-col lg:flex-row lg:items-center text-xs text-gray-600 gap-2 lg:gap-5
                  "
        >
          <div className="flex items-center">
            <Icon
              name="AppleMusic"
              className="w-5 h-5 mr-1 text-[#141B34] shrink-0"
            />
            <span className="text-gray-900">Music Mood</span>
          </div>
          <div className="flex items-center gap-1 text-gray-900 text-xs leading-[14px]">
            <span className="font-semibold mr-1">{person.musicMood.song}</span>
            <span>-</span>
            <span className="italic">{person.musicMood.artist}</span>
          </div>
        </div>
      </div>

      {/* Socials */}
      <div className="flex items-center gap-3 w-full sm:w-auto justify-end sm:justify-start pt-2 sm:pt-0">
        {person.socials.linkedin && (
          <a href={person.socials.linkedin} className="inline-block">
            <Icon name="Linkedin" className="w-6 h-6 text-[#141B34] shrink-0" />
          </a>
        )}
        {person.socials.behance && (
          <a href={person.socials.behance} className="inline-block">
            <Icon name="Behance" className="w-6 h-6 text-[#141B34] shrink-0" />
          </a>
        )}
        {person.socials.twitter && (
          <a href={person.socials.twitter} className="inline-block">
            <Icon
              name="TwitterSquare"
              className="w-6 h-6 text-[#141B34] shrink-0"
            />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default PeopleCard;
