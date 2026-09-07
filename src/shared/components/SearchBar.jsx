import SearchIcon from "@/assets/icons/search-border.svg";

export default function SearchBar({
  placeholder = "Describe what you need to hire for...",
  value,
  onChange,
  onSearch,
  className = "",
}) {
  return (
    <div
      className={`flex w-full items-center gap-2 rounded-full border-2 border-transparent bg-[linear-gradient(#fff,#fff),linear-gradient(90deg,#3864FD_0%,#D22CFF_100%)] bg-origin-border px-6 py-3 shadow-[0px_0px_0px_3px_#D32DFF40,0px_0px_0px_6px_#D22CFF21,0px_0px_0px_9px_#D22CFF12,0px_0px_0px_12px_#D22CFF0A] [background-clip:padding-box,border-box] ${className}`}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent text-[14px] font-semibold text-foreground outline-none placeholder:bg-[linear-gradient(90deg,#D22CFF_0%,#5659FE_24.74%)] placeholder:bg-clip-text placeholder:text-transparent"
      />
      <button
        type="button"
        onClick={onSearch}
        className="flex h-10 w-27.5 shrink-0 items-center justify-center gap-2 rounded-full border border-white bg-[linear-gradient(270deg,#3864FD_0%,#D22CFF_50%)] text-[14px]! font-normal! text-white shadow-[0px_4px_4px_0px_#FFFFFF40_inset,0px_-4px_4px_0px_#FFFFFF40_inset,4px_0px_4px_0px_#FFFFFF40_inset,-4px_4px_4px_0px_#FFFFFF40_inset]"
      >
        <SearchIcon className="w-5 h-5" />
        Search
      </button>
    </div>
  );
}
