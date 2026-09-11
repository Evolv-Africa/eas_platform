import { Link } from "react-router-dom"
import stripBackground from "@/assets/Images/olutona-section-bg.svg"
const OlutonaSection = () => {
    return (
        <div className="px-5 pb-10 md:pb-40">
            <div className="relative mx-auto max-w-320 rounded-4xl bg-linear-to-b from-[#002EA8] to-[#001242] px-6 py-10 text-center text-blue-900 sm:px-10 md:px-14 md:py-16 lg:px-20 lg:py-24 relative">
                <div className="flex flex-col gap-6 items-center z-10">
                    <h2 className="mx-auto max-w-269.5 font-neue-machina text-2xl font-extrabold leading-10 md:leading-18 tracking-[-0.04em] md:text-5xl lg:text-[4.5rem] text-white">
                        Have Questions? <br /> <span className="text-[#3078F2]">Olutona</span> is here to help!
                    </h2>

                    <p className="mx-auto max-w-269.5 text-sm md:text-base leading-7 text-white sm:text-lg font-poppins font-normal">
                        Olutona can answer all of your questions from what sessions you should attend to even how to transport yourself to the event venue.
                        <br /> You just have to say the magic word <span className="p-2 py-0.5 rounded-[10px] bg-[#67C34F]/30 border border-dashed border-[#3F8B2B] text-[#67C34F] font-semibold">Olutona</span>
                    </p>

                    <Link
                        to="#"
                        className="w-fit cursor-pointer mt-2 inline-flex min-h-12 items-center justify-center rounded-2xl bg-primary px-7 font-neue-machina text-sm md:text-base font-semibold text-white shadow-[0_10px_22px_rgba(29,68,184,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600"
                    >
                        Ask Olutona
                    </Link>
                </div>

                <img src={stripBackground} alt="" className="absolute inset-0 w-full object-cover object-center"
                    onError={(e) => {
                        e.currentTarget.style.display = "none";
                    }}
                />
            </div>
        </div>
    )
}

export default OlutonaSection