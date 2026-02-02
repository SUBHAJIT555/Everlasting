import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { Link } from "react-router-dom";

interface FeatureItem {
  number: string;
  title: string;
  description: string;
  color: string;
  slug: string;
}

const items: FeatureItem[] = [
  {
    number: "01",
    title: "HVAC & Electrical",
    slug: "/services/hvac-electrical",
    description:
      "We provide expert HVAC and electrical solutions for residential and commercial projects across Dubai. From installation to maintenance, our certified technicians ensure efficiency, safety, and long-lasting performance.",
    color: "#E05532",
  },
  {
    number: "02",
    title: "Plumbing & Sanitary",
    slug: "/services/plumbing-sanitary",
    description:
      "Our professional plumbing services cover everything from pipe installations to sanitary fittings. We ensure smooth water supply, leak-free systems, and clean, durable finishes for every project.",
    color: "#008E80",
  },
  {
    number: "03",
    title: "Custom Carpentry & Fit-Out",
    slug: "/services/carpentry-fitout",
    description:
      "We create bespoke carpentry solutions, kitchen equipment setups, and villa renovations. Our team delivers precise craftsmanship, functional design, and premium materials tailored to your needs.",
    color: "#F8AB13",
  },
  {
    number: "04",
    title: "CCTV, Cabling & AMC",
    slug: "/services/cctv-cabling-amc",
    description:
      "We handle structured cabling, CCTV installations, and provide annual maintenance contracts (AMC) to ensure your building’s systems operate seamlessly year-round, keeping you secure and stress-free.",
    color: "#6A5D4D",
  },
  {
    number: "05",
    title: "Painting & Finishing",
    slug: "/services/painting-finishing",
    description:
      "Professional painting, finishing, and interior solutions with premium materials for residential and commercial projects.",
    color: "#FF6F61",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const iconRefs = useRef<(SVGSVGElement | null)[]>([]);
  const verticalRefs = useRef<(SVGPathElement | null)[]>([]);
  const bgRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const descRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = () => setIsDesktop(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    items.forEach((_, idx) => {
      gsap.set(cardRefs.current[idx], {
        flex: idx === 0 ? 4 : 1,
      });

      gsap.set(descRefs.current[idx], {
        autoAlpha: idx === 0 ? 1 : 0,
        y: idx === 0 ? 0 : 20,
      });
    });

    gsap.fromTo(
      [numberRefs.current[0], titleRefs.current[0], descRefs.current[0]],
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.7 },
    );
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    items.forEach((_, idx) => {
      const isActive = idx === activeIndex;

      if (!isActive) {
        tl.to(
          descRefs.current[idx],
          {
            autoAlpha: 0,
            y: 8,
            duration: 0.12,
            ease: "power1.out",
          },
          0,
        )

          .to(cardRefs.current[idx], { flex: 1, duration: 0.6 }, 0)

          .to(iconRefs.current[idx], { rotate: 0, duration: 0.35 }, 0)
          .to(verticalRefs.current[idx], { opacity: 1, duration: 0.25 }, 0)
          .to(bgRefs.current[idx], { scale: 0, duration: 0.25 }, 0);
      }
    });

    tl.to(cardRefs.current[activeIndex], { flex: 4, duration: 0.6 }, 0)
      .fromTo(
        [
          numberRefs.current[activeIndex],
          titleRefs.current[activeIndex],
          descRefs.current[activeIndex],
        ],
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.5 },
        0.1,
      )

      .to(
        iconRefs.current[activeIndex],
        {
          rotate: 45,
          transformOrigin: "50% 50%",
          duration: 0.35,
        },
        0.05,
      )
      .to(
        verticalRefs.current[activeIndex],
        {
          opacity: 0,
          duration: 0.25,
        },
        0.05,
      )
      .to(
        bgRefs.current[activeIndex],
        {
          scale: 1,
          duration: 0.35,
        },
        0.05,
      );
  }, [activeIndex]);

  return (
    <section className="w-full py-20 bg-white">
      <motion.h2
        className="px-6 text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-title-underline">Services Offered</span>
      </motion.h2>

      <div
        ref={scrollRef}
        className="flex flex-col lg:flex-row w-full lg:h-[600px] gap-4 overflow-hidden transition-transform duration-500"
      >
        {items.map((item, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={idx}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              onClick={() => setActiveIndex(idx)}
              style={{
                backgroundColor: isActive ? item.color : "#F0F0F0",
              }}
              className="flex flex-col flex-1  cursor-pointer p-10 min-w-0"
            >
              <div className="lg:hidden">
                <div className="flex items-center justify-between gap-3">
                  <h3
                    ref={(el) => {
                      numberRefs.current[idx] = el;
                    }}
                    className={`font-medium text-lg ${isActive ? "text-white" : "text-black"}`}
                  >
                    {item.number}
                  </h3>

                  <h2
                    ref={(el) => {
                      titleRefs.current[idx] = el;
                    }}
                    className={`flex-1 text-center font-semibold text-base ${isActive ? "text-white" : "text-black"}`}
                  >
                    {item.title}
                  </h2>

                  <div className="size-8 relative flex items-center justify-center shrink-0">
                    <svg
                      viewBox="0 0 63 63"
                      className="w-full h-full transition-transform duration-300"
                      style={{
                        transform: `rotate(${isActive ? 45 : 0}deg)`,
                        color: isActive ? "#fff" : "#000",
                      }}
                    >
                      <g transform="translate(11 11)">
                        <path
                          d="M0 20.5 H41"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M20.5 0 V41"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Explore servie button */}
                {/* Mobile view */}
                <div
                  ref={(el) => {
                    descRefs.current[idx] = el;
                  }}
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isActive ? "300px" : "0px",
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  <p className="mt-3 text-sm leading-relaxed text-white">
                    {item.description}
                  </p>

                  <Link
                    to={item.slug}
                    onClick={(e) => e.stopPropagation()}
                    className="learn-more mt-4 sm:mt-0"
                  >
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text text-[15px] sm:text-sm  ">Explore </span>
                  </Link>


                </div>
              </div>

              {/* widee screen view */}
              <div className="hidden lg:grid gap-4 h-full grid-rows-[min-content_min-content_1fr]">
                <h3
                  ref={(el) => {
                    numberRefs.current[idx] = el;
                  }}
                  className={`font-semibold transition-all duration-700 text-2xl ${isActive ? "text-white text-lg lg:text-4xl text-left" : "text-black text-center"}`}
                >
                  {item.number}
                </h3>

                <h2
                  ref={(el) => {
                    titleRefs.current[idx] = el;
                  }}
                  className={`font-semibold transition-all duration-700 ${isActive ? "text-white text-3xl lg:text-5xl text-left" : "text-black text-lg xl:text-2xl text-center"}`}
                >
                  {item.title}
                </h2>

                <p
                  ref={(el) => {
                    descRefs.current[idx] = el;
                  }}
                  className={`pt-2 transition-all duration-700 line-clamp-6 ${isActive ? "max-h-[1000px] opacity-100 text-white" : "max-h-0 opacity-0"}`}
                >
                  {item.description}
                </p>

                {isActive && (
                  <Link
                    to={item.slug}
                    onClick={(e) => e.stopPropagation()}
                    className="learn-more"
                  >
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Explore</span>
                  </Link>
                )}
              </div>

              {/* icon */}

              <div className="hidden lg:flex size-10 relative items-center justify-center">
                <svg
                  ref={(el) => {
                    iconRefs.current[idx] = el;
                  }}
                  viewBox="0 0 63 63"
                  className="w-full h-full transition-transform duration-300"
                  style={{
                    transformOrigin: "50% 50%",
                    transform: `rotate(${isActive ? 45 : 0}deg)`,
                    color: isActive ? "#fff" : "#000",
                  }}
                >
                  <g transform="translate(11 11)">
                    <path d="M0 20.5 H41" stroke="currentColor" strokeWidth="2" />
                    <path
                      ref={(el) => {
                        verticalRefs.current[idx] = el;
                      }}
                      d="M20.5 0 V41"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ opacity: isActive ? 0 : 1 }}
                    />
                  </g>
                </svg>

                <span
                  ref={(el) => {
                    bgRefs.current[idx] = el;
                  }}
                  className="absolute inset-0 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: item.color,
                    transform: `scale(${isActive ? 1 : 0})`,
                    opacity: isActive ? 1 : 0,
                  }}
                />

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
