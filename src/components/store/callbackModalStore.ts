import { create } from "zustand";

interface CallbackModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useCallbackModalStore = create<CallbackModalState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
