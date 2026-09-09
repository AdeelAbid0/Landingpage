"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import Step6 from "./components/Step6";
import Step7 from "./components/Step7";
import Stepper from "./components/Stepper";

export default function Postjob() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (step !== 1) return;

    const timer = setTimeout(() => setStep(2), 1000);
    return () => clearTimeout(timer);
  }, [step]);

  const handleBack = () => {
    if (step <= 2) {
      router.push("/");
      return;
    }
    setStep((prev) => prev - 1);
  };

  return (
    <main className="relative flex flex-col h-[calc(100vh-73px)] w-full">
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 setStep={setStep} />}
      {step === 3 && <Step3 setStep={setStep} />}
      {step === 4 && <Step4 setStep={setStep} />}
      {step === 5 && <Step5 setStep={setStep} />}
      {step === 6 && <Step6 setStep={setStep} />}
      {step === 7 && <Step7 setStep={setStep} />}
      {step !== 1 && (
        <div className="absolute bottom-0 left-0 right-0">
          <Stepper onBack={handleBack} />
        </div>
      )}
    </main>
  );
}
