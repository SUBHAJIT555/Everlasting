import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Services data with SVG paths, descriptions, and images
const services = [
    {
        id: "hv-ac-and-electrical",
        name: "HV A.C. , Electrical",
        description: "Our comprehensive HVAC and electrical services cover everything from initial design consultation to complete installation and ongoing maintenance. We specialize in energy-efficient air conditioning systems, including split units, central air systems, and VRF systems for commercial applications. Our certified electrical team handles everything from basic wiring and panel upgrades to complete electrical rewiring, smart home automation, and emergency electrical repairs. We ensure all installations comply with Dubai Municipality regulations and international safety standards, providing you with reliable, efficient, and safe systems that reduce energy consumption and operational costs.",
        image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop",
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
        id: "carpentry",
        name: "Carpentry",
        description: "Transform your spaces with our expert carpentry and custom fit-out services. We specialize in bespoke furniture design, custom kitchen cabinets, built-in wardrobes, and precision joinery work. Our skilled craftsmen work with premium materials including solid wood, engineered wood, and high-quality laminates to create functional and aesthetically pleasing solutions. From concept to completion, we handle everything including detailed measurements, 3D design visualization, material selection, and professional installation. Whether it's residential interiors, commercial office fit-outs, or specialized carpentry projects, we deliver exceptional craftsmanship that combines traditional techniques with modern design sensibilities.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        paths: [
            "M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5",
        ],
    },
    {
        id: "data-cctv",
        name: "Data & CCTV",
        description: "Keep your property secure and connected with our comprehensive data cabling and CCTV security solutions. We provide structured cabling systems for data networks, including Cat6 and Cat6a installations, fiber optic cabling, and network infrastructure setup for homes and businesses. Our CCTV services include HD and 4K camera installations, NVR systems, remote monitoring capabilities, and mobile app integration for real-time surveillance. We design and install complete security systems including access control, alarm systems, and intercom solutions. Our team ensures proper cable management, optimal camera placement for maximum coverage, and seamless integration with existing security infrastructure, providing you with peace of mind and enhanced protection.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        paths: [
            "M3 4a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -2",
            "M8 14a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",
            "M19 7v7a7 7 0 0 1 -14 0v-7",
            "M12 14l.01 0",
        ],
    },
    {
        id: "plumbing",
        name: "Plumbing",
        description: "Our professional plumbing services encompass the complete spectrum of water supply, drainage, and plumbing solutions. We handle new installations, repairs, and maintenance for residential, commercial, and industrial properties. Our services include hot and cold water supply systems, sewage and drainage installations, water heater setup and maintenance, pipe repairs and replacements, leak detection and fixing, bathroom and kitchen plumbing installations, and emergency plumbing services available 24/7. We use high-quality materials and modern techniques to ensure leak-free, efficient systems that meet Dubai's water and sanitation standards. Our certified plumbers are equipped with advanced tools for precise diagnostics and efficient repairs, minimizing disruption to your daily operations.",
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop",
        paths: [
            "M10.2 10.2l6.3 6.3",
            "M19.347 16.575l1.08 1.079a1.96 1.96 0 0 1 -2.773 2.772l-1.08 -1.079a1.96 1.96 0 0 1 2.773 -2.772",
            "M3 7l3.05 3.15a2.9 2.9 0 0 0 4.1 -4.1l-3.15 -3.05",
        ],
    },
    {
        id: "sanitary-paint",
        name: "Sanitary, Paint",
        description: "Elevate your spaces with our professional painting, finishing, and sanitary solutions. Our painting services include interior and exterior painting, decorative finishes, texture applications, and protective coatings. We work with premium paints and finishes suitable for Dubai's climate, ensuring durability and resistance to heat and humidity. Our sanitary solutions cover complete bathroom installations, including fixtures, fittings, tiles, and accessories. We provide expert tiling work, grouting, waterproofing, and bathroom renovation services. Our team ensures proper surface preparation, precise application techniques, and clean finishes that enhance the aesthetic appeal and value of your property. We use eco-friendly materials and follow best practices for indoor air quality and environmental safety.",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
        paths: [
            "M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -2",
            "M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5l-5 0v2",
            "M10 16a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -4",
        ],
    },
    {
        id: "kitchen-equipment",
        name: "Kitchen Equipment",
        description: "Create functional and beautiful kitchens with our complete kitchen equipment installation and setup services. We handle everything from kitchen design consultation to full installation of appliances, cabinets, countertops, and fixtures. Our services include installation of cooking equipment, refrigeration units, dishwashers, exhaust systems, and water filtration systems. We work with leading brands and ensure proper electrical and plumbing connections, ventilation requirements, and safety compliance. Our team provides detailed planning, precise measurements, and professional installation that maximizes kitchen efficiency and functionality. We also offer kitchen renovation services, including cabinet refacing, countertop replacement, and complete kitchen makeovers tailored to your lifestyle and preferences.",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop",
        paths: [
            "M7 4v17m-3 -17v3a3 3 0 1 0 6 0v-3",
            "M14 8a3 4 0 1 0 6 0a3 4 0 1 0 -6 0",
            "M17 12v9",
        ],
    },
    {
        id: "villa-renovation",
        name: "Villa Renovation",
        description: "Transform your villa into a modern masterpiece with our comprehensive renovation services. We provide end-to-end villa renovation solutions covering all aspects of home improvement, from initial design consultation to final finishing touches. Our services include structural modifications, complete interior and exterior renovations, flooring and ceiling work, wall treatments, lighting design and installation, and landscaping. We handle villa expansions, room additions, and complete makeovers while ensuring compliance with local building regulations. Our team coordinates all trades including MEP, carpentry, painting, and finishing work, ensuring seamless execution and timely completion. We work closely with you to understand your vision, provide detailed project plans, and deliver exceptional results that enhance both the functionality and aesthetic appeal of your villa.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
        paths: [
            "M3 21h7v-3a2 2 0 0 1 4 0v3h7",
            "M6 21l0 -9",
            "M18 21l0 -9",
            "M6 12h12a3 3 0 0 0 3 -3a9 8 0 0 1 -9 -6a9 8 0 0 1 -9 6a3 3 0 0 0 3 3",
        ],
    },
    {
        id: "annual-maintenance",
        name: "Annual Maintenance",
        description: "Ensure optimal performance and longevity of your building systems with our comprehensive Annual Maintenance Contracts (AMC). Our AMC services cover all MEP systems including HVAC, electrical, plumbing, and fire safety systems. We provide scheduled preventive maintenance visits, emergency response services, system inspections, cleaning and servicing, parts replacement, and detailed maintenance reports. Our maintenance programs are designed to prevent breakdowns, reduce energy consumption, extend equipment lifespan, and ensure compliance with safety regulations. We offer flexible contract options tailored to your needs, from basic maintenance to comprehensive coverage including 24/7 emergency support. Our certified technicians use advanced diagnostic tools and follow manufacturer guidelines to keep your systems running efficiently, saving you time, money, and ensuring uninterrupted operations throughout the year.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
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
        <div className="relative flex items-center justify-center text-neutral-700 transition-colors duration-300 shrink-0" style={{ width: '1em', height: '1em', fontSize: 'inherit' }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
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
                        strokeWidth="1"
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

// Parallax Services Component
type ServiceType = {
    id: string;
    name: string;
    description: string;
    image: string;
    paths: string[];
};

const ParallaxServices = ({ services }: { services: ServiceType[] }) => {
    const navigate = useNavigate();
    const sectionRef0 = useRef<HTMLDivElement>(null);
    const sectionRef1 = useRef<HTMLDivElement>(null);
    const sectionRef2 = useRef<HTMLDivElement>(null);
    const sectionRef3 = useRef<HTMLDivElement>(null);
    const sectionRef4 = useRef<HTMLDivElement>(null);
    const sectionRef5 = useRef<HTMLDivElement>(null);
    const sectionRef6 = useRef<HTMLDivElement>(null);
    const sectionRef7 = useRef<HTMLDivElement>(null);

    const sectionRefs = [sectionRef0, sectionRef1, sectionRef2, sectionRef3, sectionRef4, sectionRef5, sectionRef6, sectionRef7];

    // Create scroll progress for each section
    const scrollYProgress0 = useScroll({
        target: sectionRef0,
        offset: ["start end", "center start"]
    }).scrollYProgress;

    const scrollYProgress1 = useScroll({
        target: sectionRef1,
        offset: ["start end", "center start"]
    }).scrollYProgress;

    const scrollYProgress2 = useScroll({
        target: sectionRef2,
        offset: ["start end", "center start"]
    }).scrollYProgress;

    const scrollYProgress3 = useScroll({
        target: sectionRef3,
        offset: ["start end", "center start"]
    }).scrollYProgress;

    const scrollYProgress4 = useScroll({
        target: sectionRef4,
        offset: ["start end", "center start"]
    }).scrollYProgress;

    const scrollYProgress5 = useScroll({
        target: sectionRef5,
        offset: ["start end", "center start"]
    }).scrollYProgress;

    const scrollYProgress6 = useScroll({
        target: sectionRef6,
        offset: ["start end", "center start"]
    }).scrollYProgress;

    const scrollYProgress7 = useScroll({
        target: sectionRef7,
        offset: ["start end", "center start"]
    }).scrollYProgress;

    const opacity0 = useTransform(scrollYProgress0, [0, 0.7], [0, 1]);
    const opacity1 = useTransform(scrollYProgress1, [0, 0.7], [0, 1]);
    const opacity2 = useTransform(scrollYProgress2, [0, 0.7], [0, 1]);
    const opacity3 = useTransform(scrollYProgress3, [0, 0.7], [0, 1]);
    const opacity4 = useTransform(scrollYProgress4, [0, 0.7], [0, 1]);
    const opacity5 = useTransform(scrollYProgress5, [0, 0.7], [0, 1]);
    const opacity6 = useTransform(scrollYProgress6, [0, 0.7], [0, 1]);
    const opacity7 = useTransform(scrollYProgress7, [0, 0.7], [0, 1]);

    const clip0 = useTransform(scrollYProgress0, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
    const clip1 = useTransform(scrollYProgress1, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
    const clip2 = useTransform(scrollYProgress2, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
    const clip3 = useTransform(scrollYProgress3, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
    const clip4 = useTransform(scrollYProgress4, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
    const clip5 = useTransform(scrollYProgress5, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
    const clip6 = useTransform(scrollYProgress6, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
    const clip7 = useTransform(scrollYProgress7, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);

    const translate0 = useTransform(scrollYProgress0, [0, 1], [-50, 0]);
    const translate1 = useTransform(scrollYProgress1, [0, 1], [-50, 0]);
    const translate2 = useTransform(scrollYProgress2, [0, 1], [-50, 0]);
    const translate3 = useTransform(scrollYProgress3, [0, 1], [-50, 0]);
    const translate4 = useTransform(scrollYProgress4, [0, 1], [-50, 0]);
    const translate5 = useTransform(scrollYProgress5, [0, 1], [-50, 0]);
    const translate6 = useTransform(scrollYProgress6, [0, 1], [-50, 0]);
    const translate7 = useTransform(scrollYProgress7, [0, 1], [-50, 0]);

    const opacityContents = [opacity0, opacity1, opacity2, opacity3, opacity4, opacity5, opacity6, opacity7];
    const clipProgresses = [clip0, clip1, clip2, clip3, clip4, clip5, clip6, clip7];
    const translateContents = [translate0, translate1, translate2, translate3, translate4, translate5, translate6, translate7];

    return (
        <div className="flex flex-col md:px-0 px-4 sm:px-6">
            {services.map((service: ServiceType, index: number) => (
                <div
                    key={index}
                    id={service.id}
                    ref={sectionRefs[index]}
                    className={`min-h-screen flex flex-col md:flex-row items-center justify-center md:gap-16 lg:gap-20 gap-8 py-12 sm:py-16 md:py-24 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                    {/* Content Section */}
                    <motion.div
                        style={{ y: translateContents[index] }}
                        className="flex flex-col w-full md:w-1/2 max-w-2xl"
                    >
                        {/* Service Name with Icon */}
                        <h4 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-semibold text-neutral-900 font-generalsans mb-12 sm:mb-10 leading-tight flex items-center gap-3 sm:gap-4">
                            <ServiceIcon paths={service.paths} isInView={true} />
                            <span>{service.name}</span>
                        </h4>

                        {/* Description */}
                        <motion.p
                            style={{ y: translateContents[index] }}
                            className="text-base sm:text-lg md:text-lg lg:text-xl text-neutral-600 font-generalsans leading-tight md:leading-tight lg:leading-relaxed mb-4 sm:mb-6"
                        >
                            {service.description}
                        </motion.p>

                        {/* Image Section - Mobile Only (after description) */}
                        <motion.div
                            style={{
                                opacity: opacityContents[index],
                                clipPath: clipProgresses[index],
                            }}
                            className="relative w-full flex justify-center mb-4 sm:mb-6 md:hidden"
                        >
                            <img
                                src={service.image}
                                className="w-full max-w-md h-auto object-cover shadow-lg"
                                alt={service.name}
                            />
                        </motion.div>

                        {/* Explore Button - Mobile Only (after image) */}
                        <motion.button
                            className="w-fit px-6 sm:px-8 py-3 sm:py-3.5 bg-neutral-700 text-white rounded-md font-medium text-sm sm:text-base font-generalsans hover:bg-neutral-800 transition-all duration-300 flex items-center justify-center gap-2 group/button md:hidden"

                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate("/contact-us")}
                        >
                            Contact Us Now
                            <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                        </motion.button>

                        {/* Explore Button - Desktop Only */}
                        <motion.button
                            className="hidden md:flex w-fit px-6 sm:px-8 py-3 sm:py-3.5 bg-neutral-700 text-white rounded-md font-medium text-sm sm:text-base font-generalsans hover:bg-neutral-800 transition-all duration-300 items-center justify-center gap-2 group/button"

                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate("/contact-us")}
                        >
                            Contact Us Now
                            <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                        </motion.button>
                    </motion.div>

                    {/* Image Section - Desktop Only */}
                    <motion.div
                        style={{
                            opacity: opacityContents[index],
                            clipPath: clipProgresses[index],
                        }}
                        className="hidden md:flex relative w-full md:w-1/2 justify-center"
                    >
                        <img
                            src={service.image}
                            className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-cover "
                            alt={service.name}
                        />
                    </motion.div>
                </div>
            ))}
        </div>
    );
};

const ServicesVarity = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);


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
                className="p-4 sm:p-6 md:p-8 lg:p-12 pl-4 sm:pl-6 md:pl-12 lg:pl-20 pr-4 sm:pr-6 md:pr-12 lg:pr-20 pb-8 sm:pb-12 md:pb-16 lg:pb-20"
            >
                {/* Badge */}
                <motion.div
                    className="px-4 sm:px-6 py-2 border border-neutral-300 border-dashed w-fit mb-3 md:mb-6 lg:mb-12"
                    style={{
                        background:
                            "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                    }}

                >
                    <h2 className="text-lg sm:text-xl md:text-2xl font-light text-text-primary font-clashdisplay">
                        Our Services
                    </h2>
                </motion.div>

                {/* Heading */}
                <motion.h3
                    ref={headingRef}
                    className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-neutral-800 font-generalsans mb-3 md:mb-4 lg:mb-6 leading-tight"
                    initial={{ opacity: 0, y: 60 }}
                    animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    Comprehensive Technical Solutions for Every Need
                </motion.h3>

                {/* Description */}
                <motion.p
                    ref={descriptionRef}
                    className="text-sm sm:text-base md:text-base lg:text-lg font-normal text-neutral-600 font-generalsans mb-8 md:mb-10 lg:mb-12 text-left md:text-justify leading-relaxed"
                    initial={{ opacity: 0, y: 40 }}
                    animate={descriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                >
                    From MEP installations to annual maintenance, we deliver expert technical services across Dubai & UAE. Our certified technicians ensure quality, reliability, and 24/7 support for all your technical needs.
                </motion.p>

                {/* Parallax Scroll Sections */}
                <ParallaxServices services={services} />
            </div>
        </section>
    );
};

export default ServicesVarity;
