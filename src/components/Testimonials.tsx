import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GridPattern } from "@/components/ui/grid-pattern";

type Testimonial = {
    name: string;
    role: string;
    image: string;
    company: string;
    quote: string;
    rating?: number;
};

// Full Star Icon Component
const FullStarIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
    </svg>
);

// Half Star Icon Component
const HalfStarIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 1a.993 .993 0 0 1 .823 .443l.067 .116l2.852 5.781l6.38 .925c.741 .108 1.08 .94 .703 1.526l-.07 .095l-.078 .086l-4.624 4.499l1.09 6.355a1.001 1.001 0 0 1 -1.249 1.135l-.101 -.035l-.101 -.046l-5.693 -3l-5.706 3c-.105 .055 -.212 .09 -.32 .106l-.106 .01a1.003 1.003 0 0 1 -1.038 -1.06l.013 -.11l1.09 -6.355l-4.623 -4.5a1.001 1.001 0 0 1 .328 -1.647l.113 -.036l.114 -.023l6.379 -.925l2.853 -5.78a.968 .968 0 0 1 .904 -.56zm0 3.274v12.476a1 1 0 0 1 .239 .029l.115 .036l.112 .05l4.363 2.299l-.836 -4.873a1 1 0 0 1 .136 -.696l.07 -.099l.082 -.09l3.546 -3.453l-4.891 -.708a1 1 0 0 1 -.62 -.344l-.073 -.097l-.06 -.106l-2.183 -4.424z" />
    </svg>
);

// Empty Star Icon Component
const EmptyStarIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245" />
    </svg>
);

// Star Rating Component
const StarRating = ({ rating = 5 }: { rating?: number }) => {
    const fullRating = Math.floor(rating || 5);
    const hasHalfStar = (rating || 5) % 1 >= 0.5;
    const emptyStars = 5 - fullRating - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex items-center gap-0.5">
            {/* Full Stars */}
            {[...Array(fullRating)].map((_, i) => (
                <FullStarIcon
                    key={`full-${i}`}
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-yellow-400"
                />
            ))}
            {/* Half Star */}
            {hasHalfStar && (
                <HalfStarIcon
                    key="half"
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-yellow-400"
                />
            )}
            {/* Empty Stars */}
            {[...Array(emptyStars)].map((_, i) => (
                <EmptyStarIcon
                    key={`empty-${i}`}
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-neutral-300"
                />
            ))}
        </div>
    );
};

const testimonials: Testimonial[] = [
    {
        quote:
            "Everlasting Technical Services transformed the way we manage our operations. Their MEP solutions are reliable, scalable, and truly easy to use.",
        name: "Ali Khan",
        role: "HR Manager",
        company: "Pak Mission Society",
        image: "https://randomuser.me/api/portraits/men/21.jpg",
        rating: 5,
    },
    {
        quote:
            "Their technical services streamlined our business processes. What impressed me most is their dedication to client success and support.",
        name: "Sara Ahmed",
        role: "CEO",
        company: "Galaxy Five Home",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
        rating: 4.5,
    },
    {
        quote:
            "They took time to understand our unique requirements and delivered solutions that fit seamlessly into daily operations.",
        name: "Imran Hussain",
        role: "Manager",
        company: "Al-Tayyab Foods",
        image: "https://randomuser.me/api/portraits/men/23.jpg",
        rating: 4,
    },
    {
        quote:
            "From onboarding to ongoing support, the Everlasting team has been responsive, professional, and incredibly easy to work with.",
        name: "Fatima Noor",
        role: "Director",
        company: "Shafiqe Foods",
        image: "https://randomuser.me/api/portraits/women/24.jpg",
        rating: 5,
    },
    {
        quote:
            "Their collaborative approach makes us feel like partners, not just clients. Every project brings new value to our business.",
        name: "Usman Raza",
        role: "CTO",
        company: "NextGen Solutions",
        image: "https://randomuser.me/api/portraits/men/25.jpg",
        rating: 4.5,
    },
    {
        quote:
            "We rely on their services to manage critical operations. The team is intuitive, and the support is always proactive.",
        name: "Ayesha Siddiqui",
        role: "Product Lead",
        company: "Bright Future Tech",
        image: "https://randomuser.me/api/portraits/women/26.jpg",
        rating: 5,
    },
    {
        quote:
            "Everlasting gave us better visibility across departments. The insights and efficiency gains have been game-changing for our company.",
        name: "Bilal Sheikh",
        role: "Operations Head",
        company: "Metro Logistics",
        image: "https://randomuser.me/api/portraits/men/27.jpg",
        rating: 4,
    },
    {
        quote:
            "The technical services brought structure to our operations. It's user-friendly and perfectly tailored to our organizational needs.",
        name: "Nadia Karim",
        role: "Finance Manager",
        company: "Alpha Traders",
        image: "https://randomuser.me/api/portraits/women/28.jpg",
        rating: 4.5,
    },
    {
        quote:
            "Dependable, efficient, and forward-thinking. Everlasting has become a trusted partner in helping us scale confidently.",
        name: "Omar Farooq",
        role: "Managing Director",
        company: "VisionX Global",
        image: "https://randomuser.me/api/portraits/men/29.jpg",
        rating: 5,
    },
    {
        quote:
            "Their attention to detail and continuous improvements keep us ahead of the curve. Working with them feels effortless every time.",
        name: "Sana Iqbal",
        role: "Head of Strategy",
        company: "BlueWave Consulting",
        image: "https://randomuser.me/api/portraits/women/30.jpg",
        rating: 4,
    },
    {
        quote:
            "We've tested other service providers, but nothing matched their level of customization and hands-on support. Highly recommend their services.",
        name: "Hamza Tariq",
        role: "Operations Manager",
        company: "Green Valley Farms",
        image: "https://randomuser.me/api/portraits/men/31.jpg",
        rating: 5,
    },
    {
        quote:
            "Everlasting's services made our business smarter, not harder. The partnership has been valuable for both efficiency and growth.",
        name: "Mehwish Zafar",
        role: "COO",
        company: "Skyline Apparel",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
        rating: 4.5,
    },
];

const Testimonials = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const testimonialsRef = useRef<HTMLDivElement>(null);

    const containerInView = useInView(containerRef, { once: false, amount: 0.1 });
    const headingInView = useInView(headingRef, { once: false, amount: 0.1 });
    const descriptionInView = useInView(descriptionRef, { once: false, amount: 0.1 });

    return (
        <section className="w-full relative mt-10">
            {/* Double line border - Top */}
            <div
                className="absolute left-0 right-0 top-0"
                style={{
                    height: "8px",
                    borderTop: "1px solid #E5E5E5",
                    borderBottom: "1px solid #E5E5E5",
                    background:
                        "repeating-linear-gradient(135deg, #E5E5E5 0px, #E5E5E5 1px, transparent 1px, transparent 4px), white",
                }}
            />

            {/* Double line borders - Left */}
            <div
                className="absolute md:left-8 left-0 top-0 bottom-0"
                style={{
                    width: "8px",
                    borderLeft: "1px solid #E5E5E5",
                    borderRight: "1px solid #E5E5E5",
                    background:
                        "repeating-linear-gradient(135deg, #E5E5E5 0px, #E5E5E5 1px, transparent 1px, transparent 4px), white",
                }}
            />

            {/* Double line borders - Right */}
            <div
                className="absolute md:right-8 right-0 top-0 bottom-0"
                style={{
                    width: "8px",
                    borderLeft: "1px solid #E5E5E5",
                    borderRight: "1px solid #E5E5E5",
                    background:
                        "repeating-linear-gradient(135deg, #E5E5E5 0px, #E5E5E5 1px, transparent 1px, transparent 4px), white",
                }}
            />

            {/* Double line border - Bottom */}
            <div
                className="absolute left-0 right-0 bottom-0"
                style={{
                    height: "8px",
                    borderTop: "1px solid #E5E5E5",
                    borderBottom: "1px solid #E5E5E5",
                    background:
                        "repeating-linear-gradient(135deg, #E5E5E5 0px, #E5E5E5 1px, transparent 1px, transparent 4px), white",
                }}
            />

            <div
                ref={containerRef}
                className="relative p-4 sm:p-6 md:p-8 lg:p-12 pl-4 sm:pl-6 md:pl-12 lg:pl-20 pr-4 sm:pr-6 md:pr-12 lg:pr-20 pb-8 sm:pb-12 md:pb-16 lg:pb-20"
            >


                {/* Badge */}
                <motion.div
                    className="px-4 sm:px-6 py-2 border border-neutral-300 border-dashed w-fit mb-3 md:mb-6 lg:mb-12 relative z-10"
                    style={{
                        background:
                            "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={containerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-lg sm:text-xl md:text-2xl font-light text-text-primary font-clashdisplay">
                        Testimonials
                    </h2>
                </motion.div>

                {/* Heading */}
                <motion.h3
                    ref={headingRef}
                    className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold text-neutral-800 font-generalsans mb-3 md:mb-4 lg:mb-6 leading-tight relative z-10"
                    initial={{ opacity: 0, y: 60 }}
                    animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    Real Results, Real Voices
                </motion.h3>

                {/* Description */}
                <motion.p
                    ref={descriptionRef}
                    className="text-sm sm:text-base md:text-base lg:text-lg font-normal text-neutral-600 font-generalsans mb-8 md:mb-10 lg:mb-12 text-left md:text-justify leading-relaxed relative z-10"
                    initial={{ opacity: 0, y: 40 }}
                    animate={descriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                >
                    See how businesses are thriving with our services — real stories, real impact, real growth.
                </motion.p>

                {/* Testimonials Grid */}
                <div
                    ref={testimonialsRef}
                    className="relative grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 z-10"
                >
                    {testimonials.map(({ name, role, company, quote, image, rating }, index) => (
                        <motion.div
                            key={index}
                            initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
                            whileInView={{
                                filter: "blur(0px)",
                                translateY: 0,
                                opacity: 1,
                            }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index + 0.1, duration: 0.8 }}
                            className="relative grid grid-cols-[auto_1fr] gap-x-3 sm:gap-x-4 overflow-hidden border border-neutral-200 border-dashed shadow-md shadow-neutral-100 p-4 sm:p-5 bg-white hover:shadow-md transition-all duration-300"
                        >
                            {/* Grid Pattern Background on Card */}
                            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                                <GridPattern
                                    width={20}
                                    height={20}
                                    x={0}
                                    y={0}
                                    strokeDasharray="2"
                                    className="stroke-neutral-300/30 fill-none absolute inset-0 h-full w-full"
                                />
                                {/* Radial Gradient Shading Overlay */}
                                <div
                                    className="absolute inset-0 h-full w-full"
                                    style={{
                                        background: "radial-gradient(ellipse 150% 120% at bottom left, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.25) 25%, rgba(255, 255, 255, 0.1) 50%, transparent 75%)",
                                    }}
                                />
                            </div>

                            {/* Profile Image */}
                            <img
                                alt={name}
                                src={image}
                                loading="lazy"
                                className="size-9 sm:size-10 md:size-11 rounded-full object-cover relative z-10 border border-neutral-200 ring-1 ring-neutral-100 ring-offset-2 ring-offset-zinc-300"
                            />

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="-mt-0.5 -space-y-0.5">
                                    <p className="text-sm sm:text-base font-semibold text-neutral-800 font-generalsans">
                                        {name}
                                    </p>
                                    <span className="text-neutral-700 block text-[11px] sm:text-xs font-light tracking-tight font-generalsans text-shadow-lg text-shadow-white">
                                        {role} at {company}
                                    </span>
                                </div>
                                {/* Star Rating */}
                                <div className="mt-2 mb-2">
                                    <StarRating rating={rating} />
                                </div>
                                <blockquote className="mt-3">
                                    <p className="text-neutral-700 text-sm sm:text-base font-light tracking-wide font-generalsans leading-relaxed">
                                        {quote}
                                    </p>
                                </blockquote>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
