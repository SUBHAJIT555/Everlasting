import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const text = "Everlasting Technical Services";
    const letters = text.split("");

    // Set up letters
    if (textRef.current) {
      textRef.current.innerHTML = letters
        .map((letter) => {
          if (letter === " ") {
            return '<span style="width: 0.3em; display: inline-block;"></span>';
          }
          return `<span class="letter" style="display: inline-block;">${letter}</span>`;
        })
        .join("");

      // Get all letter elements
      lettersRef.current = Array.from(
        textRef.current.querySelectorAll(".letter")
      ) as HTMLSpanElement[];
    }

    // Animation timeline
    const tl = gsap.timeline();

    // Animate container in
    gsap.set(containerRef.current, { opacity: 0 });
    gsap.to(containerRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });

    // Animate each letter with 3D effect
    lettersRef.current.forEach((letter, i) => {
      gsap.set(letter, {
        y: 80,
        opacity: 0,
        rotationX: -90,
        transformOrigin: "50% 50%",
      });

      tl.to(
        letter,
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.9,
          ease: "back.out(1.5)",
        },
        i * 0.04
      );
    });

    // Add a color glow effect after letters animate
    tl.to(
      lettersRef.current,
      {
        textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
        duration: 0.4,
        stagger: {
          amount: 0.6,
          from: "center",
        },
        ease: "power2.out",
      },
      "-=0.5"
    )
      .to(
        lettersRef.current,
        {
          textShadow: "0 0 0px rgba(255, 255, 255, 0)",
          duration: 0.3,
          stagger: {
            amount: 0.4,
            from: "center",
          },
        },
        "-=0.2"
      )
      // Reverse disappearing animation - reverse of appearing effect
      .to(
        lettersRef.current,
        {
          textShadow: "0 0 0px rgba(255, 255, 255, 0)",
          duration: 0.3,
          stagger: {
            amount: 0.4,
            from: "center",
          },
        },
        "+=0.5"
      )
      // Animate each letter back down with reverse 3D effect
      .to(
        lettersRef.current,
        {
          y: 80,
          opacity: 0,
          rotationX: -90,
          duration: 0.9,
          ease: "back.in(1.5)",
          stagger: {
            amount: lettersRef.current.length * 0.04,
            from: "end",
          },
          transformOrigin: "50% 50%",
        },
        "-=0.2"
      )
      // Fade out background
      .to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
            setIsVisible(false);
          },
        },
        "-=0.5"
      );

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-bg"
    >
      <div className="relative w-full px-4">
        <div
          ref={textRef}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-text-primary font-generalsans tracking-wider text-center wrap-break-words max-w-full"
          style={{
            letterSpacing: "0.05em",
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
