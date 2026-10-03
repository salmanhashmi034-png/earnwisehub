import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="text-7xl font-extrabold text-brand-200 mb-4" aria-hidden="true">404</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Page Not Found</h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved. Try searching for what you need, or start from the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/blog" className="btn-secondary">
            Browse All Guides
          </Link>
          <Link href="/search" className="btn-outline">
            Search
          </Link>
        </div>
      </div>
    </div>
  );
}
