"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function WhyProdoo() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      ref={elementRef}
      aria-labelledby="why-prodoo-apps-heading"
      className={`relative flex flex-col w-full items-center overflow-hidden border-t border-[#EAE5FC] py-16 animate-on-scroll ${
        isVisible ? "animate-visible" : ""
      }`}
    >
      <div className="flex flex-col gap-4 text-center items-center justify-center w-full max-w-300">
        <h2
          id="why-prodoo-apps-heading"
          className="text-foreground text-[40px] font-semibold leading-13"
        >
          Why Choose ProDoo Apps
        </h2>
        <p className="font-normal text-muted-foreground text-[16px] leading-6">
          ProDoo Apps merge AI innovation with productivity tools for
          freelancers, recruiters, and businesses. From hiring with Phillip AI
          to project tracking with Tictell Time Tracker, each app enhances
          efficiency and simplifies work. ProDoo Apps offer solutions for hiring
          freelancers, managing remote teams, and advancing careers.
        </p>
      </div>
    </section>
  );
}
