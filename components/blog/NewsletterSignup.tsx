"use client";

import { useState } from "react";

export default function NewsletterSignup({ variant = "default" }: { variant?: "default" | "compact" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function validate(e: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    if (!validate(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    // ⚠️  Newsletter is not connected to a real email provider yet.
    // Replace this setTimeout with a real API call to your email service
    // (e.g., Mailchimp, ConvertKit, EmailOctopus) before launch.
    await new Promise((r) => setTimeout(r, 800));

    setStatus("success");
    setEmail("");
  }

  if (variant === "compact") {
    return (
      <div className="bg-brand-50 rounded-xl p-5 border border-brand-100">
        <h3 className="font-bold text-gray-900 mb-1">Get Useful Guides</h3>
        <p className="text-sm text-gray-600 mb-3">
          Practical online-work guides delivered to your inbox.
        </p>

        {status === "success" ? (
          <p className="text-sm font-medium text-green-700 bg-green-50 px-3 py-2 rounded-lg">
            ✓ Thanks! We&apos;ll be in touch once the newsletter launches.
          </p>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="nl-email-compact" className="sr-only">
              Email address
            </label>
            <div className="flex gap-2">
              <input
                id="nl-email-compact"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="form-input flex-1 text-sm"
                disabled={status === "submitting"}
                aria-describedby={errorMsg ? "nl-error-compact" : undefined}
                autoComplete="email"
                required
              />
              <button
                type="submit"
                className="btn-primary text-sm px-4 py-2 flex-shrink-0"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "…" : "Subscribe"}
              </button>
            </div>
            {errorMsg && (
              <p id="nl-error-compact" className="form-error mt-1" role="alert">
                {errorMsg}
              </p>
            )}
          </form>
        )}
      </div>
    );
  }

  return (
    <section
      className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl p-8 sm:p-10 text-white text-center"
      aria-labelledby="newsletter-heading"
    >
      <div className="max-w-xl mx-auto">
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>

        <h2 id="newsletter-heading" className="text-2xl sm:text-3xl font-bold mb-2">
          Get Useful Online-Work Guides
        </h2>
        <p className="text-white/80 text-sm sm:text-base mb-6">
          Practical, research-based guides on freelancing, remote work, digital skills and legitimate earning opportunities. No spam, no exaggerated income claims.
        </p>

        {status === "success" ? (
          <div className="bg-white/20 rounded-xl px-6 py-4">
            <p className="font-semibold text-white">
              ✓ You&apos;re on the list!
            </p>
            <p className="text-white/80 text-sm mt-1">
              We&apos;ll notify you once the newsletter launches. Thanks for your interest.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <label htmlFor="nl-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="nl-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                  disabled={status === "submitting"}
                  aria-describedby={errorMsg ? "nl-error" : "nl-note"}
                  autoComplete="email"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-white text-brand-700 font-semibold px-6 py-3 rounded-lg hover:bg-brand-50 transition-colors text-sm flex-shrink-0 disabled:opacity-70"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Subscribing…" : "Subscribe"}
              </button>
            </div>

            {errorMsg && (
              <p id="nl-error" className="text-red-300 text-sm mt-2" role="alert">
                {errorMsg}
              </p>
            )}

            <p id="nl-note" className="text-white/60 text-xs mt-3">
              We respect your privacy. Unsubscribe at any time. Newsletter not yet active — we will confirm when it launches.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
