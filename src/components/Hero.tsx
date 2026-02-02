"use client";

import HeroBg from "@/assets/images/ServicePage/ServicesHero.webp";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const rotatingWords = [
  "HVAC",
  "Electrical",
  "Villa Renovation",
  "Annual Maintenance Contracts (AMC)",
  "Residential Projects",
  "Commercial Projects",
];

const Hero = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;

    const heroContent = heroRef.current.querySelectorAll(".hero-content");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(heroContent, {
        y: -50,
        opacity: 0,
        ease: "power1.out",
        stagger: 0,
      });
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };




  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden text-gray-900"
    >
      <img
        src={HeroBg}
        alt="MEP Technical Services in Dubai"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div
        className="absolute inset-0 w-full h-full"
        style={{
          maskImage: "linear-gradient(to right, black 40%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 40%, transparent 100%)",
          backgroundColor: "white",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        <div className="flex flex-col items-start hero-content gap-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start gap-4"
          >
            <h1
              className="
    font-extrabold leading-tight text-neutral-900
    text-4xl sm:text-5xl md:text-6xl lg:text-6xl
  "
              style={{
                fontFamily:
                  '"Inter Tight", "SF Pro Display", "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
                letterSpacing: "-0.03em",
              }}
            >
              Everlasting <br />
              <span className="text-orange-500">
                Technical Services
              </span>
            </h1>

          </motion.div>

          {/* Rotating words */}
          <div className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-900 font-body max-w-xl rotating-text flex flex-wrap items-start gap-2">
            <span>Providing</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingWords[wordIndex]}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="font-semibold text-gray-900"
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={handleScrollDown}
        className="group absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer"
      >
        <span className="block w-[1px] h-6 bg-gray-900/70 group-hover:bg-gray-900 transition-colors duration-200" />
        <span className="mt-1 block w-3 h-3 border-b-2 border-r-2 border-gray-900/70 group-hover:border-gray-900 rotate-45 transition-colors duration-200" />
      </button>
    </section>
  );
};

export default Hero;
