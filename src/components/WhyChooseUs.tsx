import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import WhyChooseUsImg from "@/assets/images/Home/whychooseus.svg";

// Accordion data
const accordionItems = [
    {
        id: 1,
        title: "Certified Technicians & Skilled Workforce",
        content: "Our team consists of trained and certified technicians with hands-on experience in MEP services, building maintenance, villa renovation, and commercial fit-out projects. We strictly follow UAE safety regulations and industry standards."
    },
    {
        id: 2,
        title: "Transparent Pricing with No Hidden Costs",
        content: "We believe in honest, upfront pricing. Our quotes are detailed and transparent, with no surprise charges. You'll know exactly what you're paying for before we begin any work."
    },
    {
        id: 3,
        title: "On-Time Project Execution & Reliable Support",
        content: "We understand the importance of deadlines. Our project management ensures timely completion while maintaining the highest quality standards. We provide reliable ongoing support for all our services."
    },
    {
        id: 4,
        title: "Dubai-Based Company Serving All Emirates",
        content: "As a Dubai-based company, we have deep local knowledge and understanding of the UAE market. We serve clients across all Emirates, providing consistent quality and service wherever you are."
    },
    {
        id: 5,
        title: "Flexible Annual Maintenance Contracts (AMC)",
        content: "We offer flexible Annual Maintenance Contracts tailored to your specific needs. Our AMC services ensure your systems operate efficiently year-round, preventing costly breakdowns and extending equipment lifespan."
    }
];

const AccordionItem = ({
    item,
    isOpen,
    onToggle,
    index,
    isInView
}: {
    item: typeof accordionItems[0];
    isOpen: boolean;
    onToggle: () => void;
    index: number;
    isInView: boolean;
}) => {
    return (
        <motion.div
            className="border-b border-neutral-200 border-dashed last:border-b-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
        >
            <button
                onClick={onToggle}
                className="w-full py-4 md:py-5 text-left flex items-center justify-between group  transition-colors duration-200 rounded-lg px-2 -mx-2 cursor-pointer group"
            >
                <h4 className="text-base md:text-lg lg:text-xl font-semibold text-neutral-800 font-generalsans pr-4   group-hover:translate-x-2 transition-all duration-300">
                    {item.title}
                </h4>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                >
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
                        className="text-neutral-600 group-hover:text-neutral-900 transition-colors"
                    >
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-sm md:text-base text-neutral-600 font-generalsans leading-relaxed pb-4 md:pb-5 px-2">
                            {item.content}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const WhyChooseUs = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const subheadingRef = useRef<HTMLHeadingElement>(null);
    const accordionRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

    const containerInView = useInView(containerRef, { once: false, amount: 0.1 });
    const headingInView = useInView(headingRef, { once: false, amount: 0.1 });
    const subheadingInView = useInView(subheadingRef, { once: false, amount: 0.1 });
    const accordionInView = useInView(accordionRef, { once: false, amount: 0.1 });
    const imageInView = useInView(imageRef, { once: false, amount: 0.1 });

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full relative overflow-visible">
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
                    <h2 className="text-2xl font-light text-text-primary font-clashdisplay">Why Choose Us</h2>
                </motion.div>

                {/* Main container - left side accordion, right side image */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 overflow-visible">
                    {/* Left side - Accordion */}
                    <div className="w-full md:w-2/3">
                        {/* Heading */}
                        <motion.h3
                            ref={headingRef}
                            className="text-xl md:text-2xl lg:text-4xl font-semibold text-neutral-800 font-generalsans mb-3 md:mb-4 lg:mb-6"
                            initial={{ opacity: 0, y: 60 }}
                            animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            <span className="text-neutral-500 text-shadow-sm">Why Clients Trust Us :</span> Your Partner for Excellence in Dubai & UAE
                        </motion.h3>

                        {/* Subheading */}
                        <motion.h5
                            ref={subheadingRef}
                            className="text-lg md:text-xl lg:text-2xl font-normal text-neutral-600 font-generalsans mb-6 md:mb-8"
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
                            Building Trust Through Quality & Reliability.
                        </motion.h5>

                        {/* Accordion */}
                        <div ref={accordionRef} className="space-y-2">
                            {accordionItems.map((item, index) => (
                                <AccordionItem
                                    key={item.id}
                                    item={item}
                                    isOpen={openIndex === index}
                                    onToggle={() => toggleAccordion(index)}
                                    index={index}
                                    isInView={accordionInView}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right side - Image */}
                    <motion.div
                        ref={imageRef}
                        className="w-full md:w-1/3  overflow-visible flex flex-col items-start justify-between gap-4"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                            delay: 0.4
                        }}
                    >
                        {/* Image */}
                        <img
                            src={WhyChooseUsImg}
                            alt="Why Choose Us"
                            className="w-full h-auto max-w-full object-contain rounded-lg"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />

                        <div className="flex flex-col items-start justify-between gap-4">
                            <div>
                                <div className="mb-2 border-b border-neutral-200 pb-2">
                                    <p className="text-sm md:text-base lg:text-lg font-normal text-neutral-600 font-generalsans">Say Hi @</p>
                                    <a href="mailto:info@everlastingtechnicalservices.com" className="text-text-primary font-generalsans font-medium text-base tracking-wide hover:text-blue-600 transition-all duration-300">everlastingtechnical@gmail.com</a>
                                </div>
                               
                                <div className="mb-2 border-b border-neutral-200 pb-2">
                                    <p className="text-sm md:text-base lg:text-lg font-normal text-neutral-600 font-generalsans">Say Hello @</p>
                                    <a href="tel:+971561234567" className="text-text-primary font-generalsans font-medium text-base tracking-wide hover:text-blue-600 transition-all duration-300">+971 56 123 4567</a>
                                </div>
                                
                            </div>
                            {/* cta button */}
                            <button className="bg-neutral-700 text-white px-4 py-2 rounded-md hover:bg-neutral-800 transition-all duration-300 font-generalsans font-medium text-base tracking-wide cursor-pointer">
                                <span>Contact Us Now</span>
                            </button>

                        </div>
                        
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
