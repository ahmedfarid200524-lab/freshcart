import type { ReactNode } from "react";

type Feature = {
  title: string;
  text: string;
  icon: ReactNode;
  iconClass: string; // background + text color of the icon bubble
};

const features: Feature[] = [
  {
    title: "Free Shipping",
    text: "On orders over 500 EGP",
    iconClass: "bg-blue-50 text-blue-500",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M3 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2.6a2 2 0 0 1 1.6.8l2.2 2.9c.4.5.6 1.1.6 1.7V16a2 2 0 0 1-2 2h-.1a3 3 0 0 1-5.8 0H10.9a3 3 0 0 1-5.8 0H5a2 2 0 0 1-2-2V5Zm14 4v3h4l-1.7-2.2a.5.5 0 0 0-.4-.2H17ZM8 17.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
      </svg>
    ),
  },
  {
    title: "Secure Payment",
    text: "100% secure transactions",
    iconClass: "bg-emerald-50 text-emerald-500",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Zm0 2.1 6 2.2V11c0 3.9-2.5 7.4-6 8.9V4.1Z" />
      </svg>
    ),
  },
  {
    title: "Easy Returns",
    text: "14-day return policy",
    iconClass: "bg-orange-50 text-orange-500",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 12a8 8 0 1 0 2.6-5.9" />
        <path d="M4 3.5v4.6h4.6" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    text: "Dedicated support team",
    iconClass: "bg-purple-50 text-purple-500",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M12 2a8 8 0 0 0-8 8v5a3 3 0 0 0 3 3h1v-7H6v-1a6 6 0 1 1 12 0v1h-2v7h1.2A3 3 0 0 1 14 20h-2a1 1 0 1 0 0 2h2a5 5 0 0 0 4.9-4H17a3 3 0 0 0 3-3v-5a8 8 0 0 0-8-8Z" />
      </svg>
    ),
  },
];

export default function FeaturesStrip() {
  return (
    <section className="bg-gray-50 py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${f.iconClass}`}
            >
              {f.icon}
            </div>
            <div>
              <h3 className="text-[15px] font-semibold leading-tight text-gray-900">
                {f.title}
              </h3>
              <p className="mt-0.5 text-[13px] text-gray-500">{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}