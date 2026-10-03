import Link from "next/link";
import type { Article } from "@/types";
import { formatDateShort } from "@/lib/articles";
import { getCategoryName } from "@/lib/categories";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "horizontal" | "featured";
}

export default function ArticleCard({ article, variant = "default" }: ArticleCardProps) {
  const categoryName = getCategoryName(article.category);
  const categoryHref = `/category/${article.category}`;
  const articleHref = `/blog/${article.slug}`;

  if (variant === "horizontal") {
    return (
      <article className="card flex gap-4 p-4 sm:p-5">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <Link
              href={categoryHref}
              className="text-xs font-semibold text-brand-600 hover:text-brand-700 bg-brand-50 px-2 py-0.5 rounded-full"
            >
              {categoryName}
            </Link>
            <span className="text-xs text-gray-400">{article.readingTime} min read</span>
          </div>
          <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug mb-2 line-clamp-2">
            <Link href={articleHref} className="hover:text-brand-600 transition-colors">
              {article.title}
            </Link>
          </h3>
          <p className="text-xs text-gray-500">
            {formatDateShort(article.publishedDate)}
            {article.updatedDate && article.updatedDate !== article.publishedDate && (
              <span className="ml-2 text-gray-400">(Updated {formatDateShort(article.updatedDate)})</span>
            )}
          </p>
        </div>
      </article>
    );
  }

  if (variant === "featured") {
    return (
      <article className="card group relative overflow-hidden bg-gradient-to-br from-brand-700 to-brand-900 text-white p-6 sm:p-8 flex flex-col justify-end min-h-[280px]">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <Link
              href={categoryHref}
              className="text-xs font-semibold bg-white/20 text-white px-2.5 py-1 rounded-full hover:bg-white/30 transition-colors"
            >
              {categoryName}
            </Link>
            <span className="text-xs text-white/70">{article.readingTime} min read</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight">
            <Link href={articleHref} className="hover:text-brand-200 transition-colors">
              {article.title}
            </Link>
          </h2>
          <p className="text-white/80 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-white/60">{formatDateShort(article.publishedDate)}</span>
            <Link
              href={articleHref}
              className="text-sm font-semibold text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
            >
              Read Article →
            </Link>
          </div>
        </div>
      </article>
    );
  }

  // Default card
  return (
    <article className="card group flex flex-col h-full">
      {/* Colour bar */}
      <div className="h-1.5 bg-gradient-to-r from-brand-400 to-brand-600 flex-shrink-0" />

      <div className="p-5 flex flex-col flex-1">
        {/* Meta row */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <Link
            href={categoryHref}
            className="text-xs font-semibold text-brand-600 hover:text-brand-700 bg-brand-50 hover:bg-brand-100 px-2.5 py-0.5 rounded-full transition-colors"
          >
            {categoryName}
          </Link>
          <span className="text-xs text-gray-400">{article.readingTime} min read</span>
          {article.affiliateDisclosure && (
            <span className="text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full font-medium">
              Contains affiliate links
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 flex-shrink-0 group-hover:text-brand-700 transition-colors line-clamp-3">
          <Link href={articleHref} className="focus:outline-none focus-visible:underline">
            {article.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1 line-clamp-3">
          {article.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto flex-shrink-0">
          <div className="text-xs text-gray-400">
            <span>{formatDateShort(article.publishedDate)}</span>
            {article.updatedDate && article.updatedDate !== article.publishedDate && (
              <span className="hidden sm:inline ml-2 text-gray-300">
                · Updated {formatDateShort(article.updatedDate)}
              </span>
            )}
          </div>
          <Link
            href={articleHref}
            className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1 group/btn"
            aria-label={`Read article: ${article.title}`}
          >
            Read Article
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
