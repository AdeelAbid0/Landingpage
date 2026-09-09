"use client";

import {
  Search,
  UserCheck,
  MessageCircle,
  CheckCircle,
  Users,
  Briefcase,
  Clock,
  Target,
  Building2,
  Send,
  FileText,
  TrendingUp,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useSystemLabel } from "@/api/hooks/useSystemLabel";

const ProcessFlow = ({
  steps,
  title,
  icon: Icon,
  subtitle,
  isCompany,
  progressLabel,
}) => (
  <div className="space-y-6 md:space-y-12">
    <div className="text-center">
      <div
        className={`inline-flex items-center gap-4 bg-linear-to-r from-card via-card/95 to-card/90 border min-w-[72.75px] mt-16 ${
          isCompany
            ? "border-company/20 shadow-company/10"
            : "border-primary/20 shadow-primary/10"
        } rounded-3xl p-3! md:px-8 md:py-6 shadow-lg backdrop-blur-md hover:scale-105 transition-transform duration-300`}
      >
        <div
          className={`w-11 h-11 md:w-14 md:h-14 bg-linear-to-r ${
            isCompany
              ? "from-company to-company/80"
              : "from-primary to-primary/80"
          } rounded-[9px] md:rounded-2xl flex items-center justify-center shadow-lg`}
        >
          <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
        </div>
        <div className="text-left">
          <h3 className="text-[18px] md:text-2xl font-medium text-foreground">
            {title}
          </h3>
          <p className="text-[13px] md:text-sm text-muted-foreground mt-1">
            {subtitle}
          </p>
        </div>
      </div>
    </div>

    <div className="relative">
      <div
        className={`hidden lg:block absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-linear-to-b ${
          isCompany
            ? "from-company/20 via-company/40 to-company/20"
            : "from-primary/20 via-primary/40 to-primary/20"
        } rounded-full`}
      >
        <div
          className={`absolute top-0 w-full h-1/3 bg-linear-to-b ${
            isCompany
              ? "from-company/60 to-transparent"
              : "from-primary/60 to-transparent"
          } rounded-full animate-pulse`}
        ></div>
      </div>

      <div className="space-y-0 lg:-space-y-25">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <span
              className={`hidden lg:block text-[400px] font-400 ${
                isCompany ? "text-[#E6FAF6]" : "text-[#F4F2FE]"
              } font-bold absolute  ${
                index % 2 === 0 ? "-ml-15!" : "right-[23%]"
              }`}
            >
              {step.number}
            </span>
            <div
              className={`hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 ${
                isCompany ? "bg-company" : "bg-primary"
              } rounded-full border-4 border-background shadow-xl z-10`}
            >
              <div
                className={`absolute inset-0 ${
                  isCompany ? "bg-company" : "bg-primary"
                } rounded-full animate-ping opacity-30`}
              ></div>
            </div>

            <div
              className={`relative w-full lg:w-5/12 mb-2 ${
                index % 2 === 0 ? "lg:mr-auto lg:pl-12" : "lg:ml-auto lg:pl-12"
              }`}
            >
              <div
                className={`group relative bg-linear-to-br from-card via-card to-card/95 border-2 ${
                  isCompany
                    ? "border-company/10 hover:border-company/30"
                    : "border-primary/10 hover:border-primary/30"
                } rounded-2xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
              >
                <span
                  className={` lg:hidden absolute font-bold text-[127px] top-[30%] left-[70%] ${
                    isCompany ? "text-[#E6FAF6]" : "text-[#F4F2FE]"
                  }`}
                >
                  {step.number}
                </span>
                <div
                  className={`absolute inset-0 bg-linear-to-br ${
                    isCompany
                      ? "from-company/5 via-transparent to-company/10"
                      : "from-primary/5 via-transparent to-primary/10"
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                ></div>

                <div
                  className={`absolute -top-3 -right-3 w-16 h-16 ${
                    isCompany ? "bg-company/10" : "bg-primary/10"
                  } rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 shrink-0 bg-linear-to-r ${
                          isCompany
                            ? "from-company to-company/80"
                            : "from-primary to-primary/80"
                        } rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 relative`}
                      >
                        <step.icon className="w-6 h-6 text-white" />
                        <div
                          className={`absolute -inset-1 bg-linear-to-r ${
                            isCompany
                              ? "from-company/20 to-company/10"
                              : "from-primary/20 to-primary/10"
                          } rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`}
                        ></div>
                      </div>
                      <h4
                        className={`text-xl font-semibold text-foreground ${
                          isCompany
                            ? "group-hover:text-company"
                            : "group-hover:text-primary"
                        } transition-colors duration-300 leading-snug`}
                      >
                        {step.title}
                      </h4>
                    </div>
                    <div
                      className={`flex items-center gap-2 bg-linear-to-r ${
                        isCompany
                          ? "from-company/10 to-company/5"
                          : "from-primary/10 to-primary/5"
                      } border ${
                        isCompany ? "border-company/20" : "border-primary/20"
                      } rounded-full px-3 py-1 shrink-0 h-fit`}
                    >
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs font-medium text-muted-foreground">
                        {step.duration}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-muted-foreground leading-relaxed text-[13px] md:text-[14px]">
                        {step.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                      {step.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 group/item"
                        >
                          <div
                            className={`w-5 h-5 ${
                              isCompany ? "bg-company/10" : "bg-primary/10"
                            } rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}
                          >
                            <div
                              className={`w-1.5 h-1.5 ${
                                isCompany ? "bg-company" : "bg-primary"
                              } rounded-full`}
                            ></div>
                          </div>
                          <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-300 text-[13px] md:text-[14px]">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 space-y-1">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{progressLabel}</span>
                      <span>
                        {Math.round(((index + 1) / steps.length) * 100)}%
                      </span>
                    </div>
                    <div className="w-full flex gap-1 h-1.5">
                      {[...Array(4)].map((_, partIndex) => (
                        <div
                          key={partIndex}
                          className="h-full flex-1 bg-muted rounded-full overflow-hidden"
                        >
                          <div
                            className={`h-full bg-linear-to-r ${
                              isCompany
                                ? "from-company to-company/80"
                                : "from-primary to-primary/80"
                            } rounded-full transition-all duration-1000 ${
                              partIndex <
                              Math.floor(((index + 1) / steps.length) * 4)
                                ? "opacity-100"
                                : "opacity-0"
                            } ${
                              isCompany
                                ? "group-hover:shadow-company/50"
                                : "group-hover:shadow-primary/50"
                            }`}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const HowItWorksSection = () => {
  const { data: labels } = useSystemLabel();
  const { elementRef: headerRef, isVisible: headerVisible } =
    useScrollAnimation();
  const { elementRef: companyRef, isVisible: companyVisible } =
    useScrollAnimation();
  const { elementRef: freelancerRef, isVisible: freelancerVisible } =
    useScrollAnimation();

  const companySteps = [
    {
      number: "1",
      icon: Building2,
      title: labels?.companySteps_Title_1,
      description: labels?.companySteps_Desc_1,
      duration: labels?.companySteps_Duration_1,
      details: [
        labels?.Recruiter_CompayStep1_Detail1,
        labels?.Recruiter_CompayStep1_Detail2,
        labels?.Recruiter_CompayStep1_Detail3,
      ],
    },
    {
      number: "2",
      icon: Search,
      title: labels?.companySteps_Title_2,
      description: labels?.companySteps_Desc_2,
      duration: labels?.companySteps_Duration_2,
      details: [
        labels?.Recruiter_CompayStep2_Detail1,
        labels?.Recruiter_CompayStep2_Detail2,
        labels?.Recruiter_CompayStep2_Detail3,
      ],
    },
    {
      number: "3",
      icon: Send,
      title: labels?.companySteps_Title_3,
      description: labels?.companySteps_Desc_3,
      duration: labels?.companySteps_Duration_3,
      details: [
        labels?.Recruiter_CompayStep3_Detail1,
        labels?.Recruiter_CompayStep3_Detail2,
        labels?.Recruiter_CompayStep3_Detail3,
      ],
    },
    {
      number: "4",
      icon: FileText,
      title: labels?.companySteps_Title_4,
      description: labels?.companySteps_Desc_4,
      duration: labels?.companySteps_Duration_4,
      details: [
        labels?.Recruiter_CompayStep4_Detail1,
        labels?.Recruiter_CompayStep4_Detail2,
        labels?.Recruiter_CompayStep4_Detail3,
      ],
    },
  ];

  const freelancerSteps = [
    {
      number: "1",
      icon: UserCheck,
      title: labels?.freelancerSteps_Title_1,
      description: labels?.freelancerSteps_Desc_1,
      duration: labels?.freelancerSteps_Duration_1,
      details: [
        labels?.freelancerSteps1_Detail1,
        labels?.freelancerSteps1_Detail2,
        labels?.freelancerSteps1_Detail3,
      ],
    },
    {
      number: "2",
      icon: Search,
      title: labels?.freelancerSteps_Title_2,
      description: labels?.freelancerSteps_Desc_2,
      duration: labels?.freelancerSteps_Duration_2,
      details: [
        labels?.freelancerSteps2_Detail1,
        labels?.freelancerSteps2_Detail2,
        labels?.freelancerSteps2_Detail3,
      ],
    },
    {
      number: "3",
      icon: MessageCircle,
      title: labels?.freelancerSteps_Title_3,
      description: labels?.freelancerSteps_Desc_3,
      duration: labels?.freelancerSteps_Duration_3,
      details: [
        labels?.freelancerSteps3_Detail1,
        labels?.freelancerSteps3_Detail2,
        labels?.freelancerSteps3_Detail3,
      ],
    },
    {
      number: "4",
      icon: CheckCircle,
      title: labels?.freelancerSteps_Title_4,
      description: labels?.freelancerSteps_Desc_4,
      duration: labels?.freelancerSteps_Duration_4,
      details: [
        labels?.freelancerSteps4_Detail1,
        labels?.freelancerSteps4_Detail2,
        labels?.freelancerSteps4_Detail3,
      ],
    },
  ];

  return (
    <section
      id="whyprodoo"
      className="border-t border-[#EAE5FC] relative overflow-hidden lg:pb-15"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-radial from-company/15 via-company/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-gradient-radial from-primary/15 via-primary/5 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="absolute top-1/3 right-1/5 opacity-5">
          <Target
            className="w-20 h-20 text-company animate-spin"
            style={{ animationDuration: "20s" }}
          />
        </div>
        <div className="absolute bottom-1/3 left-1/5 opacity-5">
          <TrendingUp className="w-16 h-16 text-primary" />
        </div>

        <div className="absolute inset-0 opacity-[0.015]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 24px,
                var(--color-border) 24px,
                var(--color-border) 25px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 24px,
                var(--color-border) 24px,
                var(--color-border) 25px
              )
            `,
            }}
          ></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 mt-16">
        <div
          ref={headerRef}
          className={`text-center animate-on-scroll ${
            headerVisible ? "animate-visible" : ""
          }`}
        >
          <div className="flex w-full justify-center text-2xl md:text-[40px] font-medium gap-2">
            <h2 className="text-foreground font-semibold text-[40px]">
              How It Works
            </h2>
          </div>

          <div className="flex w-full  justify-center mt-6">
            <p className="text-[13px]! max-w-187 font-medium md:text-[16px]! w-full text-center md:max-w-4xl mx-auto md:leading-6 leading-4.75 px-2 tracking-[0%] text-muted-foreground">
              From project setup to successful delivery, connect with top
              professionals in just a fews clicks. Our streamlined process
              ensures quality matches and successful outcomes.{" "}
            </p>
          </div>
        </div>
        <div
          ref={companyRef}
          id="for-recruiters"
          className={`mb-11 md:mb-24 animate-on-scroll ${
            companyVisible ? "animate-visible" : ""
          }`}
        >
          <ProcessFlow
            steps={companySteps}
            title={labels?.Recruiters_Lbl}
            icon={Users}
            subtitle={labels?.Recruiters_Desc}
            isCompany={true}
            progressLabel={labels?.Progress_Lbl}
          />
        </div>

        <div className="flex items-center justify-center">
          <div className="flex items-center gap-8">
            <div className="w-32 h-0.5 bg-linear-to-r from-transparent via-company/70 to-company/40"></div>
            <div className="relative">
              <div className="w-6 h-6 bg-linear-to-r from-company to-primary rounded-full shadow-lg">
                <div className="absolute inset-0 w-6 h-6 bg-linear-to-r from-company/40 to-primary/40 rounded-full animate-ping"></div>
              </div>
            </div>
            <div className="w-32 h-0.5 bg-linear-to-r from-primary/40 via-primary/70 to-transparent"></div>
          </div>
        </div>

        <div
          ref={freelancerRef}
          id="for-ipros"
          className={`mb-12 animate-on-scroll ${
            freelancerVisible ? "animate-visible" : ""
          }`}
        >
          <ProcessFlow
            steps={freelancerSteps}
            title={labels?.iPro_Label}
            icon={Briefcase}
            subtitle={labels?.iPro_Desc}
            isCompany={false}
            progressLabel={labels?.Progress_Lbl}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
