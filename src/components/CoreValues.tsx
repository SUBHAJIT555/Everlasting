import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const values = [
  {
    title: "Excellence",
    description: "We deliver superior quality in every project, ensuring the highest standards of workmanship and premium materials.",
    icon: "award",
    paths: [
      "M6 9a6 6 0 1 0 12 0a6 6 0 1 0 -12 0",
      "M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889",
      "M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889",
    ],
  },
  {
    title: "Reliability",
    description: "24/7 emergency support and dependable service when you need it most. Certified technicians ready to assist across Dubai & UAE.",
    icon: "clock",
    paths: [
      "M3 12a9 9 0 0 0 5.998 8.485m12.002 -8.485a9 9 0 1 0 -18 0",
      "M12 7v5",
      "M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2",
      "M18 15v2a1 1 0 0 0 1 1h1",
      "M21 15v6",
    ],
  },
  {
    title: "Innovation",
    description: "Staying ahead with the latest MEP technologies, best practices, and compliance with Dubai Municipality regulations.",
    icon: "bulb",
    paths: [
      "M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7",
      "M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3",
      "M9.7 17l4.6 0",
    ],
  },
  {
    title: "Integrity",
    description: "Transparent communication, honest pricing, and ethical business practices. Your trusted partner for technical solutions.",
    icon: "scale",
    paths: [
      "M7 20l10 0",
      "M6 6l6 -1l6 1",
      "M12 3l0 17",
      "M9 12l-3 -6l-3 6a3 3 0 0 0 6 0",
      "M21 12l-3 -6l-3 6a3 3 0 0 0 6 0",
    ],
  },
];

// Animated SVG Icon Component
const ValueIcon = ({ paths, isInView }: { paths: string[]; isInView: boolean }) => {
  return (
    <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center text-neutral-700 mb-4 transition-colors duration-300 bg-white border border-neutral-100 border-dashed p-1 shadow-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
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

const CoreValues = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  const containerInView = useInView(containerRef, { once: false, amount: 0.1 });
  const headingInView = useInView(headingRef, { once: false, amount: 0.1 });
  const descriptionInView = useInView(descriptionRef, { once: false, amount: 0.1 });
  const valuesInView = useInView(valuesRef, { once: false, amount: 0.1 });

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
          <h2 className="text-lg sm:text-xl md:text-2xl font-light text-text-primary font-clashdisplay">Our Core Values</h2>
        </motion.div>

        {/* Heading */}
        <motion.h3
          ref={headingRef}
          className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-neutral-800 font-generalsans mb-3 md:mb-4 lg:mb-6 leading-tight"
          initial={{ opacity: 0, y: 60 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          The principles that guide everything we do.
        </motion.h3>

        {/* Description */}
        <motion.p
          ref={descriptionRef}
          className="text-sm sm:text-base md:text-base lg:text-lg font-normal text-neutral-600 font-generalsans mb-8 md:mb-10 lg:mb-12 text-left md:text-justify leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={descriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          At Everlasting Technical Services, our core values form the foundation of everything we do. These principles guide our decisions, shape our culture, and ensure we deliver exceptional service to every client.
        </motion.p>

        {/* Values Grid */}
        <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="p-4 sm:p-6 bg-white border border-neutral-200 border-dashed  transition-all duration-300 group/value"
              initial={{ opacity: 0, y: 40 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.1 * index, ease: "easeOut" }}
              style={{
                background:
                  "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
              }}
            >
              {/* Icon */}
              <ValueIcon paths={value.paths} isInView={valuesInView} />

              <h4 className="text-base sm:text-lg md:text-xl font-medium tracking-wide text-neutral-800 font-generalsans mb-2">
                {value.title}
              </h4>
              <p className="text-sm sm:text-base md:text-base text-neutral-600 font-generalsans leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
