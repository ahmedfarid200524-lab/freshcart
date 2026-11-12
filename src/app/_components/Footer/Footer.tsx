import Link from "next/link";
import "./Footer.css";
import Image from "next/image";
import logo from "./../../../../public/images/logo.png"

const Svg = ({ size = 18, children, fill = "none", ...p }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
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

const TruckIcon = () => (
  <Svg fill="currentColor" stroke="none" size={22}>
    <path d="M2 5h12v11H2zM14 9h4l4 4v3h-8z" />
    <circle cx="7" cy="18" r="2.2" stroke="#e7fcf1" strokeWidth="1.5" />
    <circle cx="17.5" cy="18" r="2.2" stroke="#e7fcf1" strokeWidth="1.5" />
  </Svg>
);
const ReturnIcon = () => (
  <Svg size={24} strokeWidth="2.4">
    <path d="M4 12a8 8 0 1 0 3-6.2" />
    <path d="M4 3v5h5" />
  </Svg>
);
const ShieldIcon = () => (
  <Svg fill="currentColor" stroke="none" size={22}>
    <path d="M12 2l8 3v6c0 5-3.4 9.3-8 11-4.6-1.7-8-6-8-11V5z" />
    <path d="M12 6v12c3-1.4 5-4.4 5-7.5V7.4z" fill="#e7fcf1" />
  </Svg>
);
const HeadsetIcon = () => (
  <Svg size={22} strokeWidth="2.6">
    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
    <rect x="2.5" y="13" width="4" height="6" rx="1.5" fill="currentColor" />
    <rect x="17.5" y="13" width="4" height="6" rx="1.5" fill="currentColor" />
    <path d="M19.5 19c0 1.6-2 2.5-5 2.5" />
  </Svg>
);
const CartLogo = () => (
  <Svg size={30} stroke="#16a34a" strokeWidth="1.8">
    <path d="M2 3h3l2.5 12h11l2-8H6" />
    <path d="M8 9h12M8.5 12h10" />
    <circle cx="9" cy="19" r="1.4" />
    <circle cx="17" cy="19" r="1.4" />
  </Svg>
);
const PhoneIcon = () => (
  <Svg size={16} fill="currentColor" stroke="none">
    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.300.2 2.500.6 3.600.1.300 0 .700-.2 1z" />
  </Svg>
);
const MailIcon = () => (
  <Svg size={16} fill="currentColor" stroke="none">
    <path d="M3 5h18a1 1 0 0 1 1 1v.5l-10 6.200L2 6.500V6a1 1 0 0 1 1-1zM2 8.800l10 6.200 10-6.200V18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
  </Svg>
);
const PinIcon = () => (
  <Svg size={16} fill="currentColor" stroke="none">
    <path d="M12 2a7 7 0 0 0-7 7c0 5.200 7 13 7 13s7-7.800 7-13a7 7 0 0 0-7-7zm0 9.500A2.500 2.500 0 1 1 12 6.500a2.500 2.500 0 0 1 0 5z" />
  </Svg>
);
const FacebookIcon = () => (
  <Svg size={16} fill="currentColor" stroke="none">
    <path d="M14 8V6.200c0-.8.200-1.200 1.400-1.200H17V2h-2.500C11.500 2 10 3.700 10 6.100V8H7.500v3H10v11h4V11h2.800l.5-3z" />
  </Svg>
);
const TwitterIcon = () => (
  <Svg size={16} fill="currentColor" stroke="none">
    <path d="M22 5.900c-.7.300-1.500.500-2.400.600.900-.5 1.500-1.300 1.800-2.300-.8.500-1.700.8-2.600 1a4.100 4.100 0 0 0-7 3.700A11.600 11.600 0 0 1 3.400 4.700a4.100 4.100 0 0 0 1.300 5.500c-.7 0-1.300-.2-1.900-.5 0 2 1.400 3.700 3.300 4.100-.6.200-1.200.2-1.800.1.500 1.600 2 2.800 3.800 2.900A8.300 8.300 0 0 1 2 18.500 11.600 11.600 0 0 0 8.300 20.300c7.500 0 11.700-6.300 11.700-11.700v-.5c.800-.6 1.500-1.300 2-2.200z" />
  </Svg>
);
const InstagramIcon = () => (
  <Svg size={16} strokeWidth="1.8">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.500" cy="6.500" r="0.900" fill="currentColor" stroke="none" />
  </Svg>
);
const YoutubeIcon = () => (
  <Svg size={18} fill="currentColor" stroke="none">
    <path d="M21.600 7.200a2.500 2.500 0 0 0-1.800-1.800C18.200 5 12 5 12 5s-6.200 0-7.800.4A2.500 2.500 0 0 0 2.400 7.200C2 8.800 2 12 2 12s0 3.200.4 4.800a2.500 2.500 0 0 0 1.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.500 2.500 0 0 0 1.800-1.800C22 15.200 22 12 22 12s0-3.200-.4-4.800zM10 15V9l5.200 3z" />
  </Svg>
);
const CardIcon = () => (
  <Svg size={16} fill="currentColor" stroke="none">
    <path d="M3 5h18a1 1 0 0 1 1 1v2H2V6a1 1 0 0 1 1-1zM2 10h20v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm3 4v2h5v-2z" />
  </Svg>
);

const features = [
  { icon: <TruckIcon />, title: "Free Shipping", text: "On orders over 500 EGP" },
  { icon: <ReturnIcon />, title: "Easy Returns", text: "14-day return policy" },
  { icon: <ShieldIcon />, title: "Secure Payment", text: "100% secure checkout" },
  { icon: <HeadsetIcon />, title: "24/7 Support", text: "Contact us anytime" },
];

const columns = [
  { title: "Shop", links: ["All Products", "Categories", "Brands", "Electronics", "Men's Fashion", "Women's Fashion"] },
  { title: "Account", links: ["My Account", "Order History", "Wishlist", "Shopping Cart", "Sign In", "Create Account"] },
  { title: "Support", links: ["Contact Us", "Help Center", "Shipping Info", "Returns & Refunds", "Track Order"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] },
];

const socials = [
  { name: "Facebook", icon: <FacebookIcon /> },
  { name: "Twitter", icon: <TwitterIcon /> },
  { name: "Instagram", icon: <InstagramIcon /> },
  { name: "YouTube", icon: <YoutubeIcon /> },
];

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft-features">
        <div className="ft-wrap ft-features-grid">
          {features.map((f) => (
            <div className="ft-feature" key={f.title}>
              <span className="ft-feature-icon">{f.icon}</span>
              <div>
                <strong>{f.title}</strong>
                <span>{f.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ft-main">
        <div className="ft-wrap ft-grid">
          <div className="ft-brand">
           <Link
            href="/"
            
          >
            <Image src={logo} alt="" />
          </Link>
            <p className="ft-about">
              FreshCart is your one-stop destination for quality products. From fashion to electronics, we bring
              you the best brands at competitive prices with a seamless shopping experience.
            </p>
            <ul className="ft-contact">
              <li><PhoneIcon /> +1 (800) 123-4567</li>
              <li><MailIcon /> support@freshcart.com</li>
              <li><PinIcon /> 123 Commerce Street, New York, NY 10001</li>
            </ul>
            <div className="ft-social">
              {socials.map((s) => (
                <a href="#" key={s.name} aria-label={s.name}>{s.icon}</a>
              ))}
            </div>
          </div>

          {columns.map((c) => (
            <nav className="ft-col" key={c.title}>
              <h4>{c.title}</h4>
              <ul>
                {c.links.map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="ft-bottom">
          <div className="ft-wrap ft-bottom-row">
            <span>© 2026 FreshCart. All rights reserved.</span>
            <div className="ft-pay">
              {["Visa", "Mastercard", "PayPal"].map((p) => (
                <span key={p}><CardIcon /> {p}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}