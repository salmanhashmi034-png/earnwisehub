import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "EarnWiseHub Affiliate Disclosure — how we handle affiliate links and relationships.",
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
];

export default function AffiliateDisclosurePage() {
  return (
    <>
      <section className="bg-gray-50 py-10 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={BREADCRUMBS} className="mb-4" />
          <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Affiliate Disclosure</h1>
          <p className="text-sm text-gray-500">Last updated: 1 October 2026</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-gray-700 leading-relaxed">

        <div className="bg-brand-50 border border-brand-200 rounded-xl p-5 text-sm text-brand-900">
          <strong>Summary:</strong> Some articles on EarnWiseHub contain affiliate links. If you click a link and make a purchase or sign up for a service, we may earn a small commission at no cost to you. Affiliate relationships never influence our editorial content or assessments.
        </div>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">What Are Affiliate Links?</h2>
          <p>An affiliate link is a tracked link that allows us to earn a small commission if you click through and sign up for or purchase a service or product. The commission is paid by the company — it does not increase the price you pay.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">How We Handle Affiliate Relationships</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>We only include affiliate links for platforms and services we have chosen to cover on editorial grounds</li>
            <li>Affiliate relationships do not affect which platforms we cover, how we describe them, or whether we include limitations and caveats</li>
            <li>Every article containing affiliate links is clearly labelled at the top of the article</li>
            <li>We present pros AND limitations of every platform, regardless of whether we earn a commission</li>
            <li>We do not write positive reviews purely to earn commissions</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">FTC Disclosure Compliance</h2>
          <p>In accordance with the US Federal Trade Commission&apos;s guidelines on endorsements and testimonials, and equivalent regulations in other jurisdictions, we clearly disclose affiliate relationships on relevant articles. This disclosure appears at the beginning of any article containing affiliate links.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Which Articles Contain Affiliate Links?</h2>
          <p>Articles containing affiliate links are labelled with an &ldquo;Contains affiliate links&rdquo; notice at the top of the article. This label appears on every article where an affiliate relationship exists for a product or service mentioned.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Our Editorial Independence</h2>
          <p>Our primary commitment is to provide accurate, balanced, useful information to our readers. We would rather provide honest coverage that serves our readers well than produce biased content for short-term affiliate earnings.</p>
          <p className="mt-3">Read our <Link href="/editorial-policy" className="text-brand-600 hover:underline">Editorial Policy</Link> for more detail on how we research and write our content.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Questions</h2>
          <p>If you have questions about our affiliate relationships or any specific article, contact us at <a href={`mailto:${siteConfig.email}`} className="text-brand-600 hover:underline">{siteConfig.email}</a>.</p>
        </section>
      </div>
    </>
  );
}
