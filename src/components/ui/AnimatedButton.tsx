import { motion } from "framer-motion";
import { Link } from "react-router";
import { useRef, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { VscArrowRight } from "react-icons/vsc";

interface AnimatedButtonProps {
  text: string;
  to?: string;
  href?: string;
  icon?: ReactNode;
  bgColor?: string;
  hoverColor?: string;
  iconColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  borderColor?: string;
  className?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const AnimatedButton = ({
  text,
  to,
  href,
  icon,
  bgColor = "",
  hoverColor = "",
  iconColor = "",
  textColor = "",
  hoverTextColor = "",
  borderColor = "",
  className = "",
  onClick,
}: AnimatedButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonWidth, setButtonWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (buttonRef.current) {
        setButtonWidth(buttonRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const defaultIcon = (
    <VscArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-ultrasonic-blue" />
  );

  const iconToRender = icon ?? defaultIcon;

  const content = (
    <motion.button
      ref={buttonRef}
      className={`group relative flex items-center w-full py-2 sm:py-1 px-2 sm:px-1 sm:pr-4 border border-dashed ${borderColor} ${bgColor} overflow-hidden ${className}`}
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {/* Background fill on hover */}
      <motion.div
        className={`absolute inset-0 ${hoverColor}`}
        initial={{ x: "-100%" }}
        variants={{
          hover: { x: 0 },
        }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {/* Icon Box - starts on left */}
      <motion.div
        className={`relative z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 ${iconColor} shrink-0`}
        initial={{ x: 0 }}
        variants={{
          hover: {
            x:
              buttonWidth > 0 ? buttonWidth - (buttonWidth > 400 ? 56 : 40) : 0,
            rotate: 360,
          },
        }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {iconToRender}
      </motion.div>

      {/* Text - with left padding */}
      <motion.span
        className={`relative z-10 ${textColor} font-medium text-xs sm:text-sm md:text-base shrink-0 pl-2 sm:pl-4`}
        initial={{ x: 0 }}
        variants={{
          hover: {
            x: -40,
          },
        }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.span
          variants={{
            hover: {
              color:
                hoverTextColor === "text-gray-900"
                  ? "#111827"
                  : hoverTextColor === "text-white"
                    ? "#ffffff"
                    : undefined,
            },
          }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {text}
        </motion.span>
      </motion.span>
    </motion.button>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return <div>{content}</div>;
};

export default AnimatedButton;
