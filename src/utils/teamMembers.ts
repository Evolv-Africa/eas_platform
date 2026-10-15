import type { Person, SanitySocialLink, SanityTeamMember } from "@/types";

const DEFAULT_QUESTION = "What is an Ideology you live by?";

function socialUrl(socials: SanitySocialLink[], names: string[]): string | undefined {
  const match = socials.find((social) =>
    names.includes(social.name.trim().toLowerCase()),
  );
  return match?.url;
}

export function toPerson(member: SanityTeamMember): Person {
  const socials = member.socials ?? [];

  return {
    id: member._id,
    name: member.name,
    role: member.role ?? "",
    image: member.imageUrl ?? "",
    qa: {
      question: member.ideologyQuestion?.trim() || DEFAULT_QUESTION,
      answer: member.bio ?? "",
    },
    musicMood: {
      song: member.musicSong ?? "",
      artist: member.musicArtist ?? "",
    },
    socials: {
      linkedin: socialUrl(socials, ["linkedin"]),
      behance: socialUrl(socials, ["behance"]),
      twitter: socialUrl(socials, ["twitter", "x"]),
      instagram: socialUrl(socials, ["instagram"]),
    },
  };
}
