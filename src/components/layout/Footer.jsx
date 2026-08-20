import Link from "next/link";
import Logo from "@/assets/icons/logo.svg";
import GlobalSearchIcon from "@/assets/icons/global-search.svg";
import MedalStarIcon from "@/assets/icons/medal-star.svg";
import InstaIcon from "@/assets/icons/instagram.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import ArrowIcon from "@/assets/icons/arrow-outline.svg";

// hrefs mirror the routes used in Navbar's `navLinks` (src/data/nav-links.js)
// so these labels navigate to the same pages as the header nav.
// TODO: replace "#" placeholders once a real page/section exists for that link.
const FOOTER_COLUMNS = [
  {
    title: "Platform",
    Icon: GlobalSearchIcon,
    links: [
      { label: "How it works", href: "#" },
      { label: "AI Features", href: "#" },
      { label: "ProDoo Apps", href: "/prodoo-apps" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "FAQ", href: "#" },
      { label: "Latest Articles", href: "#" },
      { label: "A Short Intro Video", href: "#" },
    ],
  },
  {
    title: "Company",
    Icon: MedalStarIcon,
    links: [
      { label: "About us", href: "/about" },
      { label: "Contact us", href: "/contact-us" },
      { label: "Language", href: null },
    ],
  },
];

// TODO: swap "#" for the real profile URLs once they're available.
const SOCIAL_LINKS = [
  { Icon: InstaIcon, label: "Instagram", href: "#" },
  { Icon: LinkedinIcon, label: "LinkedIn", href: "#" },
  { Icon: FacebookIcon, label: "Facebook", href: "#" },
  { Icon: TwitterIcon, label: "Twitter", href: "#" },
];

function FooterLink({ href, children }) {
  // Items without an href (e.g. a language switcher) aren't a real page,
  // so they render as a button instead of an anchor.
  const Tag = href ? Link : "button";
  const tagProps = href ? { href } : { type: "button" };

  return (
    <li className="flex items-center text-sm font-normal">
      <Tag
        {...tagProps}
        className="group flex items-center bg-transparent border-0 p-0 cursor-pointer text-muted-foreground hover:text-primary transition-colors duration-300"
      >
        <span className="w-1.5 h-1.5 bg-[#F4F2FE] group-hover:bg-primary rounded-full inline-block mr-2 shrink-0 transition-colors duration-300"></span>
        {children}
      </Tag>
    </li>
  );
}

function FooterColumn({ title, Icon, links }) {
  return (
    <div className="flex flex-col w-full max-w-35 gap-6">
      <div className="flex gap-3 items-center">
        <span
          aria-hidden="true"
          className="flex justify-center items-center w-8 h-8 bg-[#F4F2FE] rounded-lg"
        >
          <Icon />
        </span>
        <h2>{title}</h2>
      </div>
      <ul className="flex flex-col gap-2">
        {links.map(({ label, href }) => (
          <FooterLink key={label} href={href}>
            {label}
          </FooterLink>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative flex flex-col w-full items-center overflow-hidden border-t border-[#EAE5FC] py-16">
      <div className="flex w-full gap-27.25 max-w-287">
        <div className="flex flex-col gap-6 w-full max-w-86.5">
          <Link href="/" aria-label="Prodoo home">
            <Logo role="img" aria-label="Prodoo" />
          </Link>
          <p className="text-[16px] font-normal text-muted-foreground leading-8">
            The modern platform connecting exceptional freelancers with
            outstanding opportunities, with zero fee and maximum success.
          </p>
        </div>

        <nav aria-label="Footer" className="contents">
          {FOOTER_COLUMNS.map((column) => (
            <FooterColumn key={column.title} {...column} />
          ))}
        </nav>

        <nav aria-label="Social media" className="flex flex-col gap-2">
          {SOCIAL_LINKS.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group flex justify-between pr-2 items-center border border-[#EAE5FC] rounded-xl w-58 hover:border-primary transition-all duration-300"
            >
              <div className="flex gap-3 items-center">
                <span
                  aria-hidden="true"
                  className="w-11 h-11 flex justify-center items-center shrink-0 rounded-xl bg-[#EAE5FC] m-0.5 text-foreground group-hover:text-primary transition-all duration-300"
                >
                  <Icon />
                </span>
                <p className="text-xs font-medium leading-4">{label}</p>
              </div>
              <ArrowIcon
                aria-hidden="true"
                className="rotate-45 h-4.5 text-muted-foreground group-hover:text-primary transition-all duration-300"
              />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
