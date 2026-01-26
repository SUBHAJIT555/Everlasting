
import { LeadCaptureModalContext, type LeadCaptureModalContextType } from "@/contexts/LeadCaptureModalContext";
import { useContext } from "react";

const useLeadCaptureModalContext = () => {
    const context = useContext<LeadCaptureModalContextType | undefined>(LeadCaptureModalContext);
    if (context === undefined) {
        throw new Error("useLeadCaptureModalContext must be used within a LeadCaptureModalProvider");
    }
    return context;
}

export default useLeadCaptureModalContext;