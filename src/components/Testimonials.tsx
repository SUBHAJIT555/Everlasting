import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GridPattern } from "@/components/ui/grid-pattern";

type Testimonial = {
    name: string;
    role: string;
    image: string;
    company: string;
    quote: string;
};

const testimonials: Testimonial[] = [
    {
        quote:
            "Everlasting Technical Services transformed the way we manage our operations. Their MEP solutions are reliable, scalable, and truly easy to use.",
        name: "Ali Khan",
        role: "HR Manager",
        company: "Pak Mission Society",
        image: "https://randomuser.me/api/portraits/men/21.jpg",
    },
    {
        quote:
            "Their technical services streamlined our business processes. What impressed me most is their dedication to client success and support.",
        name: "Sara Ahmed",
        role: "CEO",
        company: "Galaxy Five Home",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
        quote:
            "They took time to understand our unique requirements and delivered solutions that fit seamlessly into daily operations.",
        name: "Imran Hussain",
        role: "Manager",
        company: "Al-Tayyab Foods",
        image: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
        quote:
            "From onboarding to ongoing support, the Everlasting team has been responsive, professional, and incredibly easy to work with.",
        name: "Fatima Noor",
        role: "Director",
        company: "Shafiqe Foods",
        image: "https://randomuser.me/api/portraits/women/24.jpg",
    },
    {
        quote:
            "Their collaborative approach makes us feel like partners, not just clients. Every project brings new value to our business.",
        name: "Usman Raza",
        role: "CTO",
        company: "NextGen Solutions",
        image: "https://randomuser.me/api/portraits/men/25.jpg",
    },
    {
        quote:
            "We rely on their services to manage critical operations. The team is intuitive, and the support is always proactive.",
        name: "Ayesha Siddiqui",
        role: "Product Lead",
        company: "Bright Future Tech",
        image: "https://randomuser.me/api/portraits/women/26.jpg",
    },
    {
        quote:
            "Everlasting gave us better visibility across departments. The insights and efficiency gains have been game-changing for our company.",
        name: "Bilal Sheikh",
        role: "Operations Head",
        company: "Metro Logistics",
        image: "https://randomuser.me/api/portraits/men/27.jpg",
    },
    {
        quote:
            "The technical services brought structure to our operations. It's user-friendly and perfectly tailored to our organizational needs.",
        name: "Nadia Karim",
        role: "Finance Manager",
        company: "Alpha Traders",
        image: "https://randomuser.me/api/portraits/women/28.jpg",
    },
    {
        quote:
            "Dependable, efficient, and forward-thinking. Everlasting has become a trusted partner in helping us scale confidently.",
        name: "Omar Farooq",
        role: "Managing Director",
        company: "VisionX Global",
        image: "https://randomuser.me/api/portraits/men/29.jpg",
    },
    {
        quote:
            "Their attention to detail and continuous improvements keep us ahead of the curve. Working with them feels effortless every time.",
        name: "Sana Iqbal",
        role: "Head of Strategy",
        company: "BlueWave Consulting",
        image: "https://randomuser.me/api/portraits/women/30.jpg",
    },
    {
        quote:
            "We've tested other service providers, but nothing matched their level of customization and hands-on support. Highly recommend their services.",
        name: "Hamza Tariq",
        role: "Operations Manager",
        company: "Green Valley Farms",
        image: "https://randomuser.me/api/portraits/men/31.jpg",
    },
    {
        quote:
            "Everlasting's services made our business smarter, not harder. The partnership has been valuable for both efficiency and growth.",
        name: "Mehwish Zafar",
        role: "COO",
        company: "Skyline Apparel",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
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
                    {testimonials.map(({ name, role, company, quote, image }, index) => (
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
                            className="relative grid grid-cols-[auto_1fr] gap-x-3 sm:gap-x-4 overflow-hidden border border-neutral-300 border-dashed p-4 sm:p-5 bg-white hover:shadow-md transition-all duration-300"
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
                                className="size-9 sm:size-10 md:size-11 rounded-full object-cover relative z-10"
                            />

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="-mt-0.5 -space-y-0.5">
                                    <p className="text-sm sm:text-base font-semibold text-neutral-800 font-generalsans">
                                        {name}
                                    </p>
                                    <span className="text-neutral-500 block text-[11px] sm:text-xs font-light tracking-tight font-generalsans">
                                        {role} at {company}
                                    </span>
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
