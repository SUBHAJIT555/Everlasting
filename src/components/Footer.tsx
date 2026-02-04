import { Link } from "react-router-dom";

import { useForm, type FieldValues } from "react-hook-form";

import { useState } from "react";
import { motion } from "framer-motion";

// import footerlogo from "../assets/img/logo/Cyberlabs-logo-03.svg";





const Footer = () => {
  const [message, setMessage] = useState<string>("");

  const {
    register,

    handleSubmit,

    formState: { errors, isSubmitting },

    reset,
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/contact/create`,

        {
          method: "POST",

          body: JSON.stringify({
            email: data.email,

            formType: "NEWSLETTER",
          }),

          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = await response.json();

      if (responseData.status === false) {
        throw new Error(responseData.message);
      }

      setMessage(responseData.message);

      setTimeout(() => setMessage(""), 3000);

      reset();
    } catch (error) {
      console.error(error);

      if (error instanceof Error) {
        setMessage(error.message);
      }
    }
  };

  return (
    <>
      <footer className="w-full relative overflow-hidden"
        style={{
          background:
            "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
        }}>
        {/* Two Dashed Border Lines */}
        <div className="w-full border-t border-neutral-300 border-dashed"></div>
        <div className="w-full border-t border-neutral-300 border-dashed mt-2"></div>

        <div className="w-full mx-auto px-5 py-2 lg:py-5 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="relative">
            {/* Vertical Dividers - Desktop Only - Extend from top to bottom border only */}
            <div className="hidden lg:block absolute -top-[calc(1.25rem+0.5rem+2px)] bottom-0 left-[25%] border-l border-neutral-300 border-dashed"></div>
            <div className="hidden lg:block absolute -top-[calc(1.25rem+0.5rem+2px)] bottom-0 left-[41.666%] border-l border-neutral-300 border-dashed"></div>
            <div className="hidden lg:block absolute -top-[calc(1.25rem+0.5rem+2px)] bottom-0 left-[58.333%] border-l border-neutral-300 border-dashed"></div>
            <div className="hidden lg:block absolute -top-[calc(1.25rem+0.5rem+2px)] bottom-0 left-[75%] border-l border-neutral-300 border-dashed"></div>

            <div className="grid grid-cols-2 lg:grid-cols-12 lg:gap-y-8 relative">

              {/* About / Logo */}
              <div className="col-span-2 lg:col-span-3 border-b lg:border-b-0 border-neutral-300 border-dashed pb-8 lg:pb-0 pr-5 lg:pr-8">
                <div className="text-text-primary md:text-4xl text-2xl font-clashdisplay flex items-center gap-2 tracking-tighter">
                  <Link to="/">
                    {/* <img
                    src={footerlogo}
                    alt="Cyberlabs India Logo"
                    className="w-50 h-25"
                  /> */}
                  </Link>
                </div>

                <a target="_blank" href="/">
                  <h3 className="text-text-primary text-xs md:text-base font-medium font-clashdisplay mt-2 px-2 py-1 rounded-md w-fit border border-neutral-300 border-dashed"
                    style={{
                      background:
                        "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                    }}>
                    Everlasting Technical Services LLC

                  </h3>
                </a>

                <p className="mt-4 text-text-primary text-xs md:text-base font-generalsans leading-tight max-w-sm">
                  <span>Everlasting Technical Services LLC – Delivering Reliable Technical Solutions in Dubai and Across the UAE</span> <br />
                  <span className="font-medium">Your trusted partner for all your technical service needs.</span>
                </p>


              </div>

              {/* Services */}

              <div className="col-span-2 sm:col-span-1 lg:col-span-2 border-b lg:border-b-0 border-neutral-300 border-dashed pb-8 lg:pb-0 pr-5 lg:pr-8 pl-2">
                <h3 className="text-primary text-lg md:text-xl font-generalsans tracking-tighter font-medium mb-5 ">
                  Services
                </h3>
                <ul className="text-text-primary text-xs md:text-lg font-generalsans mt-2">
                  <li>
                    <Link
                      to="/services#hv-ac-and-electrical"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-xs md:text-lg font-generalsans group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 ease-out flex items-center">
                        HV A.C., Electrical
                      </span>
                      <span className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-300 border border-neutral-400 border-dashed scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services#carpentry"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-xs md:text-lg font-generalsans group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 ease-out flex items-center">
                        Carpentry
                      </span>
                      <span className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-300 border border-neutral-400 border-dashed scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services#data-cctv"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-xs md:text-lg font-generalsans group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 ease-out flex items-center">
                        Data & CCTV
                      </span>
                      <span className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-300 border border-neutral-400 border-dashed scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services#plumbing"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-xs md:text-lg font-generalsans group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 ease-out flex items-center">
                        Plumbing
                      </span>
                      <span className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-300 border border-neutral-400 border-dashed scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services#sanitary-paint"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-xs md:text-lg font-generalsans group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 ease-out flex items-center">
                        Sanitary, Paint
                      </span>
                      <span className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-300 border border-neutral-400 border-dashed scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services#kitchen-equipment"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-xs md:text-lg font-generalsans group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 ease-out flex items-center">
                        Kitchen equipment
                      </span>
                      <span className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-300 border border-neutral-400 border-dashed scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services#villa-renovation"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-xs md:text-lg font-generalsans group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 ease-out flex items-center">
                        Villa Renovation
                      </span>
                      <span className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-300 border border-neutral-400 border-dashed scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services#annual-maintanance"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-xs md:text-lg font-generalsans group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 ease-out flex items-center">
                        Annual Maintanance
                      </span>
                      <span className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-300 border border-neutral-400 border-dashed scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Useful Links */}

              <div className="col-span-2 sm:col-span-1 lg:col-span-2 border-b lg:border-b-0 border-neutral-300 border-dashed pb-8 lg:pb-0 pr-5 lg:pr-8 pl-2">
                <h3 className="text-primary text-lg md:text-xl font-generalsans tracking-tighter font-medium mb-5 ">
                  Useful Links
                </h3>

                <ul className="text-text-primary text-xs md:text-lg font-generalsans mt-2">
                  <li>
                    <Link
                      to="/"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-xs md:text-lg font-generalsans group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 ease-out  flex items-center">
                        Home
                      </span>
                      <span className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-300 border border-neutral-400 border-dashed scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
                      ></span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/about"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-xs md:text-lg font-generalsans group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 ease-out  flex items-center">
                        About
                      </span>
                      <span className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-300 border border-neutral-400 border-dashed scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
                      ></span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/programs"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-xs md:text-lg font-generalsans group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 ease-out  flex items-center">
                        Services
                      </span>
                      <span className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-300 border border-neutral-400 border-dashed scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
                      ></span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/simulator"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-xs md:text-lg font-generalsans group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 ease-out  flex items-center">
                        Contact
                      </span>
                      <span className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-300 border border-neutral-400 border-dashed scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
                      ></span>
                    </Link>
                  </li>

                  <li>
                    <a
                      href="mailto:support@example.com"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-xs md:text-lg font-generalsans group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 ease-out flex items-center">
                        Support
                      </span>
                      <span className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-300 border border-neutral-400 border-dashed scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legals */}

              <div className="col-span-2 sm:col-span-1 lg:col-span-2 border-b lg:border-b-0 border-neutral-300 border-dashed pb-8 lg:pb-0 pr-5 lg:pr-8 pl-2">
                <h3 className="text-primary text-lg md:text-xl font-generalsans tracking-tighter font-medium mb-5 ">
                  Legals
                </h3>

                <ul className="text-text-primary text-xs md:text-lg font-generalsans mt-2">
                  <li>
                    <Link
                      to="/terms-and-conditions"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-xs md:text-lg font-generalsans group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 ease-out  flex items-center">
                        Terms & Condition
                      </span>
                      <span className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-300 border border-neutral-400 border-dashed scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
                      ></span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/privacy-policy"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-xs md:text-lg font-generalsans group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 ease-out  flex items-center">
                        Privacy Policy
                      </span>
                      <span className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-300 border border-neutral-400 border-dashed scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
                      ></span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/cookie-policy"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-xs md:text-lg font-generalsans group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 ease-out  flex items-center">
                        Cookie Policy
                      </span>
                      <span className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-300 border border-neutral-400 border-dashed scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
                      ></span>
                    </Link>
                  </li>

                  <li>
                    <a
                      href="mailto:support@example.com"
                      target="_blank"
                      className="relative inline-block pl-1 pr-5 text-text-primary text-xs md:text-lg font-generalsans group overflow-hidden"
                    >
                      <span className="relative z-10 transition-colors duration-500 ease-out  flex items-center">
                        Support
                      </span>
                      <span className="absolute left-0 top-0 bottom-0 right-0 bg-neutral-300 border border-neutral-400 border-dashed scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
                      ></span>
                    </a>
                  </li>

                </ul>
              </div>



              {/* Newsletter */}

              <div className="col-span-2 sm:col-span-1 lg:col-span-3 border-b lg:border-b-0 border-neutral-300 border-dashed pb-8 lg:pb-1 pl-2 lg:pl-2">
                <h3 className="text-primary text-lg md:text-xl font-generalsans tracking-tighter font-medium mb-5 ">
                  Newsletter
                </h3>

                <p className="text-text-primary text-xs md:text-base font-generalsans">
                  Stay updated with our latest news, industry insights, and
                  exclusive offers.
                </p>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <input type="hidden" name="formType" value="newsletter" />

                  <label
                    htmlFor="newsletter-email"
                    className="block text-text-primary text-xs md:text-base font-generalsans mt-5 mb-2"
                  >
                    Enter Your Email id :
                  </label>

                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    {...register("email")}
                    placeholder="username@example.com"
                    className="w-full px-4 py-3 bg-transparent backdrop-blur-sm border-0 border-b border-b-dashed border-b-neutral-300 text-text-primary placeholder:text-text-primary/50 text-xs md:text-base focus:outline-none focus:border-b-neutral-400 hover:border-b-neutral-400 transition-all duration-300 ease-in-out font-generalsans!"
                  />

                  <div className="flex justify-end mt-5">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative h-[40px] w-fit px-8 bg-white border border-neutral-300 border-dashed text-text-primary text-xs md:text-base font-clashdisplay font-medium cursor-pointer tracking-wide rounded transition-colors duration-200 disabled:opacity-70 overflow-hidden"
                      initial="initial"
                      whileHover="hover"
                      style={{
                        background:
                          "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                      }}
                    >
                      <div className="relative flex items-center justify-center h-full w-full">
                        {/* Hidden text to maintain button width */}
                        <span className="invisible whitespace-nowrap">
                          {isSubmitting ? "Submitting..." : "Subscribe Us"}
                        </span>

                        {/* Text - moves up on hover */}
                        <motion.span
                          variants={{
                            initial: { y: 0, opacity: 1 },
                            hover: { y: -35, opacity: 0 },
                          }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="absolute whitespace-nowrap"
                        >
                          {isSubmitting ? "Submitting..." : "Subscribe Us"}
                        </motion.span>

                        {/* Mail Share Icon - slides up from bottom on hover */}
                        <motion.div
                          className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
                          variants={{
                            initial: { y: 35, opacity: 0 },
                            hover: { y: 0, opacity: 1 },
                          }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
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
                            className="icon icon-tabler icons-tabler-outline icon-tabler-mail-share"
                          >
                            <motion.path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                              variants={{
                                initial: { pathLength: 0 },
                                hover: { pathLength: 1 },
                              }}
                              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
                            />
                            <motion.path
                              d="M13 19h-8a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6"
                              variants={{
                                initial: { pathLength: 0 },
                                hover: { pathLength: 1 },
                              }}
                              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
                            />
                            <motion.path
                              d="M3 7l9 6l9 -6"
                              variants={{
                                initial: { pathLength: 0 },
                                hover: { pathLength: 1 },
                              }}
                              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
                            />
                            <motion.path
                              d="M16 22l5 -5"
                              variants={{
                                initial: { pathLength: 0 },
                                hover: { pathLength: 1 },
                              }}
                              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
                            />
                            <motion.path
                              d="M21 21.5v-4.5h-4.5"
                              variants={{
                                initial: { pathLength: 0 },
                                hover: { pathLength: 1 },
                              }}
                              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
                            />
                          </svg>
                        </motion.div>
                      </div>
                    </motion.button>
                  </div>
                </form>

                {message && (
                  <p className="text-green-500 text-base mt-2">{message}</p>
                )}

                {errors.email && (
                  <p className="text-red-500 text-base mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Bottom Border */}
            <div className="w-full border-t border-neutral-300 border-dashed"></div>
          </div>

          {/* Bottom Bar */}

          <div className="w-full flex justify-center items-center py-5 px-10 font-generalsans tracking-tighter">
            <p className="text-text-primary text-xs md:text-base leading-none text-center">
              &copy; {new Date().getFullYear()}{" "}
              <motion.div
                className="inline-block relative group"
                whileHover="hover"
                initial="initial"
              >
                <Link
                  to="/"
                  className="text-text-secondary text-xs md:text-base relative inline-block"
                >
                  Everlasting Technical Services LLC
                  <motion.span
                    className="absolute bottom-0 left-0 h-px bg-primary"
                    variants={{
                      initial: { width: 0 },
                      hover: { width: "100%" }
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </Link>
              </motion.div>{" "}
              All rights reserved | Made with{" "}
              <span className="inline-flex items-baseline mx-1">
                <style>{`
                  @keyframes drawHeartPath {
                    0% {
                      stroke-dasharray: 1000;
                      stroke-dashoffset: 1000;
                    }
                    50% {
                      stroke-dashoffset: 0;
                    }
                    100% {
                      stroke-dasharray: 1000;
                      stroke-dashoffset: 1000;
                    }
                  }
                `}</style>
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-heart w-3 h-3 md:w-4 md:h-4 text-text-primary relative top-0.5"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
                    style={{
                      strokeDasharray: 1000,
                      strokeDashoffset: 1000,
                      animation: "drawHeartPath 4s ease-in-out infinite",
                      animationDelay: "0.5s",
                    }}
                  />
                </svg>
              </span>{" "}
              by:&nbsp;
              <motion.div
                className="inline-block relative group"
                whileHover="hover"
                initial="initial"
              >
                <a
                  href="https://codecobble.com/"
                  target="_blank"
                  className="text-text-secondary text-xs md:text-base relative inline-block"
                  rel="noopener noreferrer"
                >
                  CodeCobble
                  <motion.span
                    className="absolute bottom-0 left-0 h-px bg-primary"
                    variants={{
                      initial: { width: 0 },
                      hover: { width: "100%" }
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </a>
              </motion.div>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
