import { Icon } from "@/components/core";
import { FC } from "react";

const AboutUs: FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center space-y-5">
        <Icon name="AtSign" className="text-4xl text-primary" />
        <h1 className="text-primary font-bold text-4xl">About Us</h1>
        <p className="text-gray-500 text-lg">Welcome to the EAS Platform</p>
      </div>
    </div>
  );
};
export default AboutUs;
