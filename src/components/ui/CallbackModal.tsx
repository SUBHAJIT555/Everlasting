import LeadCaptureModal, { type LeadCaptureModalConfig } from "../LeadCaptureModal";
import { useCallbackModalStore } from "@/components/store/callbackModalStore";

const callbackModalConfig: LeadCaptureModalConfig = {
  headline: "Request a Callback",
  subtext: "Share your details and our team will contact you shortly to discuss your technical service requirements.",
  cta: "Request Callback",
  trustLine: "We'll get back to you within 24 hours.",
  formType: "marketing-modal",
};

const CallbackModal = () => {
  const { isOpen, closeModal } = useCallbackModalStore();

  return (
    <LeadCaptureModal
      isOpen={isOpen}
      onClose={closeModal}
      config={callbackModalConfig}
    />
  );
};

export default CallbackModal;
