import { FC } from "react";
import {
  Blogs,
  Hero,
  OurImpact,
  OurNetwork,
  WhatWeDo,
  WhoWeAre,
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
