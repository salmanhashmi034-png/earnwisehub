import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { allArticles, getCategoryArticleCount } from "@/lib/articles";
import { categories } from "@/lib/categories";
import ArticleCard from "@/components/blog/ArticleCard";
import CategoryCard from "@/components/blog/CategoryCard";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "All Guides – Online Earning, Freelancing & Digital Skills",
  description:
    "Browse all EarnWiseHub guides on freelancing, online jobs, remote work, paid research, microtasks, digital skills and side income ideas.",
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: "All Guides | EarnWiseHub",
    description:
      "Research-based guides covering freelancing, remote work, digital skills, testing platforms, paid research and more.",
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    type: "website",
  },
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
];

export default function BlogPage() {
  const sorted = [...allArticles].sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  return (
    <>
      <BreadcrumbSchema items={BREADCRUMBS} />

      {/* Page header */}
      <section className="bg-gradient-to-br from-brand-50 to-white py-12 sm:py-14 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={BREADCRUMBS} className="mb-4" />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            All Guides
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            {sorted.length} research-based guides on freelancing, online jobs, digital skills, remote work and legitimate side-income ideas.
          </p>
        </div>
      </section>

      {/* Categories overview */}
      <section className="py-12" aria-labelledby="cats-heading" id="categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="cats-heading" className="text-xl font-bold text-gray-900 mb-6">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className={`${cat.color} rounded-xl px-4 py-3 text-center hover:shadow-sm transition-all border border-gray-100`}
              >
                <div className="text-2xl mb-1" aria-hidden="true">{cat.icon}</div>
                <div className="text-xs font-semibold text-gray-800">{cat.name}</div>
                <div className="text-[10px] text-gray-500 mt-0.5">
                  {getCategoryArticleCount(cat.slug)} guides
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Article grid */}
      <section className="pb-16" aria-labelledby="articles-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="articles-heading" className="text-xl font-bold text-gray-900 mb-6">
            All Articles ({sorted.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sorted.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
