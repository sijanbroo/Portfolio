// src/components/Contact.jsx
import React, { useState } from "react";
import { toast } from "react-toastify";
import conf from "../conf/conf";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }


    setSubmitting(true);

    const formData = new FormData(form);
    const botTrap = formData.get("company");
    if (botTrap) {
      setSubmitting(false);
      return;
    }

    formData.set("name", form.name.value.trim());
    formData.set("email", form.email.value.trim());
    formData.set("subject", form.subject.value.trim());
    formData.set("message", form.message.value.trim());

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error("Failed to send");

      toast.success("Message sent. I’ll get back to you soon!");
      form.reset();
    } catch (err) {
      toast.error("Oops—couldn’t send your message. Try again?");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="min-h-screen flex items-center py-12 sm:py-16">
      <div className="mx-auto max-w-screen-lg w-full px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#cc5ef7]">
            Let's Connect
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Get In <span className="text-[#cc5ef7]">Touch</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say hi?
            I'd love to hear from you!
          </p>
        </header>

        <div className="relative rounded-2xl bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-900/80 border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-sm overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#cc5ef7]/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8b3fbd]/10 rounded-full blur-3xl -z-10" />

          <form onSubmit={onSubmit} noValidate>
            <input type="hidden" name="access_key" value={conf.web3APIKey} />

            <input
              type="text"
              name="company"
              tabIndex="-1"
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2"
                >
                  <i className="fi fi-rr-user text-[#cc5ef7]"></i>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  placeholder="John Doe"
                  className="w-full rounded-xl bg-gray-800/50 text-gray-100 placeholder-gray-500
                             border border-gray-700 focus:border-[#cc5ef7] focus:ring-2 focus:ring-[#cc5ef7]/40
                             px-4 py-3.5 outline-none transition-all hover:bg-gray-800/70"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2"
                >
                  <i className="fi fi-rr-envelope text-[#cc5ef7]"></i>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-xl bg-gray-800/50 text-gray-100 placeholder-gray-500
                             border border-gray-700 focus:border-[#cc5ef7] focus:ring-2 focus:ring-[#cc5ef7]/40
                             px-4 py-3.5 outline-none transition-all hover:bg-gray-800/70"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2"
                >
                  <i className="fi fi-rr-bulb text-[#cc5ef7]"></i>
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  minLength={3}
                  placeholder="Let's work together!"
                  className="w-full rounded-xl bg-gray-800/50 text-gray-100 placeholder-gray-500
                             border border-gray-700 focus:border-[#cc5ef7] focus:ring-2 focus:ring-[#cc5ef7]/40
                             px-4 py-3.5 outline-none transition-all hover:bg-gray-800/70"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2"
                >
                  <i className="fi fi-rr-comment-alt text-[#cc5ef7]"></i>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  rows={6}
                  placeholder="Tell me about your project, ideas, or just say hello..."
                  className="w-full rounded-xl bg-gray-800/50 text-gray-100 placeholder-gray-500
                             border border-gray-700 focus:border-[#cc5ef7] focus:ring-2 focus:ring-[#cc5ef7]/40
                             px-4 py-3.5 outline-none resize-y transition-all hover:bg-gray-800/70"
                />
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 rounded-xl
                           bg-[#cc5ef7] text-white font-semibold text-base
                           px-8 py-4 transition-all hover:bg-[#b74bdc] hover:shadow-xl hover:shadow-[#cc5ef7]/40
                           active:scale-95 shadow-lg shadow-[#cc5ef7]/30
                           disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100
                           focus:outline-none focus:ring-2 focus:ring-[#cc5ef7]/50 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                {submitting ? (
                  <>
                    <i className="fi fi-rr-spinner animate-spin"></i>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <i className="fi fi-rr-paper-plane"></i>
                  </>
                )}
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
