import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCallbackModalStore } from "@/components/store/callbackModalStore";

const CallToAction = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const openCallbackModal = useCallbackModalStore((state) => state.openModal);

    const containerInView = useInView(containerRef, { once: false, amount: 0.1 });
    const contentInView = useInView(contentRef, { once: false, amount: 0.1 });

    return (
        <section className="w-full relative mb-10 sm:mb-16 md:mb-20 overflow-visible">
            <div ref={containerRef} className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
                <motion.div
                    ref={contentRef}
                    className="relative mx-auto flex w-full max-w-4xl flex-col justify-between gap-y-4 sm:gap-y-5 md:gap-y-6 border-y border-neutral-200 bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12"
                    style={{
                        background: 'radial-gradient(35% 80% at 25% 0%, rgba(163, 163, 163, 0.08), transparent), white'
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={containerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Plus Icons at corners */}
                    <svg
                        className="absolute top-[-10px] sm:top-[-12px] left-[-9px] sm:left-[-11px] z-10 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                    </svg>
                    <svg
                        className="absolute top-[-10px] sm:top-[-12px] right-[-9px] sm:right-[-11px] z-10 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                    </svg>
                    <svg
                        className="absolute bottom-[-10px] sm:bottom-[-12px] left-[-9px] sm:left-[-11px] z-10 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                    </svg>
                    <svg
                        className="absolute right-[-9px] sm:right-[-11px] bottom-[-10px] sm:bottom-[-12px] z-10 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                    </svg>

                    {/* Vertical borders */}
                    <div className="absolute -inset-y-4 sm:-inset-y-5 md:-inset-y-6 pointer-events-none left-0 w-px border-l border-neutral-200" />
                    <div className="absolute -inset-y-4 sm:-inset-y-5 md:-inset-y-6 pointer-events-none right-0 w-px border-r border-neutral-200" />

                    {/* Dashed center line - hidden on mobile, visible on tablet and up */}
                    <div className="hidden md:block absolute top-0 left-1/2 h-full border-l border-dashed border-neutral-200 -z-10" style={{ transform: 'translateX(-50%)' }} />

                    {/* Content */}
                    <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
                        <motion.h2
                            className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-neutral-800 font-generalsans leading-tight sm:leading-snug md:leading-normal"
                            initial={{ opacity: 0, y: 20 }}
                            animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Ready to Transform Your Space?
                        </motion.h2>
                        <motion.p
                            className="text-center text-neutral-600 font-generalsans text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Get expert MEP solutions, professional installations, and reliable maintenance services across Dubai & UAE. Our certified technicians are ready to bring your vision to life.
                        </motion.p>
                    </div>

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-3 md:gap-4 w-full sm:w-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <button
                            onClick={() => navigate("/contact-us")}
                            className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-transparent border-2 border-neutral-300 text-neutral-700 font-generalsans font-medium text-sm sm:text-base rounded-md hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-300 cursor-pointer"
                        >
                            Contact Us
                        </button>
                        <button
                            onClick={() => openCallbackModal()}
                            className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-neutral-700 text-white font-generalsans font-medium text-sm sm:text-base rounded-md hover:bg-neutral-800 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                        >
                            Request Call Back
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="sm:w-5 sm:h-5"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;
