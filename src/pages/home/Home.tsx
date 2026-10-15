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
import { getMainEventSpeakers } from "@/services/sanity/queries";
import type { SanitySpeaker } from "@/types";
import { Button } from "@/components/core";

const REGISTER_URL = "http://tix.africa/";

const Home: FC = () => {
  const [speakers, setSpeakers] = useState<SanitySpeaker[]>([]);

  useEffect(() => {
    let isMounted = true;

    getMainEventSpeakers()
      .then((result) => {
        if (isMounted) setSpeakers(result ?? []);
      })
      .catch(() => {
        if (isMounted) setSpeakers([]);
      });

    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <>
      <Hero sponsors={[
        { imageUrl: GoogleLogo, name: "Google", website: "#", _id: "1", _createdAt: "", _updatedAt: "" },
        { imageUrl: UpworkLogo, name: "Upwork", website: "#", _id: "2", _createdAt: "", _updatedAt: "" },
        { imageUrl: MicrosoftLogo, name: "Microsoft", website: "#", _id: "3", _createdAt: "", _updatedAt: "" },
        { imageUrl: ShopifyLogo, name: "Shopify", website: "#", _id: "4", _createdAt: "", _updatedAt: "" },
        { imageUrl: TokoLogo, name: "Tokopedia", website: "#", _id: "5", _createdAt: "", _updatedAt: "" },
      ]}>
        <div className="flex items-center justify-center mt-6">
          <Button
            variant="primary"
            size="medium"
            className="py-3! px-8 text-[15px] h-12"
            onClick={() => window.open(REGISTER_URL, "_blank", "noopener,noreferrer")}
          >
            Register for Event
          </Button>
        </div>
      </Hero>
      <WhoWeAre />
      <WhatWeDo />
      <OurImpact />
      {speakers.length > 0 && <Speakers title="Our Speakers Lineup" desc="" sanitySpeakers={speakers} />}
      <OurNetwork />
      <Blogs />
    </>
  );
};

export default Home;
