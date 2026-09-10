import blogHeroImage from "@/assets/images/blog-hero-image.png";


const AboutPageHeroSection = () => {
    return (
        <div className="w-full px-5 py-10 md:py-20 lg:py-32">
            <div className="mx-auto flex max-w-320 w-full flex-col gap-8">
                <div className="w-full lg:w-1/2">
                    <h1 className="font-neue-machina text-4xl font-extrabold leading-[1.05] tracking-tight text-[#00081d] sm:text-5xl md:text-6xl lg:text-7xl">
                        We Are Building
                    </h1>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
                        <h1 className="font-neue-machina text-4xl font-extrabold leading-[1.05] tracking-tight text-[#00081d] sm:text-5xl md:text-6xl lg:text-7xl">
                            The future
                        </h1>
                        <div className="hidden h-0.5 w-full max-w-50 bg-[#00081d] sm:block" />
                    </div>
                </div>
                <div className="p-0.75 bg-linear-to-tr from-[#003CA0] via-[#449441] to-[#002D77] rounded-3xl">
                <div className="relative h-50 overflow-hidden rounded-3xl bg-blue-900">
                    <img
                        src={blogHeroImage}
                        alt={"About us"}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-40"
                        onError={(e) => {
                            e.currentTarget.style.display = "none";
                        }}
                    />
                </div>
                </div>
                <div className="w-full flex items-end justify-between">
                    <p className="mt-6 w-full font-poppins font-regular text-[20px] leading-7 text-gray-600 md:max-w-md md:text-xl md:leading-8 max-w-105">
                        Evolv Africa, Formerly Known as LinkedIn Local Nigeria. A community built on the belief that meaningful conversations can change trajectories.
                    </p>
                    <div className="w-full lg:w-1/2 lg:text-right">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 lg:justify-end">
                            <div className="hidden h-0.5 w-full max-w-37.5 bg-[#00081d] lg:order-first lg:block" />
                            <h1 className="font-neue-machina text-4xl font-extrabold leading-[1.05] tracking-tight text-[#00081d] sm:text-5xl md:text-6xl lg:text-7xl">
                                of African
                            </h1>
                        </div>
                        <h1 className="mt-2 font-neue-machina text-4xl font-extrabold leading-[1.05] tracking-tight text-[#00081d] sm:text-5xl md:text-6xl lg:text-7xl">
                            Collaboration
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPageHeroSection;
