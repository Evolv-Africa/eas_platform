import { Heading, Icon, Text } from "@/components/core";
import { FC } from "react";

const AboutUs: FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center space-y-5">
        <Icon name="AtSign" className="text-4xl text-primary" />
        <Heading as="h1" variant="h2" tone="accent">
          About Us
        </Heading>
        <Text variant="lg" tone="secondary">
          Welcome to the EAS Platform
        </Text>
      </div>
    </div>
  );
};
export default AboutUs;
