"use client";

import { useState, useEffect } from "react";

interface SocialShareProps {
  slug: string;
  title: string;
  shortCode?: string;
  variant?: "bar" | "box";
}

export default function SocialShare({
  slug,
  title,
  shortCode,
  variant = "box",
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const origin = window.location.origin;
      const code = shortCode || slug;
      setCurrentUrl(`${origin}/blog/${slug}`);
      setShortUrl(`${origin}/s/${code}`);
      setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share);
    }
  }, [slug, shortCode]);

  const shareText = `Check out: ${title}`;
  const targetShareUrl = shortUrl || currentUrl;

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(targetShareUrl);
      } else {
        const input = document.createElement("input");
        input.value = targetShareUrl;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: title,
          url: targetShareUrl,
        });
      } catch {
        // user cancelled share
      }
    }
  };

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `${title}\n${targetShareUrl}`
  )}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    targetShareUrl
  )}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(targetShareUrl)}`;
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(
    targetShareUrl
  )}&text=${encodeURIComponent(title)}`;

  if (variant === "bar") {
    return (
      <div className="flex items-center gap-2 flex-wrap py-3 px-4 bg-gray-50/80 rounded-xl border border-gray-200 text-xs my-4">
        <span className="font-semibold text-gray-700 flex items-center gap-1.5 mr-1">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Share:
        </span>

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-medium transition-colors"
          title="Share on WhatsApp"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.771.82 2.791.82 3.184 0 5.77-2.587 5.77-5.766.001-3.184-2.585-5.806-5.77-5.806zm4.567 8.357c-.201.564-.993 1.076-1.42 1.134-.395.053-.909.078-2.915-.754-2.417-.999-3.957-3.486-4.077-3.649-.12-.162-.979-1.306-.979-2.489 0-1.184.618-1.768.839-2.008.22-.241.482-.301.642-.301.161 0 .322.002.463.009.148.007.348-.057.545.416.202.482.684 1.666.745 1.787.06.12.1.261.02.422-.08.162-.12.261-.24.402-.12.141-.252.316-.36.425-.12.12-.246.252-.106.492.14.241.624 1.028 1.34 1.665.922.82 1.7 1.074 1.942 1.194.241.12.382.101.523-.06.14-.162.603-.703.764-.945.161-.241.322-.201.543-.12.221.08 1.408.664 1.649.784.241.12.402.181.463.281.06.1.06.582-.141 1.146z" />
          </svg>
          WhatsApp
        </a>

        {/* Facebook */}
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#1877F2] hover:bg-[#166fe5] text-white font-medium transition-colors"
          title="Share on Facebook"
        >
          Facebook
        </a>

        {/* X / Twitter */}
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gray-900 hover:bg-black text-white font-medium transition-colors"
          title="Share on X (Twitter)"
        >
          X
        </a>

        {/* Telegram */}
        <a
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#0088cc] hover:bg-[#007ab8] text-white font-medium transition-colors"
          title="Share on Telegram"
        >
          Telegram
        </a>

        {/* Copy Short Link */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-brand-50 hover:bg-brand-100 text-brand-700 font-semibold border border-brand-200 transition-colors ml-auto"
          title="Copy Link"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          {copied ? "Copied! ✓" : "Copy Short Link"}
        </button>
      </div>
    );
  }

  // Full Rich Box Variant
  return (
    <div className="bg-gradient-to-br from-brand-50/60 via-white to-gray-50 rounded-2xl p-5 sm:p-6 border border-brand-100 shadow-sm my-8">
      <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">
            🔗
          </span>
          <h3 className="!text-base font-bold text-gray-900 !my-0">Share This Guide & Short Link</h3>
        </div>
        <span className="text-[11px] font-semibold text-brand-700 bg-brand-100/70 px-2.5 py-0.5 rounded-full">
          Quick Share
        </span>
      </div>

      <p className="text-xs text-gray-600 mb-4 leading-relaxed">
        Apne doston ke sath ye guide share karein ya niche diye gaye short link ko copy karein:
      </p>

      {/* Short Link Copy Bar */}
      <div className="flex items-center gap-2 mb-4 bg-white p-1.5 rounded-xl border border-gray-300 shadow-sm">
        <div className="flex-1 px-3 py-1 text-xs text-gray-700 font-mono truncate select-all">
          {targetShareUrl || "Generating short link..."}
        </div>
        <button
          onClick={handleCopy}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
            copied
              ? "bg-emerald-600 text-white"
              : "bg-brand-600 hover:bg-brand-700 text-white shadow-sm"
          }`}
        >
          {copied ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              Copy Link
            </>
          )}
        </button>
      </div>

      {/* Social Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-sm transition-all transform active:scale-95 text-center"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.771.82 2.791.82 3.184 0 5.77-2.587 5.77-5.766.001-3.184-2.585-5.806-5.77-5.806zm4.567 8.357c-.201.564-.993 1.076-1.42 1.134-.395.053-.909.078-2.915-.754-2.417-.999-3.957-3.486-4.077-3.649-.12-.162-.979-1.306-.979-2.489 0-1.184.618-1.768.839-2.008.22-.241.482-.301.642-.301.161 0 .322.002.463.009.148.007.348-.057.545.416.202.482.684 1.666.745 1.787.06.12.1.261.02.422-.08.162-.12.261-.24.402-.12.141-.252.316-.36.425-.12.12-.246.252-.106.492.14.241.624 1.028 1.34 1.665.922.82 1.7 1.074 1.942 1.194.241.12.382.101.523-.06.14-.162.603-.703.764-.945.161-.241.322-.201.543-.12.221.08 1.408.664 1.649.784.241.12.402.181.463.281.06.1.06.582-.141 1.146z" />
          </svg>
          WhatsApp
        </a>

        {/* Facebook */}
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-bold shadow-sm transition-all transform active:scale-95 text-center"
        >
          Facebook
        </a>

        {/* Telegram */}
        <a
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#0088cc] hover:bg-[#007ab8] text-white text-xs font-bold shadow-sm transition-all transform active:scale-95 text-center"
        >
          Telegram
        </a>

        {/* Native Mobile Share or X */}
        {canNativeShare ? (
          <button
            onClick={handleNativeShare}
            className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-bold shadow-sm transition-all transform active:scale-95 text-center"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Share...
          </button>
        ) : (
          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-bold shadow-sm transition-all transform active:scale-95 text-center"
          >
            X (Twitter)
          </a>
        )}
      </div>
    </div>
  );
}
