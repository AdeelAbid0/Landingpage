"use client";

import { useState } from "react";
import ResumeAnalysisIcon from "@/assets/icons/resume-analysis.svg";
import BriefcaseIcon from "@/assets/icons/briefcase.svg";
import ArrowIcon from "@/assets/icons/arrow-outline.svg";
export default function AiToolsSection() {
  const [prompt, setPrompt] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section className="relative flex flex-col w-full items-center overflow-hidden border-t border-[#EAE5FC] py-16">
      <div className="flex flex-col gap-4 text-center items-center justify-center w-full max-w-188">
        <div className="flex items-center gap-4 text-foreground text-[40px] font-semibold leading-13">
          <ResumeAnalysisIcon /> <h2>Resume analysis</h2>{" "}
          <span className="text-[16px] bg-primary text-white rounded-[99px] flex items-center justify-center w-17.5 -rotate-15 max-h-8">
            iPro&apos;s
          </span>
        </div>
        <p className="font-nornal text-muted-foreground text-[16px] leading-6">
          Optimize your resume using real-time AI and market insights,
          understand what top roles pay and get tips to improve your job
          prospects instantly.
        </p>
      </div>
      <div className="flex w-full justify-center items-center border border-dashed! h-41 bg-[#F4F2FE] border-primary rounded-[20px] mt-16 max-w-300 cursor-pointer">
        <div className="flex gap-6 items-center">
          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center">
            <BriefcaseIcon />
          </div>
          <div className="flex flex-col gap p-1.5 gap-2">
            <h4 className="text-foreground text-[16px] font-semibold">
              Drop your resume here or{" "}
              <span className="text-primary underline">Click here</span>
            </h4>
            <p className="text-muted-foreground text-[14px] leading-5">
              PDF, DOC, DOCX. : Max 10MB
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col w-full items-center overflow-hidden py-16">
        <div className="flex flex-col gap-4 text-center items-center justify-center w-full max-w-230">
          <div className="flex items-center gap-4 text-foreground text-[40px] font-semibold leading-13">
            <ResumeAnalysisIcon className="text-[#3864FD]" />{" "}
            <h2 className="bg-[linear-gradient(90deg,#3864FD_0%,#D22CFF_50%,#F72384_100%)] bg-clip-text text-transparent">
              Find Perfect Candidates with AI
            </h2>{" "}
            <span className="text-[16px] bg-company text-white rounded-[99px] flex items-center justify-center w-27 -rotate-15 max-h-8">
              Recruiters{" "}
            </span>
          </div>
          <p className="font-nornal text-muted-foreground text-[16px] leading-6">
            Leverage AI to instantly connect with top-tier talent. Our
            intelligent system analyzes skills, experience, and cultural fit to
            match you with ideal candidates with 98% accuracy.{" "}
          </p>
        </div>
        <div className="relative flex w-full p-6 h-41 mt-16 max-w-300 rounded-[20px] border border-solid border-transparent cursor-text bg-[linear-gradient(#F4F2FE,#F4F2FE),linear-gradient(90deg,#3864FD_0%,#D22CFF_50.26%,#F72384_100%)] bg-origin-border [background-clip:padding-box,border-box]">
          {!prompt && !isFocused && (
            <div className="flex flex-col gap p-1.5 gap-1 pointer-events-none">
              <h4 className="text-foreground text-[15px] font-medium">
                Write Prompt
              </h4>
              <p className="text-muted-foreground text-xs leading-4">
                Looking for a skilled full stack front end web developer who
                can...
              </p>
            </div>
          )}
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="absolute inset-0 w-full h-full resize-none bg-transparent p-6 pr-20 text-foreground text-[15px] font-medium outline-none"
          />
          <div className="absolute right-6 bottom-6 bg-primary flex justify-center items-center w-12 h-12 rounded-lg">
            <ArrowIcon className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
