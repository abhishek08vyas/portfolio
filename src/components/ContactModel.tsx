// ContactModal.tsx
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { LuX } from "react-icons/lu";
import emailjs from '@emailjs/browser';
import { EMAIL } from "@/constants/links";
import { commonStyles } from "@/lib/theme-utils";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  // Focus management: move focus into the dialog on open, restore it on close
  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement | null;
      // Focus the dialog container so screen readers announce it
      dialogRef.current?.focus();
    } else if (triggerRef.current) {
      triggerRef.current.focus();
      triggerRef.current = null;
    }
  }, [isOpen]);

  // The success view replaces the form (and the focused submit button), which
  // would drop focus to <body> and break the trap — refocus the dialog instead
  useEffect(() => {
    if (isOpen && submitStatus === "success") {
      dialogRef.current?.focus();
    }
  }, [isOpen, submitStatus]);

  // Escape closes; Tab is trapped inside the dialog while open
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (e.shiftKey) {
        if (active === first || active === dialogRef.current) {
          e.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [onClose]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendViaContactApi = async () => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error(`Contact API responded with ${response.status}`);
    }
  };

  const sendViaEmailJs = async () => {
    // EmailJS configuration comes from environment variables only (no hardcoded fallbacks)
    const emailjsUserId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
    const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    if (!emailjsUserId || !emailjsServiceId || !emailjsTemplateId) {
      throw new Error("EmailJS environment variables are not configured");
    }

    emailjs.init(emailjsUserId);
    await emailjs.send(emailjsServiceId, emailjsTemplateId, {
      name: formData.name,
      email: formData.email,
      title: formData.subject,
      message: formData.message
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (process.env.NEXT_PUBLIC_USE_CONTACT_API === "true") {
        await sendViaContactApi();
      } else {
        await sendViaEmailJs();
      }

      setSubmitStatus("success");
      // Reset form after successful submission
      setFormData({ name: "", email: "", subject: "", message: "" });
      // Close modal after 2 seconds on success
      setTimeout(() => {
        onClose();
        setSubmitStatus("idle");
      }, 2000);
    } catch (error) {
      setSubmitStatus("error");
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      {/* Backdrop with blur effect - allows scrolling */}
      <div className="fixed inset-0 bg-[#382a1b]/20 dark:bg-black/40 backdrop-blur-md pointer-events-auto" onClick={onClose} aria-hidden="true"></div>

      {/* Modal container */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        className="bg-[var(--surface-raised)] border border-[var(--edge)] rounded-3xl shadow-[var(--shadow-hover)] w-full max-w-md mx-4 relative animate-fadeIn motion-reduce:animate-none pointer-events-auto outline-none"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--text-dim)] hover:text-[var(--text-strong)] transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2"
          aria-label="Close contact form"
        >
          <LuX size={24} aria-hidden="true" />
        </button>

        <div className="p-6">
          <h2 id="contact-modal-title" className="font-display text-2xl font-semibold tracking-tight mb-2 text-center text-[var(--text-strong)]">
            Get in Touch
          </h2>
          <p className="text-[var(--text-body)] mb-6 text-center">
            Fill out the form below and I&apos;ll get back to you as soon as possible.
          </p>

          {submitStatus === "success" ? (
            <div className="text-center py-8" role="status" aria-live="polite">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-300 mb-2">Message sent</h3>
              <p className="text-[var(--text-body)]">Thank you for reaching out. I&apos;ll respond to your message soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--text-body)] mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--text-body)] mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[var(--text-body)] mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--text-body)] mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  className="w-full min-h-32"
                />
              </div>
              
              {submitStatus === "error" && (
                <div role="alert" className="bg-red-50 text-red-700 dark:bg-red-500/15 dark:text-red-300 p-3 rounded-md text-sm">
                  <p>There was an error sending your message. Please try again.</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-block mt-1 font-semibold underline underline-offset-2 text-red-700 hover:text-red-800 dark:text-red-300 dark:hover:text-red-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 rounded-sm"
                  >
                    Or email me directly: {EMAIL}
                  </a>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className={`${commonStyles.button.primary} w-full py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {/* Announce the in-flight submit state to screen readers */}
              <p className="sr-only" role="status" aria-live="polite">
                {isSubmitting ? "Sending your message" : ""}
              </p>
            </form>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};