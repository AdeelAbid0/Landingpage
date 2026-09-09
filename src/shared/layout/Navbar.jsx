"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/nav-links";
import Logo from "@/assets/icons/logo.svg";
import Button from "@/shared/ui/Button";
import MenuIcon from "@/assets/icons/menu-icon.svg";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="flex w-full justify-center shrink-0 border-b border-[#EAE5FC]">
      <nav
        aria-label="Primary"
        className="flex w-full items-center justify-between gap-4 px-4 md:px-16 py-3 md:py-5 bg-white max-w-360"
      >
        <div className="flex items-center gap-4">
          <span className="flex md:hidden rounded-full! bg-primary! cursor-pointer h-7! w-7! items-center! justify-center! ">
            <MenuIcon className="h-6! w-6!" />
          </span>
          <Link href="/" aria-label="Prodoo home">
            <Logo
              className="h-6.5 md:h-11 w-20 md:w-34"
              role="img"
              aria-label="Prodoo"
            />
          </Link>
        </div>
        <ul className="hidden md:flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;

            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`hover:text-primary! transition-colors duration-200 ${
                    isActive ? "text-primary!" : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-2">
          <Button
            type="primary"
            size="small"
            className="w-27.5! rounded-xl!"
            label={"Get Started"}
          />

          <Button
            type="outline"
            size="small"
            className="w-27.5! rounded-xl!"
            label={"Login"}
          />
        </div>
      </nav>
    </header>
  );
}
