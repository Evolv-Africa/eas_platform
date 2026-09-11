import { FC } from "react";
import {
  Hero, Blogs,
  OurImpact,
  OurNetwork,
  WhatWeDo,
  WhoWeAre,
} from "@/components/landing-pages/home";

const Home: FC = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <OurImpact />
      <OurNetwork />
      <Blogs />
    </>
  );
};

export default Home;
