import { Hero } from "@/components/landing-pages/home";
import eventImage from "@/assets/images/evolv_25.webp";
import { Button, Badge } from "@/components/core";
import { EventSchedule, ComingSoon, Speakers } from "@/components/landing-pages/Events";
import OlutonaSection from "@/components/landing-pages/Events/OlutonaSection";

const Events: React.FC = () => {
  return (
    <div>
      <main>
        <Hero
          title="University Campus Tour (Lagos Edition)"
          description="This event description goes into this box. This events description goes into this box."
          image={eventImage}
        >
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 mb-20 mx-2.5">
            <Button
              variant="primary"
              size="medium"
              className="py-3! px-8 text-[15px] h-12"
            >
              Get Tickets
            </Button>

            <Badge parentClassName="rounded-md!" className="font-poppins text-sm font-medium px-8 py-3 rounded-md cursor-pointer">
              Sign Up to Email List
            </Badge>
          </div>
        </Hero>

        <Speakers />
        <EventSchedule />
        <OlutonaSection />
        <ComingSoon />
      </main>
    </div>
  );
};

export default Events;
