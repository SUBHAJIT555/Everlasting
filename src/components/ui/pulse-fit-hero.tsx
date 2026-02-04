import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { GridPattern } from "./grid-pattern";

export interface NavigationItem {
  label: string;
  hasDropdown?: boolean;
  onClick?: () => void;
}

export interface ProgramCard {
  image: string;
  category: string;
  title: string;
  onClick?: () => void;
}

export interface PulseFitHeroProps {
  logo?: string;
  navigation?: NavigationItem[];
  ctaButton?: {
    label: string;
    onClick: () => void;
  };
  title: string;
  subtitle: string;
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  disclaimer?: string;
  socialProof?: {
    avatars: string[];
    text: string;
  };
  programs?: ProgramCard[];
  className?: string;
  children?: React.ReactNode;
  /** When false, header (logo + nav + CTA) is hidden. Use when layout already has a navbar (e.g. About page). */
  showHeader?: boolean;
}

export function PulseFitHero({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  disclaimer,
  socialProof,
  programs = [],
  className,
  children,
}: PulseFitHeroProps) {
  return (
    <section
      className={cn(
        "relative w-full min-h-screen flex flex-col overflow-hidden pt-20 md:pt-30 lg:pt-36",
        className
      )}
      role="banner"
      aria-label="Hero section"
      style={{
        background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)",
      }}

    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GridPattern
          width={20}
          height={20}
          x={0}
          y={0}
          strokeDasharray="1"
          className="stroke-neutral-300/40 fill-none absolute inset-0 h-full w-full"
        />
      </div>


      {/* Main Content */}
      {children ? (
        <div className="relative z-10 flex-1 flex items-center justify-center w-full">
          {children}
        </div>
      ) : (
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center max-w-4xl gap-8"
          >
            <h1 className="font-clashdisplay font-light text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.1] text-neutral-900 tracking-tight">
              {title}
            </h1>

            <p className="font-generalsans font-normal text-[clamp(1rem,2vw,1.25rem)] leading-relaxed text-neutral-600 max-w-[600px]">
              {subtitle}
            </p>

            {(primaryAction || secondaryAction) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
              >
                {primaryAction && (
                  <motion.button
                    type="button"
                    onClick={primaryAction.onClick}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-8 py-3 bg-neutral-700 text-white font-generalsans font-medium text-base rounded-md overflow-hidden transition-all duration-300 hover:bg-neutral-800 shadow-lg flex items-center gap-2 group cursor-pointer"
                  >
                    <span className="relative z-10 font-clashdisplay font-normal text-base tracking-wide">
                      {primaryAction.label}
                    </span>
                    <ArrowRight
                      className="relative z-10 w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300"
                      aria-hidden
                    />
                    <motion.div
                      className="absolute inset-0 bg-[linear-gradient(to_right,rgb(38_38_38),rgb(23_23_23))]"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                )}

                {secondaryAction && (
                  <motion.button
                    type="button"
                    onClick={secondaryAction.onClick}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-8 py-3 bg-white/5 backdrop-blur-sm border border-neutral-300 border-dashed text-neutral-900 font-generalsans font-medium text-base rounded-md overflow-hidden transition-all duration-300 shadow-md flex items-center gap-2 group cursor-pointer"
                  >
                    <span className="relative z-10 text-neutral-900 font-clashdisplay font-medium text-base tracking-wide  transition-colors duration-300">
                      {secondaryAction.label}
                    </span>
                    <ArrowUpRight
                      className="relative z-10 w-5 h-5 group-hover:rotate-45 transition-transform duration-300"
                      aria-hidden
                    />
                    <motion.div
                      className="absolute inset-0 bg-neutral-700 z-0"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0 }}
                    />
                  </motion.button>
                )}
              </motion.div>
            )}

            {disclaimer && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="font-generalsans text-[13px] tracking-wide font-normal text-neutral-500 italic"
              >
                {disclaimer}
              </motion.p>
            )}

            {socialProof && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-row items-center gap-3"
              >
                <div className="flex flex-row -space-x-2">
                  {socialProof.avatars.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar}
                      alt=""
                      className="rounded-full border-2 border-white w-10 h-10 object-cover ring-1 ring-offset-white ring-neutral-300 shadow-md"
                    />
                  ))}
                </div>
                <span className="font-generalsans text-sm font-medium text-neutral-600">
                  {socialProof.text}
                </span>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}

      {/* Program Cards Carousel */}
      {programs.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative z-10 w-full overflow-hidden pt-14 pb-14"
        >
          <div
            className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none w-[150px] "
            aria-hidden
          />
          <div
            className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none w-[150px] "
            aria-hidden
          />

          <motion.div
            className="flex items-center gap-6 pl-6"
            animate={{
              x: [0, -((programs.length * 380) / 2)],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: programs.length * 3,
                ease: "linear",
              },
            }}
          >
            {[...programs, ...programs].map((program, index) => (
              <motion.div
                key={index}
                transition={{ duration: 0.3 }}
                onClick={program.onClick}
                className="shrink-0 cursor-pointer relative overflow-hidden  p-2 w-[356px] h-[480px]  shadow-xl"
              >
                <img
                  src={program.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                {/* Dither / stipple overlay for vintage print effect */}
                <div
                  className="absolute inset-0 opacity-[0.14] mix-blend-multiply pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='0.6' fill='%23000'/%3E%3Ccircle cx='7' cy='1' r='0.6' fill='%23000'/%3E%3Ccircle cx='1' cy='7' r='0.6' fill='%23000'/%3E%3Ccircle cx='7' cy='7' r='0.6' fill='%23000'/%3E%3Ccircle cx='4' cy='4' r='0.5' fill='%23000'/%3E%3C/svg%3E")`,
                    backgroundSize: "2px 2px",
                  }}
                  aria-hidden
                />
                <div
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.7)_100%)]"
                  aria-hidden
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2 z-10">
                  <span className="font-generalsans text-xs font-semibold text-white/80 uppercase tracking-wider flex items-center gap-2">
                    <div className="size-2 bg-green-500 animate-pulse"></div>{program.category}
                  </span>
                  <h3 className="font-generalsans text-2xl font-normal text-white leading-tight">
                    {program.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
