"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/nav-links";
import Logo from "@/assets/icons/logo.svg";
import GlobalSearchIcon from "@/assets/icons/global-search.svg";
import InstaIcon from "@/assets/icons/instagram.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import ArrowIcon from "@/assets/icons/arrow-outline.svg";

const FOOTER_COLUMNS = [
  {
    title: "Platform",
    Icon: GlobalSearchIcon,
    links: navLinks,
  },
];

const SOCIAL_LINKS = [
  {
    Icon: InstaIcon,
    label: "Instagram",
    href: "https://www.instagram.com/prodoo_insta?igsh=MThqdjUyaGJicWp6bg%3D%3D",
  },
  {
    Icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/prodoofreelancer",
  },
  {
    Icon: FacebookIcon,
    label: "Facebook",
    href: "https://www.facebook.com/Prodoofacebook",
  },
  { Icon: TwitterIcon, label: "Twitter", href: "#" },
];

function FooterLink({ href, children }) {
  const pathname = usePathname();
  const isActive = href && href !== "#" && pathname === href;
  const Tag = href ? Link : "button";
  const tagProps = href ? { href } : { type: "button" };

  return (
    <li className="flex items-center text-sm font-normal">
      <Tag
        {...tagProps}
        aria-current={isActive ? "page" : undefined}
        className={`group flex items-center bg-transparent border-0 p-0 cursor-pointer hover:text-primary transition-colors duration-300 ${
          isActive ? "text-primary" : "text-muted-foreground"
        }`}
      >
        <span
          className={`w-1.5 h-1.5 rounded-full inline-block mr-2 shrink-0 transition-colors duration-300 group-hover:bg-primary ${
            isActive ? "bg-primary" : "bg-[#F4F2FE]"
          }`}
        ></span>
        {children}
      </Tag>
    </li>
  );
}

function FooterColumn({ title, Icon, links }) {
  return (
    <div className="flex flex-col w-full gap-3 md:gap-6">
      <div className="flex gap-3 items-center">
        <span
          aria-hidden="true"
          className="flex justify-center items-center w-8 h-8 bg-[#F4F2FE] rounded-lg"
        >
          <Icon />
        </span>
        <h2>{title}</h2>
      </div>
      <ul className="flex flex-col md:flex-row flex-nowrap items-start md:items-center gap-x-6 gap-y-2">
        {links.map(({ label, href }) => (
          <FooterLink key={label} href={href}>
            {label}
          </FooterLink>
        ))}
      </ul>
    </div>
  );
}

const HIDDEN_FOOTER_ROUTES = [
  "/browse-jobs",
  "/post-job",
  "/login",
  "/signup",
  "/forgot-password",
];

export default function Footer() {
  const pathname = usePathname();

  if (HIDDEN_FOOTER_ROUTES.includes(pathname)) {
    return null;
  }

  return (
    <footer className="relative flex flex-col w-full items-center overflow-hidden border-t border-[#EAE5FC] pt-8 md:pt-16  shrink-0">
      <div className="flex flex-col md:flex-row w-full gap-4 md:gap-27.25 px-5 md:px-0 max-w-287">
        <div className="flex flex-col gap-3 md:gap-6 w-full max-w-86.5">
          <Link href="/" aria-label="Prodoo home">
            <Logo
              role="img"
              aria-label="Prodoo"
              className="h-9 md:h-auto w-max"
            />
          </Link>
          <p className="text-xs md:text-[16px] font-normal text-muted-foreground leading-4.5 md:leading-8">
            The modern platform connecting exceptional freelancers with
            outstanding opportunities, with zero fee and maximum success.
          </p>
        </div>

        <div className="flex flex-col w-full max-w-170 gap-8">
          <nav aria-label="Footer">
            {FOOTER_COLUMNS.map((column) => (
              <FooterColumn key={column.title} {...column} />
            ))}
          </nav>

          <div className="flex flex-col w-full gap-3 md:gap-6">
            <div className="flex gap-3 items-center">
              <span
                aria-hidden="true"
                className="flex justify-center items-center w-8 h-8 bg-[#F4F2FE] rounded-lg"
              >
                <GlobalSearchIcon />
              </span>
              <h2>Social media</h2>
            </div>

            <nav
              aria-label="Social media"
              className="flex flex-col md:flex-row flex-wrap gap-2 w-full"
            >
              {SOCIAL_LINKS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex justify-between pr-2 items-center border border-[#EAE5FC] bg-[#f4f2fe] md:bg-transparent rounded-xl w-full md:max-w-41 shrink-0 hover:border-primary transition-all duration-300"
                >
                  <div className="flex gap-3 items-center">
                    <span
                      aria-hidden="true"
                      className="w-11 h-11 flex justify-center items-center shrink-0 rounded-xl bg-white md:bg-[#EAE5FC] m-0.5 text-foreground group-hover:text-primary transition-all duration-300"
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
        </div>
      </div>
      <div className="flex justify-center w-full bg-primary mt-8 md:mt-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full h-20.5 md:h-17.75 max-w-360 px-9 md:px-16 py-4.5 md:py-0">
          <div>
            <h5 className="text-white font-semibold text-sm">
              © {new Date().getFullYear()} ProDoo Inc.
            </h5>
          </div>
          <div className="flex items-center gap-10 text-white font-semibold text-sm underline">
            <p className="cursor-pointer">Terms of Service</p>
            <p className="cursor-pointer">Privacy Policy</p>
            <p className="cursor-pointer">Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
