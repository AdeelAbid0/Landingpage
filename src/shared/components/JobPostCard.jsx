"use client";

import { useState } from "react";
import CheckCheck from "@/assets/icons/check double.svg";
import LocationIcon from "@/assets/icons/location.svg";
import Bookmark from "@/assets/icons/bookmark.svg";

export default function JobPostCard({
  title,
  postedAt,
  location,
  description,
  hourlyRate,
  skills = [],
}) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <article className="relative rounded-2xl bg-[#F4F2FE] px-5 py-4 sm:px-6">
      <div className="">
        <h2 className="text-lg font-semibold leading-100% text-foreground">
          {title}
        </h2>
        <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <CheckCheck className="h-4 w-4" />
            {postedAt}
          </span>
          <span className="flex items-center gap-1">
            <LocationIcon className="h-4 w-4 text-muted-foreground" />
            {location}
          </span>
        </div>
      </div>

      <button
        type="button"
        aria-label={
          isBookmarked ? `Remove ${title} bookmark` : `Bookmark ${title}`
        }
        aria-pressed={isBookmarked}
        onClick={() => setIsBookmarked((bookmarked) => !bookmarked)}
        className={`absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border transition-colors sm:right-6 cursor-pointer ${
          isBookmarked
            ? " bg-white text-primary border-none"
            : "border-[#EAE5FC] bg-transparent text-foreground hover:bg-white"
        }`}
      >
        <Bookmark
          className="h-5 w-5"
          fill={isBookmarked ? "currentColor" : "none"}
        />
      </button>

      <p className="mt-4 max-w-180 text-[13px] leading-5 text-foreground sm:text-xs">
        {description}
      </p>

      <p className="mt-3 text-sm text-muted-foreground">
        Hourly rate{" "}
        <span className="font-medium text-md text-foreground">
          {hourlyRate}
        </span>
      </p>

      <div className="mt-4 flex flex-wrap gap-1 items-center">
        {skills.map((skill) => (
          <span
            key={skill}
            className="whitespace-nowrap rounded-lg border border-[#EAE5FC] bg-white px-3 py-1 h-8 text-[13px] font-medium text-foreground items-center"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
