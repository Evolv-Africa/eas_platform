import HeroImage from "@/assets/images/evolv_25.webp";
import GoogleLogo from "@/assets/images/google.png";
import MicrosoftLogo from "@/assets/images/microsoft.png";
import ShopifyLogo from "@/assets/images/shopify.png";
import TokoLogo from "@/assets/images/tokopedia.png";
import UpworkLogo from "@/assets/images/upwork.png";
import { motion, useScroll, useTransform } from "motion/react";
import { FC, useRef } from "react";
import { VerticalSlider } from "../animations";
import Marquee from "../animations/marquee/Marquee";
import { useMediaQuery } from "@/hooks";

const Hero: FC = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const words = ["builders", "leaders", "innovators", "creators", "founders"];
  const { isMobile } = useMediaQuery();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  // Image – starts at bottom half, grows to fill viewport
  const heroWidth = useTransform(
    scrollYProgress,
    [0, 0.45],
    isMobile ? ["95%", "95%"] : ["70%", "100%"],
  );
  const heroHeight = useTransform(
    scrollYProgress,
    [0, 0.45],
    isMobile ? ["50%", "50%"] : ["45%", "80%"],
  );
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [1.1, 1.1] : [1.1, 1],
  );
  const darkOverlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.45],
    isMobile ? [0.15, 0.15] : [0.15, 0.58],
  );

  // Text – centred in viewport but pushed up initially so it sits above the image
  const textY = useTransform(
    scrollYProgress,
    [0, 0.45],
    isMobile ? ["-20vh", "-20vh"] : ["-20vh", "0vh"],
  );
  const headingColor = useTransform(
    scrollYProgress,
    [0.12, 0.35],
    isMobile ? ["#00081D", "#00081D"] : ["#00081D", "#ffffff"],
  );
  const paragraphColor = useTransform(
    scrollYProgress,
    [0.12, 0.35],
    isMobile ? ["#2F2F2F", "#2F2F2F"] : ["#2F2F2F", "#FFFFFF"],
  );

  return (
    <div className="w-full px-5">
      <div className="mx-auto max-w-320 pb-11xl">
        <section
          ref={heroRef}
          className={`relative ${isMobile ? "h-screen" : "h-[230vh]"}`}
        >
          <div className="sticky top-0 h-screen overflow-hidden">
            {/* Text */}
            <motion.div
              style={{ y: textY }}
              className="absolute inset-0 z-10 flex items-center justify-center px-6"
            >
              <div className="mx-auto max-w-286.5 text-center">
                <motion.h2
                  style={{ color: headingColor }}
                  className="font-neue-machina text-4xl leading-[1.03] font-extrabold md:text-7xl md:leading-20"
                >
                  Empowering Africa&apos;s next generation of{" "}
                  <VerticalSlider items={words} loop />
                </motion.h2>
                <motion.p
                  style={{ color: paragraphColor }}
                  className="mx-auto mt-5 max-w-169.5 font-poppins text-base md:text-[20px] md:leading-7"
                >
                  Evolve Africa is a community-driven platform connecting
                  professionals, innovators, and organizations to shape the
                  future of leadership across the continent.
                </motion.p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              style={{
                width: heroWidth,
                height: heroHeight,
                x: "-50%",
              }}
              className="absolute bottom-4 left-1/2 overflow-hidden rounded-xl"
            >
              <motion.img
                src={HeroImage}
                alt="Evolv Africa 25"
                style={{ scale: imageScale }}
                className="h-full w-full object-cover"
              />
              <motion.div
                style={{ opacity: darkOverlayOpacity }}
                className="absolute inset-0 bg-[#021039]"
              />
            </motion.div>
          </div>
        </section>
      </div>
      <div className="py-10 space-y-5">
        <p className="w-full max-w-185.5 mx-auto text-semantic-text-secondary font-medium text-base md:text-xl leading-7">
          Trusted by forward-thinking organizations and communities across
          Africa.
        </p>
        <Marquee
          direction="rtl"
          duration={20}
          gap={80}
          pauseOnHover={false}
          repetitionArray={["primary", "duplicate", "triple", "quadruple"]}
        >
          {[GoogleLogo, UpworkLogo, MicrosoftLogo, ShopifyLogo, TokoLogo].map(
            (icon) => (
              <img
                src={icon}
                alt={icon}
                key={icon}
                className="h-5 w-auto grayscale"
              />
            ),
          )}
        </Marquee>
        <p className="w-fit mx-auto text-gray-600 text-base md:text-xl leading-7">
          Formerly LinkedIn Local Nigeria
        </p>
      </div>
    </div>
  );
};

export default Hero;
