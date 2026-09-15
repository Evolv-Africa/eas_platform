import blogHero from "@/assets/images/blog-hero-image.png";
import blog1 from "@/assets/images/blog-1.png";
import blog2 from "@/assets/images/blog-2.png";
import blog3 from "@/assets/images/blog-3.png";
import story1 from "@/assets/images/story-1.png";
import story2 from "@/assets/images/story-2.png";
import story3 from "@/assets/images/story-3.png";

type GalleryImageProps = {
    src: string;
    alt: string;
    className?: string;
    position?: "relative" | "absolute";
};

const GalleryImage = ({
    src,
    alt,
    className = "",
    position = "relative",
}: GalleryImageProps) => (
    <div className={`${position} overflow-hidden bg-blue-900 ${className}`}>
        <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-blue-900/30 blur-md" aria-hidden="true" />
    </div>
);


const ImageGallerySection = () => {
    return (
        <section className="px-5 py-10 md:py-40">
            <div className="mx-auto max-w-320">
                <div className="hidden lg:grid grid-cols-2 gap-4">
                    <div className="flex h-111.75 flex-col gap-4">
                        <GalleryImage src={blog1} alt="blog1" className="w-full flex-1 min-h-0 rounded-[20px]" />
                        <div className="grid grid-cols-[2fr_1fr] gap-4 flex-1 min-h-0">
                            <GalleryImage src={blog2} alt="blog2" className="w-full h-full rounded-[20px]" />
                            <GalleryImage src={blog3} alt="blog3" className="w-full h-full rounded-[20px]" />
                        </div>
                    </div>
                    <div className="relative h-111.75">
                        <div className="w-full h-full gallery-notch-both">
                            <GalleryImage src={story1} alt="story1" className="w-full h-full rounded-[20px]" />
                        </div>
                        <GalleryImage src={story2} alt="story2" position="absolute" className="top-0 right-0 h-42.75 w-55.25 rounded-[20px]" />
                        <GalleryImage src={story3} alt="story3" position="absolute" className="bottom-0 left-0 h-42.75 w-55.25 rounded-[20px]" />
                    </div>
                </div>

                {/* ── Mobile: 2-column stacked layout ── */}
                <div className="lg:hidden grid grid-cols-2 gap-3">
                    <GalleryImage src={blogHero} alt="Event attendees" className="col-span-2 h-56 rounded-2xl" />
                    {[blog2, blog3, story1, blog1, story2, story3].map((src, i) => (
                        <GalleryImage key={i} src={src} alt={`Gallery image ${i + 2}`} className="h-44 rounded-2xl" />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ImageGallerySection;
