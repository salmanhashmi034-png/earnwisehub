import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "EarnWiseHub Disclaimer — important information about the nature of content on this website.",
  robots: { index: true, follow: false },
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export default function DisclaimerPage() {
  return (
    <>
      <section className="bg-gray-50 py-10 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={BREADCRUMBS} className="mb-4" />
          <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Disclaimer</h1>
          <p className="text-sm text-gray-500">Last updated: 1 October 2026</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Informational Content Only</h2>
          <p>EarnWiseHub publishes guides, reviews and educational content about online earning, freelancing, digital skills and remote work. All content is provided for general informational and educational purposes only.</p>
          <p className="mt-3"><strong>Nothing on this website constitutes financial, legal, investment, tax or professional advice.</strong> You should not rely on this content as a substitute for professional advice tailored to your specific circumstances.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">No Income Guarantees</h2>
          <p>We do not make guarantees or promises about income, earnings or financial results from any platform, method or strategy discussed on this website.</p>
          <p className="mt-3">Online earning opportunities involve real effort, skill development and variable outcomes. Results depend on individual circumstances, effort, skill level and factors outside our control. We explicitly avoid language such as &ldquo;guaranteed income,&rdquo; &ldquo;earn $X in Y days&rdquo; or similar claims because such claims are not realistic and are often used by scam operations.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Platform Information Accuracy</h2>
          <p>We research platform information against official sources and include the date information was last checked. Platform policies, fees, country availability and payment terms change regularly and without notice.</p>
          <p className="mt-3">We cannot guarantee that all platform-specific information remains current at the time you read it. Always verify details directly on the platform&apos;s official website before signing up or taking any action.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Affiliate Relationships</h2>
          <p>Some articles on this website contain affiliate links. If you click a link and sign up for or purchase a service, we may earn a commission. This does not increase your cost. Articles with affiliate links are clearly labelled.</p>
          <p className="mt-3">Affiliate relationships do not influence our editorial assessments. We present both pros and limitations of every platform we cover. See our <Link href="/affiliate-disclosure" className="text-brand-600 hover:underline">Affiliate Disclosure</Link>.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">External Links</h2>
          <p>This website links to third-party websites for reference. We do not control or endorse third-party content, and we are not responsible for the accuracy, content or practices of external websites.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Investment & Financial Decisions</h2>
          <p>If any content on this website touches on financial topics, it is for general educational awareness only. Before making any financial, investment or career decision, consult a qualified financial adviser, accountant or other relevant professional.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Contact</h2>
          <p>Questions about this disclaimer: <a href={`mailto:${siteConfig.email}`} className="text-brand-600 hover:underline">{siteConfig.email}</a></p>
        </section>
      </div>
    </>
  );
}
