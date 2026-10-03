// ============================================================
// EarnWiseHub – Site Configuration
// Replace placeholder values before going live.
// ============================================================

import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "EarnWiseHub",
  tagline: "Practical Guides to Online Earning & Digital Work",
  description:
    "Clear, research-based guides covering freelancing, online jobs, digital skills, testing platforms, paid research and practical side-income ideas.",
  // ⚠️  Replace with your real domain before deployment
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://earnwisehub.com",
  // ⚠️  Replace with your real contact email
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@earnwisehub.com",
  locale: "en-US",

  // ⚠️  Analytics – add real IDs in .env.local (never commit to source control)
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID ?? undefined,
  googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID ?? undefined,
  googleSiteVerification: process.env.NEXT_PUBLIC_GSC_VERIFY ?? undefined,

  // ⚠️  AdSense – add real publisher ID in .env.local
  adsense: {
    publisherId: process.env.NEXT_PUBLIC_ADSENSE_PUB ?? undefined,
  },

  social: {
    twitter: process.env.NEXT_PUBLIC_TWITTER ?? undefined,
    facebook: process.env.NEXT_PUBLIC_FACEBOOK ?? undefined,
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN ?? undefined,
  },
};

export const ARTICLES_PER_PAGE = 9;
export const RELATED_ARTICLES_COUNT = 4;
export const FEATURED_ARTICLES_COUNT = 3;
export const LATEST_ARTICLES_HOME = 8;
