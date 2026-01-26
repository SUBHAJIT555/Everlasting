import { useState, useCallback, useEffect } from "react";
import LeadCaptureModal, { type LeadCaptureModalConfig } from "./LeadCaptureModal";
import { useLeadCaptureModal } from "../hooks/useLeadCaptureModal";
import useLeadCaptureModalContext from "@/hooks/useLeadCaptureModalContext";


// Marketing modal config (scroll trigger)
const marketingModalConfig: LeadCaptureModalConfig = {
    headline: "Get Professional Technical Services for Your Property",
    subtext: "Share your details for a free expert consultation on maintenance, renovation, or repairs.",
    cta: "Get Free Consultation",
    trustLine: "Experienced technical service providers in Dubai.",
    formType: "marketing-modal",
};

// Exit-intent modal config
const exitIntentModalConfig: LeadCaptureModalConfig = {
    headline: "Before You Go — Need Technical Services?",
    subtext: "Tell us what you need and our experts will send you a quick, free quote.",
    cta: "Get Free Quote",
    trustLine: "No commitment. Completely free.",
    formType: "exit-intent-modal",
};

export default function LeadCaptureModalManager() {
    const [hasSeenModal, setHasSeenModal] = useState(false);
    const [currentModalType, setCurrentModalType] = useState<"marketing" | "exit-intent" | null>(null);
    const { isOpen: manualIsOpen, modalType: manualModalType, closeModal: manualCloseModal } = useLeadCaptureModalContext();

    // Analytics tracking function
    const trackEvent = useCallback((eventName: string, data?: Record<string, string | number | boolean>) => {
        if (typeof window !== "undefined" && (window as unknown as { gtag: (event: string, data: Record<string, string | number | boolean>) => void }).gtag) {
            (window as unknown as { gtag: (event: string, data: Record<string, string | number | boolean>) => void }).gtag(eventName, data as Record<string, string | number | boolean>);
        }
        // Also log to console for debugging
        console.log(`[Analytics] ${eventName}`, data);
    }, []);

    // Scroll trigger modal (50%)
    const scrollModal = useLeadCaptureModal({
        triggerType: "scroll",
        scrollThreshold: 50,
        enabled: !hasSeenModal,
        onTrigger: () => {
            setCurrentModalType("marketing");
            setHasSeenModal(true);
            trackEvent("modal_open", { type: "scroll", modalType: "marketing" });
        },
    });

    // Exit-intent modal (only enabled if scroll modal hasn't triggered)
    const exitIntentModal = useLeadCaptureModal({
        triggerType: "exit-intent",
        enabled: !hasSeenModal && !scrollModal.shouldShow,
        onTrigger: () => {
            setCurrentModalType("exit-intent");
            setHasSeenModal(true);
            trackEvent("modal_open", { type: "exit-intent", modalType: "exit-intent" });
        },
    });

    const handleMarketingClose = useCallback(() => {
        scrollModal.close();
        trackEvent("modal_close", { type: "scroll", modalType: "marketing" });
    }, [scrollModal, trackEvent]);

    const handleExitIntentClose = useCallback(() => {
        exitIntentModal.close();
        trackEvent("modal_close", { type: "exit-intent", modalType: "exit-intent" });
    }, [exitIntentModal, trackEvent]);

    const handleMarketingOpen = useCallback(() => {
        trackEvent("modal_open", { type: "scroll", modalType: "marketing" });
    }, [trackEvent]);

    const handleExitIntentOpen = useCallback(() => {
        trackEvent("modal_open", { type: "exit-intent", modalType: "exit-intent" });
    }, [trackEvent]);

    const handleMarketingCloseEvent = useCallback(() => {
        trackEvent("modal_close", { type: "scroll", modalType: "marketing" });
    }, [trackEvent]);

    const handleExitIntentCloseEvent = useCallback(() => {
        trackEvent("modal_close", { type: "exit-intent", modalType: "exit-intent" });
    }, [trackEvent]);

    const handleMarketingSubmit = useCallback(() => {
        trackEvent("modal_submit", { type: "scroll", modalType: "marketing" });
    }, [trackEvent]);

    const handleExitIntentSubmit = useCallback(() => {
        trackEvent("modal_submit", { type: "exit-intent", modalType: "exit-intent" });
    }, [trackEvent]);

    // Handle manual modal open from context (e.g., CTA button)
    useEffect(() => {
        if (manualIsOpen && manualModalType) {
            setCurrentModalType(manualModalType);
            trackEvent("modal_open", { type: "manual", modalType: manualModalType });
        }
    }, [manualIsOpen, manualModalType, trackEvent]);

    // Determine which modal should be shown
    const showMarketingModal =
        (scrollModal.shouldShow && currentModalType === "marketing") ||
        (manualIsOpen && manualModalType === "marketing");

    const showExitIntentModal =
        (exitIntentModal.shouldShow && currentModalType === "exit-intent") ||
        (manualIsOpen && manualModalType === "exit-intent");

    const handleMarketingCloseWrapper = useCallback(() => {
        if (manualIsOpen && manualModalType === "marketing") {
            manualCloseModal();
        } else {
            handleMarketingClose();
        }
    }, [manualIsOpen, manualModalType, manualCloseModal, handleMarketingClose]);

    const handleExitIntentCloseWrapper = useCallback(() => {
        if (manualIsOpen && manualModalType === "exit-intent") {
            manualCloseModal();
        } else {
            handleExitIntentClose();
        }
    }, [manualIsOpen, manualModalType, manualCloseModal, handleExitIntentClose]);

    // Render modals upfront to avoid CLS - they're conditionally visible via isOpen prop
    return (
        <>
            {/* Marketing Modal (Scroll Trigger or Manual) */}
            <LeadCaptureModal
                isOpen={showMarketingModal}
                onClose={handleMarketingCloseWrapper}
                config={marketingModalConfig}
                onOpen={handleMarketingOpen}
                onCloseEvent={handleMarketingCloseEvent}
                onSubmitEvent={handleMarketingSubmit}
            />

            {/* Exit-Intent Modal */}
            <LeadCaptureModal
                isOpen={showExitIntentModal}
                onClose={handleExitIntentCloseWrapper}
                config={exitIntentModalConfig}
                onOpen={handleExitIntentOpen}
                onCloseEvent={handleExitIntentCloseEvent}
                onSubmitEvent={handleExitIntentSubmit}
            />
        </>
    );
}

