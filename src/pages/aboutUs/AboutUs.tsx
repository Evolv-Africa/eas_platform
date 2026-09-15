import TheJourneySection from "@/components/landing-pages/about/TheJourneySection";
import TheVisionSection from "@/components/landing-pages/about/VisionSection";
import ImageGallerySection from "@/components/landing-pages/about/ImageGallerySection";
import { FC } from "react";
import AboutPageHeroSection from "@/components/landing-pages/about/aboutPageHero";

const AboutUs: FC = () => {
  return (
    <>
      <AboutPageHeroSection />
      <TheJourneySection />
      <TheVisionSection />
      <ImageGallerySection />
    </>
  );
};
export default AboutUs;
