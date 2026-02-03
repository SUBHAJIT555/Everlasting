import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./index";
import { useMobileMenuStore } from "../store/mobileMenuStore";
import { useCallbackModalStore } from "../store/callbackModalStore";
import { IoMenu } from "react-icons/io5";

type MenuItem = {
  key: number;
  name: string;
  href: string;
};

const MENU_ITEMS: MenuItem[] = [
  { key: 1, name: "Home", href: "/" },
  { key: 2, name: "About", href: "/about" },
  { key: 3, name: "Services", href: "/services" },
  { key: 4, name: "Contact", href: "/contact-us" },
];

const Header: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const { toggleMenu } = useMobileMenuStore();
  const openCallbackModal = useCallbackModalStore((state) => state.openModal);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Responsive navigation items - show all items
  const getVisibleNavigationItems = () => {
    return MENU_ITEMS;
  };

  // Helper function to check if a navigation item is active
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 transition-all duration-300 z-1000 border-b border-neutral-300 border-dashed"
        initial={{ y: 0 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        style={{
          // Ensure header doesn't interfere with content on smaller screens
          minHeight: windowWidth < 768 ? "50px" : "80px",
          background:
                  "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
        }}
      >
        <div className="flex justify-center">
          <div className="w-full sm:w-11/12 mx-auto xl:w-full">
            <div className="w-full mx-auto flex justify-between items-center sm:px-5 px-3 py-2 md:py-3 rounded-lg mt-2 md:mt-4">
              {/* Logo Section */}
              <motion.div
                className="flex items-center space-x-2 sm:space-x-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link to="/">
                  <Logo className="w-32 md:w-40 lg:w-50" />
                </Link>
              </motion.div>

              {/* Navigation Links */}
              <nav className="hidden lg:flex items-center gap-6">
                <ul className="flex space-x-8 list-none">
                  {getVisibleNavigationItems().map((item, index) => (
                    <motion.li
                      key={item.key}
                      className={`relative text-xs md:text-sm lg:text-base xl:text-lg text-text-primary font-generalsans transition-colors group uppercase ${
                        isActive(item.href)
                          ? "font-bold"
                          : "font-medium hover:text-text-secondary hover:font-semibold"
                      }`}
                      whileHover={{ color: "text-text-secondary " }}
                    >
                      <div className="flex items-center gap-1">
                        <Link
                          to={item.href}
                          className="relative overflow-hidden uppercase"
                        >
                            <motion.div
                              className="relative"
                              whileHover="hover"
                              initial="initial"
                              variants={{
                                initial: { y: 0 },
                                hover: { y: -24 },
                              }}
                              transition={{
                                duration: 0.3,
                                ease: [0.25, 0.46, 0.45, 0.94],
                              }}
                              animate={{ opacity: 1, y: 0 }}
                              style={{
                                animationDelay: `${index * 0.1}s`,
                              }}
                            >
                              <span
                                className={`block ${isActive(item.href) ? "text-text-primary" : ""
                                  }`}
                              >
                                {item.name}
                              </span>
                              <motion.span
                                className="block absolute top-6 text-text-primary font-generalsans"
                                variants={{
                                  initial: { y: 0 },
                                  hover: { y: 0 },
                                }}
                              >
                                {item.name}
                              </motion.span>
                            </motion.div>
                          </Link>
                      </div>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  onClick={openCallbackModal}
                  className="hidden md:flex text-text-primary font-medium hover:text-text-secondary text-xs md:text-sm lg:text-base xl:text-lg hover:font-bold transition-colors  font-generalsans tracking-wide relative overflow-hidden h-5 md:h-6 items-center cursor-pointer px-2 md:px-3 lg:px-4 border-none bg-transparent"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    x: [0, -3, 3, -3, 3, 0],
                    transition: {
                      opacity: {
                        duration: 0.4,
                        delay: MENU_ITEMS.length * 0.1 + 0.1,
                        ease: "easeOut",
                      },
                      y: {
                        duration: 0.4,
                        delay: MENU_ITEMS.length * 0.1 + 0.1,
                        ease: "easeOut",
                      },
                      x: {
                        duration: 0.6,
                        delay: MENU_ITEMS.length * 0.1 + 0.5,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut",
                      },
                    },
                  }}
                >
                  <motion.div
                    className="relative"
                    whileHover="hover"
                    initial="initial"
                    variants={{
                      initial: { y: 0 },
                      hover: { y: -24 },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <span className="block text-text-primary font-generalsans font-medium uppercase">
                      Request CallBack
                    </span>
                    <motion.span
                      className="block absolute top-5 md:top-6 text-text-primary font-medium uppercase"
                      variants={{
                        initial: { y: 0 },
                        hover: { y: 0 },
                      }}
                    >
                      Request CallBack
                    </motion.span>
                  </motion.div>
                </motion.button>
              </nav>

              {/* Mobile Menu Button */}
              <motion.button
                style={{
                  minHeight: '1px',
                  minWidth: '1px',
                }}
                className="lg:hidden text-text-primary font-generalsans font-medium p-1.5 sm:p-2 mobile-menu-button relative z-70"
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                onClick={toggleMenu}
              >
                <motion.div
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoMenu className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>


      </motion.header>
    </>
  );
};

export default Header;
