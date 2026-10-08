import { NextResponse } from "next/server";
import { allArticles } from "@/lib/articles";

// Predefined ultra-short aliases for popular articles
const shortAliases: Record<string, string> = {
  "load100": "watch-videos-earn-money-mobile-load",
  "load": "watch-videos-earn-money-mobile-load",
  "video-load": "watch-videos-earn-money-mobile-load",
  "ads5": "watch-ads-earn-money-5-dollar-reward",
  "ads": "watch-ads-earn-money-5-dollar-reward",
  "earn5": "watch-ads-earn-money-5-dollar-reward",
  "denvork": "denvork-watch-ads-earn",
  "upwork": "upwork-beginner-guide",
  "fiverr": "fiverr-beginner-guide",
  "freelance": "how-to-start-freelancing",
  "remote": "how-to-find-legitimate-remote-jobs",
  "canva": "how-to-learn-canva",
  "excel": "how-to-learn-excel-for-online-work",
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const targetSlug = shortAliases[slug] || slug;

  // Check if article exists
  const article = allArticles.find((a) => a.slug === targetSlug);

  const baseUrl = new URL(request.url).origin;

  if (article) {
    return NextResponse.redirect(`${baseUrl}/blog/${article.slug}`, 307);
  }

  // Fallback to blog archive if slug not found
  return NextResponse.redirect(`${baseUrl}/blog`, 307);
}
