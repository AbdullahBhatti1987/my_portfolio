"use client";
import { useRef, useState, useContext } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "@/context/ThemeContext";

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false); // for disabling the button
  const { theme } = useContext(ThemeContext);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("Sending...");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus("Message sent ✅");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Error sending message ❌");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 py-20"
      style={{
       backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      <div className="relative z-10 max-w-xl w-full mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-8"
        >
          Contact Me
        </motion.h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
<input
  type="text"
  name="user_name"
  placeholder="Your Name"
  required
  className="w-full px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
  style={{
    backgroundColor: "var(--color-border)",
    color: "var(--color-text)",
    border: "1px solid var(--color-border)",
  }}
/>

<input
  type="email"
  name="user_email"
  placeholder="Your Email"
  required
  className="w-full px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
  style={{
    backgroundColor: "var(--color-border)",
    color: "var(--color-text)",
    border: "1px solid var(--color-border)",
  }}
/>

<textarea
  name="message"
  placeholder="Your Message"
  rows="5"
  required
  className="w-full px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
  style={{
    backgroundColor: "var(--color-border)",
    color: "var(--color-text)",
    border: "1px solid var(--color-border)",
  }}
/>


          <button
            type="submit"
            disabled={isSending}
            className={`bg-[var(--color-primary)] text-white px-6 py-3 rounded-md transition ${
              isSending ? "opacity-60 cursor-not-allowed" : "hover:opacity-90"
            }`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>
    </section>
  );
}
