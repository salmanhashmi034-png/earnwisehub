import Link from "next/link";
import { siteConfig } from "@/lib/config";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Categories", href: "/blog#categories" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Sitemap", href: "/sitemap-page" },
];

const topicLinks = [
  { label: "Freelancing", href: "/category/freelancing" },
  { label: "Remote Work", href: "/category/remote-work" },
  { label: "Paid Research", href: "/category/paid-research" },
  { label: "Microtasks", href: "/category/microtasks" },
  { label: "Digital Skills", href: "/category/digital-skills" },
  { label: "AI & Productivity", href: "/category/ai-productivity" },
  { label: "Side Hustles", href: "/category/side-hustles" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Editorial Policy", href: "/editorial-policy" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400" role="contentinfo">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="EarnWiseHub Home">
              <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">EW</span>
              </div>
              <span className="font-bold text-lg text-white">
                EarnWise<span className="text-brand-400">Hub</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              Clear, research-based guides covering freelancing, online jobs, digital skills, testing platforms, paid research and side-income ideas.
            </p>
            <p className="text-xs text-gray-500">
              We provide information guides only. We do not guarantee any specific income outcomes. Always verify platform details on official sources before signing up.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Topics</h3>
            <ul className="space-y-2.5">
              {topicLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal & Info</h3>
            <ul className="space-y-2.5 mb-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">Contact</h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-brand-400 hover:text-brand-300 hover:underline"
              >
                {siteConfig.email}
              </a>
              <p className="text-xs mt-1 text-gray-500">(Configure with your real address)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {year} EarnWiseHub. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 text-center sm:text-right">
            Information provided for educational purposes only. Not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
