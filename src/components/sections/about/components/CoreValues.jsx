"use client";

import { useState } from "react";
import Image from "next/image";
import SettingIcon from "@/assets/icons/setting-fill.svg";
import EyeIcon from "@/assets/icons/eye-line.svg";
import FlashIcon from "@/assets/icons/flashlight-fill.svg";
import PencilRulerIcon from "@/assets/icons/pencil-ruler-fill.svg";
import FolderIcon from "@/assets/icons/folder-fill.svg";
import BardIcon from "@/assets/icons/bard-fill.svg";
import ArrowIcon from "@/assets/icons/arrow-outline.svg";

const CORE_VALUES = [
  {
    title: "Trust",
    description:
      "We create a secure and reliable platform for businesses and freelancers.",
    Icon: SettingIcon,
    banner: "/images/banner-trust.webp",
    bannerAlt: "Illustration representing trust on the Prodoo platform",
    color: "#854DF4",
  },
  {
    title: "Innovation",
    description:
      "We improve our platform with smart technology that simplifies hiring.",
    Icon: EyeIcon,
    banner: "/images/banner-innovation.webp",
    bannerAlt: "Illustration representing innovation on the Prodoo platform",
    color: "#158348",
  },
  {
    title: "Transparency",
    description:
      "Clear communication and secure processes ensure confidence in projects.",
    Icon: FlashIcon,
    banner: "/images/banner-transparency.webp",
    bannerAlt: "Illustration representing transparency on the Prodoo platform",
    color: "#D38C20",
  },
  {
    title: "Collaboration",
    description: "We help businesses and freelancers collaborate for success.",
    Icon: PencilRulerIcon,
    banner: "/images/banner-collaboration.webp",
    bannerAlt: "Illustration representing collaboration on the Prodoo platform",
    color: "#FE6F41",
  },
  {
    title: "Quality",
    description:
      "We connect businesses with skilled professionals for exceptional results.",
    Icon: FolderIcon,
    banner: "/images/banner-quality.webp",
    bannerAlt: "Illustration representing excellence on the Prodoo platform",
    color: "#4767E7",
  },
  {
    title: "Growth",
    description:
      "We create opportunities for businesses to scale and communities to thrive.",
    Icon: BardIcon,
    banner: "/images/banner-growth.webp",
    bannerAlt: "Illustration representing security on the Prodoo platform",
    color: "#F6424E",
  },
];

const VISIBLE_VALUES_COUNT = 3;

function CoreValueCard({ title, description, Icon, banner, bannerAlt, color }) {
  return (
    <div className="flex flex-col gap-4 border border-[#E7E8EA] rounded-3xl p-4">
      <div className="p-4">
        <h3
          className="font-bold text-[10px] leading-3 tracking-[8%] uppercase"
          style={{ color }}
        >
          {title}
        </h3>
        <p className="text-[16px] font-normal text-muted-foreground leading-6 mt-4">
          {description}
        </p>
      </div>
      <div className="w-88 h-62 bg-[#F9F9FA] rounded-2xl px-4 pt-4">
        <div className="flex flex-col bg-white rounded-xl border border-white w-full h-full px-4 pt-4">
          <div className="flex gap-1 items-center h-11">
            {[1, 2, 3].map((item, idx) => (
              <span
                key={item}
                className={`w-3 h-3 rounded-full ${idx === 0 ? "bg-[#EEECFE]" : idx === 1 ? "bg-[#DCD8FC]" : "bg-primary"}`}
              ></span>
            ))}
          </div>
          <div className="relative mt-5 bg-white flex-1 shadow-[0px_12px_40px_0px_rgba(0,0,0,0.1)] rounded-2xl p-2">
            <Image
              src={banner}
              alt={bannerAlt}
              height={120}
              width={272}
              loading="lazy"
              sizes="(min-width: 1024px) 272px, 90vw"
              className="min-w-full object-cover"
            />
            <span
              className="absolute bottom-4 left-1/2 -translate-x-1/2"
              style={{ color }}
            >
              <Icon aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CoreValues() {
  const [expanded, setExpanded] = useState(false);
  const visibleValues = CORE_VALUES.slice(0, VISIBLE_VALUES_COUNT);
  const extraValues = CORE_VALUES.slice(VISIBLE_VALUES_COUNT);

  return (
    <section
      aria-labelledby="core-values-heading"
      className="relative flex flex-col w-full items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/overlay.webp"
          alt=""
          height={616}
          width={1440}
          priority
          className="min-w-full max-h-154 object-cover"
        />
      </div>
      <div className="relative flex justify-center items-center mt-16 w-29.75 h-10">
        <div className="h-10 flex w-full justify-center items-center border-t border-b border-[#FFFFFF] bg-[#FFFFFF40] font-medium text-sm text-foreground">
          <span className="flex flex-wrap items-center gap-1">
            <span className="text-primary font-bold">About Us</span>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-center items-center justify-center w-full max-w-188 mt-2">
        <h1
          id="core-values-heading"
          className="text-foreground text-[40px] font-semibold leading-13"
        >
          Core Values
        </h1>
        <p className="font-normal text-muted-foreground text-[16px] leading-6">
          Our core values shape experiences on Prodoo and connect businesses
          with professionals. Built on trust, innovation, and collaboration,
          these principles inspire partnerships and success.
        </p>
      </div>

      <ul className="grid grid-cols-3 justify-items-center gap-6 w-full max-w-300 mx-auto mt-16 list-none">
        {visibleValues.map((value) => (
          <li key={value.title} className="w-full">
            <CoreValueCard {...value} />
          </li>
        ))}
      </ul>

      {extraValues.length > 0 && (
        <div
          className={`grid w-full max-w-300 mx-auto overflow-hidden transition-[grid-template-rows] duration-500 ease-in-out ${
            expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <ul
              className={`grid grid-cols-3 justify-items-center gap-6 pt-6 list-none transition-opacity duration-500 ${
                expanded ? "opacity-100" : "opacity-0"
              }`}
            >
              {extraValues.map((value) => (
                <li key={value.title} className="w-full">
                  <CoreValueCard {...value} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {extraValues.length > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          className="flex items-center gap-2 px-5 h-10 border border-[#EAE5FC] rounded-[99px] mt-12 mb-16 text-primary text-sm font-semibold leading-4 cursor-pointer"
        >
          {expanded ? "Collapse for less" : "Expand for more"}
          <ArrowIcon
            className={`w-5 h-4 shrink-0 transition-transform duration-300 ${
              expanded ? "rotate-0" : "rotate-180"
            }`}
          />
        </button>
      )}
    </section>
  );
}
