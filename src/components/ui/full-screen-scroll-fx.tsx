import React, {
  type CSSProperties,
  type ReactNode,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./full-screen-scroll-fx.module.css";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Section = {
  id?: string;
  background: string;
  leftLabel?: ReactNode;
  title: string | ReactNode;
  rightLabel?: ReactNode;
  renderBackground?: (active: boolean, previous: boolean) => ReactNode;
};

type Colors = Partial<{
  text: string;
  overlay: string;
  pageBg: string;
  stageBg: string;
}>;

type Durations = Partial<{
  change: number;
  snap: number;
}>;

export type FullScreenFXAPI = {
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
  getIndex: () => number;
  refresh: () => void;
};

export type FullScreenFXProps = {
  sections: Section[];
  className?: string;
  style?: CSSProperties;
  fontFamily?: string;
  header?: ReactNode;
  footer?: ReactNode;
  gap?: number;
  gridPaddingX?: number;
  showProgress?: boolean;
  debug?: boolean;
  durations?: Durations;
  reduceMotion?: boolean;
  bgTransition?: "fade" | "wipe";
  parallaxAmount?: number;
  currentIndex?: number;
  onIndexChange?: (index: number) => void;
  initialIndex?: number;
  colors?: Colors;
  apiRef?: React.Ref<FullScreenFXAPI>;
  ariaLabel?: string;
};

const clamp = (n: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, n));

export const FullScreenScrollFX = forwardRef<HTMLDivElement, FullScreenFXProps>(
  (
    {
      sections,
      className,
      style,
      fontFamily = '"GeneralSans", system-ui, sans-serif',
      header,
      footer,
      gap = 1,
      gridPaddingX = 2,
      showProgress = true,
      debug = false,
      durations = { change: 0.7, snap: 800 },
      reduceMotion,
      bgTransition = "fade",
      parallaxAmount = 4,
      currentIndex,
      onIndexChange,
      initialIndex = 0,
      colors = {
        text: "rgba(245,245,245,0.92)",
        overlay: "rgba(0,0,0,0.35)",
        pageBg: "#ffffff",
        stageBg: "#000000",
      },
      apiRef,
      ariaLabel = "Full screen scroll slideshow",
    },
    ref
  ) => {
    const total = sections.length;
    const [localIndex, setLocalIndex] = useState(clamp(initialIndex, 0, Math.max(0, total - 1)));
    const isControlled = typeof currentIndex === "number";
    const index = isControlled ? clamp(currentIndex!, 0, Math.max(0, total - 1)) : localIndex;

    const rootRef = useRef<HTMLDivElement | null>(null) as React.MutableRefObject<HTMLDivElement | null>;
    const fixedRef = useRef<HTMLDivElement | null>(null);
    const fixedSectionRef = useRef<HTMLDivElement | null>(null);

    const bgRefs = useRef<HTMLImageElement[]>([]);
    const wordRefs = useRef<HTMLSpanElement[][]>([]);
    const bottomItemRefs = useRef<HTMLDivElement[]>([]);

    const progressFillRef = useRef<HTMLDivElement | null>(null);
    const currentNumberRef = useRef<HTMLSpanElement | null>(null);

    const stRef = useRef<ScrollTrigger | null>(null);
    const lastIndexRef = useRef(index);
    const isAnimatingRef = useRef(false);
    const isSnappingRef = useRef(false);
    const sectionTopRef = useRef<number[]>([]);

    const prefersReduced = useMemo(() => {
      if (typeof window === "undefined") return false;
      return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }, []);
    const motionOff = reduceMotion ?? prefersReduced;

    const tempWordBucket = useRef<HTMLSpanElement[]>([]);
    const splitWords = (text: string) => {
      const words = text.split(/\s+/).filter(Boolean);
      return words.map((w, i) => (
        <span className={styles.fxWordMask} key={i}>
          <span className={styles.fxWord} ref={(el) => {
            if (el) tempWordBucket.current.push(el);
          }}>{w}</span>
          {i < words.length - 1 ? " " : null}
        </span>
      ));
    };
    const WordsCollector = ({ onReady }: { onReady: () => void }) => {
      useEffect(() => onReady(), []); // eslint-disable-line
      return null;
    };

    const computePositions = () => {
      const el = fixedSectionRef.current;
      if (!el) return;
      const top = el.offsetTop;
      const h = el.offsetHeight;
      const arr: number[] = [];
      for (let i = 0; i < total; i++) arr.push(top + (h * i) / total);
      sectionTopRef.current = arr;
    };


    useLayoutEffect(() => {
      if (typeof window === "undefined") return;
      const fixed = fixedRef.current;
      const fs = fixedSectionRef.current;
      if (!fixed || !fs || total === 0) return;

      fs.style.height = `${Math.max(1, total + 1)}00vh`;

      gsap.set(bgRefs.current, { opacity: 0, scale: 1.04, yPercent: 0 });
      if (bgRefs.current[0]) gsap.set(bgRefs.current[0], { opacity: 1, scale: 1 });

      wordRefs.current.forEach((words, sIdx) => {
        words.forEach((w) => {
          gsap.set(w, {
            yPercent: sIdx === index ? 0 : 100,
            opacity: sIdx === index ? 1 : 0,
          });
        });
      });

      computePositions();

      // Initial bottom text state
      bottomItemRefs.current.forEach((el, sIdx) => {
        if (el) {
          gsap.set(el, {
            opacity: sIdx === index ? 1 : 0,
            y: sIdx === index ? 0 : 20,
          });
        }
      });

      if (progressFillRef.current) {
        const p = (index / (total - 1 || 1)) * 100;
        progressFillRef.current.style.width = `${p}%`;
      }

      const st = ScrollTrigger.create({
        trigger: fs,
        start: "top top",
        end: "bottom bottom",
        pin: fixed,
        pinSpacing: true,
        onUpdate: (self) => {
          if (motionOff || isSnappingRef.current) return;
          const prog = self.progress;
          const target = Math.min(total - 1, Math.floor(prog * total));
          if (target !== lastIndexRef.current && !isAnimatingRef.current) {
            const next = lastIndexRef.current + (target > lastIndexRef.current ? 1 : -1);
            goTo(next, false);
          }
          if (progressFillRef.current) {
            const p = (lastIndexRef.current / (total - 1 || 1)) * 100;
            progressFillRef.current.style.width = `${p}%`;
          }
        },
      });

      stRef.current = st;

      if (initialIndex && initialIndex > 0 && initialIndex < total) {
        requestAnimationFrame(() => goTo(initialIndex, false));
      }

      const ro = new ResizeObserver(() => {
        computePositions();
        ScrollTrigger.refresh();
      });
      ro.observe(fs);

      return () => {
        ro.disconnect();
        st.kill();
        stRef.current = null;
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [total, initialIndex, motionOff, bgTransition, parallaxAmount]);

    const changeSection = (to: number) => {
      if (to === lastIndexRef.current || isAnimatingRef.current) return;
      const from = lastIndexRef.current;
      const down = to > from;
      isAnimatingRef.current = true;

      if (!isControlled) setLocalIndex(to);
      onIndexChange?.(to);

      if (currentNumberRef.current) {
        currentNumberRef.current.textContent = String(to + 1).padStart(2, "0");
      }
      if (progressFillRef.current) {
        const p = (to / (total - 1 || 1)) * 100;
        progressFillRef.current.style.width = `${p}%`;
      }

      const D = durations.change ?? 0.7;

      const outWords = wordRefs.current[from] || [];
      const inWords = wordRefs.current[to] || [];
      if (outWords.length) {
        gsap.to(outWords, {
          yPercent: down ? -100 : 100,
          opacity: 0,
          duration: D * 0.6,
          stagger: down ? 0.03 : -0.03,
          ease: "power3.out",
        });
      }
      if (inWords.length) {
        gsap.set(inWords, { yPercent: down ? 100 : -100, opacity: 0 });
        gsap.to(inWords, {
          yPercent: 0,
          opacity: 1,
          duration: D,
          stagger: down ? 0.05 : -0.05,
          ease: "power3.out",
        });
      }

      const prevBg = bgRefs.current[from];
      const newBg = bgRefs.current[to];
      if (bgTransition === "fade") {
        if (newBg) {
          gsap.set(newBg, { opacity: 0, scale: 1.04, yPercent: down ? 1 : -1 });
          gsap.to(newBg, { opacity: 1, scale: 1, yPercent: 0, duration: D, ease: "power2.out" });
        }
        if (prevBg) {
          gsap.to(prevBg, {
            opacity: 0,
            yPercent: down ? -parallaxAmount : parallaxAmount,
            duration: D,
            ease: "power2.out",
          });
        }
      } else {
        if (newBg) {
          gsap.set(newBg, {
            opacity: 1,
            clipPath: down ? "inset(100% 0 0 0)" : "inset(0 0 100% 0)",
            scale: 1,
            yPercent: 0,
          });
          gsap.to(newBg, { clipPath: "inset(0 0 0 0)", duration: D, ease: "power3.out" });
        }
        if (prevBg) {
          gsap.to(prevBg, { opacity: 0, duration: D * 0.8, ease: "power2.out" });
        }
      }

      // Bottom-left text animation - replace existing with new
      const prevBottomText = bottomItemRefs.current[from];
      const newBottomText = bottomItemRefs.current[to];
      
      if (prevBottomText) {
        gsap.to(prevBottomText, {
          opacity: 0,
          y: down ? -20 : 20,
          duration: D * 0.5,
          ease: "power2.out",
        });
      }
      
      if (newBottomText) {
        gsap.set(newBottomText, {
          opacity: 0,
          y: down ? 20 : -20,
        });
        gsap.to(newBottomText, {
          opacity: 1,
          y: 0,
          duration: D,
          ease: "power2.out",
          delay: D * 0.3,
        });
      }

      gsap.delayedCall(D, () => {
        lastIndexRef.current = to;
        isAnimatingRef.current = false;
      });
    };

    const goTo = (to: number, withScroll = true) => {
      const clamped = clamp(to, 0, total - 1);
      isSnappingRef.current = true;
      changeSection(clamped);

      const pos = sectionTopRef.current[clamped];
      const snapMs = durations.snap ?? 800;

      if (withScroll && typeof window !== "undefined") {
        window.scrollTo({ top: pos, behavior: "smooth" });
        setTimeout(() => (isSnappingRef.current = false), snapMs);
      } else {
        setTimeout(() => (isSnappingRef.current = false), 10);
      }
    };

    const next = () => goTo(index + 1);
    const prev = () => goTo(index - 1);

    useImperativeHandle(apiRef, () => ({
      next,
      prev,
      goTo,
      getIndex: () => index,
      refresh: () => ScrollTrigger.refresh(),
    }));

    useEffect(() => {
      if (progressFillRef.current) {
        const p = (index / (total - 1 || 1)) * 100;
        progressFillRef.current.style.width = `${p}%`;
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const cssVars: CSSProperties & Record<string, string> = {
      "--fx-font": fontFamily,
      "--fx-text": colors.text ?? "rgba(245,245,245,0.92)",
      "--fx-overlay": colors.overlay ?? "rgba(0,0,0,0.35)",
      "--fx-page-bg": colors.pageBg ?? "#fff",
      "--fx-stage-bg": colors.stageBg ?? "#000",
      "--fx-gap": `${gap}rem`,
      "--fx-grid-px": `${gridPaddingX}rem`,
      "--fx-row-gap": "10px",
    };

    return (
      <div
        ref={(node) => {
          rootRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        className={cn(styles.fx, className)}
        style={{ ...cssVars, ...style }}
        aria-label={ariaLabel}
      >
        {debug && <div className={styles.fxDebug}>Section: {index}</div>}

        <div className={styles.fxScroll}>
          <div className={styles.fxFixedSection} ref={fixedSectionRef}>
            <div className={styles.fxFixed} ref={fixedRef}>
              <div className={styles.fxBgs} aria-hidden="true">
                {sections.map((s, i) => (
                  <div className={styles.fxBg} key={s.id ?? i}>
                    {s.renderBackground ? (
                      s.renderBackground(index === i, lastIndexRef.current === i)
                    ) : (
                      <>
                        <img
                          ref={(el) => {
                            if (el) bgRefs.current[i] = el;
                          }}
                          src={s.background}
                          alt=""
                          className={styles.fxBgImg}
                        />
                        <div className={styles.fxBgOverlay} />
                      </>
                    )}
                  </div>
                ))}
              </div>

              <div className={styles.fxGrid}>
                {header && <div className={styles.fxHeader}>{header}</div>}

                <div className={styles.fxContent}>
                  <div className={styles.fxCenter}>
                    {sections.map((s, sIdx) => {
                      tempWordBucket.current = [];
                      const isString = typeof s.title === "string";
                      return (
                        <div
                          key={`C-${s.id ?? sIdx}`}
                          className={cn(
                            styles.fxFeatured,
                            sIdx === index && "active"
                          )}
                        >
                          <h3 className={styles.fxFeaturedTitle}>
                            {isString ? splitWords(s.title as string) : s.title}
                          </h3>
                          <WordsCollector
                            onReady={() => {
                              if (tempWordBucket.current.length) {
                                wordRefs.current[sIdx] = [...tempWordBucket.current];
                              }
                              tempWordBucket.current = [];
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom-left service text - shows only one at a time */}
                <div className={styles.fxBottomLeft}>
                  {sections.map((s, i) => (
                    <div
                      key={`BL-${s.id ?? i}`}
                      ref={(el) => {
                        if (el) bottomItemRefs.current[i] = el;
                      }}
                      className={cn(
                        styles.fxBottomItem,
                        i === index && styles.fxBottomItemVisible
                      )}
                    >
                      {s.leftLabel || s.title}
                    </div>
                  ))}
                </div>

                <div className={styles.fxFooter}>
                  {footer && <div className={styles.fxFooterTitle}>{footer}</div>}
                  {showProgress && (
                    <div className={styles.fxProgress}>
                      <div className={styles.fxProgressNumbers}>
                        <span ref={currentNumberRef}>{String(index + 1).padStart(2, "0")}</span>
                        <span>{String(total).padStart(2, "0")}</span>
                      </div>
                      <div className={styles.fxProgressFill} ref={progressFillRef} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.fxEnd}>
            <p className={styles.fxFin}>fin</p>
          </div>
        </div>
      </div>
    );
  }
);

FullScreenScrollFX.displayName = "FullScreenScrollFX";
