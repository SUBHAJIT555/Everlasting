import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useMobileMenuStore } from "../store/mobileMenuStore";
import { useCallbackModalStore } from "../store/callbackModalStore";
import { IoClose } from "react-icons/io5";
import { Logo } from "./index";
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

const MobileMenu: React.FC = () => {
  const { isOpen, closeMenu } = useMobileMenuStore();
  const openCallbackModal = useCallbackModalStore((state) => state.openModal);
  const location = useLocation();

  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest(".mobile-menu") &&
        !target.closest(".mobile-menu-button")
      ) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, closeMenu]);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-999 mobile-menu bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-white backdrop-blur-md cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute top-0 right-0 h-screen w-full lg:w-80 bg-white flex flex-col overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              style={{
                background:
                  "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
              }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex-1 flex flex-col min-h-0">
                {/* Header with Logo and Close Button */}
                <div className="flex items-center justify-between px-4 sm:px-6 pt-4 pb-4 border-b border-neutral-300 border-dashed">
                  <Link to="/" onClick={closeMenu} className="flex items-center">
                    <Logo className="w-32 md:w-40" />
                  </Link>
                  <motion.button
                    className="text-text-primary font-generalsans font-medium p-2 hover:text-text-secondary transition-colors cursor-pointer duration-200"
                    onClick={closeMenu}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <IoClose className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="px-4 sm:px-6 py-6 space-y-1">
                  {MENU_ITEMS.map((item, index) => (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => {
                          closeMenu();
                        }}
                        className={`block py-3 px-2 text-sm md:text-base text-text-primary font-generalsans transition-all duration-300 uppercase tracking-wide ${
                          isActive(item.href)
                            ? "font-bold"
                            : "font-medium hover:text-text-secondary hover:font-semibold"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                

                {/* Mobile Contact Button */}
                <motion.div
                  className="px-4 sm:px-6 py-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <motion.button
                    className="w-full text-text-primary px-6 py-4 font-generalsans text-sm md:text-base font-semibold tracking-wider transition-all duration-300 hover:text-text-secondary hover:font-bold uppercase border border-neutral-300 border-dashed rounded bg-white hover:bg-neutral-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    animate={{
                      x: [0, -4, 4, -4, 4, -3, 3, -3, 3, 0],
                      transition: {
                        x: {
                          duration: 0.5,
                          delay: 1,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut",
                        },
                      },
                    }}
                    onClick={() => {
                      openCallbackModal();
                      closeMenu();
                    }}
                  >
                    Get Free Quote
                  </motion.button>
                </motion.div>

                

                {/* Footer - Now positioned at the bottom with proper spacing */}
                <motion.div
                  className="mt-auto px-4 sm:px-6 py-6 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="text-xs text-text-primary font-generalsans font-medium uppercase tracking-widest">
                    © {new Date().getFullYear()} BAHARNANI ADVERTISING LLC. ALL
                    RIGHTS RESERVED.
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
