import { siteConfig } from "@/lib/config";
import { allArticles } from "@/lib/articles";
import { getCategoryName } from "@/lib/categories";

export async function GET() {
  const sorted = [...allArticles].sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  const items = sorted
    .slice(0, 20)
    .map(
      (article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${siteConfig.url}/blog/${article.slug}/</link>
      <guid isPermaLink="true">${siteConfig.url}/blog/${article.slug}/</guid>
      <description><![CDATA[${article.excerpt}]]></description>
      <category><![CDATA[${getCategoryName(article.category)}]]></category>
      <pubDate>${new Date(article.publishedDate).toUTCString()}</pubDate>
      <author>${siteConfig.email} (${article.author.name})</author>
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.name}</title>
    <link>${siteConfig.url}</link>
    <description>${siteConfig.description}</description>
    <language>en-us</language>
    <copyright>© ${new Date().getFullYear()} ${siteConfig.name}</copyright>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteConfig.url}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
