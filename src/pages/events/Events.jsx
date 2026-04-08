import { Hero } from "@/components/home";
import eventImage from "@/assets/images/evolv_25.webp";
import Button from "@/components/Button/Button";
import Badge from "@/components/Badge/Badge";
import Speakers from "@/components/Speakers/speakers";
import EventSchedule from "@/components/EventSchedule/EventSchedule";

const Events = () => {
  return (
    <div>
      <main>
        <Hero
          title="University Campus Tour (Lagos Edition)"
          description="This event description goes into this box. This events description goes into this box."
          image={eventImage}
        >
          <div className="flex items-center justify-center gap-4 my-6 mx-2.5">
            <Button variant="primary" size="md"
            style={{ padding: "13px 50px", fontSize: "15px" }} >
            Get Tickets
          </Button>
            <Badge className="font-poppins text-sm font-medium px-8 py-3 rounded-md">
              Sign Up to Email List
            </Badge>
          </div>
        </Hero>

        <Speakers />
        
        <EventSchedule />
      </main>
    </div>
  );
};

export default Events;