import BardIcon from "@/assets/icons/bard-fill.svg";

const IMPACT_STATS = [
  { label: "Businesses" },
  { label: "Startups" },
  { label: "Enterprises" },
  { label: "Recruiters" },
  { label: "Freelancers" },
  { label: "Students" },
  { label: "Fresh Graduates" },
  { label: "Independent Professionals" },
];

function ImpactStat({ label }) {
  return (
    <div className="flex gap-3 items-center w-full p-5 border border-[#EAE5FC] rounded-2xl bg-[#F4F2FE]">
      <BardIcon aria-hidden="true" className="text-primary shrink-0" />
      <p className="text-sm text-foreground font-normal leading-5 whitespace-nowrap">
        {label}
      </p>
    </div>
  );
}

export default function WhoWeServe() {
  return (
    <div className="border-t border-[#EAE5FC] relative overflow-hidden lg:pb-15">
      <section
        aria-labelledby="our-impact-heading"
        className="relative flex flex-col w-full items-center overflow-hidden"
      >
        <div className="flex flex-col gap-2 text-center items-center justify-center my-16 w-full max-w-188">
          <h2
            id="our-impact-heading"
            className="text-foreground text-[40px] font-semibold leading-13"
          >
            Who We Serve{" "}
          </h2>
          <p className="font-normal text-muted-foreground text-[16px] leading-6">
            We provide a seamless and intelligent ecosystem where hiring
            managers easily find expert talent, and freelancers discover
            flexible, rewarding opportunities.
          </p>
        </div>
        <ul className="grid grid-cols-4 gap-3 w-full max-w-259 list-none">
          {IMPACT_STATS.map((stat) => (
            <li key={stat.label}>
              <ImpactStat {...stat} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
