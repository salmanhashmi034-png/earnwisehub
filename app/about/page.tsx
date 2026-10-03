import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about EarnWiseHub — who we are, what we cover, how we research our content and what our editorial standards are.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={BREADCRUMBS} />

      <section className="bg-gradient-to-br from-brand-50 to-white py-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={BREADCRUMBS} className="mb-4" />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">About EarnWiseHub</h1>
          <p className="text-xl text-gray-600">Practical, honest guides to online earning and digital work.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-equivalent space-y-8">

          <section aria-labelledby="mission-heading">
            <h2 id="mission-heading" className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              EarnWiseHub publishes research-based guides covering legitimate online earning, freelancing, remote work, digital skills and side-income ideas. We write for real people who want clear, balanced information — not exaggerated income promises or vague &ldquo;make money online&rdquo; claims.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We cover platforms and methods that are genuinely available, explain how they actually work, what they realistically pay, who they suit, and — crucially — what their limitations are. Balanced coverage matters to us more than making every opportunity sound appealing.
            </p>
          </section>

          <section aria-labelledby="what-we-cover-heading">
            <h2 id="what-we-cover-heading" className="text-2xl font-bold text-gray-900 mb-4">What We Cover</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "💼", title: "Freelancing", desc: "Platforms, profile building, finding clients, rates and working practices." },
                { icon: "🏠", title: "Remote Work", desc: "Finding legitimate remote jobs, what remote employment involves, job boards worth using." },
                { icon: "🔬", title: "Paid Research", desc: "Academic and commercial research participation — what it involves and what to expect." },
                { icon: "✅", title: "Microtasks", desc: "Short online tasks including AI data labelling, transcription and categorisation." },
                { icon: "🧪", title: "Website & App Testing", desc: "Usability testing platforms — how they work, requirements and realistic earnings." },
                { icon: "🎓", title: "Digital Skills", desc: "Practical skills for online work: writing, design tools, spreadsheets, SEO and more." },
                { icon: "🤖", title: "AI & Productivity", desc: "Honest, practical applications of AI tools for freelancers and online workers." },
                { icon: "💡", title: "Side Hustles", desc: "Supplemental income ideas including digital products, tutoring and content creation." },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="text-2xl mb-2" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="editorial-approach-heading">
            <h2 id="editorial-approach-heading" className="text-2xl font-bold text-gray-900 mb-4">Our Editorial Approach</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not publish platform information without checking it. Before writing about a specific platform, we verify current availability, eligibility requirements, payment methods, fees and terms from official sources. We include the date information was last checked and link directly to official documentation.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We never:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "Publish fabricated earnings figures or statistics",
                "Write fake testimonials or personal experience claims",
                "Exaggerate what a platform or method can realistically deliver",
                "Only show positives while hiding limitations",
                "Recommend platforms based solely on affiliate commission rates",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-red-500 font-bold mt-0.5 flex-shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We use realistic language throughout: &ldquo;how it works,&rdquo; &ldquo;who it may suit,&rdquo; &ldquo;pros and limitations,&rdquo; &ldquo;eligibility,&rdquo; &ldquo;things to check before signing up.&rdquo; We link to official sources so readers can verify independently.
            </p>
            <p className="mt-4">
              <Link href="/editorial-policy" className="text-brand-600 hover:text-brand-700 font-semibold hover:underline">
                Read our full Editorial Policy →
              </Link>
            </p>
          </section>

          <section aria-labelledby="who-we-are-heading">
            <h2 id="who-we-are-heading" className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <div className="bg-white rounded-xl border border-gray-200 p-5 flex gap-4">
              <div className="w-14 h-14 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-brand-700 font-bold">EW</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">EarnWiseHub Editorial Team</p>
                <p className="text-sm text-gray-500 mt-0.5">Editorial Team</p>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  The EarnWiseHub editorial team researches and writes practical guides about online earning, freelancing, digital skills and remote work. All content is reviewed for accuracy before publication and updated when platform information changes. We do not fabricate earnings claims or platform statistics.
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="monetisation-heading">
            <h2 id="monetisation-heading" className="text-2xl font-bold text-gray-900 mb-4">How We Fund This Site</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              EarnWiseHub may earn income through:
            </p>
            <ul className="space-y-2 text-gray-700 text-sm list-disc pl-5">
              <li>Display advertising (Google AdSense and direct display ads)</li>
              <li>Affiliate links to products and services we cover editorially</li>
              <li>Sponsored content that is clearly labelled as such</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Affiliate relationships never determine what we cover or how we present it. We only include affiliate links where a platform has been genuinely covered on its merits. Articles containing affiliate links are clearly labelled. Our{" "}
              <Link href="/affiliate-disclosure" className="text-brand-600 hover:underline">full affiliate disclosure</Link>{" "}
              explains our approach in detail.
            </p>
          </section>

          <section aria-labelledby="contact-section-heading">
            <h2 id="contact-section-heading" className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For editorial enquiries, corrections or general questions:
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a href={`mailto:${siteConfig.email}`} className="btn-outline">
                {siteConfig.email}
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
