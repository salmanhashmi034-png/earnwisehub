import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "EarnWiseHub Privacy Policy — how we collect, use and protect your information.",
  robots: { index: true, follow: false },
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function PrivacyPolicyPage() {
  const lastUpdated = "1 October 2026";

  return (
    <>
      <section className="bg-gray-50 py-10 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={BREADCRUMBS} className="mb-4" />
          <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Privacy Policy</h1>
          <p className="text-sm text-gray-500">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-800">
          <strong>Important:</strong> This is a template privacy policy. Before publishing your site, you must review and update all sections marked with ⚠️ to accurately reflect the services you have installed. Do not publish a privacy policy that describes services you are not using, or that omits services you are.
        </div>

        <div className="space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Who We Are</h2>
            <p>EarnWiseHub (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) operates the website at <strong>⚠️ [your domain]</strong>. This Privacy Policy explains how we collect, use and protect information from visitors to our website.</p>
            <p className="mt-3">If you have questions about this policy, contact us at{" "}<a href={`mailto:${siteConfig.email}`} className="text-brand-600 hover:underline">{siteConfig.email}</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
            <h3 className="font-semibold text-gray-900 mb-2">Information you provide</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li><strong>Contact form:</strong> If you use our contact form, we collect your name, email address and message content in order to respond to your enquiry.</li>
              <li><strong>Newsletter signup:</strong> If you subscribe to our newsletter, we collect your email address. ⚠️ Update this section once your email provider is connected.</li>
            </ul>
            <h3 className="font-semibold text-gray-900 mb-2">Information collected automatically</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Log data:</strong> When you visit our website, our hosting provider may automatically record standard log information including your IP address, browser type, referring page and pages visited.</li>
              <li><strong>Cookies:</strong> We use cookies as described in our <Link href="/cookie-policy" className="text-brand-600 hover:underline">Cookie Policy</Link>.</li>
              <li><strong>Analytics:</strong> ⚠️ If you have connected Google Analytics or another analytics service, describe it here. If not, remove this point.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To respond to enquiries submitted through our contact form</li>
              <li>To send newsletters if you have subscribed (⚠️ update when newsletter is active)</li>
              <li>To understand how our website is used and improve our content</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Advertising</h2>
            <p>⚠️ This section should only describe advertising services you have actually installed.</p>
            <p className="mt-3">We may display advertisements from third-party advertising networks including Google AdSense. These advertising services may use cookies and similar technologies to serve advertisements based on your browsing history across websites. You can opt out of personalised advertising through <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Google&apos;s Ad Settings</a> and the <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Digital Advertising Alliance opt-out tool</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Affiliate Links</h2>
            <p>Some of our articles contain affiliate links. When you click these links and make a purchase or sign up for a service, we may earn a commission. We do not track individual users through affiliate links beyond what the affiliate network records. See our <Link href="/affiliate-disclosure" className="text-brand-600 hover:underline">Affiliate Disclosure</Link> for more detail.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Sharing Your Information</h2>
            <p>We do not sell your personal information. We may share limited information with:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Service providers that help us operate the website (hosting, email delivery)</li>
              <li>Analytics providers ⚠️ (only if you have installed analytics)</li>
              <li>Advertising partners ⚠️ (only if you have installed advertising services)</li>
              <li>Law enforcement or regulatory authorities if legally required</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Data Retention</h2>
            <p>We retain contact form enquiries for a reasonable period to enable us to respond and maintain a record of correspondence, after which they are deleted. ⚠️ Update this section for your newsletter and any other data you collect.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Your Rights</h2>
            <p>Depending on your location, you may have rights relating to your personal data, including:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>The right to access your personal data</li>
              <li>The right to correct inaccurate data</li>
              <li>The right to request deletion of your data</li>
              <li>The right to object to or restrict processing</li>
              <li>The right to data portability</li>
            </ul>
            <p className="mt-3">To exercise these rights, contact us at <a href={`mailto:${siteConfig.email}`} className="text-brand-600 hover:underline">{siteConfig.email}</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Cookies</h2>
            <p>For information about the cookies we use, see our <Link href="/cookie-policy" className="text-brand-600 hover:underline">Cookie Policy</Link>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Children&apos;s Privacy</h2>
            <p>Our website is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. The date at the top of this page shows when it was last updated. Continued use of the website after changes are posted constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">12. Contact</h2>
            <p>For privacy-related enquiries: <a href={`mailto:${siteConfig.email}`} className="text-brand-600 hover:underline">{siteConfig.email}</a></p>
          </section>
        </div>
      </div>
    </>
  );
}
