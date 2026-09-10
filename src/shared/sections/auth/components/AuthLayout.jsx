"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/icons/logo.svg";

export default function AuthLayout({ children, currentStep, totalSteps }) {
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
        <div className="absolute left-6 right-6 top-6 hidden items-center justify-between md:flex">
          <Link href="/" aria-label="Prodoo home">
            <Logo className="h-11! w-auto!" role="img" aria-label="Prodoo" />
          </Link>

          {totalSteps > 0 && currentStep > 0 && (
            <div
              className="relative flex h-11 w-11 items-center justify-center rounded-full transition-[background] duration-300 ease-in-out"
              style={{
                background: `conic-gradient(var(--color-primary) 0% ${
                  (currentStep / totalSteps) * 100
                }%, #DCD8FC ${(currentStep / totalSteps) * 100}% 100%)`,
              }}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-semibold text-primary">
                {currentStep}
              </span>
            </div>
          )}
        </div>

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
      </div>
    </div>
  );
}
