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
            disabled={speakers.length === 0}
            aria-disabled={speakers.length === 0}
            title={speakers.length === 0 ? "Speaker lineup is not published yet" : undefined}
            className={
              speakers.length === 0
                ? "h-12 cursor-not-allowed border-gray-300! bg-gray-100! px-8 py-3! text-[15px] text-gray-400! opacity-70 hover:border-gray-300! hover:bg-gray-100! hover:text-gray-400!"
                : "h-12 border-primary! px-8 py-3! text-[15px] text-primary! transition-colors duration-300 ease-in-out hover:border-primary! hover:bg-primary/5 hover:text-primary!"
            }
            onClick={() => {
              const target = document.getElementById("speakers");
              if (!target) return;
              const top =
                target.getBoundingClientRect().top +
                (document.scrollingElement?.scrollTop ?? 0) -
                140;
              document.scrollingElement?.scrollTo({ top, behavior: "smooth" });
            }}
          >
            View Speaker Lineup
          </Button>
        </div>
      </Hero>
      <WhoWeAre />
      <WhatWeDo />
      <OurImpact />
      <div id="speakers">
        {speakers.length > 0 && (
          <Speakers
            title="The Voices Driving the Decade"
            desc="Hear from key leaders across tech, finance, and enterprise who are turning ambitious ideas into measurable impact across the continent."
            sanitySpeakers={speakers}
          />
        )}
      </div>
      <OurNetwork />
      <Blogs />
    </>
  );
};

export default Home;
