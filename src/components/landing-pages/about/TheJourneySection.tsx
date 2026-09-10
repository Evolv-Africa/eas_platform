import { Badge } from "@/components/core"
import { AboutJourneyData } from "../home/constants";
import { ExpandingCard } from "@/components/animations";

const TheJourneySection = () => {
    return (
        <div
            className={`relative px-5 md:py-32 lg:py-50`}
        >
            <div className="mx-auto max-w-320 flex flex-col lg:flex-row items-start gap-12">
                <div className="w-full lg:w-1/2 flex flex-col gap-6 items-start lg:sticky lg:top-28">
                    <Badge>The Journey</Badge>
                    <h2 className="font-neue-machina font-extrabold text-3xl md:text-5xl lg:text-[64px] leading-tight text-semantic-text-primary max-w-136.75">
                        A Growing Movement Across Africa
                    </h2>
                    <p className="font-poppins font-normal text-base md:text-xl leading-7 text-semantic-text-secondary max-w-136.75">
                        From a small idea about meaningful professional connections to a platform shaping Africa’s next chapter
                    </p>
                </div>

                <div className="flex flex-col gap-24">
                    {AboutJourneyData.map((card) => (
                        <ExpandingCard key={card.id} card={card} networkLabel={card.tag} expandedOnly />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TheJourneySection;