"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function validate(): boolean {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.subject.trim()) newErrors.subject = "Please enter a subject.";
    if (!form.message.trim()) {
      newErrors.message = "Please enter a message.";
    } else if (form.message.trim().length < 20) {
      newErrors.message = "Please write at least 20 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    // ⚠️ Contact form is not connected to a real backend yet.
    // Replace this with a real form submission endpoint (e.g., Resend,
    // SendGrid, Formspree, or a Next.js API route) before launch.
    await new Promise((r) => setTimeout(r, 800));

    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white py-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={BREADCRUMBS} className="mb-4" />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">Contact Us</h1>
          <p className="text-gray-600 text-lg">Get in touch with the EarnWiseHub team.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Contact info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Get in Touch</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                We welcome questions, corrections and feedback. Please allow a few business days for a response.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-brand-600 hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                  <p className="text-xs text-gray-400 mt-0.5">⚠️ Configure with your real email address</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-sm text-gray-600 space-y-2">
              <p className="font-semibold text-gray-900 text-sm">What to contact us about</p>
              <ul className="space-y-1.5 text-sm">
                <li>✓ Factual corrections in articles</li>
                <li>✓ Platform information that needs updating</li>
                <li>✓ Editorial enquiries</li>
                <li>✓ Sponsorship or advertising enquiries</li>
                <li>✓ General feedback</li>
              </ul>
            </div>

            <div>
              <p className="text-xs text-gray-500">
                By submitting this form, you agree to our{" "}
                <Link href="/privacy-policy" className="text-brand-600 hover:underline">Privacy Policy</Link>.
                We do not share your information with third parties.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            {status === "success" ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4" aria-hidden="true">✉️</div>
                <h2 className="text-xl font-bold text-green-900 mb-2">Message Received</h2>
                <p className="text-green-700 text-sm mb-4">
                  Thank you for getting in touch. We will respond within a few business days.
                </p>
                <p className="text-xs text-green-600 bg-green-100 rounded-lg p-3">
                  ⚠️ Note: This form is not yet connected to a real email service. Configure a backend before launch.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-outline mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-5"
                aria-label="Contact form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="form-label">
                      Your Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? "border-red-400 focus:ring-red-400" : ""}`}
                      autoComplete="name"
                      disabled={status === "submitting"}
                      aria-required="true"
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="form-error" role="alert">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? "border-red-400 focus:ring-red-400" : ""}`}
                      autoComplete="email"
                      disabled={status === "submitting"}
                      aria-required="true"
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="form-error" role="alert">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="form-label">
                    Subject <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`form-input ${errors.subject ? "border-red-400 focus:ring-red-400" : ""}`}
                    disabled={status === "submitting"}
                    aria-required="true"
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  >
                    <option value="">Select a subject…</option>
                    <option value="Factual correction">Factual correction</option>
                    <option value="Article update needed">Article update needed</option>
                    <option value="Editorial enquiry">Editorial enquiry</option>
                    <option value="Advertising enquiry">Advertising enquiry</option>
                    <option value="General feedback">General feedback</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject && (
                    <p id="subject-error" className="form-error" role="alert">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="form-label">
                    Message <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    className={`form-input resize-y ${errors.message ? "border-red-400 focus:ring-red-400" : ""}`}
                    placeholder="Your message…"
                    disabled={status === "submitting"}
                    aria-required="true"
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="form-error" role="alert">{errors.message}</p>
                  )}
                </div>

                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700" role="alert">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary w-full justify-center py-3"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  ⚠️ This form is not yet connected to a real email service. Configure a backend before launch.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
