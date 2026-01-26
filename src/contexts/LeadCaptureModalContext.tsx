import { createContext } from "react";

export type ModalType = "marketing" | "exit-intent";

export interface LeadCaptureModalContextType {
    openModal: (type?: ModalType) => void;
    closeModal: () => void;
    isOpen: boolean;
    modalType: ModalType | null;
}

export const LeadCaptureModalContext = createContext<LeadCaptureModalContextType | undefined>(undefined);





