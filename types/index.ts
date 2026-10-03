// ============================================================
// EarnWiseHub – Core TypeScript Types
// ============================================================

export interface Author {
  name: string;
  title: string;
  bio: string;
  avatar?: string;
}

export interface ArticleSource {
  title: string;
  url: string;
  accessed: string; // ISO date string
}

export interface Article {
  title: string;
  slug: string;
  category: string; // matches Category.slug
  excerpt: string;
  content: string; // HTML string
  author: Author;
  publishedDate: string; // ISO date string
  updatedDate?: string; // ISO date string
  readingTime: number; // minutes
  tags: string[];
  featuredImage: string;
  featuredImageAlt: string;
  seoTitle: string;
  seoDescription: string;
  sources: ArticleSource[];
  affiliateDisclosure: boolean;
  lastChecked?: string; // ISO date – for platform reviews
  relatedSlugs: string[];
  featured?: boolean;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: string; // SVG path or emoji
  color: string; // Tailwind bg class
  articleCount?: number;
}

export interface SearchResult {
  article: Article;
  score: number;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string; // configurable – replace with real domain
  email: string;
  locale: string;
  twitterHandle?: string;
  googleAnalyticsId?: string; // placeholder – set your real GA4 ID
  googleTagManagerId?: string; // placeholder – set your real GTM ID
  googleSiteVerification?: string; // placeholder – set from Search Console
  adsense?: {
    publisherId?: string; // placeholder – set your real AdSense publisher ID
  };
  social: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
    pinterest?: string;
  };
}
