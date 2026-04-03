import { FC } from "react";
import WhoWeAre from "@/components/WhoWeAre/whoweare";
import WhatWeDo from "@/components/WhatWeDo/whatwedo";
import Blogs from "@/components/Blogs/blogs";

const Home: FC = () => {
  return (
    <>
      <WhoWeAre />
      <WhatWeDo />
      <Blogs />
    </>
  );
};

export default Home;