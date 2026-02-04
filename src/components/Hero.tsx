"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, animate, useInView, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
// import heroBgImage from "@/assets/images/Home/herosectionbg.svg";

// Animated SVG Icon Component
const AnimatedIcon = ({ paths, isInView, baseDelay = 0 }: { paths: string[]; isInView: boolean; baseDelay?: number }) => {
  // Calculate delays for each path (staggered)
  const getPathDelay = (index: number) => baseDelay + index * 0.2;
  const getPathDuration = (index: number) => 0.4 + index * 0.2;

  return (
    <motion.div
      className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-lg shrink-0 flex items-center justify-center text-neutral-700 group-hover:text-neutral-900 transition-colors"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10"
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
              duration: getPathDuration(idx),
              delay: getPathDelay(idx),
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.svg>
    </motion.div>
  );
};

const services = [
  {
    name: "HV A.C. , Electrical",
    paths: [
      "M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5",
      "M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5",
      "M3 21l2.5 -2.5",
      "M18.5 5.5l2.5 -2.5",
      "M10 11l-2 2",
      "M13 14l-2 2",
    ],
  },
  {
    name: "Carpentry",
    paths: [
      "M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5",
    ],
  },
  {
    name: "Data & CCTV",
    paths: [
      "M3 4a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -2",
      "M8 14a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",
      "M19 7v7a7 7 0 0 1 -14 0v-7",
      "M12 14l.01 0",
    ],
  },
  {
    name: "Plumbing",
    paths: [
      "M10.2 10.2l6.3 6.3",
      "M19.347 16.575l1.08 1.079a1.96 1.96 0 0 1 -2.773 2.772l-1.08 -1.079a1.96 1.96 0 0 1 2.773 -2.772",
      "M3 7l3.05 3.15a2.9 2.9 0 0 0 4.1 -4.1l-3.15 -3.05",
    ],
  },
  {
    name: "Sanitary, Paint",
    paths: [
      "M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -2",
      "M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5l-5 0v2",
      "M10 16a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -4",
    ],
  },
  {
    name: "Kitchen Equipment",
    paths: [
      "M7 4v17m-3 -17v3a3 3 0 1 0 6 0v-3",
      "M14 8a3 4 0 1 0 6 0a3 4 0 1 0 -6 0",
      "M17 12v9",
    ],
  },
  {
    name: "Villa Renovation",
    paths: [
      "M3 21h7v-3a2 2 0 0 1 4 0v3h7",
      "M6 21l0 -9",
      "M18 21l0 -9",
      "M6 12h12a3 3 0 0 0 3 -3a9 8 0 0 1 -9 -6a9 8 0 0 1 -9 6a3 3 0 0 0 3 3",
    ],
  },
  {
    name: "Annual Maintenance",
    paths: [
      "M8 21h-2a3 3 0 0 1 -3 -3v-1h5.5",
      "M17 8.5v-3.5a2 2 0 1 1 2 2h-2",
      "M19 3h-11a3 3 0 0 0 -3 3v11",
      "M9 7h4",
      "M9 11h4",
      "M18.42 12.61a2.1 2.1 0 0 1 2.97 2.97l-6.39 6.42h-3v-3l6.42 -6.39",
    ],
  },
];

const Hero = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const marqueeInViewRef = useRef<HTMLDivElement | null>(null);
  const marqueeInView = useInView(marqueeInViewRef, { once: false, margin: "-50px" });
  const x = useMotionValue(0);
  const navigate = useNavigate();

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Background moves slower (parallax effect)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marqueeContent = marqueeRef.current.querySelector(".marquee-content") as HTMLElement;
    if (!marqueeContent) return;

    const width = marqueeContent.scrollWidth / 2;

    const controls = animate(x, -width, {
      duration: 30,
      ease: "linear",
      repeat: Infinity,
    });

    return () => controls.stop();
  }, [x]);

  const handleServicesClick = () => {
    navigate("/services");
  };

  const handleContactClick = () => {
    navigate("/contact-us");
  };

  // Duplicate services for seamless marquee
  const duplicatedServices = [...services, ...services];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-linear-to-br from-neutral-50 via-white to-neutral-50 flex flex-col overflow-hidden"
    >
      {/* Background Image - Parallax (moves slower/stays) */}
      <motion.div
        className="absolute inset-0  flex items-center justify-center pointer-events-none overflow-visible"
        style={{ y: backgroundY }}
      >
        <video
          src="https://www.pexels.com/download/video/32766251/"
          autoPlay
          muted
          loop
          className="object-contain drop-shadow-2xl"
        />
      </motion.div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)`,
          }}
        />
      </div>

      {/* Main Content - scrolls normally */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex-1 flex items-center justify-center"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 w-full">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Badge */}
            <motion.div
              variants={badgeVariants}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-300 bg-white/80 backdrop-blur-sm shadow-sm"
            >
              <div className="size-3 rounded bg-green-500 animate-pulse" />
              <span className="text-sm font-generalsans font-medium text-neutral-600">
                Technical Services & Maintenance Experts in Dubai & UAE
              </span>
            </motion.div>

            {/* Title Section */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.8 }}
              className="space-y-6 max-w-4xl"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-clashdisplay font-light leading-[1.1] text-white">
                Everlasting
                <br />
                <span className="font-light text-neutral-100">
                  Technical Services
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-white text-shadow-lg font-generalsans font-normal max-w-2xl mx-auto ">
                Professional maintenance and renovation solutions across Dubai & UAE.
                Delivering excellence through certified technicians and proven expertise.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8"
            >
              <motion.button
                onClick={handleServicesClick}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-3 bg-neutral-700 text-white font-generalsans font-medium text-base rounded-md overflow-hidden transition-all duration-300 hover:bg-neutral-800 shadow-lg flex items-center gap-2 group cursor-pointer"
              >
                <span className="relative z-10 font-clashdisplay font-normal text-base tracking-wide">Our Services</span>
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
                  className="relative z-10 w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12h.5m3 0h1.5m3 0h6" />
                  <path d="M15 16l4 -4" />
                  <path d="M15 8l4 4" />
                </svg>
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-neutral-800 to-neutral-900"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                onClick={handleContactClick}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-3 bg-white/5 backdrop-blur-sm border border-neutral-300 border-dashed text-white font-generalsans font-medium text-base rounded-md overflow-hidden transition-all duration-300 shadow-md flex items-center gap-2 group cursor-pointer"
              >
                <motion.span
                  className="relative z-10 text-white font-clashdisplay font-medium text-base tracking-wide"
                  initial={{ color: "#ffffff" }}
                  transition={{ duration: 0.3 }}
                >
                  Contact Us
                </motion.span>
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
                  className="relative z-10 w-5 h-5 group-hover:rotate-45 transition-transform duration-300"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 14l11 -11" />
                  <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                </svg>
                <motion.div
                  className="absolute inset-0 bg-neutral-700 z-0"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Marquee Section */}
      <div ref={marqueeInViewRef} className="relative w-full border-t border-neutral-100 border-dashed bg-transparent backdrop-blur-sm py-8 overflow-hidden">
        <div ref={marqueeRef} className="relative w-full overflow-hidden">
          {/* Left Shader/Blur Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Right Shader/Blur Effect */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="marquee-content flex gap-2 w-max"
            style={{ x }}
          >
            {duplicatedServices.map((service, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 px-4 bg-white border border-neutral-300 border-dashed hover:shadow-md transition-shadow duration-300 group"
                style={{
                  background:
                    "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                }}
              >
                <span className="bg-white/5 backdrop-blur-sm shadow-none pr-2" style={{ boxShadow: "8px 0 10px -5px rgba(0,0,0,0.1)" }}>
                  <AnimatedIcon paths={service.paths} isInView={marqueeInView} baseDelay={index * 0.1} />
                </span>
                <span className="text-sm sm:text-base md:text-lg font-generalsans font-medium text-neutral-700 whitespace-nowrap">
                  {service.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      {/* <div className="absolute top-20 left-10 w-32 h-32 border border-neutral-200 rounded-full opacity-20 blur-xl pointer-events-none" />
      <div className="absolute bottom-32 right-10 w-40 h-40 border border-neutral-200 rounded-full opacity-20 blur-xl pointer-events-none" /> */}
    </section>
  );
};

export default Hero;
