"use client";

import React from "react";
import {
  AdsterraHeaderAd,
  AdsterraFooterAd,
  AdsterraSidebarAd,
  AdsterraSkyscraperAd,
  AdsterraInContentAd,
  AdsterraNativeAd,
  AdsterraDirectLinkCTA,
} from "@/components/ads/AdsterraAds";

interface AdPlaceholderProps {
  slot: "header" | "in-content" | "sidebar" | "footer" | "below-article";
  className?: string;
  label?: string;
}

export default function AdPlaceholder({
  slot,
  className = "",
}: AdPlaceholderProps) {
  switch (slot) {
    case "header":
      return (
        <div className={`ad-slot-header ${className}`}>
          <AdsterraHeaderAd />
        </div>
      );

    case "footer":
      return (
        <div className={`ad-slot-footer ${className}`}>
          <AdsterraFooterAd />
        </div>
      );

    case "sidebar":
      return (
        <div className={`ad-slot-sidebar ${className} flex flex-col gap-6`}>
          <AdsterraSidebarAd />
          <AdsterraSkyscraperAd />
        </div>
      );

    case "in-content":
      return (
        <div className={`ad-slot-in-content ${className}`}>
          <AdsterraInContentAd />
        </div>
      );

    case "below-article":
      return (
        <div className={`ad-slot-below-article ${className} space-y-4`}>
          <AdsterraNativeAd />
          <AdsterraDirectLinkCTA />
        </div>
      );

    default:
      return null;
  }
}
