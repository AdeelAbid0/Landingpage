import CheckBoxIcon from "@/assets/icons/checkbox-circle-fill.svg";
import BulbIcon from "@/assets/icons/bulb-outline.svg";
import AppShowcaseSection, { THEME_TEXT } from "./AppShowcaseSection";

const SECTIONS = [
  {
    key: "tictell",
    id: "tictell-time-tracker",
    sectionClassName: "flex justify-center w-full my-16",
    imagePosition: "right",
    theme: "primary",
    image: {
      src: "/images/tictell-timetracker.webp",
      alt: "Tictell Time Tracker app snapshot",
    },
    title: "Tictell Time Tracker",
    description:
      "Monitor hours, organize tasks, and boost productivity effortlessly. Get accurate time logs and detailed project reports for seamless collaboration.",
    checklist: [
      "Real-time tracking",
      "Daily activity logs",
      "Project tracking",
      "Timesheet management",
      "Work history records",
      "Performance tracking",
    ],
    cards: [
      {
        title: "Select a Project",
        description:
          "Select a project or task from your ProDoo workspace before starting.",
      },
      {
        title: "Start the Timer",
        description: "Click to start the timer and record your working hours.",
      },
      {
        title: "Track Your Activity",
        description:
          "Tictell records your work time and project progress for accurate logs.",
      },
      {
        title: "Review Reports",
        description:
          "Check timesheets and reports to manage performance and billing.",
      },
    ],
  },
  {
    key: "snapshot",
    id: "snapshot",
    sectionClassName:
      "border-t border-[#EAE5FC] relative overflow-hidden lg:pb-15",
    wrapperClassName: "max-w-6xl mx-auto relative z-10 mt-16",
    imagePosition: "left",
    theme: "company",
    image: {
      src: "/images/snapshot.webp",
      alt: "ProDoo Snapshot monitoring preview",
    },
    title: "Snapshot",
    description:
      "Build trust through transparency. Capture work snapshots and monitor project progress clearly without ever disrupting your remote team's workflow.",
    checklist: [
      "Activity monitoring",
      "Productivity snapshots",
      "Work session reports",
      "Team accountability",
      "Project transparency",
      "Performance tracking",
    ],
    cards: [
      {
        title: "Start Your Work Session",
        description:
          "Start ProDoo and enable Snapshot Monitoring to track project activity.",
      },
      {
        title: "Track Work Activity",
        description:
          "Snapshot Monitoring tracks activity and captures productivity.",
      },
      {
        title: "Capture Productivity Data",
        description: "Managers gain insights for remote team accountability.",
      },
      {
        title: "Review Project Reports",
        description: "Analyze reports to enhance collaboration and decisions.",
      },
    ],
  },
];

function ChecklistItem({ theme, children }) {
  return (
    <div className="flex gap-1 items-center">
      <CheckBoxIcon className={THEME_TEXT[theme]} />
      <p className="text-[16px] text-foreground">{children}</p>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="flex items-center p-2 gap-3 bg-[#F7F7F7] border border-[#F0F0F0] rounded-2xl">
      <div className="flex w-13.5 h-13.5 shrink-0 items-center justify-center bg-[#FDFDFD] border border-[#F3F3F5] rounded-[9px]">
        <BulbIcon />
      </div>
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
}

export default function AppShowcase() {
  return (
    <div className="flex flex-col">
      {SECTIONS.map(({ key, checklist, cards, ...section }) => (
        <AppShowcaseSection key={key} {...section}>
          <div className="flex flex-col gap-2 mt-8">
            {checklist.map((label) => (
              <ChecklistItem key={label} theme={section.theme}>
                {label}
              </ChecklistItem>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-5 w-full">
            {cards.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </AppShowcaseSection>
      ))}
    </div>
  );
}
