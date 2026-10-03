import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getCategoryBySlug } from "@/lib/categories";
import { getArticlesByCategory, getCategoryArticleCount } from "@/lib/articles";
import { siteConfig } from "@/lib/config";
import ArticleCard from "@/components/blog/ArticleCard";
import CategoryCard from "@/components/blog/CategoryCard";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  const canonicalUrl = `${siteConfig.url}/category/${slug}/`;
  const count = getArticlesByCategory(slug).length;

  return {
    title: `${category.name} Guides – ${count} Articles`,
    description: `${category.longDescription} Browse all ${count} ${category.name.toLowerCase()} guides on EarnWiseHub.`,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${category.name} | EarnWiseHub`,
      description: category.longDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const articles = getArticlesByCategory(slug).sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  const relatedCategories = categories.filter((c) => c.slug !== slug).slice(0, 4);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: category.name, href: `/category/${slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Category header */}
      <section className={`${category.color} py-12 sm:py-14 border-b border-gray-100`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} className="mb-5" />

          <div className="flex items-start gap-4">
            <div
              className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0 text-3xl"
              aria-hidden="true"
            >
              {category.icon}
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
                {category.name}
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
                {category.longDescription}
              </p>
              <p className="text-sm text-gray-500 mt-3">
                {articles.length} {articles.length === 1 ? "guide" : "guides"} in this category
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {articles.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4" aria-hidden="true">{category.icon}</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Articles coming soon
            </h2>
            <p className="text-gray-500 mb-6">
              We are working on guides for this category. Check back soon.
            </p>
            <Link href="/blog" className="btn-primary">
              Browse All Guides
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        )}

        {/* Related categories */}
        {relatedCategories.length > 0 && (
          <section className="mt-14 pt-10 border-t border-gray-100" aria-labelledby="related-cats-heading">
            <h2 id="related-cats-heading" className="text-xl font-bold text-gray-900 mb-6">
              Other Categories
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {relatedCategories.map((cat) => (
                <CategoryCard
                  key={cat.slug}
                  category={cat}
                  articleCount={getCategoryArticleCount(cat.slug)}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
