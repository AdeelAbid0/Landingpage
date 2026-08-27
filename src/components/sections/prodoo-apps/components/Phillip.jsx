import TickIcon from "@/assets/icons/tick-border.svg";
import FinalStep from "@/assets/icons/final-step.svg";
import AppShowcaseSection from "./AppShowcaseSection";

const HIGHLIGHT_STYLES = {
  primary: {
    background: "linear-gradient(90deg, #8E81F5 0%, #02CAA8 100%)",
    boxShadow: "0px 0px 19px 0px #8E81F580",
  },
  company: {
    background: "linear-gradient(90deg, #02CAA8 0%, #8E81F5 100%)",
    boxShadow: "0px 0px 19px 0px #02CAA880",
  },
};

const CONNECTOR_COLOR = {
  primary: "#8E81F5",
  company: "#02CAA8",
};

const CONNECTOR_DASH_COUNT = 6;

const SECTIONS = [
  {
    key: "phillip-ipro",
    id: "phillip-ai-ipro",
    sectionClassName:
      "flex justify-center w-full pt-16 my-16 border-t border-[#EAE5FC]",
    imagePosition: "right",
    theme: "primary",
    image: {
      src: "/images/phillip-ipro.webp",
      alt: "Phillip AI assistant for iPros",
    },
    title: "Phillip AI for iPro",
    description:
      "Stop searching and start earning. Our smart AI matches your unique skills with the perfect freelance projects, instantly boosting your visibility to top recruiters.",
    cards: [
      {
        title: "Create Your iPro Profile",
        description:
          "Complete your ProDoo profile by adding skills, experience, and certifications.",
      },
      {
        title: "AI Analyzes Your Skills",
        description:
          "Phillip AI reviews your profile, skills, and achievements to recommend suitable opportunities.",
      },
      {
        title: "Receive Smart Matches",
        description:
          "Get tailored recommendations for freelance projects and remote jobs that match your needs.",
      },
      {
        title: "Apply & Build Your Career",
        description:
          "Apply for projects, connect with clients, secure freelance work, and grow your career through ProDoo.",
      },
    ],
  },
  {
    key: "phillip-recruiter",
    id: "phillip-ai-recruiter",
    sectionClassName:
      "border-t border-[#EAE5FC] relative overflow-hidden lg:pb-15",
    wrapperClassName: "max-w-6xl mx-auto relative z-10 my-16",
    imagePosition: "left",
    theme: "company",
    image: {
      src: "/images/phillip-recruiter.webp",
      alt: "Phillip AI assistant for recruiters",
    },
    title: "Phillip AI for Recruiter",
    description:
      "Hire smarter, not harder. Define your needs, and let our intelligent algorithms instantly match your projects with the most qualified, vetted global professionals.",
    cards: [
      {
        title: "Define Your Hiring Needs",
        description:
          "Provide project details, skills, experience, budget, and preferences for Phillip AI to understand your needs.",
      },
      {
        title: "AI Matches Top Talent",
        description:
          "Phillip AI matches your needs with verified freelancer profiles to find the best professionals for your project.",
      },
      {
        title: "Review Recommended Candidates",
        description:
          "Get a shortlist of AI-recommended candidates, review their profiles and skills before selecting.",
      },
      {
        title: "Hire With Confidence",
        description:
          "Invite freelancers, communicate directly, finalize hiring, and build a remote team through ProDoo.",
      },
    ],
  },
];

function CardConnector({ theme }) {
  const color = CONNECTOR_COLOR[theme];

  return (
    <div
      aria-hidden="true"
      className="absolute left-9 top-full flex flex-col items-center justify-between w-0.75 h-9.5 pointer-events-none"
    >
      {Array.from({ length: CONNECTOR_DASH_COUNT }).map((_, index) => (
        <span
          key={index}
          className="w-0.75 h-0.75 rounded-full shrink-0"
          style={{
            backgroundColor: color,
            opacity: (index + 1) / CONNECTOR_DASH_COUNT,
          }}
        />
      ))}
    </div>
  );
}

function FeatureCard({ title, description, theme, highlighted }) {
  const icon = highlighted ? <FinalStep /> : <TickIcon />;

  const iconBox = (
    <div className="flex w-14 h-14 shrink-0 items-center justify-center bg-[#FDFDFD] border border-[#F3F3F5] rounded-[9px]">
      {icon}
    </div>
  );

  const card = (
    <div className="flex items-center p-2 gap-3 bg-[#F7F7F7] rounded-2xl">
      {iconBox}
      <div className="flex flex-col gap-1">
        <h3 className="text-xs leading-4 text-foreground font-semibold">
          {title}
        </h3>
        <p className="font-normal text-xs text-muted-foreground leading-4">
          {description}
        </p>
      </div>
    </div>
  );

  const connector = !highlighted && <CardConnector theme={theme} />;

  if (!highlighted) {
    return (
      <div className="relative border border-[#F0F0F0] rounded-2xl">
        {card}
        {connector}
      </div>
    );
  }

  return (
    <div
      className="relative rounded-2xl p-[1.5px]"
      style={HIGHLIGHT_STYLES[theme]}
    >
      {card}
      {connector}
    </div>
  );
}

export default function Phillip() {
  return (
    <div className="flex flex-col">
      {SECTIONS.map(({ key, cards, ...section }) => (
        <AppShowcaseSection key={key} {...section}>
          <div className="flex flex-col gap-9.5 mt-8 w-full">
            {cards.map((card, index) => (
              <FeatureCard
                key={card.title}
                {...card}
                theme={section.theme}
                highlighted={index === cards.length - 1}
              />
            ))}
          </div>
        </AppShowcaseSection>
      ))}
    </div>
  );
}
