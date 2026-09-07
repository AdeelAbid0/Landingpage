import ProfileIcon from "@/assets/icons/profile.svg";
import LocationIcon from "@/assets/icons/location.svg";
import Image from "next/image";

export const metadata = {
  title: "Industries",
  description:
    "Browse top freelance talent across creative, design, media, and other leading industries on Prodoo.",
  alternates: {
    canonical: "/industries",
  },
};

export default function Page() {
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
  return (
    <section className="flex flex-col w-full items-center pt-12">
      <h1 className="text-foreground font-semibold text-[40px]">
        Creative, Design & Media
      </h1>
      <div className="flex items-center w-full max-w-6xl overflow-auto mt-6 gap-1.5">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="border whitespace-nowrap border-[#EAE5FC] px-3.5 py-2 text-muted-foreground font-medium text-sm cursor-pointer rounded-lg"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-2 w-full max-w-6xl mt-6 mb-16">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div key={index}>
            <div className="flex flex-col gap-7.5 bg-[#F4F2FE] rounded-2xl p-8">
              <div className="flex gap-3">
                <Image
                  src={"/images/avatar-industry-1.webp"}
                  alt="Sophia Wang"
                  width={52}
                  height={52}
                />
                <div className="flex flex-col gap-2.5">
                  <h2>
                    Cybersecurity Analyst, Risk assessor, Network security
                    expert, Digital privacy advocate
                  </h2>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <ProfileIcon />
                      <span className="text-muted-foreground text-sm font-medium">
                        Sophia Wang
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <LocationIcon />
                      <span className="text-primary text-sm font-medium">
                        Singapore, Singapore
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="border whitespace-nowrap border-[#EAE5FC] bg-white px-3.5 py-2 text-muted-foreground font-medium text-sm cursor-pointer rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
