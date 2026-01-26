import { LeadCaptureModalContext, type ModalType } from "@/contexts/LeadCaptureModalContext";
import { useState, type ReactNode, useCallback } from "react";

const LeadCaptureModalProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState<ModalType | null>(null);

    const openModal = useCallback((type: ModalType = "marketing") => {
        setModalType(type);
        setIsOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsOpen(false);
        // Don't reset modalType immediately to avoid flicker
        setTimeout(() => setModalType(null), 300);
    }, []);

    return (
        <LeadCaptureModalContext.Provider value={{ openModal, closeModal, isOpen, modalType }}>
            {children}
        </LeadCaptureModalContext.Provider>
    );
}

export default LeadCaptureModalProvider;