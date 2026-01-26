import { useEffect, useState, useCallback } from "react";

const SCROLL_THRESHOLD_PX = 50;

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isWhatsAppHovered, setIsWhatsAppHovered] = useState(false);

  const handleScroll = useCallback(() => {
    const y = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(y > SCROLL_THRESHOLD_PX);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed right-4 bottom-4 z-50 flex flex-col-reverse items-center gap-3 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      style={{ zIndex: 9999 }}
    >
      <button
        aria-label="Scroll to top"
        onClick={scrollToTop}
        className="group bg-text-primary hover:bg-text-primary/90 text-text-secondary p-1 md:p-2 shadow-lg border border-neutral-300 border-dashed rounded backdrop-blur-sm transition-colors"
        style={{
          minHeight: '1px',
          minWidth: '1px',
          background:
                  "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
        }}
      >
        <style>{`
          @keyframes drawArrowPath {
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
          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-up w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:-translate-y-0.5"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 5l0 14"
            style={{
              strokeDasharray: 1000,
              strokeDashoffset: 1000,
              animation: "drawArrowPath 4s ease-in-out infinite",
              animationDelay: "0.3s",
            }}
          />
          <path
            d="M16 9l-4 -4"
            style={{
              strokeDasharray: 1000,
              strokeDashoffset: 1000,
              animation: "drawArrowPath 4s ease-in-out infinite",
              animationDelay: "0.5s",
            }}
          />
          <path
            d="M8 9l4 -4"
            style={{
              strokeDasharray: 1000,
              strokeDashoffset: 1000,
              animation: "drawArrowPath 4s ease-in-out infinite",
              animationDelay: "0.7s",
            }}
          />
        </svg>
      </button>

      <div
        className="relative"
        onMouseEnter={() => setIsWhatsAppHovered(true)}
        onMouseLeave={() => setIsWhatsAppHovered(false)}
      >
        {/* Chat Bubble */}
        <div
          className={`absolute bottom-full right-0 mb-2 px-4 py-3 bg-white text-text-primary text-xs sm:text-sm font-generalsans rounded-lg shadow-lg border border-neutral-300 border-dashed whitespace-nowrap transition-all duration-300 ${isWhatsAppHovered
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          style={{ zIndex: 10000, background:
                  "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white", }}
        >
          Connect through WhatsApp for faster response
          
        </div>
        <a
          aria-label="Chat on WhatsApp"
          href="https://wa.me/971554684988?text=Hello%2C%20I%27m%20interested%20in%20your%20exhibition%20stand%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-green-500 hover:bg-green-600 border border-green-500 shadow-sm border-dashed rounded text-white p-1 md:p-2 transition-colors block"
        >
          <style>{`
            @keyframes drawWhatsAppPath {
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:-translate-y-0.5"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"
              style={{
                strokeDasharray: 1000,
                strokeDashoffset: 1000,
                animation: "drawWhatsAppPath 4s ease-in-out infinite",
                animationDelay: "0.4s",
              }}
            />
            <path
              d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"
              style={{
                strokeDasharray: 1000,
                strokeDashoffset: 1000,
                animation: "drawWhatsAppPath 4s ease-in-out infinite",
                animationDelay: "0.6s",
              }}
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default FloatingActions;
