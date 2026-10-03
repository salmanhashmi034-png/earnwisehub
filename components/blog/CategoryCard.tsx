import Link from "next/link";
import type { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
  articleCount?: number;
}

export default function CategoryCard({ category, articleCount = 0 }: CategoryCardProps) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className={`${category.color} rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-all duration-200 flex flex-col gap-3 group`}
      aria-label={`${category.name} category — ${articleCount} article${articleCount !== 1 ? "s" : ""}`}
    >
      <div className="flex items-start justify-between">
        <span className="text-3xl" aria-hidden="true">{category.icon}</span>
        <span className="text-xs font-medium text-gray-500 bg-white/80 px-2.5 py-1 rounded-full">
          {articleCount} {articleCount === 1 ? "article" : "articles"}
        </span>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 text-base group-hover:text-brand-700 transition-colors mb-1">
          {category.name}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
          {category.description}
        </p>
      </div>

      <div className="flex items-center gap-1 text-brand-600 text-sm font-medium group-hover:gap-2 transition-all">
        <span>Browse guides</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
