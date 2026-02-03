import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ContactForm = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const leftColumnRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);


    const headingInView = useInView(headingRef, { once: false, amount: 0.1 });
    const leftColumnInView = useInView(leftColumnRef, { once: false, amount: 0.1 });
    const formInView = useInView(formRef, { once: false, amount: 0.1 });

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        interest: "",
        startDate: "",
        standDetails: "",
        consent: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    return (
        <section className="w-full relative my-10">
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
                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
                    {/* Left Column - Heading, Description & Features */}
                    <motion.div
                        ref={leftColumnRef}
                        className="flex flex-col"
                        initial={{ opacity: 0, x: -30 }}
                        animate={leftColumnInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Main Heading */}
                        <motion.h2
                            ref={headingRef}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-700 font-generalsans mb-4 sm:mb-6 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6 }}
                        >
                            LET'S START YOUR PROJECT:
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            className="text-base sm:text-lg md:text-xl text-neutral-700 font-generalsans mb-6 sm:mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={leftColumnInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            We're here to help you with your MEP solutions, technical services, and maintenance needs. Reach out to our{" "}
                            <a href="/services" className="font-semibold">
                                expert team
                            </a>{" "}
                            for personalized solutions tailored to your needs across Dubai & UAE.
                        </motion.p>

                        {/* Features */}
                        <div className="space-y-4 sm:space-y-6">
                            {/* Certified Technicians */}
                            <motion.div
                                className="p-4 sm:p-5 border border-neutral-300 border-dashed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={leftColumnInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                style={{
                                    background:
                                        "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                                }}
                            >
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold  text-neutral-700 font-generalsans mb-2">
                                    Certified Technicians
                                </h3>
                                <p className="text-sm sm:text-base text-neutral-600 font-generalsans">
                                    Licensed and experienced professionals
                                </p>
                            </motion.div>

                            {/* 24/7 Support */}
                            <motion.div
                                className="p-4 sm:p-5 border border-neutral-300 border-dashed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={leftColumnInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                style={{
                                    background:
                                        "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                                }}
                            >
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold  text-neutral-700 font-generalsans mb-2">
                                    24/7 Support
                                </h3>
                                <p className="text-sm sm:text-base text-neutral-600 font-generalsans">
                                    Round-the-clock emergency assistance
                                </p>
                            </motion.div>

                            {/* Premium Materials */}
                            <motion.div
                                className="p-4 sm:p-5 border border-neutral-300 border-dashed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={leftColumnInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                style={{
                                    background:
                                        "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                                }}
                            >
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold  text-neutral-700 font-generalsans mb-2">
                                    Premium Materials
                                </h3>
                                <p className="text-sm sm:text-base text-neutral-600 font-generalsans">
                                    Quality products for lasting solutions
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="flex flex-col space-y-4 sm:space-y-6"
                        initial={{ opacity: 0, x: 30 }}
                        animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Full Name */}
                        <div>
                            <label htmlFor="fullName" className="block text-sm sm:text-base font-medium text-neutral-700 font-generalsans mb-2">
                                Full Name <span className="text-blue-600">*</span>
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                placeholder="Enter your full name"
                                className="w-full px-4 py-3 border border-neutral-300 rounded-md text-neutral-700 font-generalsans placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-transparent"
                            />
                        </div>

                        {/* Email Address */}
                        <div>
                            <label htmlFor="email" className="block text-sm sm:text-base font-medium text-neutral-700 font-generalsans mb-2">
                                Email Address <span className="text-blue-600">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="your.email@example.com"
                                className="w-full px-4 py-3 border border-neutral-300 rounded-md text-neutral-700 font-generalsans placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-transparent"
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-neutral-700 font-generalsans mb-2">
                                Phone Number <span className="text-blue-600">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="+971"
                                    className="w-full px-4 py-3 border border-neutral-300 rounded-md text-neutral-700 font-generalsans placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-transparent"
                            />
                        </div>

                        {/* You're Interested In */}
                        <div>
                            <label htmlFor="interest" className="block text-sm sm:text-base font-medium text-neutral-700 font-generalsans mb-2">
                                You're Interested In <span className="text-blue-600">*</span>
                            </label>
                            <select
                                id="interest"
                                name="interest"
                                value={formData.interest}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-neutral-300 rounded-md text-neutral-700 font-generalsans focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-transparent bg-white"
                            >
                                <option value="">Select an option</option>
                                <option value="hvac-electrical">HV A.C., Electrical</option>
                                <option value="carpentry">Carpentry</option>
                                <option value="data-cctv">Data & CCTV</option>
                                <option value="plumbing">Plumbing</option>
                                <option value="sanitary-paint">Sanitary, Paint</option>
                                <option value="kitchen-equipment">Kitchen Equipment</option>
                                <option value="villa-renovation">Villa Renovation</option>
                                <option value="annual-maintenance">Annual Maintenance</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {/* Preferred Start Date */}
                        <div>
                            <label htmlFor="startDate" className="block text-sm sm:text-base font-medium text-neutral-700 font-generalsans mb-2">
                                Preferred Start Date <span className="text-blue-600">*</span>
                            </label>
                            <input
                                type="date"
                                id="startDate"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-neutral-300 rounded-md text-neutral-700 font-generalsans focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-transparent"
                            />
                        </div>

                        {/* Tell us about your project */}
                        <div>
                            <label htmlFor="standDetails" className="block text-sm sm:text-base font-medium text-neutral-700 font-generalsans mb-2">
                                Tell us about your project (location, requirements, timeline, budget)
                            </label>
                            <textarea
                                id="standDetails"
                                name="standDetails"
                                value={formData.standDetails}
                                onChange={handleChange}
                                rows={4}
                                placeholder="e.g., Residential villa in Dubai, complete MEP installation, 3 months timeline, AED budget"
                                className="w-full px-4 py-3 border border-neutral-300 rounded-md text-neutral-700 font-generalsans placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-transparent resize-none"
                            />
                        </div>

                        {/* Consent Checkbox */}
                        <div className="flex items-start gap-2">
                            <input
                                type="checkbox"
                                id="consent"
                                name="consent"
                                checked={formData.consent}
                                onChange={handleChange}
                                required
                                className="mt-1 w-4 h-4 border border-neutral-300 rounded text-blue-600 focus:ring-1 focus:ring-zinc-600"
                            />
                            <label htmlFor="consent" className="text-sm sm:text-base text-neutral-700 font-generalsans">
                                I agree with the{" "}
                                <a href="/privacy-policy" className="text-blue-600 underline hover:text-blue-700">
                                    Privacy Policy
                                </a>{" "}
                                and consent to being contacted about my project <span className="text-blue-600">*</span>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            className="w-full px-6 sm:px-8 py-4 bg-neutral-700 hover:bg-neutral-900 text-white font-bold text-base sm:text-lg font-generalsans rounded-md transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                            whileTap={{ scale: 0.98 }}
                        >
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            GET FREE QUOTE
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
