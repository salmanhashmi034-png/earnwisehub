import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { getLatestArticles, getFeaturedArticles } from "@/lib/articles";
import { categories } from "@/lib/categories";
import { getCategoryArticleCount } from "@/lib/articles";
import ArticleCard from "@/components/blog/ArticleCard";
import CategoryCard from "@/components/blog/CategoryCard";
import NewsletterSignup from "@/components/blog/NewsletterSignup";
import AdPlaceholder from "@/components/ui/AdPlaceholder";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
};

export default function HomePage() {
  const latestArticles = getLatestArticles(8);
  const featuredArticles = getFeaturedArticles(3);
  const displayCategories = categories.slice(0, 8);

  return (
    <>
      {/* ---- HERO ---- */}
      <section
        className="bg-gradient-to-br from-brand-50 via-white to-sky-50 py-16 sm:py-20 lg:py-24"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500" aria-hidden="true" />
              Research-Based · No Fake Income Claims · Regularly Updated
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 text-balance"
            >
              Practical Ways to{" "}
              <span className="text-brand-600">Earn Online</span>, Build Skills &amp; Find Remote Work
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Clear, research-based guides covering freelancing, online jobs, digital skills, testing platforms, paid research and practical side-income ideas. Written for real people, not exaggerated claims.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link href="/blog" className="btn-primary text-base px-7 py-3.5">
                Explore All Guides
              </Link>
              <Link href="#latest-articles" className="btn-secondary text-base px-7 py-3.5">
                Latest Articles
              </Link>
            </div>

            {/* Search bar */}
            <form
              action="/search"
              method="get"
              role="search"
              className="flex gap-2 max-w-lg"
            >
              <label htmlFor="hero-search" className="sr-only">
                Search online earning guides
              </label>
              <input
                id="hero-search"
                name="q"
                type="search"
                placeholder="Search online earning guides…"
                className="form-input flex-1 text-sm"
                autoComplete="off"
              />
              <button
                type="submit"
                className="btn-primary flex-shrink-0 px-4 py-3"
                aria-label="Search"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 mt-12 text-sm text-gray-500">
            {[
              "✓ No fake earnings claims",
              "✓ Sources always cited",
              "✓ Platform info regularly checked",
              "✓ Balanced pros & limitations",
            ].map((badge) => (
              <span key={badge} className="font-medium">{badge}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ---- HEADER AD PLACEHOLDER ---- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <AdPlaceholder slot="header" />
      </div>

      {/* ---- FEATURED CATEGORIES ---- */}
      <section
        id="categories"
        className="py-14 sm:py-16"
        aria-labelledby="categories-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 id="categories-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                Browse by Topic
              </h2>
              <p className="text-gray-500 text-sm">
                Practical guides organised by earning method and skill area.
              </p>
            </div>
            <Link href="/blog" className="text-sm font-semibold text-brand-600 hover:text-brand-700 hidden sm:block">
              View all guides →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayCategories.map((cat) => (
              <CategoryCard
                key={cat.slug}
                category={cat}
                articleCount={getCategoryArticleCount(cat.slug)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---- FEATURED ARTICLES ---- */}
      {featuredArticles.length > 0 && (
        <section
          className="py-14 sm:py-16 bg-gray-50"
          aria-labelledby="featured-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 id="featured-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                Editor&apos;s Picks
              </h2>
              <p className="text-gray-500 text-sm">Essential reading for anyone starting out.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} variant="featured" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---- LATEST ARTICLES ---- */}
      <section
        id="latest-articles"
        className="py-14 sm:py-16"
        aria-labelledby="latest-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 id="latest-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                Latest Articles
              </h2>
              <p className="text-gray-500 text-sm">
                Most recently published guides, reviews and comparisons.
              </p>
            </div>
            <Link href="/blog" className="text-sm font-semibold text-brand-600 hover:text-brand-700 hidden sm:block">
              View all articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/blog" className="btn-outline">
              View All {latestArticles.length > 0 ? "Articles" : "Guides"}
            </Link>
          </div>
        </div>
      </section>

      {/* ---- WHY TRUST US ---- */}
      <section
        className="py-14 sm:py-16 bg-gray-50"
        aria-labelledby="trust-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 id="trust-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Our Editorial Approach
            </h2>
            <p className="text-gray-500">
              We research before we publish. No fake income claims, no invented statistics, no fabricated reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🔍",
                title: "Researched Content",
                desc: "Platform details checked against official sources before publication. Sources and check dates included.",
              },
              {
                icon: "⚖️",
                title: "Balanced Coverage",
                desc: "Every guide covers pros AND limitations. We do not only highlight positives to earn affiliate commissions.",
              },
              {
                icon: "✓",
                title: "Honest Language",
                desc: "We use realistic language: 'how it works,' 'who it may suit,' 'eligibility,' 'things to check.' No guaranteed income claims.",
              },
              {
                icon: "🔄",
                title: "Regularly Updated",
                desc: "Platform information changes. We revisit articles when updates are needed and clearly show last-checked dates.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/editorial-policy" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
              Read our Editorial Policy →
            </Link>
          </div>
        </div>
      </section>

      {/* ---- NEWSLETTER ---- */}
      <section className="py-14 sm:py-16" aria-labelledby="newsletter-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="newsletter-section" className="sr-only">Newsletter signup</h2>
          <NewsletterSignup />
        </div>
      </section>

      {/* ---- FOOTER AD PLACEHOLDER ---- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <AdPlaceholder slot="footer" />
      </div>
    </>
  );
}
