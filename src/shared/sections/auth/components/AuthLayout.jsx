"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/icons/logo.svg";
import ArrowLeft from "@/assets/icons/arrow-left.svg";

export default function AuthLayout({ children, onBack, showBackArrow = true }) {
  return (
    <div className="relative flex w-full min-h-screen flex-col gap-3 p-3 md:flex-row bg-[#EAE5FC]">
      <Image
        src="/images/auth-background.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />

      <div className="relative flex w-full items-start justify-center rounded-2xl border-[1.5px] border-[#FFFFFF] bg-white pb-3 pt-6.5 lg:w-[44%] lg:items-center lg:pt-0">
        {showBackArrow && (
          <button
            type="button"
            onClick={onBack}
            aria-label="Go back"
            className="absolute left-6 top-6 hidden cursor-pointer md:block"
          >
            <ArrowLeft />
          </button>
        )}

        <div className="flex w-full flex-col px-3 text-center lg:w-[77%] lg:px-0">
          {children}
        </div>
      </div>

      <div className="relative flex h-14 w-full flex-row items-center justify-between overflow-hidden md:h-auto md:w-[56%] md:flex-col md:items-start md:justify-start md:rounded-2xl md:border-[1.5px] md:border-[#FFFFFF] bg-white">
        <Image
          src="/images/auth-image.webp"
          alt=""
          fill
          sizes="(min-width: 768px) 56vw, 0px"
          className="hidden object-cover md:block"
        />

        <Link
          href="/"
          aria-label="Prodoo home"
          className="relative z-10 md:ml-8 md:mt-8"
        >
          <Logo className="h-11! w-24!" role="img" aria-label="Prodoo" />
        </Link>

        <Link
          href="/"
          className="relative z-10 block text-sm font-medium text-primary md:hidden"
        >
          Go back
        </Link>
      </div>
    </div>
  );
}
