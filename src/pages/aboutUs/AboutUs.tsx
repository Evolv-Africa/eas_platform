import TheJourneySection from "@/components/landing-pages/about/TheJourneySection";
import TheVisionSection from "@/components/landing-pages/about/VisionSection";
import ImageGallerySection from "@/components/landing-pages/about/ImageGallerySection";
import AboutPageHeroSection from "@/components/landing-pages/about/AboutPageHero";

const AboutUs = () => {
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
