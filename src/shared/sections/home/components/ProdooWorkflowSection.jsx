"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ProdooWorkflowSection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      ref={elementRef}
      className={`relative flex flex-col w-full items-center overflow-hidden border-t border-[#EAE5FC] py-16 animate-on-scroll ${
        isVisible ? "animate-visible" : ""
      }`}
    >
      <div className="flex flex-col gap-4 text-center items-center justify-center w-full max-w-188">
        <div className="flex items-center gap-4 text-foreground text-[40px] font-semibold leading-13">
          <h2>How ProDoo Makes Work Flow</h2>
        </div>
        <p className="font-normal text-muted-foreground text-[16px] leading-6">
          Discover how recruiters and iPros connect, collaborate, and grow
          through AI driven tools, smart contracts, and real time productivity
          insights, all in one seamless platform.
        </p>
      </div>
      <div className="relative mt-20">
        <Image
          src={"/images/video-bg.webp"}
          alt="ProDoo workflow preview"
          width={1320}
          height={650}
          className="z-0"
        />
        <div className="absolute z-10 flex justify-center items-center border-3 inset-0 m-auto mt-0 border-[#FFFFFF] shadow-2xl  w-full max-w-250  h-141 rounded-[40px]"></div>
      </div>
    </section>
  );
}
