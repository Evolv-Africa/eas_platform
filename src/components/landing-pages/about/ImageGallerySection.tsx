import blogHero from "@/assets/images/blog-hero-image.png";
import blog1 from "@/assets/images/blog-1.png";
import blog2 from "@/assets/images/blog-2.png";
import blog3 from "@/assets/images/blog-3.png";
import story1 from "@/assets/images/story-1.png";
import story2 from "@/assets/images/story-2.png";
import story3 from "@/assets/images/story-3.png";


const ImageGallerySection = () => {
    return (
        <section className="px-5 py-10 md:py-40">
            <div className="mx-auto max-w-320">
                <div className="hidden lg:grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-4 h-[447px]">
                        <div className="relative w-full flex-1 min-h-0 overflow-hidden rounded-[20px]">
                            <img src={blog1} alt="blog1" className="absolute inset-0 w-full h-full object-cover object-center" />
                        </div>
                        <div className="grid grid-cols-[2fr_1fr] gap-4 flex-1 min-h-0">
                            <div className="relative w-full h-full overflow-hidden rounded-[20px]">
                                <img src={blog2} alt="blog2" className="absolute inset-0 w-full h-full object-cover object-center" />
                            </div>
                            <div className="relative w-full h-full overflow-hidden rounded-[20px]">
                                <img src={blog3} alt="blog3" className="absolute inset-0 w-full h-full object-cover object-center" />
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[447px]">
                        <div className="w-full h-full gallery-notch-both">
                            <img src={story1} alt="story1" className="w-full h-full object-cover object-center rounded-[20px]" />
                        </div>
                        <img src={story2} alt="story2" className="w-[221px] h-[171px] object-cover object-center rounded-[20px] absolute top-0 right-0" />
                        <img src={story3} alt="story3" className="w-[221px] h-[171px] object-cover object-center rounded-[20px] absolute bottom-0 left-0" />
                    </div>
                </div>

                {/* ── Mobile: 2-column stacked layout ── */}
                <div className="lg:hidden grid grid-cols-2 gap-3">
                    <div className="col-span-2 h-56 overflow-hidden rounded-2xl bg-gray-900">
                        <img src={blogHero} alt="Event attendees" className="w-full h-full object-cover" />
                    </div>
                    {[blog2, blog3, story1, blog1, story2, story3].map((src, i) => (
                        <div key={i} className="h-44 overflow-hidden rounded-2xl bg-gray-900">
                            <img
                                src={src}
                                alt={`Gallery image ${i + 2}`}
                                className="w-full h-full object-cover object-center"
                                onError={(e) => { e.currentTarget.style.display = "none"; }}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ImageGallerySection;
