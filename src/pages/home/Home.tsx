import { FC } from "react";
// import WhoWeAre from "@/components/WhoWeAre/whoweare";
import WhatWeDo from "@/components/WhatWeDo/whatwedo";
import { Hero, OurImpact, OurNetwork } from "@/components/home";
import Blogs from "@/components/Blogs/blogs";
import WhoWeAre from "@/components/WhoWeAre/whoweare";

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