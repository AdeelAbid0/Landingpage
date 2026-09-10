"use client";

import { useState } from "react";
import SearchIcon from "@/assets/icons/search-border.svg";
import ArrowRight from "@/assets/icons/arrow-outline.svg";

export default function SearchBar({
  placeholder = "Describe what you need to hire for...",
  value,
  onChange,
  onSearch,
  className = "",
}) {
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);

  const popularSearches = [
    "Digital designer and brand designer",
    "Front end developer and creative technologist",
    "User experience researcher and Information architect",
    "Design strategist and art director",
  ];

  const handleChange = (event) => {
    onChange?.(event);
    setIsSuggestionsOpen(true);
  };

  return (
    <div className="relative flex flex-col gap-6 w-full">
      <div
        className={`relative flex w-full items-start gap-2 rounded-full border-2 border-transparent bg-[linear-gradient(#fff,#fff),linear-gradient(90deg,#3864FD_0%,#D22CFF_100%)] bg-origin-border pl-6 pr-3 py-3 shadow-[0px_0px_0px_3px_#D32DFF40,0px_0px_0px_6px_#D22CFF21,0px_0px_0px_9px_#D22CFF12,0px_0px_0px_12px_#D22CFF0A] [background-clip:padding-box,border-box] md:items-center ${className}`}
      >
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onFocus={() => setIsSuggestionsOpen(true)}
          onBlur={() => setIsSuggestionsOpen(false)}
          onChange={handleChange}
          className="w-full bg-transparent text-[14px] font-semibold text-foreground outline-none placeholder:bg-[linear-gradient(90deg,#D22CFF_0%,#5659FE_24.74%)] placeholder:bg-clip-text placeholder:text-transparent"
        />
        <button
          type="button"
          onClick={onSearch}
          className="absolute bottom-3 right-3 flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full border border-white bg-[linear-gradient(270deg,#3864FD_0%,#D22CFF_50%)] text-[14px]! font-normal! text-white shadow-[0px_4px_4px_0px_#FFFFFF40_inset,0px_-4px_4px_0px_#FFFFFF40_inset,4px_0px_4px_0px_#FFFFFF40_inset,-4px_4px_4px_0px_#FFFFFF40_inset] md:bottom-auto md:right-auto h-10 w-11 md:static"
        >
          <ArrowRight className="h-6 w-6 rotate-90" />
        </button>
      </div>
      {isSuggestionsOpen && (
        <div className="absolute top-full z-30 mt-6 w-full rounded-[20px] border border-primary/20 bg-white p-6 shadow-lg">
          <p className="mb-3 text-xs text-muted-foreground">
            Popular searches on ProDoo
          </p>
          {popularSearches.map((item) => (
            <button
              key={item}
              type="button"
              onMouseDown={(event) => event.preventDefault()}
              className="flex w-full text-md text-foreground items-center gap-2 rounded py-2 text-left hover:bg-gray-50 cursor-pointer"
            >
              <SearchIcon className="h-5 w-5 text-foreground" />
              <span>{item}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
