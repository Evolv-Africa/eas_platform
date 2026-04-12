import Button from "@/components/Button/Button";
import comingSoonImage from "@/assets/Images/coming-1.png";

interface ComingSoonEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  location: string;
  image: string;
}

const comingSoonData: ComingSoonEvent[] = [
  {
    id: 1,
    date: "24th May 2025",
    title: "University Campus Tour (Lagos Edition)",
    description: "This events description goes into this box. This events description goes into this box.",
    location: "Lagos, Nigeria",
    image: comingSoonImage,
  },
  {
    id: 2,
    date: "24th May 2025",
    title: "University Campus Tour (Lagos Edition)",
    description: "This events description goes into this box. This events description goes into this box.",
    location: "Lagos, Nigeria",
    image: comingSoonImage,
  },
  {
    id: 3,
    date: "24th May 2025",
    title: "University Campus Tour (Lagos Edition)",
    description: "This events description goes into this box. This events description goes into this box.",
    location: "Lagos, Nigeria",
    image: comingSoonImage,
  },
];

const LocationIcon: React.FC = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-60 flex-shrink-0">
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
    />
    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const ComingSoon: React.FC = () => {
  return (
    <div className="px-5 py-10 md:py-20">
      <div className="mx-auto max-w-320 space-y-8 md:space-y-14">

        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3 max-w-md">
            <p className="font-neue-machina font-extrabold text-3xl md:text-[56px] leading-tight text-semantic-text-primary">
              Coming Soon
            </p>
            <p className="font-poppins text-sm md:text-base text-semantic-text-secondary leading-6">
              We have more events lined up just for you. Join our mailing list
              to get updates on what's coming up next.
            </p>
          </div>
          <div className="flex-shrink-0 mt-2">
            <Button variant="primary" size="md" style={{ padding: "13px 28px", fontSize: "14px" }}>
              Notify Me
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-10 md:gap-14">
          {comingSoonData.map((event) => (
            <div key={event.id} className="flex flex-col sm:flex-row gap-5 md:gap-10">

              <div className="w-full sm:w-[320px] md:w-[340px] flex-shrink-0 rounded-xl overflow-hidden aspect-video sm:aspect-auto sm:h-[220px]">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-3 justify-center">
                <p className="font-poppins text-xs md:text-base text-semantic-text-primary font-semibold">
                  {event.date}
                </p>
                <p className="font-neue-machina font-extrabold text-xl md:text-[28px] text-semantic-text-primary leading-snug">
                  {event.title}
                </p>
                <p className="font-poppins text-sm md:text-base text-semantic-text-primary leading-6">
                  {event.description}
                </p>
                <div className="flex flex-col gap-1">
                  <span className="font-poppins text-xs text-semantic-text-secondary flex items-center gap-1">
                    <LocationIcon />
                    Location
                  </span>
                  <span className="font-poppins text-sm md:text-base font-semibold text-semantic-text-primary">
                    {event.location}
                  </span>
                </div>
                <div className="mt-2">
                  <Button variant="primary" size="sm" style={{ padding: "10px 28px", fontSize: "13px" }}>
                    Register
                  </Button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ComingSoon;