import { useEffect, useState, useCallback, useRef } from "react";

type TriggerType = "scroll" | "exit-intent";

type UseLeadCaptureModalOptions = {
  triggerType: TriggerType;
  scrollThreshold?: number; // percentage (0-100), only used for scroll trigger
  enabled?: boolean;
  onTrigger?: (type: TriggerType) => void;
};

export function useLeadCaptureModal({
  triggerType,
  scrollThreshold = 60,
  enabled = true,
  onTrigger,
}: UseLeadCaptureModalOptions) {
  const [shouldShow, setShouldShow] = useState(false);
  const hasTriggered = useRef(false);

  // Detect if mobile
  const isMobile = useCallback(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }, []);

  // Scroll trigger
  useEffect(() => {
    if (triggerType !== "scroll" || !enabled || hasTriggered.current) return;

    const handleScroll = () => {
      if (hasTriggered.current) return;

      const scrollPercent =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercent >= scrollThreshold) {
        hasTriggered.current = true;
        setShouldShow(true);
        onTrigger?.(triggerType);
      }
    };

    // Throttle scroll events
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [enabled, scrollThreshold, onTrigger, triggerType]);

  // Exit-intent trigger
  useEffect(() => {
    if (triggerType !== "exit-intent" || !enabled || hasTriggered.current) return;
    // Don't trigger exit-intent on mobile
    if (isMobile()) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is moving upward toward the top of the viewport
      if (e.clientY <= 0 && !hasTriggered.current) {
        hasTriggered.current = true;
        setShouldShow(true);
        onTrigger?.(triggerType);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [enabled, isMobile, onTrigger, triggerType]);

  const close = useCallback(() => {
    setShouldShow(false);
    hasTriggered.current = true;
  }, []);

  const reset = useCallback(() => {
    setShouldShow(false);
    hasTriggered.current = false;
  }, []);

  return {
    shouldShow,
    triggerType,
    close,
    reset,
  };
}

