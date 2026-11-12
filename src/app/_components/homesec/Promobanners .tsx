"use client"

import { useEffect, useRef, useState } from "react";

type Promo = {
  badge: string;
  badgeIcon: string;
  title: string;
  text: string;
  discount: string;
  code: string;
  cta: string;
  href: string;
  gradient: string; // card background gradient
  ctaText: string; // button text color
  from: string; // hidden (pre-animation) position: slides in from this side
  delay: string; // stagger
};

const promos: Promo[] = [
  {
    badge: "Deal of the Day",
    badgeIcon: "🔥",
    title: "Fresh Organic Fruits",
    text: "Get up to 40% off on selected organic fruits",
    discount: "40% OFF",
    code: "ORGANIC40",
    cta: "Shop Now",
    href: "/products",
    gradient: "bg-gradient-to-br from-emerald-500 to-emerald-700",
    ctaText: "text-emerald-600",
    from: "-translate-x-32", // comes from the left
    delay: "delay-0",
  },
  {
    badge: "New Arrivals",
    badgeIcon: "✨",
    title: "Exotic Vegetables",
    text: "Discover our latest collection of premium vegetables",
    discount: "25% OFF",
    code: "FRESH25",
    cta: "Explore Now",
    href: "/products",
    gradient: "bg-gradient-to-br from-orange-500 via-red-500 to-rose-500",
    ctaText: "text-orange-600",
    from: "translate-x-32", // comes from the right
    delay: "delay-150",
  },
];

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

// Flips to true once the element scrolls into view (and stays true)
function useInView<T extends Element>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function PromoBanners() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    // overflow-x-clip stops the off-screen cards from causing a horizontal scrollbar
    <div className="overflow-x-clip">
      <section
        ref={ref}
        className="gap-10 grid  grid-cols-1  md:grid-cols-2  md:p-30 md:pt-4 md:pb-4 p-8 pt-4 pb-4"
      >
        {promos.map((p) => (
          <article
            key={p.title}
            className={`relative overflow-hidden rounded-xl p-8 text-white transition-all duration-700 ease-out motion-reduce:transition-none ${p.delay} ${p.gradient} ${
              inView ? "translate-x-0 opacity-100" : `${p.from} opacity-0`
            }`}
          >
            {/* decorative circles */}
            <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10" />
            <span className="pointer-events-none absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-white/10" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                <span aria-hidden="true">{p.badgeIcon}</span>
                {p.badge}
              </span>

              <h2 className="mt-3 text-3xl font-bold leading-tight">{p.title}</h2>
              <p className="mt-1 text-base text-white/90">{p.text}</p>

              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-3xl font-bold">{p.discount}</span>
                <span className="text-sm text-white/90">
                  Use code: <strong className="font-bold text-white">{p.code}</strong>
                </span>
              </div>

              <a
                href={p.href}
                className={`mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold shadow-sm transition-transform hover:scale-105 ${p.ctaText}`}
              >
                {p.cta}
                <ArrowRight />
              </a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}