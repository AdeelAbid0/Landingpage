"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function WhyProdoo() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      ref={elementRef}
      aria-labelledby="why-contact-prodoo-heading"
      className={`relative flex flex-col w-full items-center overflow-hidden mt-16 border-t border-[#EAE5FC] py-16 animate-on-scroll ${
        isVisible ? "animate-visible" : ""
      }`}
    >
      <div className="flex flex-col gap-4 text-center items-center justify-center w-full max-w-180">
        <h2
          id="why-contact-prodoo-heading"
          className="text-foreground text-[40px] font-semibold leading-13"
        >
          Why Contact ProDoo?
        </h2>
        <p className="font-normal text-muted-foreground text-[16px] leading-6">
          We are dedicated to providing fast, reliable support to ensure your
          hiring and freelancing experience is completely seamless.
        </p>
      </div>
    </section>
  );
}
