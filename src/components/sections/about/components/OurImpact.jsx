import BardIcon from "@/assets/icons/bard-fill.svg";

const IMPACT_STATS = [
  { label: "Registered Freelancers" },
  { label: "Businesses" },
  { label: "Projects Posted" },
  { label: "Countries Reached" },
  { label: "Successful Hires" },
  { label: "Client Satisfaction" },
];

function ImpactStat({ label }) {
  return (
    <div className="flex flex-wrap gap-3 items-center w-full p-5 border border-[#B1EFE4] rounded-2xl bg-[#E6FAF6]">
      <BardIcon aria-hidden="true" className="text-company shrink-0" />
      <p className="text-sm text-foreground font-normal leading-5 whitespace-nowrap">
        {label}
      </p>
    </div>
  );
}

export default function OurImpact() {
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
            Our Impact
          </h2>
          <p className="font-normal text-muted-foreground text-[16px] leading-6">
            Every connection made on ProDoo drives rapid business growth and
            creates meaningful, high-paying career opportunities for remote
            talent worldwide.
          </p>
        </div>
        <ul className="grid grid-cols-3 gap-3 w-full max-w-231 list-none">
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
