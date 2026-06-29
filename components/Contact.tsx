"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

interface ContactProps {
  dict: any;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact({ dict }: ContactProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <p className="font-mono text-xs text-primary mb-4 tracking-wider">
              04 — {dict.contact.label}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-foreground tracking-tight mb-4">
              {dict.contact.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {dict.contact.description}
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {status === "success" && (
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-md text-sm text-primary">
                {dict.contact.success}
              </div>
            )}

            {status === "error" && (
              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-md text-sm text-destructive">
                {errorMessage}
              </div>
            )}

            <div>
              <label className="block mb-2 font-mono text-xs tracking-wider text-muted-foreground">
                {dict.contact.name}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-card border border-border rounded-md text-foreground placeholder-subtle focus:border-primary/50 focus:outline-none transition-colors text-sm disabled:opacity-50"
                placeholder={dict.contact.namePlaceholder}
              />
            </div>

            <div>
              <label className="block mb-2 font-mono text-xs tracking-wider text-muted-foreground">
                {dict.contact.email}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-card border border-border rounded-md text-foreground placeholder-subtle focus:border-primary/50 focus:outline-none transition-colors text-sm disabled:opacity-50"
                placeholder={dict.contact.emailPlaceholder}
              />
            </div>

            <div>
              <label className="block mb-2 font-mono text-xs tracking-wider text-muted-foreground">
                {dict.contact.message}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status === "loading"}
                rows={5}
                className="w-full px-4 py-3 bg-card border border-border rounded-md text-foreground placeholder-subtle focus:border-primary/50 focus:outline-none transition-colors resize-none text-sm disabled:opacity-50"
                placeholder={dict.contact.messagePlaceholder}
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full px-6 py-3 bg-primary hover:bg-primary-hover text-primary-foreground text-sm font-semibold rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? dict.contact.sending : dict.contact.send}
            </button>
          </motion.form>

          <div className="mt-12 pt-8 border-t border-border flex justify-center gap-8">
            <a
              href="mailto:cortts.dev@gmail.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/angelcortesm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/AngelCortes2005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
