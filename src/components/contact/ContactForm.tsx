"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
  initialMessage?: string;
  onSuccess?: () => void;
}

interface FormState {
  name: string;
  email: string;
  instagram: string;
  message: string;
}

export default function ContactForm({ initialMessage = "", onSuccess }: ContactFormProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    instagram: "",
    message: initialMessage,
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (initialMessage) {
      setForm((prev) => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    emailjs
      .send(
        "service_9wh2vje",
        "template_mb05fjs",
        {
          name: form.name,
          email: form.email,
          instagram: form.instagram,
          message: form.message,
        },
        "Qmvgk6TmgzEtWkpwC"
      )
      .then(
        () => {
          setStatus("success");
          setStatusMessage("You will be contacted shortly.");
          setForm({
            name: "",
            email: "",
            instagram: "",
            message: "",
          });
          if (onSuccess) {
            // Delay closing slightly so they can see the success message
            setTimeout(() => {
              onSuccess();
            }, 1500);
          }
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("error");
          setStatusMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="w-full scrollbar-none">
      <form onSubmit={sendEmail} className="grid gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-semibold text-foreground/80">
            Your Name*
          </label>
          <input
            type="text"
            id="name"
            placeholder="Shani Tiwari"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            name="name"
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="instagram" className="text-xs font-semibold text-foreground/80">
            Instagram Handle*
          </label>
          <input
            type="text"
            id="instagram"
            placeholder="@shani.develops"
            required
            value={form.instagram}
            onChange={(e) => setForm({ ...form, instagram: e.target.value })}
            name="instagram"
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-semibold text-foreground/80">
            Email address*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="shannitiwari2021@gmail.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-xs font-semibold text-foreground/80">
            Tell us about your project*
          </label>
          <textarea
            id="message"
            placeholder="I need a modern and responsive website for my café."
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full rounded-xl resize-none border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex w-full items-center justify-center rounded-xl rounded-t-4xl outline-offset-2 outline-2 outline-accent/50 bg-accent px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {statusMessage && (
        <p
          className={`mt-4 text-center text-sm font-medium transition-opacity duration-300 ${
            status === "success" ? "text-emerald-600" : "text-destructive"
          }`}
        >
          {statusMessage}
        </p>
      )}
    </div>
  );
}
