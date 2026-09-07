import ResumeCard from "@/shared/components/ResumeCard";

export const metadata = {
  title: "Industries",
  description:
    "Browse top freelance talent across creative, design, media, and other leading industries on Prodoo.",
  alternates: {
    canonical: "/industries",
  },
};

const skills = [
  "Graphic Design",
  "UI/UX Design",
  "Video Editing",
  "Animation",
  "Photography",
  "Illustration",
  "Web Design",
  "Content Creation",
];

const professionals = [
  {
    id: 1,
    avatarSrc: "/images/avatar-industry-1.webp",
    avatarAlt: "Sophia Wang",
    title:
      "Cybersecurity Analyst, Risk assessor, Network security expert, Digital privacy advocate",
    name: "Sophia Wang",
    location: "Singapore, Singapore",
  },
  {
    id: 2,
    avatarSrc: "/images/avatar-industry-1.webp",
    avatarAlt: "Sophia Wang",
    title:
      "Cybersecurity Analyst, Risk assessor, Network security expert, Digital privacy advocate",
    name: "Sophia Wang",
    location: "Singapore, Singapore",
  },
  {
    id: 3,
    avatarSrc: "/images/avatar-industry-1.webp",
    avatarAlt: "Sophia Wang",
    title:
      "Cybersecurity Analyst, Risk assessor, Network security expert, Digital privacy advocate",
    name: "Sophia Wang",
    location: "Singapore, Singapore",
  },
  {
    id: 4,
    avatarSrc: "/images/avatar-industry-1.webp",
    avatarAlt: "Sophia Wang",
    title:
      "Cybersecurity Analyst, Risk assessor, Network security expert, Digital privacy advocate",
    name: "Sophia Wang",
    location: "Singapore, Singapore",
  },
  {
    id: 5,
    avatarSrc: "/images/avatar-industry-1.webp",
    avatarAlt: "Sophia Wang",
    title:
      "Cybersecurity Analyst, Risk assessor, Network security expert, Digital privacy advocate",
    name: "Sophia Wang",
    location: "Singapore, Singapore",
  },
];

export default function Page() {
  return (
    <section className="flex flex-col w-full items-center pt-12">
      <h1 className="text-foreground font-semibold text-[40px]">
        Creative, Design & Media
      </h1>
      <div className="flex items-center w-full max-w-6xl overflow-auto mt-6 gap-1.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="border whitespace-nowrap border-[#EAE5FC] px-3.5 py-2 text-muted-foreground font-medium text-sm cursor-pointer rounded-lg"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-2 w-full max-w-6xl mt-6 mb-16">
        {professionals.map((professional) => (
          <ResumeCard key={professional.id} {...professional} skills={skills} />
        ))}
      </div>
    </section>
  );
}
