import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone} from "lucide-react";

const ContactAddress = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const addressRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const containerInView = useInView(containerRef, { once: false, amount: 0.1 });
    const headingInView = useInView(headingRef, { once: false, amount: 0.1 });
    const addressInView = useInView(addressRef, { once: false, amount: 0.1 });
    const contactInView = useInView(contactRef, { once: false, amount: 0.1 });

    return (
        <section className="w-full relative mt-10 ">
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
                className="relative p-4 sm:p-6 md:p-8 lg:p-12 pl-4 sm:pl-6 md:pl-12 lg:pl-20 pr-4 sm:pr-6 md:pr-12 lg:pr-20 pb-8 sm:pb-12 md:pb-16 lg:pb-20 max-w-7xl mx-auto"
            >
                {/* Main Heading */}
                <motion.h2
                    ref={headingRef}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutra-700 font-generalsans mb-6 sm:mb-8 uppercase tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    PLEASE REACH OUT TO US
                </motion.h2>

                {/* Introductory Text */}
                <motion.div
                    className="mb-8 sm:mb-10 md:mb-12  mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={containerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className="text-base sm:text-lg md:text-xl text-neutral-700 font-generalsans mb-4 leading-relaxed">
                        We're here to help you with your MEP solutions, technical services, and maintenance needs.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl text-neutral-700 font-generalsans leading-relaxed">
                        Reach out to our team for personalized solutions tailored to your needs.
                    </p>
                </motion.div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
                    {/* Left Column - Address & Map */}
                    <motion.div
                        ref={addressRef}
                        className="flex flex-col"
                        initial={{ opacity: 0, x: -30 }}
                        animate={addressInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {/* Our Address Section */}
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-700 font-generalsans mb-4 sm:mb-6">
                            Our Address :
                        </h3>
                        <div className="text-base sm:text-lg md:text-xl text-neutral-800 font-generalsans mb-6 sm:mb-8 space-y-2">
                            <p>Everlasting Technical Services LLP</p>
                            <p>Office No-111, Al Makteb building</p>
                            <p>Al quoz - 3, Dubai, UAE.</p>
                        </div>

                        {/* Embedded Google Map */}
                        <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden border border-neutral-300 border-dashed">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.198509554!2d55.2408!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwMTQnMjYuOSJF!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            />
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Info & Social */}
                    <motion.div
                        ref={contactRef}
                        className="flex flex-col"
                        initial={{ opacity: 0, x: 30 }}
                        animate={contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {/* Contact Information Section */}
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-700 font-generalsans mb-4 sm:mb-6">
                            Contact Information :
                        </h3>
                        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                            {/* Email */}
                            <div className="flex items-start gap-3 sm:gap-4 group">
                                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-700 shrink-0 mt-1" />
                                <div className="flex-1">
                                    <p className="text-neutral-500 font-generalsans mb-1">
                                        Text Hi @
                                    </p>
                                    <a
                                        href="mailto:info@everlastingtechnical.com"
                                        className="text-base sm:text-lg md:text-xl text-neutral-700 font-generalsans hover:text-blue-600 transition-colors"
                                    >
                                        info@everlastingtechnical.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-3 sm:gap-4 group">
                                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-700 shrink-0 mt-1" />
                                <div className="flex-1">
                                    <p className="text-neutral-500 font-generalsans mb-1">
                                        Say Hello @
                                    </p>
                                    <a
                                        href="tel:+971554684988"
                                        className="text-base sm:text-lg md:text-xl text-neutral-700 font-generalsans hover:text-blue-600 transition-colors"
                                    >
                                        +971 55 468 4988
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Follow Us On Section */}
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-700 font-generalsans mb-4 sm:mb-6">
                            Follow Us On :
                        </h3>
                        <div className="space-y-3 sm:space-y-4">
                            {/* LinkedIn */}
                            <div className="flex items-center gap-3 sm:gap-4">
                                
                                <a
                                    href="https://linkedin.com/company/everlasting-technical-services"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base sm:text-lg md:text-xl text-neutral-800 font-generalsans hover:text-blue-600 transition-colors flex items-center gap-2 md:gap-3 lg:gap-4"
                                >
                                    <div className="text-neutral-500 font-generalsans mb-1 bg-white shadow-md px-2 py-1 rounded-md"><p>in</p> </div> 
                                    LinkedIn
                                </a>
                                
                            </div>

                            {/* Instagram */}
                            <div className="flex items-center gap-3 sm:gap-4">

                                <a
                                    href="https://instagram.com/everlastingtechnical"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base sm:text-lg md:text-xl text-neutral-800 font-generalsans hover:text-blue-600 transition-colors flex items-center gap-2 md:gap-3 lg:gap-4"
                                >
                                    <div className="text-neutral-500 font-generalsans mb-1 bg-white shadow-md px-2 py-1 rounded-md"><p>ig</p> </div>
                                    Instagram
                                </a>

                            </div>

                            {/* Facebook */}
                            <div className="flex items-center gap-3 sm:gap-4">

                                <a
                                    href="https://facebook.com/everlastingtechnical"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base sm:text-lg md:text-xl text-neutral-800 font-generalsans hover:text-blue-600 transition-colors flex items-center gap-2 md:gap-3 lg:gap-4"
                                >
                                    <div className="text-neutral-500 font-generalsans mb-1 bg-white shadow-md px-2 py-1 rounded-md"><p>fb</p> </div>
                                    Facebook
                                </a>

                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactAddress;
