import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AboutImg from "@/assets/images/Home/aboutbrand.svg";

const AboutHome = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const subheadingRef = useRef<HTMLHeadingElement>(null);
    const paragraphsRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    const containerInView = useInView(containerRef, { once: false, amount: 0.1 });
    const headingInView = useInView(headingRef, { once: false, amount: 0.1 });
    const subheadingInView = useInView(subheadingRef, { once: false, amount: 0.1 });
    const paragraphsInView = useInView(paragraphsRef, { once: false, amount: 0.1 });
    const imageInView = useInView(imageRef, { once: false, amount: 0.1 });
    return (
        <section className="w-full relative mt-10">

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
                    <h2 className="text-lg sm:text-xl md:text-2xl font-light text-text-primary font-clashdisplay">About The Brand</h2>
                </motion.div>

                {/* main contener left side content right side image  */}
                <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16">
                    <div className="w-full md:w-2/3">
                        {/* Heading - from bottom, fade in */}
                        <motion.h3
                            ref={headingRef}
                            className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-neutral-800 font-generalsans mb-3 md:mb-4 lg:mb-6 leading-tight"
                            initial={{ opacity: 0, y: 60 }}
                            animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            <span className="text-neutral-500 text-shadow-sm block sm:inline">Everlasting Technical Services :</span>{" "}
                            <span className="block sm:inline">Your Trusted Partner for Technical Excellence in Dubai & UAE</span>
                        </motion.h3>

                        {/* Subheading - stagger effect with more pronounced animation */}
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
                            Powering Progress, Building Trust.
                        </motion.h5>

                        {/* Paragraphs - from bottom, opacity 0 to 100 */}
                        <div ref={paragraphsRef}>
                            <motion.p
                                className="text-sm sm:text-base md:text-base lg:text-lg font-normal text-neutral-600 font-generalsans text-left md:text-justify leading-relaxed"
                                initial={{ opacity: 0, y: 40 }}
                                animate={paragraphsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                            >
                                <span className="font-medium">Everlasting Technical Services LLC</span> stands as a benchmark of technical expertise and reliability in Dubai and throughout the UAE. <span className="font-medium">Specializing in MEP</span> <span className="underline">(Mechanical, Electrical, and Plumbing)</span> solutions, our brand is fueled by an unwavering passion for quality and a progressive approach that incorporates the latest technologies and best practices in the industry. We pride ourselves on our versatility, offering comprehensive services for residential, commercial, and industrial sectors, always tailored to the unique requirements of each project.
                            </motion.p>

                            <motion.p
                                className="text-sm sm:text-base md:text-base lg:text-lg font-normal text-neutral-600 font-generalsans text-left md:text-justify mt-4 leading-relaxed"
                                initial={{ opacity: 0, y: 40 }}
                                animate={paragraphsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                                transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                            >
                                Our distinguished team of certified technicians and skilled professionals brings together a wealth of experience to every assignment, ensuring meticulous attention to detail and strict adherence to the highest standards of safety, sustainability, and excellence. Whether managing full-scale HVAC installations, complete electrical works, advanced plumbing systems, or complex villa renovations, Everlasting Technical Services is committed to delivering solutions that foster long-term partnerships, build customer trust, and enhance the quality and efficiency of the built environment across the UAE.
                            </motion.p>
                        </div>

                        <motion.div
                            className="flex justify-start md:justify-end mt-4 md:mt-6 lg:mt-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={paragraphsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                        >
                            <button className="bg-neutral-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-md hover:bg-neutral-800 transition-all duration-300 font-generalsans font-medium text-sm sm:text-base tracking-wide cursor-pointer w-full sm:w-auto">
                                Contact Us Now
                            </button>
                        </motion.div>
                    </div>

                    {/* Image - popup with elastic effect */}
                    <motion.div
                        ref={imageRef}
                        className="w-full md:w-1/3 flex items-center justify-center md:justify-end"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                            delay: 0.4
                        }}
                    >
                        <img src={AboutImg} alt="About The Brand" className="w-full max-w-xs sm:max-w-sm md:max-w-none h-auto object-contain" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AboutHome