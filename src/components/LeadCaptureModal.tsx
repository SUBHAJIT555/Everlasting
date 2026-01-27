import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
// import { FiX, FiCheckCircle } from "react-icons/fi";
import { FiX } from "@react-icons/all-files/fi/FiX";
import { FiCheckCircle } from "@react-icons/all-files/fi/FiCheckCircle";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useUTMTracking } from "@/hooks/useUTMTracking";
const PHONE_PREFIX = "+971";
const PHONE_DIGITS_LENGTH = 9;

// Phone number formatter
const formatPhoneNumber = (value: string): string => {
  let cleaned = value.replace(/[^\d+]/g, "");
  if (cleaned.startsWith("971")) cleaned = "+" + cleaned;
  if (!cleaned.startsWith(PHONE_PREFIX)) {
    const digits = cleaned.replace(/\D/g, "").slice(0, PHONE_DIGITS_LENGTH);
    return digits ? PHONE_PREFIX + digits : "";
  }
  const digits = cleaned
    .slice(PHONE_PREFIX.length)
    .replace(/\D/g, "")
    .slice(0, PHONE_DIGITS_LENGTH);
  return PHONE_PREFIX + digits;
};

// Validation
const validateUAEPhone = (phone: string): boolean | string => {
  if (!phone) return "Phone is required";
  const digits = phone.replace(PHONE_PREFIX, "").replace(/\D/g, "");
  if (digits.length !== PHONE_DIGITS_LENGTH)
    return "Phone number must be 9 digits";
  if (!/^[567]\d{8}$/.test(digits))
    return "Please enter a valid UAE mobile number (starting with 5, 6, or 7)";
  return true;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  website: string; // honeypot
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
};

export type LeadCaptureModalConfig = {
  headline: string;
  subtext: string;
  cta: string;
  trustLine?: string;
  apiEndpoint?: string;
  formType?: string;
};

type LeadCaptureModalProps = {
  isOpen: boolean;
  onClose: () => void;
  config: LeadCaptureModalConfig;
  onOpen?: () => void;
  onCloseEvent?: () => void;
  onSubmitEvent?: () => void;
};

export default function LeadCaptureModal({
  isOpen,
  onClose,
  config,
  onOpen,
  onCloseEvent,
  onSubmitEvent,
}: LeadCaptureModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: PHONE_PREFIX,
      website: "",
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_term: "",
      utm_content: "",
    },
  });

  useUTMTracking<FormData>(setValue);

  // Focus trap
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      const modal = modalRef.current;
      if (modal) {
        const focusableElements = modal.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key !== "Tab") return;

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement?.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement?.focus();
            }
          }
        };

        document.addEventListener("keydown", handleTabKey);
        firstElement?.focus();

        return () => {
          document.removeEventListener("keydown", handleTabKey);
        };
      }
    } else {
      previousActiveElement.current?.focus();
    }
  }, [isOpen]);

  // ESC key handler
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      onOpen?.();
    } else {
      document.body.style.overflow = "";
      if (submitStatus !== "success") {
        onCloseEvent?.();
      }
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, onOpen, onCloseEvent, submitStatus]);

  const onSubmit = async (data: FormData) => {
    if (data.website) {
      // Honeypot filled, treat as success silently
      reset();
      onClose();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("formType", config.formType || "exit-intent-modal");
      formData.append("utm_source", data.utm_source);
      formData.append("utm_medium", data.utm_medium);
      formData.append("utm_campaign", data.utm_campaign);
      formData.append("utm_term", data.utm_term);
      formData.append("utm_content", data.utm_content);
      if (config.apiEndpoint) {
        formData.append("modalType", config.formType || "exit-intent-modal");
      }

      const endpoint = config.apiEndpoint || "/mail.php";
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();

      if (responseData.error || responseData.status === "error") {
        throw new Error(
          responseData.error || responseData.message || "Failed to send message"
        );
      }

      setMessage(responseData.message || "Thank you! We'll be in touch soon.");
      setSubmitStatus("success");
      onSubmitEvent?.();
      reset();

      // Close modal after success
      setTimeout(() => {
        onClose();
      }, 1000);
      setTimeout(() => {
        setSubmitStatus(null);
        navigate("/thank-you", { replace: true });
      }, 1500);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("Something went wrong. Please try again.");
      }
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-1000 flex items-center justify-center p-4 bg-white backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg  border border-neutral-300 border-dashed p-6 sm:p-8 overflow-visible"
            style={{
              background:
                  "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            

            {/* Close button */}
            <button
              type="button"
              style={{
                minWidth: "1px",
                minHeight: "1px",
              }}
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 text-text-secondary font-medium hover:text-text-primary transition-colors p-1 z-10 border border-dashed border-neutral-300 bg-white shadow-sm"
            >
              <FiX size={24} />
            </button>

            {submitStatus === "success" ? (
              <div className="text-center py-8">
                <FiCheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
                <p className="text-xl text-white font-semibold font-clashdisplay">
                  {message}
                </p>
              </div>
            ) : submitStatus === "error" ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">⚠️</div>
                <p className="text-lg text-red-300 font-semibold mb-2 font-clashdisplay">
                  Sorry, something went wrong.
                </p>
                <p className="text-sm text-white/70 font-generalsans">
                  {message}
                </p>
              </div>
            ) : (
              <>
                {/* Headline */}
                <h2
                  id="modal-headline"
                  className="text-xl sm:text-2xl lg:text-3xl font-clashdisplay font-medium text-text-primary mb-3 pr-8 leading-tight uppercase"
                >
                  {config.headline}
                </h2>

                {/* Subtext */}
                <p className="text-text-secondary font-medium mb-6 text-md sm:text-lg font-generalsans leading-relaxed">
                  {config.subtext}
                </p>

                {/* Trust line */}
                {config.trustLine && (
                  <p className="text-sm sm:text-base text-text-secondary font-medium mb-6 italic font-generalsans">
                    {config.trustLine}
                  </p>
                )}

                {/* Form */}
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-4"
                  id="lead-capture-form"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="modal-name"
                      className="block text-text-secondary font-medium font-generalsans text-sm sm:text-base mb-2"
                    >
                      Enter Your Full Name * :
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      placeholder="Your name"
                      className={cn(
                        "w-full px-4 py-3 border-0 border-b border-dashed border-neutral-300 bg-white text-coffee-bean font-generalsans transition-colors focus:outline-none focus:border-b focus:border-b-neutral-500",
                        errors.name && "border-b-red-500"
                      )}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-300 font-generalsans">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="modal-email"
                      className="block text-text-secondary font-medium font-generalsans text-sm sm:text-base mb-2"
                    >
                      Enter Your Email Address * :
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      })}
                      placeholder="Your email"
                      className={cn(
                        "w-full px-4 py-3 border-0 border-b border-dashed border-neutral-300 bg-white text-coffee-bean font-generalsans transition-colors focus:outline-none focus:border-b focus:border-b-neutral-500",
                        errors.email && "border-b-red-500"
                      )}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-300 font-generalsans">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="modal-phone"
                      className="block text-text-secondary font-medium font-generalsans text-sm sm:text-base mb-2"
                    >
                      Enter Your Phone Number * :
                    </label>
                    <Controller
                      name="phone"
                      control={control}
                      rules={{ validate: validateUAEPhone }}
                      render={({ field }) => (
                        <>
                          <input
                            id="modal-phone"
                            type="tel"
                            value={field.value}
                            onChange={(e) =>
                              field.onChange(formatPhoneNumber(e.target.value))
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Backspace" || e.key === "Delete") {
                                const input = e.currentTarget;
                                const cursorPos = input.selectionStart || 0;
                                const selectionEnd = input.selectionEnd || 0;
                                const hasSelection = cursorPos !== selectionEnd;

                                if (
                                  field.value.startsWith(PHONE_PREFIX) &&
                                  cursorPos <= PHONE_PREFIX.length &&
                                  !hasSelection
                                ) {
                                  e.preventDefault();
                                }
                              }
                            }}
                            onBlur={field.onBlur}
                            placeholder="Your phone number"
                            className={cn(
                              "w-full px-4 py-3 border-0 border-b border-dashed border-neutral-300 bg-white text-coffee-bean font-generalsans transition-colors focus:outline-none focus:border-b focus:border-b-neutral-500",
                              errors.phone && "border-b-red-500"
                            )}
                          />
                          {errors.phone && (
                            <p className="mt-1 text-sm text-red-300 font-generalsans">
                              {errors.phone.message}
                            </p>
                          )}
                        </>
                      )}
                    />
                  </div>

                  {/* Honeypot */}
                  <div className="hidden">
                    <input
                      type="text"
                      {...register("website")}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <input type="hidden" {...register("utm_source")} />
                  <input type="hidden" {...register("utm_medium")} />
                  <input type="hidden" {...register("utm_campaign")} />
                  <input type="hidden" {...register("utm_term")} />
                  <input type="hidden" {...register("utm_content")} />

                  {/* Submit button */}
                  <div className="w-full">
                    <style>{`
                      @keyframes drawSendPath {
                        0% {
                          stroke-dasharray: 1000;
                          stroke-dashoffset: 1000;
                        }
                        50% {
                          stroke-dashoffset: 0;
                        }
                        100% {
                          stroke-dasharray: 1000;
                          stroke-dashoffset: 1000;
                        }
                      }
                    `}</style>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        "font-generalsans font-normal text-xs sm:text-sm md:text-base py-2 w-full bg-white shadow-sm text-text-primary border border-neutral-300 border-dashed rounded transition-colors hover:bg-text-secondary hover:text-white hover:shadow-none cursor-pointer flex items-center justify-center gap-2",
                        {
                          "opacity-50 cursor-not-allowed pointer-events-none": isSubmitting,
                        }
                      )}
                    >
                      <span>{isSubmitting ? "Sending..." : config.cta}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-send"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M10 14l11 -11"
                          style={{
                            strokeDasharray: 1000,
                            strokeDashoffset: 1000,
                            animation: "drawSendPath 4s ease-in-out infinite",
                            animationDelay: "0.5s",
                          }}
                        />
                        <path
                          d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"
                          style={{
                            strokeDasharray: 1000,
                            strokeDashoffset: 1000,
                            animation: "drawSendPath 4s ease-in-out infinite",
                            animationDelay: "0.8s",
                          }}
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </>
            )}

            <span className="sr-only" aria-live="polite">
              {isOpen ? "Modal open" : "Modal closed"}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
