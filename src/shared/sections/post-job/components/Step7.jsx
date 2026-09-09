import { useRouter } from "next/navigation";
import Button from "@/shared/ui/Button";
import ResumeCard from "@/shared/components/ResumeCard";
import ArrowIcon from "@/assets/icons/arrow-outline.svg";
import Checkbox from "@/shared/ui/Checkbox";

const SKILLS = [
  "React",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "PostgreSQL",
  "PostgreSQL",
  "PostgreSQL",
  "PostgreSQL",
];

const CANDIDATES = [
  {
    key: "1",
    avatarSrc: "/images/avatar-industry-1.webp",
    avatarAlt: "Sophia Wang",
    title: "Senior Full-Stack Developer, React & Node.js specialist",
    name: "Sophia Wang",
    location: "Singapore, Singapore",
  },
  {
    key: "2",
    avatarSrc: "/images/avatar-industry-2.webp",
    avatarAlt: "Ava Aesthetics",
    title: "Full-Stack Engineer, Cloud architecture & API design",
    name: "Ava Aesthetics",
    location: "Berlin, Germany",
  },
  {
    key: "3",
    avatarSrc: "/images/avatar-industry-3.webp",
    avatarAlt: "Ethan Element",
    title: "Full-Stack Developer, TypeScript & PostgreSQL expert",
    name: "Ethan Element",
    location: "Austin, USA",
  },
];

export default function Step7({ setStep }) {
  const router = useRouter();

  return (
    <section className="flex w-full h-full justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8 w-full max-w-170">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="font-semibold text-foreground text-[32px]">
            Recommended Candidates for your job
          </h2>
          <p className="text-foreground text-sm font-normal leading-5">
            We&apos;ve shortlisted professionals. Selected candidates will
            receive invitations to apply.
          </p>
        </div>
        <div className="flex w-full justify-between">
          <h2>Search results (15)</h2>
          <Checkbox label="Send Job invitations to them" />
        </div>

        <div className="flex flex-col gap-4 w-full">
          {CANDIDATES.map(({ key, ...candidate }) => (
            <ResumeCard key={key} {...candidate} skills={SKILLS} />
          ))}
        </div>
        <div className="flex w-full justify-end">
          <p
            onClick={() => router.push("/login")}
            className="text-primary font-medium text-sm! leading-4 cursor-pointer"
          >
            View more
          </p>
        </div>

        <div className="flex w-full justify-center">
          <Button
            type={"primary"}
            label="Sounds Good, Let’s Finish"
            onClick={() => setStep(6)}
            suffixIcon={<ArrowIcon className="rotate-90" />}
            className="w-full max-w-85"
          />
        </div>
      </div>
    </section>
  );
}
