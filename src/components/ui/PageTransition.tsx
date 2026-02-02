import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function PageTransition({ active }: { active: boolean }) {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (!pathRef.current) return;

    const start = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
    const end = "M 0 100 V 0 Q 50 0 100 0 V 100 z";

    gsap.to(pathRef.current, {
      attr: { d: active ? end : start },
      duration: 0.9,
      ease: "power2.inOut",
    });
  }, [active]);

  return (
    <svg
      className="fixed inset-0 z-999 pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path ref={pathRef} fill="#0e100f" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
    </svg>
  );
}
