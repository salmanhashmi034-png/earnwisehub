// ============================================================
// EarnWiseHub – Article Registry & Utilities
// ============================================================

import type { Article, SearchResult } from "@/types";
import { ARTICLES_PER_PAGE, RELATED_ARTICLES_COUNT } from "./config";

// Import all article modules
// --- DroidNestApp Android articles ---
import { article as bestAndroidApps2026 } from "./articles/best-android-apps-2026";
import { article as androidProductivityApps } from "./articles/android-productivity-apps";
import { article as bestFreeAndroidApps } from "./articles/best-free-android-apps-2026";
import { article as androidStudentApps } from "./articles/android-student-apps-2026";
import { article as androidKeyboardApps } from "./articles/android-keyboard-apps-2026";
import { article as androidNoteTakingApps } from "./articles/android-note-taking-apps-2026";
import { article as androidCalendarApps } from "./articles/android-calendar-apps-2026";
import { article as androidCloudStorageApps } from "./articles/android-cloud-storage-apps-2026";
import { article as androidWallpaperApps } from "./articles/android-wallpaper-apps-2026";
import { article as androidQrScannerApps } from "./articles/android-qr-barcode-scanner-apps-2026";
import { article as androidPdfReaderApps } from "./articles/android-pdf-reader-apps-2026";
import { article as androidWeatherApps } from "./articles/android-weather-apps-2026";
import { article as androidLauncherApps } from "./articles/android-launcher-apps-2026";
import { article as androidMusicApps } from "./articles/android-music-apps-2026";
import { article as androidVideoEditingApps } from "./articles/android-video-editing-apps-2026";
import { article as androidFitnessApps } from "./articles/android-fitness-apps-2026";
import { article as androidSecurityApps } from "./articles/android-security-apps-2026";
import { article as androidTravelApps } from "./articles/android-travel-apps-2026";
import { article as androidPhotoEditingApps } from "./articles/android-photo-editing-apps-2026";
import { article as denvorkWatchAds } from "./articles/denvork-watch-ads-earn";
import { article as denvorkWithdrawal } from "./articles/denvork-withdrawal-details";
import { article as watchVideosEarnMoneyMobileLoad } from "./articles/watch-videos-earn-money-mobile-load";
import { article as watchAdsEarnMoney5DollarReward } from "./articles/watch-ads-earn-money-5-dollar-reward";
// --- Original EarnWiseHub articles ---
import { article as howToStartFreelancing } from "./articles/how-to-start-freelancing";
import { article as howToBuildFreelancePortfolio } from "./articles/how-to-build-freelance-portfolio";
import { article as upworkBeginnerGuide } from "./articles/upwork-beginner-guide";
import { article as fiverrBeginnerGuide } from "./articles/fiverr-beginner-guide";
import { article as upworkVsFiverr } from "./articles/upwork-vs-fiverr";
import { article as howRemoteJobsWork } from "./articles/how-remote-jobs-work";
import { article as howToFindRemoteJobs } from "./articles/how-to-find-legitimate-remote-jobs";
import { article as howToIdentifyScams } from "./articles/how-to-identify-online-job-scams";
import { article as howPaidResearchWorks } from "./articles/how-paid-research-websites-work";
import { article as prolificReview } from "./articles/prolific-review";
import { article as userTestingReview } from "./articles/usertesting-review";
import { article as respondentReview } from "./articles/respondent-review";
import { article as howWebsiteTestingWorks } from "./articles/how-website-testing-works";
import { article as utestBeginnerGuide } from "./articles/utest-beginner-guide";
import { article as clickworkerBeginnerGuide } from "./articles/clickworker-beginner-guide";
import { article as microtasksExplained } from "./articles/microtasks-explained";
import { article as bestBeginnerDigitalSkills } from "./articles/best-beginner-digital-skills";
import { article as howToLearnExcel } from "./articles/how-to-learn-excel-for-online-work";
import { article as howToLearnCanva } from "./articles/how-to-learn-canva";
import { article as howToBuildPortfolio } from "./articles/how-to-build-simple-online-portfolio";
import { article as howToSellDigitalProducts } from "./articles/how-to-sell-digital-products";
import { article as howAiHelpsProductivity } from "./articles/how-ai-can-help-with-productivity";
import { article as howToFindEntryLevelWork } from "./articles/how-to-find-entry-level-online-work";
import { article as freelancingVsRemoteEmployment } from "./articles/freelancing-vs-remote-employment";
import { article as onlineEarningScams } from "./articles/online-earning-scams-to-avoid";

// Master article list – newest first
export const allArticles: Article[] = [
  watchVideosEarnMoneyMobileLoad,
  watchAdsEarnMoney5DollarReward,
  // Android & DroidNestApp articles
  denvorkWithdrawal,
  denvorkWatchAds,
  androidPhotoEditingApps,
  androidTravelApps,
  androidSecurityApps,
  androidFitnessApps,
  androidVideoEditingApps,
  androidMusicApps,
  androidLauncherApps,
  androidWeatherApps,
  androidPdfReaderApps,
  androidQrScannerApps,
  androidWallpaperApps,
  androidCloudStorageApps,
  androidCalendarApps,
  androidNoteTakingApps,
  androidKeyboardApps,
  androidStudentApps,
  bestFreeAndroidApps,
  androidProductivityApps,
  bestAndroidApps2026,
  // Original EarnWiseHub articles
  onlineEarningScams,
  freelancingVsRemoteEmployment,
  howToFindEntryLevelWork,
  howAiHelpsProductivity,
  howToSellDigitalProducts,
  howToBuildPortfolio,
  howToLearnCanva,
  howToLearnExcel,
  bestBeginnerDigitalSkills,
  microtasksExplained,
  clickworkerBeginnerGuide,
  utestBeginnerGuide,
  howWebsiteTestingWorks,
  respondentReview,
  userTestingReview,
  prolificReview,
  howPaidResearchWorks,
  howToIdentifyScams,
  howToFindRemoteJobs,
  howRemoteJobsWork,
  upworkVsFiverr,
  fiverrBeginnerGuide,
  upworkBeginnerGuide,
  howToBuildFreelancePortfolio,
  howToStartFreelancing,
];

// ---- Lookup helpers ----

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return allArticles.filter((a) => a.category === categorySlug);
}

export function getFeaturedArticles(count = 3): Article[] {
  return allArticles.filter((a) => a.featured).slice(0, count);
}

export function getLatestArticles(count = 8): Article[] {
  return [...allArticles]
    .sort(
      (a, b) =>
        new Date(b.publishedDate).getTime() -
        new Date(a.publishedDate).getTime()
    )
    .slice(0, count);
}

export function getRelatedArticles(
  article: Article,
  count = RELATED_ARTICLES_COUNT
): Article[] {
  // First use explicitly listed related slugs
  const related: Article[] = [];
  for (const slug of article.relatedSlugs) {
    const found = getArticleBySlug(slug);
    if (found) related.push(found);
    if (related.length >= count) break;
  }
  // Fill remaining slots with same-category articles
  if (related.length < count) {
    const categoryArticles = getArticlesByCategory(article.category).filter(
      (a) =>
        a.slug !== article.slug && !related.some((r) => r.slug === a.slug)
    );
    related.push(...categoryArticles.slice(0, count - related.length));
  }
  return related.slice(0, count);
}

export function getPaginatedArticles(
  articles: Article[],
  page: number,
  perPage = ARTICLES_PER_PAGE
): { articles: Article[]; totalPages: number; totalItems: number } {
  const sorted = [...articles].sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
  const totalItems = sorted.length;
  const totalPages = Math.ceil(totalItems / perPage);
  const start = (page - 1) * perPage;
  return {
    articles: sorted.slice(start, start + perPage),
    totalPages,
    totalItems,
  };
}

// ---- Search ----

export function searchArticles(query: string): SearchResult[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  const results: SearchResult[] = [];

  for (const article of allArticles) {
    let score = 0;
    if (article.title.toLowerCase().includes(q)) score += 10;
    if (article.seoTitle.toLowerCase().includes(q)) score += 8;
    if (article.excerpt.toLowerCase().includes(q)) score += 5;
    if (article.category.toLowerCase().includes(q)) score += 4;
    if (article.tags.some((t) => t.toLowerCase().includes(q))) score += 3;
    if (article.content.toLowerCase().includes(q)) score += 1;

    if (score > 0) results.push({ article, score });
  }

  return results.sort((a, b) => b.score - a.score);
}

// ---- Formatting helpers ----

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateShort(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  for (const article of allArticles) {
    for (const tag of article.tags) tagSet.add(tag);
  }
  return Array.from(tagSet).sort();
}

export function getAllSlugs(): string[] {
  return allArticles.map((a) => a.slug);
}

export function getCategoryArticleCount(slug: string): number {
  return getArticlesByCategory(slug).length;
}
