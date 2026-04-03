<<<<<<< HEAD
import { FC } from "react";
import WhoWeAre from "@/components/WhoWeAre/whoweare";
import WhatWeDo from "@/components/WhatWeDo/whatwedo";
import Blogs from "@/components/Blogs/blogs";
=======
import { Hero, OurImpact, OurNetwork } from "@/components/home";
>>>>>>> bd38ed95a1d2353f63c188065961f9d76e196eb6

const Home = () => {
  return (
<<<<<<< HEAD
    <>
      <WhoWeAre />
      <WhatWeDo />
      <Blogs />
    </>
=======
    <div className="space-y-20">
      <Hero />
      <OurImpact />
      <OurNetwork />
    </div>
>>>>>>> bd38ed95a1d2353f63c188065961f9d76e196eb6
  );
};

export default Home;