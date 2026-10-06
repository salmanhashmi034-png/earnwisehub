"use client";

import React, { useEffect, useRef } from "react";

// Adsterra ad keys provided by user
export const AD_KEYS = {
  BANNER_728x90: "f4ccf4818d309f968edb1d81602f8bcc",
  BANNER_300x250: "e21c4fc184f41d07e6564ae6c680e228",
  BANNER_468x60: "9dfc2dac5456650a23f5a1c5060b137b",
  BANNER_320x50: "6a78926f368386b69395234cef1b2d95",
  BANNER_160x600: "5c6c768fdc2f1ed7d55049544752c2bf",
  BANNER_160x300: "a02292dd44b8aab6e2ec183c2fad9c74",
  DIRECT_LINK: "https://arwf.org/4/8cf3fc6d358aefac54e297753ca65cb5",
  NATIVE_CONTAINER: "container-b1fd268a60610132bd4e8599f442f4f6",
  NATIVE_SCRIPT: "https://bicea.org/21/b1fd268a60610132bd4e8599f442f4f6",
  SOCIAL_BAR_SCRIPT: "https://bicea.org/14/432099dc5cf0707c59ef5f563d358236",
};

interface AdsterraBannerProps {
  adKey: string;
  width: number;
  height: number;
  className?: string;
}

/**
 * Isolated iframe wrapper for Adsterra banner scripts.
 * Prevents window.atOptions collisions and React hydration issues.
 */
export function AdsterraBanner({
  adKey,
  width,
  height,
  className = "",
}: AdsterraBannerProps) {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          html, body {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: transparent;
            overflow: hidden;
          }
        </style>
      </head>
      <body>
        <script type="text/javascript">
          atOptions = {
            'key' : '${adKey}',
            'format' : 'iframe',
            'height' : ${height},
            'width' : ${width},
            'params' : {}
          };
        <\/script>
        <script type="text/javascript" src="https://bicea.org/22/${adKey}"><\/script>
      </body>
    </html>
  `;

  return (
    <div className={`flex justify-center items-center my-2 overflow-hidden ${className}`}>
      <iframe
        title={`ad-${adKey}`}
        srcDoc={htmlContent}
        width={width}
        height={height}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          border: "none",
          overflow: "hidden",
        }}
        scrolling="no"
        loading="lazy"
      />
    </div>
  );
}

/**
 * Responsive Header Ad:
 * 728x90 on Desktop / Tablet (md+)
 * 320x50 on Mobile (< md)
 */
export function AdsterraHeaderAd() {
  return (
    <div className="w-full my-3 flex flex-col items-center">
      <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Advertisement</span>
      <div className="hidden md:block">
        <AdsterraBanner adKey={AD_KEYS.BANNER_728x90} width={728} height={90} />
      </div>
      <div className="block md:hidden">
        <AdsterraBanner adKey={AD_KEYS.BANNER_320x50} width={320} height={50} />
      </div>
    </div>
  );
}

/**
 * Responsive Footer Ad:
 * 728x90 on Desktop (md+)
 * 320x50 on Mobile (< md)
 */
export function AdsterraFooterAd() {
  return (
    <div className="w-full my-6 flex flex-col items-center border-t border-gray-100 pt-4">
      <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Sponsored</span>
      <div className="hidden md:block">
        <AdsterraBanner adKey={AD_KEYS.BANNER_728x90} width={728} height={90} />
      </div>
      <div className="block md:hidden">
        <AdsterraBanner adKey={AD_KEYS.BANNER_320x50} width={320} height={50} />
      </div>
    </div>
  );
}

/**
 * Sidebar Ads:
 * 300x250 Medium Rectangle & 160x600 Skyscraper
 */
export function AdsterraSidebarAd() {
  return (
    <div className="w-full flex flex-col items-center gap-4 my-4">
      <div className="flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Sponsored Ad</span>
        <AdsterraBanner adKey={AD_KEYS.BANNER_300x250} width={300} height={250} />
      </div>
    </div>
  );
}

/**
 * Skyscraper Sidebar Ad (160x600 / 160x300)
 */
export function AdsterraSkyscraperAd() {
  return (
    <div className="w-full flex flex-col items-center my-4">
      <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Advertisement</span>
      <div className="hidden lg:block">
        <AdsterraBanner adKey={AD_KEYS.BANNER_160x600} width={160} height={600} />
      </div>
      <div className="block lg:hidden">
        <AdsterraBanner adKey={AD_KEYS.BANNER_160x300} width={160} height={300} />
      </div>
    </div>
  );
}

/**
 * In-Content Ad:
 * 468x60 on Desktop, 300x250 on Medium, 320x50 on Small
 */
export function AdsterraInContentAd() {
  return (
    <div className="w-full my-6 flex flex-col items-center bg-gray-50/50 py-3 rounded-xl border border-gray-100">
      <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Advertisement</span>
      <div className="hidden sm:block">
        <AdsterraBanner adKey={AD_KEYS.BANNER_300x250} width={300} height={250} />
      </div>
      <div className="block sm:hidden">
        <AdsterraBanner adKey={AD_KEYS.BANNER_320x50} width={320} height={50} />
      </div>
    </div>
  );
}

/**
 * Native Banner:
 * Injects Adsterra native ads container into the page
 */
export function AdsterraNativeAd() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const existing = document.getElementById("adsterra-native-script");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "adsterra-native-script";
      script.async = true;
      script.setAttribute("data-cfasync", "false");
      script.src = AD_KEYS.NATIVE_SCRIPT;
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full my-6 bg-white rounded-xl p-4 border border-gray-200">
      <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2">
        <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Recommended For You</span>
        <span className="text-[10px] text-gray-400 uppercase tracking-widest">Sponsored</span>
      </div>
      <div id={AD_KEYS.NATIVE_CONTAINER} ref={containerRef} className="w-full min-h-[120px]" />
    </div>
  );
}

/**
 * Direct Link CTA Component:
 * High CTR styled recommendation card linking to Adsterra Direct Link
 */
export function AdsterraDirectLinkCTA() {
  return (
    <div className="my-6 p-4 rounded-xl bg-gradient-to-r from-brand-50 to-sky-50 border border-brand-200 text-center">
      <p className="text-xs uppercase tracking-wider text-brand-700 font-bold mb-1">Featured Online Opportunity</p>
      <h4 className="text-base font-bold text-gray-900 mb-2">Explore High-Paying Remote Tasks &amp; Verified Offers</h4>
      <p className="text-xs text-gray-600 mb-3 max-w-md mx-auto">
        Check out today&apos;s recommended platforms and partner programs for active online earners.
      </p>
      <a
        href={AD_KEYS.DIRECT_LINK}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="inline-block bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs px-6 py-2.5 rounded-lg shadow-sm transition-colors"
      >
        Check Available Offers →
      </a>
    </div>
  );
}
