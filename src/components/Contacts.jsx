// src/components/Contact.jsx
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      // Trigger native validation messages
      form.reportValidity();
      return;
    }

    setSubmitting(true);

    // Honeypot check
    const botTrap = new FormData(form).get("company");
    if (botTrap) {
      setSubmitting(false);
      return;
    }

    const payload = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      subject: form.subject.value.trim(),
      message: form.message.value.trim(),
    };

    try {
      // TODO: Replace with your API endpoint
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to send");

      toast.success("Message sent. I’ll get back to you soon!");
      form.reset();
    } catch (err) {
      toast.error("Oops—couldn’t send your message. Try again?");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="min-h-screen flex items-center">
      <div className="mx-auto max-w-screen-lg w-full px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Get In <span className="text-[#cc5ef7]">Touch</span>
          </h1>
          <p className="text-gray-400 mt-2">
            Questions, collabs, or compliments—drop them below.
          </p>
        </header>

        <div className="rounded-2xl bg-gray-900/60 border border-gray-800 p-5 sm:p-8">
          <form onSubmit={onSubmit} noValidate>
            {/* Honeypot (hidden from humans) */}
            <input
              type="text"
              name="company"
              tabIndex="-1"
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            {/* Grid: single column on mobile, two on md+ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  placeholder="Your name"
                  className="w-full rounded-xl bg-gray-800 text-gray-100 placeholder-gray-500
                             border border-gray-700 focus:border-[#cc5ef7] focus:ring-2 focus:ring-[#cc5ef7]/40
                             px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl bg-gray-800 text-gray-100 placeholder-gray-500
                             border border-gray-700 focus:border-[#cc5ef7] focus:ring-2 focus:ring-[#cc5ef7]/40
                             px-4 py-3 outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-sm text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  minLength={3}
                  placeholder="What’s this about?"
                  className="w-full rounded-xl bg-gray-800 text-gray-100 placeholder-gray-500
                             border border-gray-700 focus:border-[#cc5ef7] focus:ring-2 focus:ring-[#cc5ef7]/40
                             px-4 py-3 outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  rows={6}
                  placeholder="Tell me everything…"
                  className="w-full rounded-xl bg-gray-800 text-gray-100 placeholder-gray-500
                             border border-gray-700 focus:border-[#cc5ef7] focus:ring-2 focus:ring-[#cc5ef7]/40
                             px-4 py-3 outline-none resize-y"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-xl
                           bg-[#cc5ef7] text-black font-semibold
                           px-5 py-3 transition hover:brightness-110 active:brightness-95
                           disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending…" : "Send Message"}
              </button>
            </div>

            <div className="sr-only" aria-live="polite">
              {submitting ? "Sending your message" : ""}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
