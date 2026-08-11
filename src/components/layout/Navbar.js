import Link from "next/link";
import { navLinks } from "@/data/nav-links";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4"
      >
        <Link href="/" className="text-lg font-bold text-gray-900">
          Prodoo
        </Link>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-gray-600">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="hover:text-gray-900">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
