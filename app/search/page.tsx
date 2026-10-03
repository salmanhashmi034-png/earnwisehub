"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { searchArticles } from "@/lib/articles";
import ArticleCard from "@/components/blog/ArticleCard";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const results = query.trim() ? searchArticles(query) : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Search form */}
      <form action="/search" method="get" role="search" className="mb-10">
        <div className="flex gap-3 max-w-xl">
          <label htmlFor="search-input" className="sr-only">
            Search articles
          </label>
          <input
            id="search-input"
            name="q"
            type="search"
            defaultValue={query}
            placeholder="Search guides, topics, platforms…"
            className="form-input flex-1"
            autoComplete="off"
            autoFocus
          />
          <button type="submit" className="btn-primary flex-shrink-0">
            Search
          </button>
          {query && (
            <Link href="/search" className="btn-outline flex-shrink-0">
              Clear
            </Link>
          )}
        </div>
      </form>

      {/* Results */}
      {query.trim() === "" ? (
        <div className="text-center py-12">
          <div className="text-5xl mb-4" aria-hidden="true">🔍</div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Search our guides
          </h2>
          <p className="text-gray-500">
            Enter a topic, platform name or keyword above to find relevant guides.
          </p>
        </div>
      ) : results.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-5xl mb-4" aria-hidden="true">😕</div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            No results for &ldquo;{query}&rdquo;
          </h2>
          <p className="text-gray-500 mb-6">
            Try a different keyword, or browse all articles below.
          </p>
          <Link href="/blog" className="btn-primary">
            Browse All Guides
          </Link>
        </div>
      ) : (
        <>
          <p className="text-sm text-gray-500 mb-6">
            Found <strong className="text-gray-900">{results.length} result{results.length !== 1 ? "s" : ""}</strong> for &ldquo;{query}&rdquo;
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {results.map(({ article }) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Search Guides</h1>
          <p className="text-gray-500">Find articles on freelancing, online jobs, digital skills and more.</p>
        </div>
      </section>

      <Suspense fallback={
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-gray-400">
          Loading results…
        </div>
      }>
        <SearchResults />
      </Suspense>
    </>
  );
}
