"use client";

import { useState } from "react";
import LetterIcon from "@/assets/icons/letter.svg";
import ClockIcon from "@/assets/icons/clock.svg";
import ShieldIcon from "@/assets/icons/shield-tick-outlined.svg";
import PlainIcon from "@/assets/icons/plain.svg";
import InputText from "@/components/ui/InputText";
import InputTextArea from "@/components/ui/InputTextArea";
import Button from "@/components/ui/Button";

const SUPPORT_CARDS = [
  {
    title: "Customer Support",
    description: "Get help with your account, projects, or payments.",
  },
  {
    title: "Hiring Support",
    description:
      "Need help finding a freelancer or building a team? Our specialists can guide you",
  },
  {
    title: "Freelancer Support",
    description:
      "Need help with your profile, proposals, or account settings? We're here to assist",
  },
];

const INITIAL_FORM = { fullName: "", email: "", message: "" };

export default function ContactusForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | success

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextErrors = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) nextErrors.message = "Message is required.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    // TODO: wire this up to the contact-us API endpoint once it's available.
    setStatus("success");
    setForm(INITIAL_FORM);
  };

  return (
    <section
      aria-labelledby="contact-form-heading"
      className="flex w-full justify-center pt-16"
    >
      <div className="flex w-full items-center max-w-300 gap-31.5">
        <div className="flex flex-col w-full items-center max-w-148 gap-6">
          <div className="flex flex-col w-full gap-12">
            <div className="flex flex-col gap-4">
              <h2
                id="contact-form-heading"
                className="text-foreground text-[40px] font-semibold leading-14"
              >
                We&apos;re Here to Help
              </h2>
              <p className="text-muted-foreground text-[16px] leading-6 font-normal">
                Have a question or need assistance? Reach out to us, and our
                team will respond as quickly as possible.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-6 mt-6">
            <div className="flex w-full gap-6">
              <div className="flex w-full flex-col gap-4 border border-[#EAE5FC] bg-white rounded-2xl p-6">
                <span
                  aria-hidden="true"
                  className="flex w-12 h-12 shrink-0 justify-center items-center bg-[#F4F2FE] rounded-full"
                >
                  <LetterIcon />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-foreground text-[16px] font-semibold leading-5">
                    Email
                  </h3>
                  <p className="text-muted-foreground text-sm leading-5 font-normal">
                    <a
                      href="mailto:support@prodoo.com"
                      className="hover:underline"
                    >
                      support@prodoo.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-4 border border-[#EAE5FC] bg-white rounded-2xl p-6">
                <span
                  aria-hidden="true"
                  className="flex w-12 h-12 shrink-0 justify-center items-center bg-[#F4F2FE] rounded-full"
                >
                  <ClockIcon />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-foreground text-[16px] font-semibold leading-5">
                    Support Hours
                  </h3>
                  <p className="text-muted-foreground text-sm leading-5 font-normal">
                    9:00 AM – 6:00 PM (PKT)
                  </p>
                </div>
              </div>
            </div>
          </div>
          {SUPPORT_CARDS.map(({ title, description }) => (
            <div
              key={title}
              className="flex gap-4 w-full border border-[#EAE5FC] rounded-2xl p-4"
            >
              <span
                aria-hidden="true"
                className="flex w-12 h-12 shrink-0 justify-center items-center bg-[#F4F2FE] rounded-full"
              >
                <ShieldIcon />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-foreground text-[16px] font-semibold leading-5">
                  {title}
                </h3>
                <p className="text-muted-foreground text-[13px] leading-5 font-normal tracking-normal">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full max-w-121.5 gap-6 p-10 bg-white border border-[#EAE5FC] rounded-2xl">
          <div className="flex gap-5 items-center">
            <div
              aria-hidden="true"
              className="flex w-14 h-14 items-center justify-center shrink-0 bg-primary rounded-xl"
            >
              <PlainIcon />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[20px] font-semibold leading-6 text-foreground">
                Send Us a Message
              </h3>
              <p className="text-muted-foreground font-normal text-sm">
                We&apos;ll respond within 24 hours
              </p>
            </div>
          </div>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <InputText
              name="fullName"
              label="Name *"
              placeholder="Your full name"
              autoComplete="name"
              value={form.fullName}
              onChange={handleChange("fullName")}
              required
            />
            {errors.fullName && (
              <span className="text-danger text-sm -mt-4">
                {errors.fullName}
              </span>
            )}
            <InputText
              name="email"
              type="email"
              label="Email *"
              placeholder="Your email address"
              autoComplete="email"
              value={form.email}
              onChange={handleChange("email")}
              required
            />
            {errors.email && (
              <span className="text-danger text-sm -mt-4">
                {errors.email}
              </span>
            )}
            <InputTextArea
              name="message"
              label="Message *"
              placeholder="Your message..."
              rows={8}
              value={form.message}
              onChange={handleChange("message")}
              required
            />
            {errors.message && (
              <span className="text-danger text-sm -mt-4">
                {errors.message}
              </span>
            )}
            <Button
              type={"primary"}
              htmlType={"submit"}
              label="Send message"
              className="rounded-[10px]!"
            />
            {status === "success" && (
              <p className="text-success text-sm font-medium">
                Thanks for reaching out! We&apos;ll get back to you soon.
              </p>
            )}
            <p className="text-muted-foreground text-xs font-medium leading-4">
              By submitting this form, you agree to our{" "}
              <span className="text-primary">Privacy Policy</span> and{" "}
              <span className="text-primary">Terms of Service</span>. We&apos;ll
              never share your information with third parties.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
