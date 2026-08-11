import Link from "next/link";

// Home page uses the default title/description from the root layout
// (`src/app/layout.js`), which is already Prodoo's primary target title —
// no per-page `metadata` override needed here.

export default function Home() {
  return (
    <main>
      <h1>Prodoo: Global Freelance Hub</h1>
      <p>
        Connect with top remote opportunities worldwide. Hire skilled
        freelancers or find freelance jobs in writing, design, development,
        marketing, and virtual assistance.
      </p>
      <nav aria-label="Primary">
        <Link href="/about">About Us</Link>
        {" | "}
        <Link href="/contact-us">Contact Us</Link>
      </nav>
    </main>
  );
}
