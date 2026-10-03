import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "EarnWiseHub Cookie Policy — what cookies we use and how to manage them.",
  robots: { index: true, follow: false },
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export default function CookiePolicyPage() {
  return (
    <>
      <section className="bg-gray-50 py-10 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={BREADCRUMBS} className="mb-4" />
          <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Cookie Policy</h1>
          <p className="text-sm text-gray-500">Last updated: 1 October 2026</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-gray-700 leading-relaxed">

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
          <strong>⚠️ Note:</strong> This is a template cookie policy. Update it to accurately reflect only the cookies and services you have actually installed. Remove any sections describing services you do not use.
        </div>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">What Are Cookies?</h2>
          <p>Cookies are small text files placed on your device when you visit a website. They are used to remember your preferences, help websites function, and provide information to website owners about how their sites are used.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Cookies We Use</h2>

          <h3 className="font-semibold text-gray-900 mb-2 mt-4">Essential Cookies</h3>
          <p>These are required for the website to function. They cannot be disabled. They typically include session cookies that allow you to navigate the site.</p>

          <h3 className="font-semibold text-gray-900 mb-2 mt-4">Analytics Cookies</h3>
          <p>⚠️ Only include this section if you have installed analytics. We may use Google Analytics to understand how visitors use our website. This uses cookies to collect information such as how long you spend on pages and where you navigate to. This information is aggregated and anonymous. You can opt out of Google Analytics tracking using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Google Analytics Opt-out Browser Add-on</a>.</p>

          <h3 className="font-semibold text-gray-900 mb-2 mt-4">Advertising Cookies</h3>
          <p>⚠️ Only include this section if you have installed advertising. We display advertisements via Google AdSense. Google and its partners may use cookies to serve advertisements based on your past visits to our website and other websites. You can opt out of personalised advertising at <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">adssettings.google.com</a>.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Managing Cookies</h2>
          <p>You can manage and delete cookies through your browser settings. Note that disabling certain cookies may affect the functionality of some websites.</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Chrome cookie settings</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Firefox cookie settings</a></li>
            <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Safari cookie settings</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Changes to This Policy</h2>
          <p>We may update this Cookie Policy when we install new services or make other changes. The date at the top shows when it was last updated.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Contact</h2>
          <p>Questions about cookies: <a href={`mailto:${siteConfig.email}`} className="text-brand-600 hover:underline">{siteConfig.email}</a></p>
          <p className="mt-2">Also see our <Link href="/privacy-policy" className="text-brand-600 hover:underline">Privacy Policy</Link>.</p>
        </section>
      </div>
    </>
  );
}
