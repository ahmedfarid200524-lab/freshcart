"use client";

import { useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";

type RatingCounts = Record<1 | 2 | 3 | 4 | 5, number>;

// the API sends objects like { _id, name, slug }, so accept those as well as plain strings
type Named = string | { name: string };

type ProductTabsProps = {
  description?: string;
  category?: Named;
  subcategory?: Named | Named[];
  brand?: Named;
  sold?: number;
  ratingsAverage?: number; // data.ratingsAverage
  ratingsQuantity?: number; // data.ratingsQuantity
  reviews?: { rating: number }[]; // optional: lets us draw the 1-5 star bars
};

const toName = (v?: Named | Named[]): string => {
  if (!v) return "-";
  if (Array.isArray(v)) return v.map(toName).join(", ") || "-";
  return typeof v === "string" ? v : v.name ?? "-";
};

/* ---------- icons ---------- */

const iconProps = {
  viewBox: "0 0 24 24",
  className: "h-4 w-4",
  "aria-hidden": true,
} as const;

const BoxIcon = () => (
  <svg {...iconProps} fill="currentColor">
    <path d="M5 3h14a2 2 0 0 1 2 2v3H3V5a2 2 0 0 1 2-2Zm-2 7h18v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9Z" />
  </svg>
);

const StarIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z" />
  </svg>
);

const TruckIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M3 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2.6a2 2 0 0 1 1.6.8l2.2 2.9c.4.5.6 1.1.6 1.7V16a2 2 0 0 1-2 2h-.1a3 3 0 0 1-5.8 0H10.9a3 3 0 0 1-5.8 0H5a2 2 0 0 1-2-2V5Zm14 4v3h4l-1.7-2.2a.5.5 0 0 0-.4-.2H17ZM8 17.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
  </svg>
);

const ReturnIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12a8 8 0 1 0 2.6-5.9" />
    <path d="M4 3.5v4.6h4.6" />
  </svg>
);

const ShieldIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Zm0 2.1 6 2.2V11c0 3.9-2.5 7.4-6 8.9V4.1Z" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

/* ---------- small building blocks ---------- */

// Stars that can be partially filled (e.g. 4.3 of 5)
function StarRating({ value, size = "h-5 w-5" }: { value: number; size?: string }) {
  const stars = [0, 1, 2, 3, 4];
  const row = (color: string) => (
    <div className={`flex gap-0.5 ${color}`}>
      {stars.map((s) => (
        <StarIcon key={s} className={`${size} shrink-0`} />
      ))}
    </div>
  );
  return (
    <div className="relative inline-block" role="img" aria-label={`${value.toFixed(1)} out of 5 stars`}>
      {row("text-gray-200")}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${(value / 5) * 100}%` }}>
        {row("text-amber-400")}
      </div>
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
          <span className="mt-0.5">
            <CheckIcon />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ---------- tab panels ---------- */

function DetailsPanel({
  description,
  category,
  subcategory,
  brand,
  sold,
}: { description: string; category: string; subcategory: string; brand: string; sold: number }) {
  const info: [string, string][] = [
    ["Category", category],
    ["Subcategory", subcategory],
    ["Brand", brand],
    ["Items Sold", `${sold}+ sold`],
  ];
  const features = [
    "Premium Quality Product",
    "100% Authentic Guarantee",
    "Fast & Secure Packaging",
    "Quality Tested",
  ];

  return (
    <>
      <h3 className="text-base font-semibold text-gray-900">About this Product</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{description}</p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-gray-50 p-4">
          <h4 className="font-semibold text-gray-900">Product Information</h4>
          <dl className="mt-3 space-y-2 text-sm">
            {info.map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4">
                <dt className="text-gray-500">{label}</dt>
                <dd className="text-right font-medium text-gray-900">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <h4 className="font-semibold text-gray-900">Key Features</h4>
          <div className="mt-3">
            <CheckList items={features} />
          </div>
        </div>
      </div>
    </>
  );
}

function ReviewsPanel({
  average,
  total,
  counts,
}: {
  average: number;
  total: number;
  counts: RatingCounts | null;
}) {
  const levels = [5, 4, 3, 2, 1] as const;
  const countsTotal = counts ? levels.reduce((sum, l) => sum + counts[l], 0) : 0;

  return (
    <div className="grid items-center gap-8 md:grid-cols-[220px_1fr]">
      {/* average */}
      <div className="flex flex-col items-center rounded-xl bg-gray-50 p-6 text-center">
        <span className="text-5xl font-bold text-gray-900">{average.toFixed(1)}</span>
        <div className="mt-2">
          <StarRating value={average} />
        </div>
        <span className="mt-2 text-sm text-gray-500">
          Based on {total} {total === 1 ? "review" : "reviews"}
        </span>
      </div>

      {/* distribution bars */}
      {counts && countsTotal > 0 ? (
        <div className="space-y-3">
          {levels.map((level) => {
            const percent = Math.round((counts[level] / countsTotal) * 100);
            return (
              <div key={level} className="flex items-center gap-3 text-sm">
                <span className="flex w-12 shrink-0 items-center gap-1 text-gray-600">
                  {level}
                  <StarIcon className="h-4 w-4 text-amber-400" />
                </span>
                <div
                  className="h-2.5 flex-1 overflow-hidden rounded-full bg-gray-100"
                  role="progressbar"
                  aria-valuenow={percent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${level} star reviews`}
                >
                  <div
                    className="h-full rounded-full bg-amber-400 transition-all duration-500"
                    style={{ width: `${percent}%` }}
                  />
                </div>
                <span className="w-10 shrink-0 text-right text-gray-500">{percent}%</span>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-sm text-gray-500">
          {total > 0
            ? "The star-by-star breakdown isn't available for this product."
            : "No reviews yet."}
        </p>
      )}
    </div>
  );
}

function ShippingPanel() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-xl bg-gray-50 p-5">
          <h3 className="flex items-center gap-2 font-semibold text-gray-900">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-500">
              <TruckIcon className="h-5 w-5" />
            </span>
            Shipping Information
          </h3>
          <div className="mt-4">
            <CheckList
              items={[
                "Free shipping on orders over $50",
                "Standard delivery: 3-5 business days",
                "Express delivery available (1-2 business days)",
                "Track your order in real-time",
              ]}
            />
          </div>
        </section>

        <section className="rounded-xl bg-gray-50 p-5">
          <h3 className="flex items-center gap-2 font-semibold text-gray-900">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-500">
              <ReturnIcon />
            </span>
            Returns Policy
          </h3>
          <div className="mt-4">
            <CheckList
              items={[
                "30-day hassle-free returns",
                "Full refund or exchange available",
                "Free return shipping on defective items",
                "Easy online return process",
              ]}
            />
          </div>
        </section>
      </div>

      <section className="flex items-start gap-4 rounded-xl border border-green-100 bg-green-50 p-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-green-600">
          <ShieldIcon />
        </span>
        <div>
          <h3 className="font-semibold text-gray-900">Buyer Protection Guarantee</h3>
          <p className="mt-1 text-sm leading-relaxed text-gray-600">
            Get a full refund if your order doesn&apos;t arrive or isn&apos;t as described. We
            ensure your shopping experience is safe and secure.
          </p>
        </div>
      </section>
    </div>
  );
}

/* ---------- main component ---------- */

export default function ProductTabs({
  description = "",
  category,
  subcategory,
  brand,
  sold = 0,
  ratingsAverage = 0,
  ratingsQuantity = 0,
  reviews,
}: ProductTabsProps) {
  const [active, setActive] = useState(0);

  // if a reviews list is passed, build the 1-5 star counts from it
  let counts: RatingCounts | null = null;
  if (reviews && reviews.length > 0) {
    counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    reviews.forEach((r) => {
      const star = Math.min(5, Math.max(1, Math.round(r.rating))) as 1 | 2 | 3 | 4 | 5;
      counts![star] += 1;
    });
  }
  const total = reviews && reviews.length > 0 ? reviews.length : ratingsQuantity;
  const average =
    reviews && reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : ratingsAverage;

  const tabs: { label: string; icon: ReactNode }[] = [
    { label: "Product Details", icon: <BoxIcon /> },
    { label: `Reviews (${total})`, icon: <StarIcon /> },
    { label: "Shipping & Returns", icon: <TruckIcon /> },
  ];

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") setActive((active + 1) % tabs.length);
    if (e.key === "ArrowLeft") setActive((active - 1 + tabs.length) % tabs.length);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
      {/* tab nav */}
      <div
        role="tablist"
        aria-label="Product information"
        onKeyDown={onKeyDown}
        className="flex overflow-x-auto border-b border-gray-200"
      >
        {tabs.map((tab, i) => {
          const isActive = i === active;
          return (
            <button
              key={tab.label}
              type="button"
              role="tab"
              id={`tab-${i}`}
              aria-selected={isActive}
              aria-controls={`panel-${i}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(i)}
              className={`-mb-px flex shrink-0 items-center gap-2 border-b-2 px-6 py-4 text-[15px] font-medium transition-colors ${
                isActive
                  ? "border-green-600 bg-green-50/60 text-green-600"
                  : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* panel */}
      <div
        role="tabpanel"
        id={`panel-${active}`}
        aria-labelledby={`tab-${active}`}
        className="p-6"
      >
        {active === 0 && (
          <DetailsPanel
            description={description}
            category={toName(category)}
            subcategory={toName(subcategory)}
            brand={toName(brand)}
            sold={sold}
          />
        )}
        {active === 1 && <ReviewsPanel average={average} total={total} counts={counts} />}
        {active === 2 && <ShippingPanel />}
      </div>
    </div>
  );
}