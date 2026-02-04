import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GridPattern } from "@/components/ui/grid-pattern";
import { ArrowRight } from "lucide-react";

const ServiceHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);


  const bannerInView = useInView(bannerRef, { once: false, amount: 0.1 });
  const headingInView = useInView(headingRef, { once: false, amount: 0.1 });
  const descriptionInView = useInView(descriptionRef, { once: false, amount: 0.1 });
  const buttonsInView = useInView(buttonsRef, { once: false, amount: 0.1 });

  return (
    <section className="w-full relative mt-10 min-h-[80vh] flex items-center justify-center"
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
        {/* Update Banner */}
        <motion.div
          ref={bannerRef}
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={bannerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <button className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-md border border-neutral-200 shadow-sm bg-white  text-neutral-700 text-sm sm:text-base font-medium font-generalsans hover:from-neutral-800 hover:to-neutral-700 transition-all duration-300 flex items-center gap-2">
            <span>New ✨ 24/7 Emergency Support Available</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          ref={headingRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-neutral-900 font-clashdisplay mb-4 sm:mb-6 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block">Don't Just Fix Problems,</span>
          <span className="block">
            Build{" "}
            <span
              className="inline-block bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% auto",
                animation: "gradient 3s ease infinite",
              }}
            >
              Lasting
            </span>{" "}
            Solutions.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          ref={descriptionRef}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-600 font-generalsans mb-8 sm:mb-10 md:mb-12 max-w-4xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={descriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Comprehensive <strong className="font-semibold text-neutral-800">MEP Solutions</strong> powered by{" "}
          <strong className="font-semibold text-neutral-800">Certified Technicians</strong>,{" "}
          <strong className="font-semibold text-neutral-800">Premium Materials</strong>, and{" "}
          <strong className="font-semibold text-neutral-800">24/7 Support</strong>. Save time ⏳, ensure quality installations, and transform your spaces with trusted technical excellence across Dubai & UAE.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={buttonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {/* Primary Button */}
          <motion.button
            className="px-6 sm:px-8 py-3 sm:py-3.5 bg-neutral-700 text-white rounded-lg font-medium text-sm sm:text-base font-generalsans hover:bg-neutral-800 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
            whileTap={{ scale: 0.95 }}
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            className="px-6 sm:px-8 py-3 sm:py-3.5 bg-white border border-neutral-300 text-neutral-800 rounded-lg font-medium text-sm sm:text-base font-generalsans hover:bg-neutral-50 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
            whileTap={{ scale: 0.95 }}
          >
            View Our Services
            <span className="group-hover:translate-x-1 transition-transform">»</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Gradient Animation Keyframes */}
      <style>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default ServiceHero;
