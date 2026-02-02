import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

// Services data with SVG paths and descriptions
const services = [
    {
        name: "HV A.C. , Electrical",
        description: "Expert HVAC and electrical solutions for residential and commercial projects. From installation to maintenance, ensuring efficiency and safety.",
        paths: [
            "M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5",
            "M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5",
            "M3 21l2.5 -2.5",
            "M18.5 5.5l2.5 -2.5",
            "M10 11l-2 2",
            "M13 14l-2 2",
        ],
    },
    {
        name: "Carpentry",
        description: "Bespoke carpentry solutions and custom fit-outs. Precision craftsmanship with premium materials tailored to your needs.",
        paths: [
            "M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5",
        ],
    },
    {
        name: "Data & CCTV",
        description: "Structured cabling, CCTV installations, and security solutions. Keeping your property secure and connected.",
        paths: [
            "M3 4a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -2",
            "M8 14a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",
            "M19 7v7a7 7 0 0 1 -14 0v-7",
            "M12 14l.01 0",
        ],
    },
    {
        name: "Plumbing",
        description: "Professional plumbing services covering pipe installations, repairs, and maintenance. Leak-free systems for every project.",
        paths: [
            "M10.2 10.2l6.3 6.3",
            "M19.347 16.575l1.08 1.079a1.96 1.96 0 0 1 -2.773 2.772l-1.08 -1.079a1.96 1.96 0 0 1 2.773 -2.772",
            "M3 7l3.05 3.15a2.9 2.9 0 0 0 4.1 -4.1l-3.15 -3.05",
        ],
    },
    {
        name: "Sanitary, Paint",
        description: "Professional painting, finishing, and sanitary solutions. Premium materials for residential and commercial projects.",
        paths: [
            "M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -2",
            "M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5l-5 0v2",
            "M10 16a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -4",
        ],
    },
    {
        name: "Kitchen Equipment",
        description: "Complete kitchen equipment installation and setup. Functional design with premium appliances and fixtures.",
        paths: [
            "M7 4v17m-3 -17v3a3 3 0 1 0 6 0v-3",
            "M14 8a3 4 0 1 0 6 0a3 4 0 1 0 -6 0",
            "M17 12v9",
        ],
    },
    {
        name: "Villa Renovation",
        description: "Full-scale villa renovation services. Transforming spaces with expert design, quality materials, and meticulous execution.",
        paths: [
            "M3 21h7v-3a2 2 0 0 1 4 0v3h7",
            "M6 21l0 -9",
            "M18 21l0 -9",
            "M6 12h12a3 3 0 0 0 3 -3a9 8 0 0 1 -9 -6a9 8 0 0 1 -9 6a3 3 0 0 0 3 3",
        ],
    },
    {
        name: "Annual Maintenance",
        description: "Comprehensive annual maintenance contracts (AMC) to ensure your building's systems operate seamlessly year-round.",
        paths: [
            "M8 21h-2a3 3 0 0 1 -3 -3v-1h5.5",
            "M17 8.5v-3.5a2 2 0 1 1 2 2h-2",
            "M19 3h-11a3 3 0 0 0 -3 3v11",
            "M9 7h4",
            "M9 11h4",
            "M18.42 12.61a2.1 2.1 0 0 1 2.97 2.97l-6.39 6.42h-3v-3l6.42 -6.39",
        ],
    },
];

// Animated SVG Icon Component
const ServiceIcon = ({ paths, isInView }: { paths: string[]; isInView: boolean }) => {
    return (
        <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center text-neutral-700 group-hover/service:text-blue-600 transition-colors duration-300">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full"
            >
                {paths.map((path, idx) => (
                    <motion.path
                        key={idx}
                        d={path}
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                        transition={{
                            duration: 0.4 + idx * 0.1,
                            delay: idx * 0.1,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
};

const ServiceCard = ({
    title,
    description,
    paths,
    index,
    isInView,
}: {
    title: string;
    description: string;
    paths: string[];
    index: number;
    isInView: boolean;
}) => {
    const navigate = useNavigate();

    return (
        <motion.div
            className={cn(
                "flex flex-col lg:border-r  relative group/service border-neutral-200",
                (index === 0 || index === 4) && "lg:border-l border-neutral-200",
                index < 4 && "lg:border-b border-neutral-200"
            )}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
                duration: 0.6,
                delay: 0.7 + (index * 0.1),
                ease: [0.25, 0.1, 0.25, 1]
            }}
        >
            {/* Gradient overlay on hover */}
            {index < 4 && (
                <div className="opacity-0 group-hover/service:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-linear-to-t from-neutral-100 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/service:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-linear-to-b from-neutral-100 to-transparent pointer-events-none" />
            )}

            {/* Icon */}
            <div className="mb-4 relative z-10 px-10">
                <ServiceIcon paths={paths} isInView={isInView} />
            </div>

            {/* Title with animated left border */}
            <div className="text-lg md:text-xl lg:text-2xl font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-8 group-hover/service:h-12 w-1 rounded-tr-full rounded-br-full bg-blue-200 group-hover/service:bg-blue-600 transition-all duration-200 origin-center" />
                <span className="group-hover/service:translate-x-2 transition duration-200 inline-block text-neutral-700 font-generalsans font-medium">
                    {title}
                </span>
                <div className="w-full h-px bg-white my-2 "></div>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base lg:text-lg text-neutral-600 max-w-sm relative z-10 px-10 mb-6 font-generalsans leading-tight">
                {description}
            </p>

            {/* Know More Button */}
            <div className="px-10 relative z-10">
                <button
                    onClick={() => navigate("/services")}
                    className="text-sm font-medium text-neutral-700 group-hover/service:text-blue-600 group-hover/service:translate-x-2 transition-all duration-200 inline-flex items-center gap-2 font-generalsans"
                >
                    Know More
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover/service:translate-x-1 transition-transform duration-200"
                    >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </motion.div>
    );
};

const ServicesHome = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const subheadingRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);

    const containerInView = useInView(containerRef, { once: false, amount: 0.1 });
    const headingInView = useInView(headingRef, { once: false, amount: 0.1 });
    const subheadingInView = useInView(subheadingRef, { once: false, amount: 0.1 });
    const textInView = useInView(textRef, { once: false, amount: 0.1 });
    const servicesInView = useInView(servicesRef, { once: false, amount: 0.1 });

    return (
        <section className="w-full relative">
            {/* Double line borders - Left */}
            <div
                className="absolute left-8 top-0 bottom-0"
                style={{
                    width: '3px',
                    borderLeft: '1px solid rgb(163 163 163)',
                    borderRight: '1px solid rgb(163 163 163)',
                }}
            ></div>

            {/* Double line borders - Right */}
            <div
                className="absolute right-8 top-0 bottom-0"
                style={{
                    width: '3px',
                    borderLeft: '1px solid rgb(163 163 163)',
                    borderRight: '1px solid rgb(163 163 163)',
                }}
            ></div>

            {/* Double line border - Bottom */}
            <div
                className="absolute left-8 right-8 bottom-0"
                style={{
                    height: '3px',
                    borderTop: '1px solid rgb(163 163 163)',
                    borderBottom: '1px solid rgb(163 163 163)',
                }}
            ></div>

            <div ref={containerRef} className="p-2 md:p-6 lg:p-12 pl-20 pr-20 pb-20">
                {/* Badge */}
                <motion.div
                    className="px-6 py-2 border border-neutral-300 border-dashed w-fit mb-3 md:mb-6 lg:mb-12"
                    style={{
                        background:
                            "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={containerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-light text-text-primary font-clashdisplay">Our Services</h2>
                </motion.div>

                {/* Heading */}
                <motion.h3
                    ref={headingRef}
                    className="text-xl md:text-2xl lg:text-4xl font-semibold text-neutral-800 font-generalsans mb-3 md:mb-4 lg:mb-6"
                    initial={{ opacity: 0, y: 60 }}
                    animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <span className="text-neutral-500 text-shadow-sm">Comprehensive Technical Solutions :</span> Expert Services Across Dubai & UAE
                </motion.h3>

                {/* Subheading */}
                <motion.h5
                    ref={subheadingRef}
                    className="text-lg md:text-xl lg:text-2xl font-normal text-neutral-600 font-generalsans mb-2 md:mb-3 lg:mb-4"
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={subheadingInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.3,
                        ease: [0.25, 0.1, 0.25, 1],
                        opacity: { duration: 0.6, delay: 0.3 },
                        y: { duration: 0.8, delay: 0.3 },
                        scale: { duration: 0.8, delay: 0.3 }
                    }}
                >
                    Delivering Excellence in Every Project.
                </motion.h5>

                {/* Small text */}
                <motion.p
                    ref={textRef}
                    className="text-sm md:text-base lg:text-lg font-normal text-neutral-600 font-generalsans mb-8 md:mb-10 lg:mb-12 max-w-3xl"
                    initial={{ opacity: 0, y: 40 }}
                    animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                >
                    From HVAC and electrical installations to plumbing, carpentry, and comprehensive maintenance solutions, we provide end-to-end technical services tailored to your needs. Our certified team ensures quality, safety, and reliability across all projects.
                </motion.p>

                {/* Services Grid */}
                <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.name}
                            description={service.description}
                            paths={service.paths}
                            index={index}
                            isInView={servicesInView}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesHome
