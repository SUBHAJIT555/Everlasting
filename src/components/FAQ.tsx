import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// FAQ data
const faqItems = [
    {
        id: 1,
        question: "What services does Everlasting Technical Services offer?",
        answer: "We offer comprehensive MEP (Mechanical, Electrical, and Plumbing) solutions including HVAC installations, electrical works, plumbing systems, carpentry, CCTV installations, villa renovations, kitchen equipment setup, and annual maintenance contracts (AMC) across Dubai and UAE."
    },
    {
        id: 2,
        question: "Are your technicians certified and qualified?",
        answer: "Yes, all our technicians are certified and trained professionals with hands-on experience in their respective fields. We strictly follow UAE safety regulations and industry standards, ensuring quality and safety in every project."
    },
    {
        id: 3,
        question: "Do you provide services across all Emirates?",
        answer: "Yes, as a Dubai-based company, we serve clients across all Emirates in the UAE. We have the capability and resources to deliver consistent quality and service wherever you are located."
    },
    {
        id: 4,
        question: "What is your pricing structure?",
        answer: "We believe in transparent pricing with no hidden costs. Our quotes are detailed and upfront, so you know exactly what you're paying for before we begin any work. Pricing varies based on project scope and requirements."
    },
    {
        id: 5,
        question: "Do you offer Annual Maintenance Contracts (AMC)?",
        answer: "Yes, we offer flexible Annual Maintenance Contracts tailored to your specific needs. Our AMC services ensure your building's systems operate efficiently year-round, preventing costly breakdowns and extending equipment lifespan."
    },
    {
        id: 6,
        question: "How quickly can you respond to service requests?",
        answer: "We understand the importance of timely service. Our team is committed to quick response times and on-time project execution. Response times vary based on the nature and urgency of the request."
    },
    {
        id: 7,
        question: "What types of projects do you handle?",
        answer: "We handle projects of all sizes - from residential villa renovations and apartment maintenance to commercial fit-outs and industrial installations. Our services are tailored to meet the unique requirements of each project."
    },
    {
        id: 8,
        question: "Do you provide warranties on your work?",
        answer: "Yes, we stand behind our work with appropriate warranties. The warranty period depends on the type of service and work performed. We ensure quality craftsmanship and reliable solutions for long-term satisfaction."
    }
];

const FAQItem = ({
    item,
    isOpen,
    onToggle,
    index,
    isInView
}: {
    item: typeof faqItems[0];
    isOpen: boolean;
    onToggle: () => void;
    index: number;
    isInView: boolean;
}) => {
    return (
        <motion.div
            className="border-b border-neutral-200 border-dashed  last:border-b-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
        >
            <button
                onClick={onToggle}
                className="w-full py-3 sm:py-4 md:py-5 text-left flex items-center justify-between group cursor-pointer transition-colors duration-200 rounded-lg px-2 -mx-2"
            >
                <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-neutral-800 font-generalsans pr-4 group-hover:translate-x-2 transition-all duration-300 text-left">
                    {item.question}
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
                        <p className="text-sm sm:text-base md:text-base text-neutral-600 font-generalsans leading-relaxed pb-4 md:pb-5 px-2">
                            {item.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const subheadingRef = useRef<HTMLParagraphElement>(null);
    const accordionRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

    const containerInView = useInView(containerRef, { once: false, amount: 0.1 });
    const headingInView = useInView(headingRef, { once: false, amount: 0.1 });
    const subheadingInView = useInView(subheadingRef, { once: false, amount: 0.1 });
    const accordionInView = useInView(accordionRef, { once: false, amount: 0.1 });

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full relative mt-10 mb-20 overflow-visible">
            {/* Double line border - Top */}
            <div
                className="absolute left-0 right-0 top-0"
                style={{
                    height: '8px',
                    borderTop: '1px solid #E5E5E5',
                    borderBottom: '1px solid #E5E5E5',
                    background:
                        "repeating-linear-gradient(135deg, #E5E5E5 0px, #E5E5E5 1px, transparent 1px, transparent 4px), white",
                }}
            ></div>

            {/* Double line borders - Left */}
            <div
                className="absolute md:left-8 left-0 top-0 bottom-0"
                style={{
                    width: '8px',
                    borderLeft: '1px solid #E5E5E5',
                    borderRight: '1px solid #E5E5E5',
                    background:
                        "repeating-linear-gradient(135deg, #E5E5E5 0px, #E5E5E5 1px, transparent 1px, transparent 4px), white",
                }}
            ></div>

            {/* Double line borders - Right */}
            <div
                className="absolute md:right-8 right-0 top-0 bottom-0"
                style={{
                    width: '8px',
                    borderLeft: '1px solid #E5E5E5',
                    borderRight: '1px solid #E5E5E5',
                    background:
                        "repeating-linear-gradient(135deg, #E5E5E5 0px, #E5E5E5 1px, transparent 1px, transparent 4px), white",
                }}
            ></div>

            {/* Double line border - Bottom */}
            <div
                className="absolute left-0 right-0 bottom-0"
                style={{
                    height: '8px',
                    borderTop: '1px solid #E5E5E5',
                    borderBottom: '1px solid #E5E5E5',
                    background:
                        "repeating-linear-gradient(135deg, #E5E5E5 0px, #E5E5E5 1px, transparent 1px, transparent 4px), white",
                }}
            ></div>

            <div ref={containerRef} className="p-4 sm:p-6 md:p-8 lg:p-12 pl-4 sm:pl-6 md:pl-12 lg:pl-20 pr-4 sm:pr-6 md:pr-12 lg:pr-20 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
                {/* Badge */}
                <motion.div
                    className="px-4 sm:px-6 py-2 border border-neutral-300 border-dashed w-fit mb-3 md:mb-6 lg:mb-12"
                    style={{
                        background:
                            "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={containerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-lg sm:text-xl md:text-2xl font-light text-text-primary font-clashdisplay">FAQ</h2>
                </motion.div>

                {/* Main container - left side content, right side accordion */}
                <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 overflow-visible">
                    {/* Left side - Content */}
                    <div className="w-full md:w-1/2 lg:w-2/5">
                        {/* Heading */}
                        <motion.h3
                            ref={headingRef}
                            className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-neutral-800 font-generalsans mb-3 md:mb-4 lg:mb-6 leading-tight"
                            initial={{ opacity: 0, y: 60 }}
                            animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            <span className="text-neutral-500 text-shadow-sm block sm:inline">Frequently Asked Questions :</span>{" "}
                            <span className="block sm:inline">Everything You Need to Know</span>
                        </motion.h3>

                        {/* Description */}
                        <motion.p
                            ref={subheadingRef}
                            className="text-sm sm:text-base md:text-base lg:text-lg font-normal text-neutral-600 font-generalsans mb-6 md:mb-8 leading-relaxed text-left md:text-justify"
                            initial={{ opacity: 0, y: 40 }}
                            animate={subheadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                        >
                            Find answers to common questions about our services, processes, and what makes Everlasting Technical Services your trusted partner for technical excellence in Dubai & UAE.
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={subheadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                        >
                            <button
                                onClick={() => navigate("/contact-us")}
                                className="bg-neutral-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-neutral-800 transition-all duration-300 font-generalsans font-medium text-sm sm:text-base tracking-wide cursor-pointer inline-flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start"
                            >
                                Any questions? Reach out
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </button>
                        </motion.div>
                    </div>

                    {/* Right side - Accordion */}
                    <div className="w-full md:w-1/2 lg:w-3/5">
                        <div ref={accordionRef} className="space-y-2">
                            {faqItems.map((item, index) => (
                                <FAQItem
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
                </div>
            </div>
        </section>
    );
};

export default FAQ;
