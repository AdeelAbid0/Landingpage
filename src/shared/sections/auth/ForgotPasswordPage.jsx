"use client";

import { useState } from "react";
import Link from "next/link";
import { isValidEmail } from "@/lib/validators";
import Button from "@/shared/ui/Button";
import InputText from "@/shared/ui/InputText";
import EmailIcon from "@/assets/icons/sms.svg";
import SmsIcon from "@/assets/icons/sms.svg";
import ArrowIcon from "@/assets/icons/arrow-outline.svg";
import AuthLayout from "./components/AuthLayout";

const TOTAL_STEPS = 2;

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSend = () => {
    // TODO: POST to the real forgot-password endpoint once it is ported,
    // then only flip to the confirmation screen on success.
    setIsSent(true);
  };

  const handleBack = () => setIsSent(false);

  const openMailClient = () => {
    const domain = email?.split("@")[1];
    let redirectUrl = `https://${domain}`;
    if (domain === "gmail.com") redirectUrl = "https://mail.google.com";
    else if (["outlook.com", "hotmail.com", "live.com"].includes(domain))
      redirectUrl = "https://outlook.live.com";
    else if (domain === "yahoo.com") redirectUrl = "https://mail.yahoo.com";
    window.open(redirectUrl, "_blank");
  };

  if (isSent) {
    return (
      <AuthLayout currentStep={2} totalSteps={TOTAL_STEPS}>
        <div className="flex w-full flex-col items-center px-8">
          <SmsIcon className="h-12! w-12! shrink-0" />
          <h1 className="m-0! text-[20px]! font-bold! text-foreground lg:text-2xl!">
            Confirm your email
          </h1>
          <p className="m-0! mt-3! text-[13px]! font-normal! text-muted-foreground! lg:text-[16px]!">
            Please take a second to make sure we have your correct email
            address.
          </p>

          <div className="mt-6 flex w-full gap-3">
            <Button
              type="default"
              label="Back"
              onClick={handleBack}
              prefixIcon={<ArrowIcon className="rotate-270" />}
              className="rounded-xl! shrink-0"
            />
            <Button
              type="primary"
              label="Confirm your email"
              onClick={openMailClient}
              className="rounded-xl! flex-1!"
            />
          </div>

          {/* TODO: wire to the real resend-code endpoint once it is ported. */}
          <button
            type="button"
            onClick={handleSend}
            className="mt-5! text-[16px] font-semibold text-primary underline"
          >
            Resend
          </button>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout currentStep={1} totalSteps={TOTAL_STEPS}>
      <h1 className="m-0! text-[20px]! font-bold! text-foreground lg:text-[28px]!">
        Forgot Password?
      </h1>
      <p className="m-0! mt-3 text-[13px]! font-normal! text-muted-foreground lg:text-[16px]!">
        System will send a temporary password to your email, please enter your
        email address.
      </p>

      <div className="mt-11 flex flex-col gap-6 lg:gap-5">
        <InputText
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          label="Email"
          placeholder="Enter your email"
          className="bg-[#F4F2FE]!"
          prefixIcon={<EmailIcon />}
        />

        <Button
          type="primary"
          label="Send"
          onClick={handleSend}
          disabled={!email || !isValidEmail(email)}
          width="full"
          suffixIcon={<ArrowIcon className="rotate-90" />}
          className="rounded-xl!"
        />

        <p className="m-0! text-[16px] font-medium text-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-primary">
            Sign up
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
