"use client";

import CommaIcon from "@/assets/icons/double-quotes.svg";
import BardIcon from "@/assets/icons/bard-fill.svg";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TESTIMONIALS = [
  {
    key: "1",
    rating: "5/5",
    title: "Finally, a platform built on trust.",
    description:
      "ProDoo focuses on verified professionals, making hiring feel more reliable from the very beginning.",
    avatar: "/images/avatar-industry-1.webp",
    name: "Jackson Juction",
    role: "Founder",
  },
  {
    key: "2",
    rating: "5/5",
    title: "Quality over quantity.",
    description:
      "Instead of scrolling through hundreds of profiles, I found skilled freelancers that actually matched my requirements.",
    avatar: "/images/avatar-industry-2.webp",
    name: "Ava Aesthetics",
    role: "Product Manager",
  },
  {
    key: "3",
    rating: "5/5",
    title: "The hiring experience feels premium.",
    description:
      "Everything is cleaner, simpler, and more professional than the freelance platforms I've used before.",
    avatar: "/images/avatar-industry-3.webp",
    name: "Ethan Element",
    role: "UI Designer",
  },
  {
    key: "4",
    rating: "5/5",
    title: "Exactly what freelancers needed.",
    description:
      "A platform where your skills matter more than chasing endless proposals.",
    avatar: "/images/avatar-industry-4.webp",
    name: "Mia Module",
    role: "Design Director",
  },
  {
    key: "5",
    rating: "5/5",
    title: "Less noise. Better talent.",
    description:
      "The verification-first approach gives me much more confidence while hiring remotely.",
    avatar: "/images/avatar-industry-5.webp",
    name: "Noah Nexus",
    role: "Visual Designer",
  },
  {
    key: "6",
    rating: "5/5",
    title: "A refreshing approach to freelancing.",
    description:
      "ProDoo feels designed for professionals who value quality, transparency, and long-term work.",
    avatar: "/images/avatar-industry-6.webp",
    name: "Max Mockup",
    role: "Founder",
  },
];

function TestimonialCard({ rating, title, description, avatar, name, role }) {
  return (
    <div className="flex w-full h-full flex-col border border-[#EAE5FC] rounded-[20px] p-6">
      <div className="flex w-full justify-between items-center">
        <CommaIcon />
        <span className="flex items-center gap-1">
          <BardIcon className="text-[#F0774C]" />
          <p className="text-foreground font-medium text-sm leading-5">
            {rating}
          </p>
        </span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <h1 className="text-foreground text-2xl! leading-7 font-semibold!">
          {title}
        </h1>
        <p className="text-muted-foreground text-[16px] font-normal! leading-6">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-3 mt-auto pt-6">
        <Image src={avatar} alt="profile image" width={40} height={40} />
        <div className="flex flex-col gap-1">
          <h3 className="text-foreground text-[16px] font-medium leading-5">
            {name}
          </h3>
          <p className="text-muted-foreground text-[16px] font-normal leading-6">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      ref={elementRef}
      className={`flex w-full justify-center mb-16 animate-on-scroll ${
        isVisible ? "animate-visible" : ""
      }`}
    >
      <div className="grid w-full grid-cols-3 gap-6 max-w-300">
        {TESTIMONIALS.map(({ key, ...testimonial }) => (
          <TestimonialCard key={key} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
