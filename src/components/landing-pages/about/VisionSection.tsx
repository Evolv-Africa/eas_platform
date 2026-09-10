import { Badge } from "@/components/core"
import blogHeroImage from "@/assets/images/blog-hero-image.png";
import wavyBackground from "@/assets/Images/about-journey-bg.svg"


const TheVisionSection = () => {
    return (
        <div
            className={`relative px-5 md:py-20 bg-semantic-bg-surface`}
        >
            <div className="mx-auto max-w-320 flex flex-col lg:flex-row items-start gap-12">
                <div className="w-full lg:w-1/2 flex flex-col gap-6 items-start lg:sticky lg:top-28">
                    <Badge>The Vision</Badge>
                    <h2 className="font-neue-machina font-extrabold text-3xl md:text-5xl lg:text-[64px] leading-tight text-semantic-text-primary max-w-136.75">
                        More Than an Event
                    </h2>
                    <div className="flex flex-col gap-6">
                        <p className="font-poppins font-normal text-base md:text-xl leading-7 text-semantic-text-secondary max-w-136.75">
                            Evolv Africa Summit exists to create spaces where ideas meet opportunity.
                            <br />Through conferences, community initiatives, and collaborative platforms, we bring together people who believe in building a stronger Africa.
                        </p>
                        <div className="flex flex-col">
                            <p className="font-neue-machina font-extrabold text-[#4C9E36] text-base md:text-xl">Our mission is simple:</p>
                            <p className="font-poppins font-normal text-base md:text-xl leading-7 text-semantic-text-secondary max-w-136.75">
                                To inspire transformation, empower Africans, and catalyze meaningful change across industries and communities.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative lg:w-1/2 min-h-117 overflow-hidden rounded-3xl bg-blue-900">
                    <img
                        src={blogHeroImage}
                        alt={"Vision"}
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 opacity-40"
                        onError={(e) => {
                            e.currentTarget.style.display = "none";
                        }}
                    />
                </div>
            </div>

            <div className="mx-auto max-w-320 mt-16 lg:mt-24">
                <div className="relative">
                    <div
                        className="impact-notch relative rounded-3xl bg-[#00081D] px-4 py-12 md:px-6 md:py-10 lg:pr-[42%]"
                    >
                        <img src={wavyBackground} alt="" className="absolute inset-0 w-full object-cover object-center"
                            onError={(e) => {
                                e.currentTarget.style.display = "none";
                            }}
                        />
                        <div className="relative z-10 flex flex-col gap-20 max-w-136.75">
                            <div className="flex flex-col gap-6">
                                <Badge>Our Impact</Badge>

                                <h2 className="font-neue-machina font-extrabold text-4xl md:text-5xl lg:text-[56px] leading-tight text-white">
                                    By the Numbers
                                </h2>

                                <p className="font-poppins font-normal text-base md:text-xl leading-7 text-white max-w-120">
                                    Driving measurable growth across Africa&#39;s professional ecosystem.
                                </p>

                                <a
                                    href="#"
                                    id="download-report-btn"
                                    className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#003CA0] hover:opacity-95 text-white font-neue-machina font-bold cursor-pointer text-base transition-colors duration-200"
                                >
                                    Download our report
                                </a>
                            </div>

                            <div className="flex flex-col gap-3 mt-2">
                                <div className="flex flex-wrap gap-3">
                                    {["25k Community members", "15+ Partners"].map((label) => (
                                        <div key={label} className="px-8 py-4 rounded-xl bg-[#001242] text-white font-neue-machina font-bold text-sm md:text-base whitespace-nowrap">
                                            {label}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {["40+ Speakers", "05 Countries", "03 Events"].map((label) => (
                                        <div key={label} className="px-8 py-4 rounded-xl bg-[#001242] text-white font-neue-machina font-bold text-sm md:text-base whitespace-nowrap">
                                            {label}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block absolute bottom-0 right-0 w-[49%] h-55.5 z-20">
                        <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={blogHeroImage}
                                alt="Evolv Africa Summit event"
                                className="w-full h-full object-cover object-center"
                                onError={(e) => { e.currentTarget.style.display = "none"; }}
                            />
                        </div>
                    </div>
                </div>

                <div className="lg:hidden w-full h-64 rounded-2xl overflow-hidden shadow-xl mt-6">
                    <img
                        src={blogHeroImage}
                        alt="Evolv Africa Summit event"
                        className="w-full h-full object-cover object-center"
                        onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                </div>
            </div>
        </div >
    )
}

export default TheVisionSection;