import { FC } from "react";
import {
  Hero,
  OurImpact,
  OurNetwork,
  WhatWeDo,
  WhoWeAre,
  Blogs,
} from "@/components/home";

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
