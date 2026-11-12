"use client"
import { useState } from "react";
import "./Newsletter.css";

const Icon = ({ children, size = 16, ...p }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...p}
  >
    {children}
  </svg>
);

const MailIcon = () => (
  <Icon size={22}>
    <rect x="3" y="5" width="18" height="14" rx="3" fill="currentColor" stroke="none" />
    <path d="M4 8l8 5 8-5" stroke="#10b981" />
  </Icon>
);
const LeafIcon = () => (
  <Icon size={14}>
    <path d="M5 19c0-9 5-14 15-14 0 10-5 15-14 15" fill="currentColor" />
    <path d="M5 19l7-7" />
  </Icon>
);
const TruckIcon = () => (
  <Icon size={14}>
    <path d="M2 6h11v10H2zM13 9h4l4 4v3h-8z" fill="currentColor" />
    <circle cx="7" cy="18" r="2" fill="#fff" />
    <circle cx="17" cy="18" r="2" fill="#fff" />
  </Icon>
);
const TagIcon = () => (
  <Icon size={14}>
    <path d="M3 12V4h8l10 10-8 8z" fill="currentColor" />
    <circle cx="7.5" cy="8.5" r="1.3" fill="#fff" stroke="none" />
  </Icon>
);
const ArrowIcon = () => (
  <Icon size={18}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);
const AppleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16.4 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.15-2.8.85-3.5.85-.73 0-1.85-.83-3.05-.8-1.57.02-3.02.91-3.83 2.3-1.63 2.83-.42 7.03 1.17 9.33.78 1.12 1.7 2.38 2.92 2.33 1.17-.05 1.61-.76 3.03-.76 1.4 0 1.82.76 3.05.73 1.26-.02 2.06-1.14 2.83-2.27.89-1.3 1.26-2.56 1.28-2.62-.03-.01-2.45-.94-2.47-3.75zM14.1 5.7c.65-.79 1.09-1.89.97-2.98-.94.04-2.07.63-2.74 1.41-.6.7-1.13 1.82-.99 2.89 1.05.08 2.11-.53 2.76-1.32z" />
  </svg>
);
const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 3l15 9-15 9z" />
    <path d="M5 3l9 9-9 9M14 12l3.5-3.5M14 12l3.5 3.5" />
  </svg>
);

const perks = [
  { label: "Fresh Picks Weekly", icon: <LeafIcon /> },
  { label: "Free Delivery Codes", icon: <TruckIcon /> },
  { label: "Members-Only Deals", icon: <TagIcon /> },
];

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // TODO: send `email` to your API
    setDone(true);
    setEmail("");
  };

  return (
    <section className="nl-card mt-4 mb-4">
      <div className="nl-left">
        <div className="nl-head">
          <div className="nl-icon">
            <MailIcon />
          </div>
          <div>
            <div className="nl-label">NEWSLETTER</div>
            <div className="nl-sub">50,000+ subscribers</div>
          </div>
        </div>

        <h2 className="nl-title">
          Get the Freshest Updates <span>Delivered Free</span>
        </h2>
        <p className="nl-desc">Weekly recipes, seasonal offers &amp; exclusive member perks.</p>

        <div className="nl-chips">
          {perks.map((p) => (
            <span className="nl-chip" key={p.label}>
              <span className="nl-chip-icon">{p.icon}</span>
              {p.label}
            </span>
          ))}
        </div>

        <form className="nl-form" onSubmit={onSubmit}>
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
          />
          <button type="submit">
            {done ? "Subscribed ✓" : <>Subscribe <ArrowIcon /></>}
          </button>
        </form>
        <p className="nl-note">✨ Unsubscribe anytime. No spam, ever.</p>
      </div>

      <div className="nl-divider" />

      <aside className="nl-app">
        <span className="nl-badge">📱 MOBILE APP</span>
        <h3>Shop Faster on Our App</h3>
        <p>Get app-exclusive deals &amp; 15% off your first order.</p>

        <a href="#" className="nl-store">
          <AppleIcon />
          <span>
            <small>DOWNLOAD ON</small>
            <strong>App Store</strong>
          </span>
        </a>
        <a href="#" className="nl-store">
          <PlayIcon />
          <span>
            <small>GET IT ON</small>
            <strong>Google Play</strong>
          </span>
        </a>

        <div className="nl-rating">
          <span className="stars">★★★★★</span> 4.9 · 100K+ downloads
        </div>
      </aside>
    </section>
  );
}