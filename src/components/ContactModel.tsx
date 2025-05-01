// ContactModal.tsx
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { LuX } from "react-icons/lu";
import emailjs from '@emailjs/browser';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
  
    // Use environment variables for EmailJS configuration
    let emailjsUserId = process.env?.NEXT_PUBLIC_EMAILJS_USER_ID ?? "_Ps4x85xXNJZdeJZwF";
    let emailjsServiceId = process.env?.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "_service_73hagje";
    let emailjsTemplateId = process.env?.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "_template_azkrh9n";
    
    // Initialize EmailJS with your user ID
    emailjs.init(emailjsUserId);
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message
        }
      );
      
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
      console.error("EmailJS error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      {/* Backdrop with blur effect - allows scrolling */}
      <div className="fixed inset-0 bg-white/30 backdrop-blur-md pointer-events-auto" onClick={onClose}></div>
      
      {/* Modal container */}
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 relative animate-fadeIn pointer-events-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <LuX size={24} />
        </button>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2 text-center bg-[#797F8C] bg-clip-text text-[#142240]">
            Get in Touch
          </h2>
          <p className="text-[#797F8C] mb-6 text-center">
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
          
          {submitStatus === "success" ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-600 mb-2">Message Sent!</h3>
              <p className="text-[#797F8C]">Thank you for reaching out. I'll respond to your message soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#797F8C] mb-1">
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
                <label htmlFor="email" className="block text-sm font-medium text-[#797F8C] mb-1">
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
                <label htmlFor="subject" className="block text-sm font-medium text-[#797F8C] mb-1">
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
                <label htmlFor="message" className="block text-sm font-medium text-[#797F8C] mb-1">
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
                <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
                  There was an error sending your message. Please try again.
                </div>
              )}
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#142240] hover:bg-[#2B3342] text-white py-2 rounded-md transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};