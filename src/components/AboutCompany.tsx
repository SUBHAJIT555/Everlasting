import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AboutCompanyImg from "@/assets/images/AboutPage/new-image/AbouttheCompany.webp";
import { useCallbackModalStore } from "./store/callbackModalStore";

const AboutCompany = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);


  const containerInView = useInView(containerRef, { once: false, amount: 0.1 });
  const headingInView = useInView(headingRef, { once: false, amount: 0.1 });
  const paragraphsInView = useInView(paragraphsRef, { once: false, amount: 0.1 });
  const imageInView = useInView(imageRef, { once: false, amount: 0.1 });


  const openCallbackModal = useCallbackModalStore((state) => state.openModal);

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
      />

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
      />

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
      />

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
      />

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
          <h2 className="text-lg sm:text-xl md:text-2xl font-light text-text-primary font-clashdisplay">About The Company</h2>
        </motion.div>

        {/* Introduction Section */}
        <div ref={introRef} className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-20">
          {/* Text Content */}
          <div className="w-full md:w-2/3">
            <motion.h3
              ref={headingRef}
              className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-neutral-800 font-generalsans mb-3 md:mb-4 lg:mb-6 leading-tight"
              initial={{ opacity: 0, y: 60 }}
              animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Your Trusted Partner for Technical Excellence in Dubai & UAE
            </motion.h3>

            <div ref={paragraphsRef}>
              <motion.p
                className="text-sm sm:text-base md:text-base lg:text-lg font-normal text-neutral-600 font-generalsans text-left md:text-justify leading-relaxed"
                initial={{ opacity: 0, y: 40 }}
                animate={paragraphsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              >
                Everlasting Technical Services is a leading provider of comprehensive
                MEP (Mechanical, Electrical, and Plumbing) solutions across Dubai and
                the UAE. With years of expertise and a commitment to excellence, we
                deliver world-class technical services for residential, commercial,
                and industrial projects.
              </motion.p>

              <motion.p
                className="text-sm sm:text-base md:text-base lg:text-lg font-normal text-neutral-600 font-generalsans text-left md:text-justify mt-4 leading-relaxed"
                initial={{ opacity: 0, y: 40 }}
                animate={paragraphsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              >
                Our team of certified technicians and skilled professionals ensures
                that every project meets the highest standards of quality, safety, and
                efficiency. From HVAC installations to villa renovations, we provide
                end-to-end solutions tailored to your specific needs.
              </motion.p>
            </div>

            <motion.div
              className="flex justify-start mt-4 md:mt-6 lg:mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={paragraphsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <button
                onClick={openCallbackModal}
                className="bg-neutral-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-md hover:bg-neutral-800 transition-all duration-300 font-generalsans font-medium text-sm sm:text-base tracking-wide cursor-pointer w-full sm:w-auto"
              >
                Get Free Consultation
              </button>
            </motion.div>
          </div>

          {/* Image */}
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
            <img
              src={AboutCompanyImg}
              alt="Everlasting Technical Services Team"
              className="w-full max-w-xs sm:max-w-sm md:max-w-none h-auto object-contain"
            />
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default AboutCompany;
