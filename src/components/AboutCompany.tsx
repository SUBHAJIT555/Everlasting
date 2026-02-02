import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AboutImg from "@/assets/images/AboutPage/hero-and-about-img/About-img-01.webp";
import AboutCompanyImg from "@/assets/images/AboutPage/new-image/AbouttheCompany.webp";
import { useCallbackModalStore } from "./store/callbackModalStore";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "Excellence",
    description: "We deliver superior quality in every project, ensuring the highest standards of workmanship and materials.",
  },
  {
    title: "Reliability",
    description: "24/7 emergency support and dependable service when you need it most.",
  },
  {
    title: "Innovation",
    description: "Staying ahead with the latest technologies and best practices in technical services.",
  },
  {
    title: "Integrity",
    description: "Transparent communication, honest pricing, and ethical business practices.",
  },
];

const AboutCompany = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const openCallbackModal = useCallbackModalStore((state) => state.openModal);

  useEffect(() => {
    // Animate intro section
    if (introRef.current) {
      const introElements = introRef.current.querySelectorAll("p, h2");
      gsap.fromTo(
        introElements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate services grid
    if (servicesRef.current) {
      const serviceItems = servicesRef.current.querySelectorAll(".service-item");
      gsap.fromTo(
        serviceItems,
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 75%",
            end: "top 40%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate values section
    if (valuesRef.current) {
      const valueCards = valuesRef.current.querySelectorAll(".value-card");
      gsap.fromTo(
        valueCards,
        { opacity: 0, x: -50, rotationY: -15 },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Parallax effect for image
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-neutral-100">
      {/* Introduction Section */}
      <div ref={introRef} className="px-6 pt-24 pb-20 max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Order 2 on mobile, Order 1 on desktop */}
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-gray-900">
              Your Trusted Partner for Technical Excellence in Dubai & UAE
            </h2>
            <p className="text-lg text-gray-700 font-body leading-relaxed">
              Everlasting Technical Services is a leading provider of comprehensive
              MEP (Mechanical, Electrical, and Plumbing) solutions across Dubai and
              the UAE. With years of expertise and a commitment to excellence, we
              deliver world-class technical services for residential, commercial,
              and industrial projects.
            </p>
            <p className="text-lg text-gray-700 font-body leading-relaxed">
              Our team of certified technicians and skilled professionals ensures
              that every project meets the highest standards of quality, safety, and
              efficiency. From HVAC installations to villa renovations, we provide
              end-to-end solutions tailored to your specific needs.
            </p>
            {/* Button - Hidden on mobile, shown on desktop */}
            <motion.button
              onClick={openCallbackModal}
              className="hidden lg:inline-flex button button_lg mt-6"
            >
              <span className="button_sl" />
              <span className="button_text">Get Free Consultation</span>
            </motion.button>
          </div>
          
          {/* Image - Order 1 on mobile, Order 2 on desktop */}
      <motion.div
  ref={imageRef}
  className="
    relative order-1 lg:order-2
    h-[420px] sm:h-[480px] lg:h-[600px]

    /* mobile full bleed */
    -mx-6 sm:-mx-10 lg:mx-0

    transition-all duration-700 ease-out
    lg:hover:-translate-y-2
    lg:hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)]
  "
  initial={{ opacity: 0, scale: 0.96 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  <img
    src={AboutCompanyImg}
    alt="Everlasting Technical Services Team"
    className="
      w-full h-full object-cover
      lg:rounded-3xl
    "
  />

  {/* subtle depth overlay */}
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
</motion.div>


          
         
        </div>
      </div>

      {/* Image Section with Parallax */}
     {/* Image Section – Cinematic Break */}
<div className="relative w-full h-[420px] sm:h-[520px] lg:h-[650px] overflow-hidden">
  <motion.img
    src={AboutImg}
    alt="Technical Services"
    className="
      absolute inset-0 w-full h-full object-cover
      scale-[1.15]
    "
    initial={{ y: 0 }}
    whileInView={{ y: -40 }}
    viewport={{ once: true }}
    transition={{ duration: 1.6, ease: "easeOut" }}
  />

  {/* Depth overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent" />

  {/* Content */}
  <div className="absolute inset-0 flex items-end lg:items-center">
    <motion.div
      className="
        max-w-7xl mx-auto w-full
        px-6 pb-16 lg:pb-0
        text-left lg:text-center
      "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h3 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold text-white mb-4 leading-tight">
        Building Excellence,
        <br className="hidden lg:block" />
        One Project at a Time
      </h3>

      <p className="text-lg sm:text-xl text-white/90 font-body max-w-2xl lg:mx-auto">
        Trusted by hundreds of clients across Dubai and UAE
      </p>
    </motion.div>
  </div>
</div>


      {/* Values Section */}
      <div ref={valuesRef} className="px-6 py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-title-underline">Our Core Values</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto font-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The principles that guide everything we do
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                whileHover={{ y: -10, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-bl-full" />
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 font-body leading-relaxed">
                  {value.description}
                </p>
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full group-hover:w-20 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8 font-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get a free consultation and quote for your technical service needs
          </motion.p>
         <div className="flex justify-center">
  <motion.button
    onClick={openCallbackModal}
    className="button button_lg px-10 py-5"
  >
    <span className="button_sl" />
    <span className="button_text">Request Free Quote</span>
  </motion.button>
</div>

        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
