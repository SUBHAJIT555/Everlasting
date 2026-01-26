const logoPath = "/images/logo.svg";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "w-[140px]" }: LogoProps) => {
  return (
    <img
      loading="lazy"
      src={logoPath}
      alt="Baharnani Advertising Logo"
      className={className}
    />
  );
};
