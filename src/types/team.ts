export interface Person {
  id: string;
  name: string;
  role: string;
  image: string;
  qa: {
    question: string;
    answer: string;
  };
  musicMood: {
    song: string;
    artist: string;
  };
  socials: {
    linkedin?: string;
    behance?: string;
    twitter?: string;
    instagram?: string;
  };
}
