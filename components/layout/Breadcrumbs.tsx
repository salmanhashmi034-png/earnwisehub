import Link from "next/link";
import type { BreadcrumbItem } from "@/types";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-sm ${className}`}
    >
      <ol
        className="flex flex-wrap items-center gap-1.5"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li
              key={item.href}
              className="flex items-center gap-1.5"
              itemScope
              itemProp="itemListElement"
              itemType="https://schema.org/ListItem"
            >
              {isLast ? (
                <span
                  itemProp="name"
                  className="text-gray-500 truncate max-w-[200px]"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <>
                  <Link
                    href={item.href}
                    itemProp="item"
                    className="text-brand-600 hover:text-brand-700 hover:underline font-medium"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                  <svg
                    className="w-3.5 h-3.5 text-gray-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </>
              )}
              <meta itemProp="position" content={String(i + 1)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
