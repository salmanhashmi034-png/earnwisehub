import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How EarnWiseHub researches, writes, verifies and updates its content — our editorial standards.",
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Editorial Policy", href: "/editorial-policy" },
];

export default function EditorialPolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white py-12 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={BREADCRUMBS} className="mb-4" />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">Editorial Policy</h1>
          <p className="text-gray-600 text-lg">How we research, write, verify and update content on EarnWiseHub.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
          <p>EarnWiseHub is committed to publishing content that is accurate, balanced, useful and honest. We serve readers who are researching legitimate ways to earn income online or develop digital skills, and we take that responsibility seriously.</p>
          <p className="mt-3">We do not publish exaggerated income claims, fake testimonials, invented statistics or misleading platform descriptions. When information is uncertain or varies, we say so clearly.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Articles Are Researched</h2>

          <h3 className="font-semibold text-gray-900 mb-2">Platform reviews and guides</h3>
          <p>Before writing about a specific platform, we check:</p>
          <ol className="list-decimal pl-5 space-y-1 mt-2">
            <li>The platform&apos;s official website</li>
            <li>The platform&apos;s official help center and FAQs</li>
            <li>Current terms of service and privacy policy</li>
            <li>Current fee structure and payment documentation</li>
            <li>Country and age eligibility information</li>
            <li>Whether the service is currently active and accepting new users</li>
          </ol>
          <p className="mt-3">We record the date information was checked and include it in the article. We link directly to official sources so readers can verify independently.</p>

          <h3 className="font-semibold text-gray-900 mb-2 mt-6">What we do not do</h3>
          <ul className="space-y-2">
            {[
              "Invent earnings figures, payout amounts or acceptance rates",
              "Copy content from other websites or platform marketing materials",
              "Write fake personal experience or testimonials",
              "Present only positive information while hiding limitations",
              "Claim platforms are available in countries we have not verified",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5 flex-shrink-0">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources We Prioritise</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Official platform website</li>
            <li>Official platform help center</li>
            <li>Official terms of service and pricing documentation</li>
            <li>Government or regulatory sources where relevant (e.g., FTC guidelines)</li>
            <li>Reputable journalism and independent reporting</li>
          </ol>
          <p className="mt-3">We do not use unnamed sources, anonymous claims or unverifiable statistics. Where figures are uncertain, we say so explicitly.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Handle Updates</h2>
          <p>Platform information changes regularly. When we become aware of material changes to a platform&apos;s fees, availability, terms or status, we update relevant articles and revise the &ldquo;last checked&rdquo; date.</p>
          <p className="mt-3">If you notice information that appears outdated or incorrect, please <Link href="/contact" className="text-brand-600 hover:underline">contact us</Link> and we will review and update it.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Handle Corrections</h2>
          <p>If we publish information that is factually incorrect, we will correct it promptly when notified. Corrections are made directly in the article. Where the error was material, we add a correction note explaining what was changed.</p>
          <p className="mt-3">To report a factual error: <Link href="/contact" className="text-brand-600 hover:underline">use our contact form</Link> or email <a href={`mailto:${siteConfig.email}`} className="text-brand-600 hover:underline">{siteConfig.email}</a>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Affiliate Links and Sponsorships</h2>
          <p>Some articles contain affiliate links. These are disclosed clearly at the top of every relevant article and in our <Link href="/affiliate-disclosure" className="text-brand-600 hover:underline">Affiliate Disclosure</Link>.</p>
          <p className="mt-3">Affiliate relationships do not determine what we cover or how we cover it. Our editorial assessments are independent of commercial considerations.</p>
          <p className="mt-3">Sponsored content — articles produced in partnership with a company — is clearly labelled as sponsored. Sponsored content must meet the same accuracy standards as our regular editorial content. We do not accept sponsored content that makes exaggerated income claims or misrepresents products.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Language Standards</h2>
          <p>We use realistic, measured language throughout. Our standard phrasing includes:</p>
          <ul className="space-y-1 list-disc pl-5 mt-2">
            <li>&ldquo;How it works&rdquo; — rather than &ldquo;make easy money with&rdquo;</li>
            <li>&ldquo;Who it may suit&rdquo; — rather than &ldquo;perfect for everyone&rdquo;</li>
            <li>&ldquo;Pros and limitations&rdquo; — rather than only listing positives</li>
            <li>&ldquo;Eligibility requirements&rdquo; — clearly stated where known</li>
            <li>&ldquo;Information should be verified on the official website&rdquo; — where we cannot guarantee current accuracy</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Authors</h2>
          <p>Content is produced by the EarnWiseHub editorial team. We do not publish fabricated author credentials. Our author box describes our team accurately. We do not use fake personas or invented professional histories.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Feedback and Contact</h2>
          <p>We welcome corrections, suggestions and feedback. To contact the editorial team:</p>
          <div className="mt-3 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn-primary text-sm">Contact Us</Link>
            <a href={`mailto:${siteConfig.email}`} className="btn-outline text-sm">{siteConfig.email}</a>
          </div>
        </section>
      </div>
    </>
  );
}
