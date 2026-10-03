import type { Metadata } from "next";
import Link from "next/link";
import { allArticles } from "@/lib/articles";
import { categories } from "@/lib/categories";
import { siteConfig } from "@/lib/config";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Full sitemap of all pages and articles on EarnWiseHub.",
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Sitemap", href: "/sitemap-page" },
];

const staticPages = [
  { title: "Home", href: "/" },
  { title: "Blog", href: "/blog" },
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Search", href: "/search" },
  { title: "Editorial Policy", href: "/editorial-policy" },
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Terms & Conditions", href: "/terms-and-conditions" },
  { title: "Disclaimer", href: "/disclaimer" },
  { title: "Cookie Policy", href: "/cookie-policy" },
  { title: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { title: "RSS Feed", href: "/feed.xml" },
];

export default function SitemapPage() {
  const sorted = [...allArticles].sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  return (
    <>
      <section className="bg-gray-50 py-10 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={BREADCRUMBS} className="mb-4" />
          <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Sitemap</h1>
          <p className="text-sm text-gray-500">All pages and articles on {siteConfig.name}.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

        {/* Main pages */}
        <section aria-labelledby="main-pages-heading">
          <h2 id="main-pages-heading" className="text-xl font-bold text-gray-900 mb-4">Main Pages</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {staticPages.map((page) => (
              <li key={page.href}>
                <Link href={page.href} className="text-brand-600 hover:text-brand-700 hover:underline text-sm">
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Categories */}
        <section aria-labelledby="categories-heading">
          <h2 id="categories-heading" className="text-xl font-bold text-gray-900 mb-4">Categories</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link href={`/category/${cat.slug}`} className="text-brand-600 hover:text-brand-700 hover:underline text-sm">
                  {cat.icon} {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Articles */}
        <section aria-labelledby="articles-heading">
          <h2 id="articles-heading" className="text-xl font-bold text-gray-900 mb-4">
            All Articles ({sorted.length})
          </h2>
          <ul className="space-y-2">
            {sorted.map((article) => (
              <li key={article.slug} className="flex items-start gap-3">
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-brand-600 hover:text-brand-700 hover:underline text-sm"
                >
                  {article.title}
                </Link>
                <span className="text-xs text-gray-400 flex-shrink-0 mt-0.5">
                  {new Date(article.publishedDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
