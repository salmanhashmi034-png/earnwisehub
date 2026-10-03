// ============================================================
// AdPlaceholder – Replace content with real AdSense ad units
// when your AdSense account is approved and ads.txt is configured.
//
// NEVER encourage users to click ads.
// NEVER place ads in misleading positions.
// ============================================================

interface AdPlaceholderProps {
  slot: "header" | "in-content" | "sidebar" | "footer" | "below-article";
  className?: string;
  label?: string;
}

const slotConfig: Record<
  AdPlaceholderProps["slot"],
  { label: string; minHeight: string; maxWidth: string }
> = {
  header: {
    label: "Header Ad",
    minHeight: "90px",
    maxWidth: "728px",
  },
  "in-content": {
    label: "In-Content Ad",
    minHeight: "250px",
    maxWidth: "100%",
  },
  sidebar: {
    label: "Sidebar Ad",
    minHeight: "250px",
    maxWidth: "300px",
  },
  footer: {
    label: "Footer Ad",
    minHeight: "90px",
    maxWidth: "728px",
  },
  "below-article": {
    label: "Below Article Ad",
    minHeight: "250px",
    maxWidth: "100%",
  },
};

export default function AdPlaceholder({
  slot,
  className = "",
  label,
}: AdPlaceholderProps) {
  const config = slotConfig[slot];
  const displayLabel = label ?? config.label;

  // In production with real AdSense, replace this entire component
  // with your AdSense ad unit code inside an <ins> tag.
  // Example:
  // <ins className="adsbygoogle"
  //   style={{ display: "block" }}
  //   data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
  //   data-ad-slot="XXXXXXXXXX"
  //   data-ad-format="auto"
  //   data-full-width-responsive="true" />

  return (
    <div
      className={`ad-placeholder ${className}`}
      style={{
        minHeight: config.minHeight,
        maxWidth: config.maxWidth,
        margin: "0 auto",
      }}
      aria-label={`Advertisement placeholder: ${displayLabel}`}
      role="complementary"
    >
      <div className="flex flex-col items-center justify-center gap-1 opacity-50">
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
          />
        </svg>
        <span className="text-[10px] uppercase tracking-widest">{displayLabel}</span>
        <span className="text-[9px]">Ad placement – configure in AdSense</span>
      </div>
    </div>
  );
}
