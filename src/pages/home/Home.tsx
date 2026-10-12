import { FC } from "react";
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

const Home: FC = () => {
  return (
    <>
      <Hero sponsors={[
        { imageUrl: GoogleLogo, name: "Google", website: "#", _id: "1", _createdAt: "", _updatedAt: "" },
        { imageUrl: UpworkLogo, name: "Upwork", website: "#", _id: "2", _createdAt: "", _updatedAt: "" },
        { imageUrl: MicrosoftLogo, name: "Microsoft", website: "#", _id: "3", _createdAt: "", _updatedAt: "" },
        { imageUrl: ShopifyLogo, name: "Shopify", website: "#", _id: "4", _createdAt: "", _updatedAt: "" },
        { imageUrl: TokoLogo, name: "Tokopedia", website: "#", _id: "5", _createdAt: "", _updatedAt: "" },
      ]} />
      <WhoWeAre />
      <WhatWeDo />
      <OurImpact />
      <OurNetwork />
      <Blogs />
    </>
  );
};

export default Home;
