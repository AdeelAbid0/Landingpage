"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navLinks } from "@/data/nav-links";
import Logo from "@/assets/icons/logo.svg";
import Button from "@/shared/ui/Button";
import MenuIcon from "@/assets/icons/menu-icon.svg";
import AddIcon from "@/assets/icons/add.svg";
import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const HIDDEN_NAVBAR_ROUTES = ["/login", "/signup", "/forgot-password"];

  const [renderedPathname, setRenderedPathname] = useState(pathname);
  if (pathname !== renderedPathname) {
    setRenderedPathname(pathname);
    setShowMenu(false);
  }

  if (HIDDEN_NAVBAR_ROUTES.includes(pathname)) {
    return null;
  }

  return (
    <header className="relative flex w-full justify-center shrink-0 border-b border-[#EAE5FC]">
      <nav
        aria-label="Primary"
        className="flex w-full items-center justify-between gap-4 px-4 md:px-16 py-3 md:py-5 h-18 bg-white max-w-360"
      >
        <Link href="/" aria-label="Prodoo home">
          <Logo
            className="h-6! w-20! md:h-11! md:w-34!"
            role="img"
            aria-label="Prodoo"
          />
        </Link>
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
        <button
          type="button"
          aria-label={
            showMenu ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={showMenu}
          onClick={() => setShowMenu(!showMenu)}
          className={`md:hidden h-7 w-7 flex items-center justify-center rounded-full cursor-pointer ${showMenu ? "bg-danger" : "bg-primary"}`}
        >
          {showMenu ? (
            <AddIcon className="h-3.5 w-3.5 text-white" />
          ) : (
            <MenuIcon className="h-auto w-3" />
          )}
        </button>
        <div className="hidden md:flex items-center gap-2">
          <Button
            type="primary"
            size="small"
            className="w-27.5! rounded-xl!"
            label={"Get Started"}
            onClick={() => router.push("/signup")}
          />

          <Button
            type="outline"
            size="small"
            className="w-27.5! rounded-xl!"
            label={"Login"}
            onClick={() => router.push("/login")}
          />
        </div>
      </nav>
      {showMenu && (
        <>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setShowMenu(false)}
            className="fixed inset-0 top-15 z-10 bg-black/20 backdrop-blur-[2px] md:hidden"
          />
          <div className="absolute left-1/2 top-[calc(100%+10px)] z-30 flex w-[calc(100%-20px)] max-w-85.75 -translate-x-1/2 flex-col rounded-[20px] bg-white p-3 shadow-[0_16px_35px_rgba(79,69,150,0.2)] md:hidden">
            <ul className="flex flex-col text-md gap-2 font-medium text-foreground">
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <li
                    key={href}
                    className="flex min-h-8 items-center px-3 py-2.5"
                  >
                    <Link
                      href={href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setShowMenu(false)}
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
            <div className="mt-6 flex flex-col gap-2">
              <Button
                type="primary"
                size="small"
                className="w-full! h-10! rounded-xl!"
                label="Get Started"
                onClick={() => router.push("/signup")}
              />
              <Button
                type="outline"
                size="small"
                className="w-full! h-10! rounded-xl!"
                label="Log In"
                onClick={() => router.push("/login")}
              />
            </div>
          </div>
        </>
      )}
    </header>
  );
}
