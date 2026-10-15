import { FC, useEffect, useState } from "react";
import {
  Hero, Blogs,
  OurImpact,
  OurNetwork,
  WhatWeDo,
  WhoWeAre,
} from "@/components/landing-pages/home";
import GoogleLogo from "@/assets/images/google.png";
import MicrosoftLogo from "@/assets/images/microsoft.png";
import ShopifyLogo from "@/assets/images/shopify.png";
import TokoLogo from "@/assets/images/tokopedia.png";
import UpworkLogo from "@/assets/images/upwork.png";
import { Speakers } from "@/components/landing-pages/Events";
import { getMainEventSpeakers, getMainEventSponsors } from "@/services/sanity/queries";
import type { SanitySpeaker, SanitySponsor } from "@/types";
import { Button } from "@/components/core";

const REGISTER_URL = "https://fewticket.com/discover/The-defining-decade-from-narrative-to-bold-actions";

const defaultSponsors: SanitySponsor[] = [
  { imageUrl: GoogleLogo, name: "Google", website: "#", _id: "1", _createdAt: "", _updatedAt: "" },
  { imageUrl: UpworkLogo, name: "Upwork", website: "#", _id: "2", _createdAt: "", _updatedAt: "" },
  { imageUrl: MicrosoftLogo, name: "Microsoft", website: "#", _id: "3", _createdAt: "", _updatedAt: "" },
  { imageUrl: ShopifyLogo, name: "Shopify", website: "#", _id: "4", _createdAt: "", _updatedAt: "" },
  { imageUrl: TokoLogo, name: "Tokopedia", website: "#", _id: "5", _createdAt: "", _updatedAt: "" },
];

const Home: FC = () => {
  const [speakers, setSpeakers] = useState<SanitySpeaker[]>([]);
  const [sponsors, setSponsors] = useState<SanitySponsor[]>([]);

  useEffect(() => {
    let isMounted = true;

    getMainEventSpeakers()
      .then((result) => {
        if (isMounted) setSpeakers(result ?? []);
      })
      .catch(() => {
        if (isMounted) setSpeakers([]);
      });

    getMainEventSponsors()
      .then((result) => {
        if (isMounted) setSponsors(result ?? []);
      })
      .catch(() => {
        if (isMounted) setSponsors([]);
      });

    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <>
      <Hero sponsors={sponsors.length > 0 ? sponsors : defaultSponsors}>
        <div className="flex flex-wrap flex-col md:flex-row items-center justify-center mt-6 gap-3">
          <Button
            variant="primary"
            size="medium"
            className="py-3! px-8 text-[15px] h-12"
            onClick={() => window.open(REGISTER_URL, "_blank", "noopener,noreferrer")}
          >
            Register for EAS 2026
          </Button>
          <Button
            variant="outline"
            size="medium"
            className="py-3! px-8 text-[15px] h-12 border-primary! text-primary! hover:border-primary! hover:text-primary! hover:bg-primary/5 transition-colors duration-300 ease-in-out"
            onClick={() => document.getElementById('speakers')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Speaker Lineup
          </Button>
        </div>
      </Hero>
      <WhoWeAre />
      <WhatWeDo />
      <OurImpact />
      {speakers.length > 0 && <Speakers title="The Voices Driving the Decade" desc="Hear from key leaders across tech, finance, and enterprise who are turning ambitious ideas into measurable impact across the continent." sanitySpeakers={speakers} />}
      <OurNetwork />
      <Blogs />
    </>
  );
};

export default Home;
