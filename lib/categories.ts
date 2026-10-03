// ============================================================
// EarnWiseHub – Category Definitions
// ============================================================

import type { Category } from "@/types";

export const categories: Category[] = [
  {
    name: "Freelancing",
    slug: "freelancing",
    description: "Build a freelance career and find clients online.",
    longDescription:
      "Practical guides to starting, growing and sustaining a freelance career. Covers platform overviews, profile building, client communication, pricing, contracts and how to avoid scams.",
    icon: "💼",
    color: "bg-blue-50",
  },
  {
    name: "Online Jobs",
    slug: "online-jobs",
    description: "Legitimate online job opportunities for all skill levels.",
    longDescription:
      "Research-backed guides to finding real online employment opportunities, from entry-level data roles to skilled professional positions. Focuses on verifiable, legitimate employers.",
    icon: "🖥️",
    color: "bg-indigo-50",
  },
  {
    name: "Remote Work",
    slug: "remote-work",
    description: "How to find, apply for and succeed in remote roles.",
    longDescription:
      "Everything from finding fully remote job listings to succeeding in a distributed team. Covers job boards, applications, tools, communication and work-life balance.",
    icon: "🏠",
    color: "bg-green-50",
  },
  {
    name: "Paid Research",
    slug: "paid-research",
    description: "Get paid to share your opinions in research studies.",
    longDescription:
      "How academic and commercial research platforms pay participants for surveys, interviews and usability studies. Covers eligibility, payments, time commitment and what to realistically expect.",
    icon: "🔬",
    color: "bg-purple-50",
  },
  {
    name: "Microtasks",
    slug: "microtasks",
    description: "Small tasks you can complete for payment in your spare time.",
    longDescription:
      "Microtask platforms offer short, repeatable tasks such as data labelling, transcription and content review. These guides explain how each platform works, what tasks are available and typical pay structures.",
    icon: "✅",
    color: "bg-yellow-50",
  },
  {
    name: "Website & App Testing",
    slug: "website-app-testing",
    description: "Earn by testing websites and apps for businesses.",
    longDescription:
      "User-testing platforms pay testers to evaluate websites and applications and record feedback. These guides explain how testing works, platform requirements, payment structures and realistic expectations.",
    icon: "🧪",
    color: "bg-orange-50",
  },
  {
    name: "Digital Skills",
    slug: "digital-skills",
    description: "Build marketable digital skills for online work.",
    longDescription:
      "Guides to learning practical digital skills that open doors to online income: from spreadsheets and design tools to writing, SEO and content creation. Focuses on beginner-accessible, high-demand skills.",
    icon: "🎓",
    color: "bg-teal-50",
  },
  {
    name: "AI & Productivity",
    slug: "ai-productivity",
    description: "Use AI tools to work smarter and increase output.",
    longDescription:
      "How AI writing, image and productivity tools can be used responsibly to improve output quality, reduce repetitive work and learn faster. Covers practical applications rather than hype.",
    icon: "🤖",
    color: "bg-sky-50",
  },
  {
    name: "Side Hustles",
    slug: "side-hustles",
    description: "Realistic side-income ideas alongside your main work.",
    longDescription:
      "Practical guides to building supplemental income streams alongside existing employment or study. Covers selling digital products, tutoring, content creation and other legitimate approaches.",
    icon: "💡",
    color: "bg-rose-50",
  },
  {
    name: "Personal Finance Basics",
    slug: "personal-finance",
    description: "Simple financial foundations for online earners.",
    longDescription:
      "Basic personal finance guidance relevant to people earning online: tracking income from multiple sources, understanding self-employment taxes, separating business and personal finances, and building an emergency fund.",
    icon: "💰",
    color: "bg-emerald-50",
  },
  {
    name: "Android Apps",
    slug: "android-apps",
    description: "Best Android apps for productivity, creativity and everyday use.",
    longDescription:
      "Curated guides to the best Android apps across categories including productivity, creativity, security, travel, fitness and more. Each guide covers why an app is useful, who it suits best, and what to expect from it.",
    icon: "📱",
    color: "bg-lime-50",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryName(slug: string): string {
  return getCategoryBySlug(slug)?.name ?? slug;
}

export function getCategoryArticleCount(slug: string): number {
  // Lazy import to avoid circular deps — computed at call site via allArticles
  // This is a placeholder; actual count is computed in lib/articles.ts
  // Import getCategoryArticleCount from lib/articles for actual counts
  return 0;
}
