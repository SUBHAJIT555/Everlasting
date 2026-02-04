import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GridPattern } from "@/components/ui/grid-pattern";

const PrivacyHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const headingInView = useInView(headingRef, { once: false, amount: 0.1 });
  const descriptionInView = useInView(descriptionRef, { once: false, amount: 0.1 });

  return (
    <section className="w-full relative mt-10 min-h-[60vh] flex items-center justify-center"
    style={{
      background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)",
    }}>
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GridPattern
          width={20}
          height={20}
          x={0}
          y={0}
          strokeDasharray="1"
          className="stroke-neutral-300/20 fill-none absolute inset-0 h-full w-full"
        />
      </div>

      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col items-center justify-center text-center"
      >
        {/* Main Heading */}
        <motion.h1
          ref={headingRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-neutral-900 font-clashdisplay mb-4 sm:mb-6 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Privacy Policy
        </motion.h1>

        {/* Description */}
        <motion.p
          ref={descriptionRef}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-600 font-generalsans mb-8 sm:mb-10 md:mb-12 max-w-4xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={descriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Your privacy is important to us. This Privacy Policy explains how Everlasting Technical Services LLC collects, uses, and protects your personal information when you use our services.
        </motion.p>
      </div>
    </section>
  );
};

export default PrivacyHero;
