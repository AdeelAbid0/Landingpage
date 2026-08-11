import HomePage from "@/components/sections/home/HomePage";

// This route file stays a thin wrapper: page content lives in
// src/components/sections/home/HomePage.js, and metadata (title/
// description/etc.) for "/" comes from the root layout's defaults in
// src/app/layout.js.

export default function Page() {
  return <HomePage />;
}
