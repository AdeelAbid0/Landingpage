"use client";

import { useState } from "react";
import Button from "@/shared/ui/Button";
import InputText from "@/shared/ui/InputText";
import AddIcon from "@/assets/icons/add.svg";
import ArrowIcon from "@/assets/icons/arrow-outline.svg";
import SearchIcon from "@/assets/icons/search-border.svg";

const ALL_SKILLS = [
  "React",
  "Web design",
  "Graphic design",
  "Next.js",
  "TypeScript",
  "Node.js",
  "UI/UX Design",
  "Figma",
  "Product Management",
  "Content Writing",
];

export default function Step3({ setStep }) {
  const [query, setQuery] = useState("");
  const [selectedSkills, setSelectedSkills] = useState(["React"]);

  const suggestions = ALL_SKILLS.filter(
    (skill) =>
      !selectedSkills.includes(skill) &&
      skill.toLowerCase().includes(query.trim().toLowerCase()),
  );

  const addSkill = (skill) => {
    setSelectedSkills((prev) => [...prev, skill]);
  };

  const removeSkill = (skill) => {
    setSelectedSkills((prev) => prev.filter((item) => item !== skill));
  };

  return (
    <section className="flex w-full h-full justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8 w-full max-w-170">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="font-semibold text-foreground text-[32px]">
            Define Your Ideal Candidate
          </h2>
          <p className="text-foreground text-sm font-normal leading-5">
            Outline the experience and skills required for suitable iPros to
            apply.
          </p>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <InputText
            prefixIcon={
              <SearchIcon className="h-5 w-5 text-muted-foreground" />
            }
            label="Search skills or add your own"
            placeholder="Search skills"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-full! border-2! border-[#9A85FF]! focus:shadow-[0px_0px_0px_2.5px_#8E81F52B]!"
          />
          {selectedSkills.length > 0 && (
            <div className="flex flex-col gap-3">
              <p className="font-medium text-sm text-muted-foreground leading-5">
                AI identified key elements from your job title.
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedSkills.map((skill) => (
                  <span
                    key={skill}
                    onClick={() => removeSkill(skill)}
                    className="flex items-center cursor-pointer gap-1 bg-white text-foreground text-[13px] font-medium px-2.5 py-2 border border-[#EAE5FC] rounded-md"
                  >
                    {skill} <AddIcon />
                  </span>
                ))}
              </div>
            </div>
          )}
          {suggestions.length > 0 && (
            <div className="flex flex-col gap-3">
              <p className="font-medium text-sm text-muted-foreground leading-5">
                AI Suggestions
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((skill) => (
                  <span
                    key={skill}
                    onClick={() => addSkill(skill)}
                    className="flex items-center cursor-pointer gap-1 bg-[#F4F2FE] text-foreground text-[13px] font-medium px-2.5 py-2 border border-[#EAE5FC] rounded-md"
                  >
                    {skill} <AddIcon className="rotate-45" />
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="flex w-full justify-center mb-20">
          <Button
            type={"primary"}
            label="Continue"
            onClick={() => setStep(4)}
            suffixIcon={<ArrowIcon className="rotate-90" />}
            className="w-full max-w-85"
          />
        </div>
      </div>
    </section>
  );
}
