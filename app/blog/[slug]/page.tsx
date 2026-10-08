import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  allArticles,
  getArticleBySlug,
  getRelatedArticles,
  getAllSlugs,
  formatDate,
} from "@/lib/articles";
import { getCategoryBySlug } from "@/lib/categories";
import { siteConfig } from "@/lib/config";
import ArticleCard from "@/components/blog/ArticleCard";
import NewsletterSignup from "@/components/blog/NewsletterSignup";
import SocialShare from "@/components/blog/SocialShare";
import AdPlaceholder from "@/components/ui/AdPlaceholder";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import {
  ArticleSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";

// Static generation
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const canonicalUrl = `${siteConfig.url}/blog/${slug}/`;

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "article",
      title: article.seoTitle,
      description: article.seoDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate ?? article.publishedDate,
      authors: [article.author.name],
      images: article.featuredImage
        ? [
            {
              url: article.featuredImage,
              width: 1200,
              height: 630,
              alt: article.featuredImageAlt,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.seoDescription,
      images: article.featuredImage ? [article.featuredImage] : undefined,
    },
  };
}

const shortCodeMap: Record<string, string> = {
  "watch-videos-earn-money-mobile-load": "load100",
  "watch-ads-earn-money-5-dollar-reward": "ads5",
  "denvork-watch-ads-earn": "denvork",
  "upwork-beginner-guide": "upwork",
  "fiverr-beginner-guide": "fiverr",
  "how-to-start-freelancing": "freelance",
};

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const shortCode = shortCodeMap[slug] || slug;
  const category = getCategoryBySlug(article.category);
  const relatedArticles = getRelatedArticles(article, 3);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: category?.name ?? "Blog", href: category ? `/category/${article.category}` : "/blog" },
    { label: article.title, href: `/blog/${slug}` },
  ];

  return (
    <>
      <ArticleSchema article={article} />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Page layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-10 lg:gap-12">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Breadcrumbs */}
            <Breadcrumbs items={breadcrumbs} className="mb-6" />

            {/* Article header */}
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                {category && (
                  <Link
                    href={`/category/${article.category}`}
                    className="text-xs font-semibold text-brand-600 bg-brand-50 hover:bg-brand-100 px-3 py-1 rounded-full transition-colors"
                  >
                    {category.name}
                  </Link>
                )}
                <span className="text-xs text-gray-400">{article.readingTime} min read</span>
                {article.affiliateDisclosure && (
                  <span className="text-xs text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full font-medium">
                    Contains affiliate links
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                {article.title}
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-5">
                {article.excerpt}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500 pb-5 border-b border-gray-100">
                <span>
                  By <span className="font-medium text-gray-700">{article.author.name}</span>
                </span>
                <time dateTime={article.publishedDate}>
                  Published {formatDate(article.publishedDate)}
                </time>
                {article.updatedDate && article.updatedDate !== article.publishedDate && (
                  <time dateTime={article.updatedDate} className="text-gray-400">
                    Updated {formatDate(article.updatedDate)}
                  </time>
                )}
              </div>
            </header>

            {/* Featured Image */}
            {article.featuredImage && (
              <figure className="mb-6 rounded-2xl overflow-hidden border border-gray-200/80 shadow-md bg-gray-950">
                <img
                  src={article.featuredImage}
                  alt={article.featuredImageAlt || article.title}
                  className="w-full h-auto aspect-[1200/630] object-cover"
                  loading="eager"
                />
              </figure>
            )}

            {/* Quick Social Share Bar */}
            <SocialShare slug={slug} title={article.title} shortCode={shortCode} variant="bar" />

            {/* Affiliate disclosure banner */}
            {article.affiliateDisclosure && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-800">
                <strong>Affiliate Disclosure:</strong> This article contains affiliate links. If you sign up or purchase through them, we may earn a small commission at no extra cost to you. This does not influence our editorial content. See our{" "}
                <Link href="/affiliate-disclosure" className="underline hover:text-amber-900">
                  full affiliate disclosure
                </Link>.
              </div>
            )}

            {/* In-content ad (top) */}
            <div className="mb-8">
              <AdPlaceholder slot="in-content" />
            </div>

            {/* Article content */}
            <article
              className="article-content"
              itemScope
              itemType="https://schema.org/Article"
            >
              <div
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </article>

            {/* Social Share & Short Link Box */}
            <SocialShare slug={slug} title={article.title} shortCode={shortCode} variant="box" />

            {/* Sources */}
            {article.sources.length > 0 && (
              <aside className="mt-10 bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h2 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                  Sources & References
                </h2>
                <ul className="space-y-2">
                  {article.sources.map((source, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-gray-400 font-mono flex-shrink-0 mt-0.5">[{i + 1}]</span>
                      <div>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-600 hover:text-brand-700 hover:underline"
                        >
                          {source.title}
                        </a>
                        <span className="text-gray-400 ml-2 text-xs">
                          Accessed {new Date(source.accessed).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
                {article.lastChecked && (
                  <p className="mt-3 text-xs text-gray-500 border-t border-gray-200 pt-3">
                    ℹ️ Platform-specific information last checked:{" "}
                    <strong>
                      {new Date(article.lastChecked).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </strong>. Details may have changed. Always verify on the platform&apos;s official website before signing up.
                  </p>
                )}
              </aside>
            )}

            {/* Author box */}
            <div className="mt-8 bg-white rounded-xl border border-gray-200 p-5 flex gap-4">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-brand-700 font-bold text-sm">EW</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{article.author.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{article.author.title}</p>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{article.author.bio}</p>
                <Link
                  href="/editorial-policy"
                  className="text-xs text-brand-600 hover:underline mt-2 inline-block"
                >
                  Read our Editorial Standards →
                </Link>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-6 bg-gray-50 rounded-xl p-4 border border-gray-200 text-xs text-gray-500">
              <strong className="text-gray-700">Disclaimer:</strong> The information in this article is provided for general informational purposes only. It does not constitute financial, legal or professional advice. Income outcomes vary based on individual effort, skills and circumstances. Always conduct your own research and, where appropriate, consult qualified professionals before making financial decisions. See our{" "}
              <Link href="/disclaimer" className="text-brand-600 hover:underline">full disclaimer</Link>.
            </div>

            {/* In-content ad (below article) */}
            <div className="mt-8">
              <AdPlaceholder slot="below-article" />
            </div>

            {/* Tags */}
            {article.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="hidden xl:block w-64 flex-shrink-0" aria-label="Sidebar">
            <div className="sticky top-24 space-y-6">
              <AdPlaceholder slot="sidebar" />

              {/* Category links */}
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 text-sm mb-3">More in {category?.name}</h3>
                <ul className="space-y-2">
                  {relatedArticles.slice(0, 4).map((rel) => (
                    <li key={rel.slug}>
                      <Link
                        href={`/blog/${rel.slug}`}
                        className="text-sm text-gray-600 hover:text-brand-600 line-clamp-2 leading-snug"
                      >
                        {rel.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/category/${article.category}`}
                  className="text-xs font-semibold text-brand-600 hover:text-brand-700 mt-3 inline-block"
                >
                  Browse all {category?.name} guides →
                </Link>
              </div>

              <NewsletterSignup variant="compact" />
            </div>
          </aside>
        </div>

        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-14 pt-10 border-t border-gray-100" aria-labelledby="related-heading">
            <h2 id="related-heading" className="text-xl font-bold text-gray-900 mb-6">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedArticles.map((rel) => (
                <ArticleCard key={rel.slug} article={rel} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
