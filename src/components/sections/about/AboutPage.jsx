"use client";

// TODO: swap this static data for useSystemLabel() once the About page
// design is finalized — API URL stays in @/api/apiUrl and the hook stays
// in @/api/hooks/useSystemLabel, just not wired up yet.
const staticData = {
  title: "About Us",
  description: "Welcome to our about page!",
};

export default function AboutPage() {
  const { title, description } = staticData;

  return (
    <main>
      <h1>{title}</h1>
      <p>{description}</p>
    </main>
  );
}
