import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "EarnWiseHub Terms & Conditions — the terms governing use of our website.",
  robots: { index: true, follow: false },
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export default function TermsPage() {
  return (
    <>
      <section className="bg-gray-50 py-10 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={BREADCRUMBS} className="mb-4" />
          <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Terms &amp; Conditions</h1>
          <p className="text-sm text-gray-500">Last updated: 1 October 2026</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
          <p>By accessing and using EarnWiseHub (&ldquo;the website&rdquo;), you accept and agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use the website.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information Purposes Only</h2>
          <p>All content on EarnWiseHub is provided for informational and educational purposes only. Nothing on this website constitutes financial, legal, investment or professional advice. Always conduct your own research and consult qualified professionals before making financial or career decisions.</p>
          <p className="mt-3">We do not guarantee specific income outcomes from any platform, method or strategy described on this website. Actual results depend on individual skills, effort, circumstances and factors outside our control.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. Accuracy of Information</h2>
          <p>We make reasonable efforts to ensure the accuracy of information published on this website and check platform details against official sources. However, platform policies, fees and availability change regularly. Information may become outdated between updates.</p>
          <p className="mt-3">Always verify platform-specific information on the relevant platform&apos;s official website before signing up, making payments or taking any action.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. Affiliate Links</h2>
          <p>This website may contain affiliate links. If you click a link and sign up for or purchase a service, we may earn a commission at no extra cost to you. Affiliate relationships do not influence our editorial content. Articles containing affiliate links are clearly labelled. See our <Link href="/affiliate-disclosure" className="text-brand-600 hover:underline">Affiliate Disclosure</Link>.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">5. Intellectual Property</h2>
          <p>All content on EarnWiseHub, including text, graphics and design, is the intellectual property of EarnWiseHub unless otherwise stated. You may not reproduce, republish or redistribute our content without prior written permission.</p>
          <p className="mt-3">Quoting brief excerpts with attribution and a link to the original article is generally acceptable for editorial and informational purposes.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">6. Third-Party Links</h2>
          <p>This website contains links to external websites for reference and convenience. We do not control or take responsibility for the content, privacy practices or accuracy of third-party websites. Inclusion of a link does not imply endorsement.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">7. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, EarnWiseHub and its operators shall not be liable for any direct, indirect, incidental, consequential or other damages arising from your use of this website or reliance on its content. Use of this website is at your own risk.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">8. Privacy</h2>
          <p>Your use of this website is also governed by our <Link href="/privacy-policy" className="text-brand-600 hover:underline">Privacy Policy</Link>, which is incorporated into these terms by reference.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">9. Changes to These Terms</h2>
          <p>We reserve the right to update these Terms &amp; Conditions at any time. Changes will be effective when posted. Continued use of the website after changes are posted constitutes acceptance of the updated terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">10. Contact</h2>
          <p>For questions about these terms: <a href={`mailto:${siteConfig.email}`} className="text-brand-600 hover:underline">{siteConfig.email}</a></p>
        </section>
      </div>
    </>
  );
}
