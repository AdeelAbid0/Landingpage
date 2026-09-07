"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const THEME_TEXT = {
  primary: "text-primary",
  company: "text-company",
};

const ROW_CLASSES =
  "flex justify-center items-center w-full gap-31.5 max-w-350";

export default function AppShowcaseSection({
  id,
  sectionClassName,
  wrapperClassName,
  imagePosition,
  theme,
  image,
  title,
  description,
  children,
}) {
  const headingId = `${id}-heading`;
  const { elementRef, isVisible } = useScrollAnimation();

  const imageBlock = (
    <div className="flex w-full max-w-121.5">
      <Image src={image.src} alt={image.alt} width={486} height={630} />
    </div>
  );

  const contentBlock = (
    <div className="flex flex-col w-full max-w-147">
      <div className="flex flex-col gap-3 w-full">
        <h2
          id={headingId}
          className={`${THEME_TEXT[theme]} font-semibold text-[32px]`}
        >
          {title}
        </h2>
        <p className="text-foreground text-[16px] leading-6">{description}</p>
      </div>
      {children}
    </div>
  );

  const row = (
    <div className={ROW_CLASSES}>
      {imagePosition === "left" ? (
        <>
          {imageBlock}
          {contentBlock}
        </>
      ) : (
        <>
          {contentBlock}
          {imageBlock}
        </>
      )}
    </div>
  );

  return (
    <section
      ref={elementRef}
      id={id}
      aria-labelledby={headingId}
      className={`${sectionClassName} animate-on-scroll ${
        isVisible ? "animate-visible" : ""
      }`}
    >
      {wrapperClassName ? <div className={wrapperClassName}>{row}</div> : row}
    </section>
  );
}
