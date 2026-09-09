"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Divider, Input, Radio } from "antd";
import { isValidEmail, isValidPassword } from "@/lib/validators";
import Button from "@/shared/ui/Button";
import InputText from "@/shared/ui/InputText";
import Select from "@/shared/ui/Select";
import Checkbox from "@/shared/ui/Checkbox";
import GoogleIcon from "@/assets/icons/google-icon.svg";
import SmsIcon from "@/assets/icons/sms-signup.svg";
import AuthLayout from "./components/AuthLayout";

const TOTAL_STEPS = 3;

const initialFormData = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
  selectedCountry: null,
  isFreelancer: true,
  primaryJobRole: null,
  skills: [null, null, null],
  agreedToTerms: false,
};

export default function SignupPage() {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [isDone, setIsDone] = useState(false);

  // TODO: replace with the real GET /Country, /Role and /Skill lookups
  // (see getAllCountriesApi / RolesLookup / SkillsLookup in landingPageApi.js)
  // once those endpoints are ported to src/api/apiUrl.js.
  const countryOptions = [];
  const jobRoleOptions = [];
  const skillOptions = [];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillChange = (index, value) => {
    setFormData((prev) => {
      const skills = [...prev.skills];
      skills[index] = value;
      return { ...prev, skills };
    });
  };

  const handleNextStep = () => {
    // TODO: run CheckDuplicateUserApi(formData.email) before advancing
    // past step 1, as the original flow does.
    setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  };

  const handlePrevStep = () => {
    if (currentStep === 1) {
      router.push("/");
      return;
    }
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    // TODO: POST the payload to signUpApi() once it is ported, then only
    // flip to the confirmation screen on success.
    setIsDone(true);
  };

  const openMailClient = () => {
    const domain = formData.email?.split("@")[1];
    let redirectUrl = `https://${domain}`;
    if (domain === "gmail.com") redirectUrl = "https://mail.google.com";
    else if (["outlook.com", "hotmail.com", "live.com"].includes(domain))
      redirectUrl = "https://outlook.live.com";
    else if (domain === "yahoo.com") redirectUrl = "https://mail.yahoo.com";
    window.open(redirectUrl, "_blank");
  };

  const passwordsMismatch =
    formData.password &&
    formData.confirmPassword &&
    formData.password !== formData.confirmPassword;

  if (isDone) {
    return (
      <AuthLayout showBackArrow={false}>
        <div className="flex w-full flex-col items-center px-8">
          <SmsIcon />
          <h1 className="m-0! text-[20px]! font-semibold! text-foreground lg:text-2xl!">
            Confirm your email address.
          </h1>
          <label className="m-0! mt-3! text-[13px]! font-normal! text-muted-foreground lg:text-[16px]!">
            Please take a second to make sure we have your correct email
            address.
          </label>
          <Button
            type="primary"
            label="Confirm your email address."
            onClick={openMailClient}
            className="mt-6 lg:h-12!"
          />
          {/* TODO: wire to getEmailConfirmationTokenApi once ported. */}
          <button type="button" className="mt-5! text-[16px] font-semibold text-primary">
            Resend Email
          </button>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout onBack={handlePrevStep}>
      <div className="mt-16 lg:mt-0">
        <h1 className="m-0! text-[20px]! font-semibold! text-foreground lg:text-2xl!">
          {currentStep === 1
            ? "Get Your Free Account."
            : "Complete your free account setup."}
        </h1>
        <p className="mt-3! text-[13px]! font-normal! text-muted-foreground lg:text-[16px]!">
          {currentStep === 1
            ? "Please enter your details or Sign-up with social account(s)."
            : formData.email}
        </p>
      </div>

      <div className="mt-6 flex justify-center gap-5 lg:mt-11">
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className={`flex h-8 w-full max-w-35 items-start justify-center border-b-[3px] transition-colors duration-300 ease-in-out lg:h-11 ${
              currentStep >= step ? "border-primary" : "border-[#C6C6C6]"
            }`}
          >
            <span
              className={`text-sm font-medium transition-colors duration-300 ease-in-out lg:text-[18px] ${
                currentStep >= step ? "text-primary" : "text-[#C6C6C6]"
              }`}
            >
              Step {step}
            </span>
          </div>
        ))}
      </div>

      {currentStep === 1 && (
        <div className="mt-6 flex flex-col gap-5">
          <InputText
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            label="Email"
            placeholder="Enter your email"
          />

          <Button
            type="primary"
            label="Continue"
            onClick={handleNextStep}
            disabled={!formData.email || !isValidEmail(formData.email)}
            width="full"
            className="rounded-xl!"
          />

          <div className="flex h-9 items-center">
            <Divider plain className="m-0!">
              Or
            </Divider>
          </div>

          {/* TODO: wire Google sign-up once @react-oauth/google + a client ID are configured. */}
          <button
            type="button"
            className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-white lg:h-12"
          >
            <GoogleIcon />
            <span className="text-sm font-normal text-muted-foreground lg:text-[16px]">
              Sign in with Google.
            </span>
          </button>

          <p className="m-0! text-sm font-normal text-foreground lg:text-[16px]">
            Already have an account?{" "}
            <Link href="/login" className="text-primary">
              Log In
            </Link>
          </p>
        </div>
      )}

      {currentStep === 2 && (
        <div className="mt-6 flex flex-col gap-5">
          <div className="flex justify-between gap-3">
            <InputText
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              label="First Name"
              placeholder="Enter First Name"
            />
            <InputText
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              label="Last Name"
              placeholder="Enter Last Name"
            />
          </div>

          <div className="flex flex-col items-start gap-2">
            <label className="text-sm font-normal lg:text-[16px]">
              Password
            </label>
            <Input.Password
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="At least 8 characters."
              className="w-full!"
            />
            {formData.password && !isValidPassword(formData.password) && (
              <span className="text-xs text-danger">
                Minimum eight characters, at least one letter and one number.
              </span>
            )}
          </div>

          <div className="flex flex-col items-start gap-2">
            <label className="text-sm font-normal lg:text-[16px]">
              Confirm Password
            </label>
            <Input.Password
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm your password"
              className="w-full!"
            />
            {passwordsMismatch && (
              <span className="text-xs text-danger">
                The new passwords you entered do not match!
              </span>
            )}
          </div>

          <Select
            label="Select Country"
            placeholder="Select Country"
            options={countryOptions}
            value={formData.selectedCountry}
            onChange={(value) => handleSelectChange("selectedCountry", value)}
            showSearch
          />

          <Button
            type="primary"
            label="Continue"
            onClick={handleNextStep}
            width="full"
            className="rounded-xl!"
            disabled={
              !formData.firstName ||
              !formData.lastName ||
              !formData.password ||
              !formData.confirmPassword ||
              !formData.selectedCountry ||
              passwordsMismatch ||
              !isValidPassword(formData.password)
            }
          />
        </div>
      )}

      {currentStep === 3 && (
        <div className="mt-11 flex flex-col">
          <p className="mb-2! flex w-full justify-start">I am a</p>
          <Radio.Group
            value={formData.isFreelancer ? "freelancer" : "hiringManager"}
            onChange={(e) =>
              handleSelectChange("isFreelancer", e.target.value === "freelancer")
            }
            className="w-full"
          >
            <div className="flex w-full gap-3">
              <div className="flex h-11 w-full items-center rounded-xl bg-white pl-4 lg:h-12">
                <Radio value="freelancer">Freelancer</Radio>
              </div>
              <div className="flex h-11 w-full items-center rounded-xl bg-white pl-4 lg:h-12">
                <Radio value="hiringManager">Hiring Manager</Radio>
              </div>
            </div>
          </Radio.Group>

          {formData.isFreelancer && (
            <div>
              <div className="mt-5 flex flex-col items-start gap-2">
                <label className="text-[16px]! font-normal text-foreground">
                  Primary job role
                </label>
                <Select
                  placeholder="Select job role"
                  options={jobRoleOptions}
                  value={formData.primaryJobRole}
                  onChange={(value) => handleSelectChange("primaryJobRole", value)}
                  showSearch
                />
              </div>

              <div className="mt-5 flex flex-col items-start gap-2">
                <label className="text-[16px]! font-normal text-foreground">
                  Skills
                </label>
                <div className="flex w-full gap-3">
                  {[0, 1, 2].map((index) => (
                    <Select
                      key={index}
                      options={skillOptions}
                      placeholder={`Skill ${index + 1}`}
                      className="max-w-[33%]!"
                      value={formData.skills[index]}
                      onChange={(value) => handleSkillChange(index, value)}
                      showSearch
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="mt-5 flex h-auto w-full items-start text-start">
            <Checkbox
              checked={formData.agreedToTerms}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, agreedToTerms: e.target.checked }))
              }
            />
            {/* TODO: wire these to the Terms/Privacy/Agreement drawers once the
                signup-config CMS content (getSignUpConfigsApi) is ported. */}
            <span className="pl-2 text-sm lg:text-[16px]">
              Yes I understand and agree to the{" "}
              <span className="text-primary">ProDoo&apos;s Terms of services.</span>
              , including the{" "}
              <span className="text-primary">User agreement</span> and{" "}
              <span className="text-primary">Privacy policy</span>.
            </span>
          </div>

          <Button
            type="primary"
            label="Create Account"
            onClick={handleSubmit}
            disabled={!formData.agreedToTerms}
            width="full"
            className="mt-6 rounded-xl!"
          />
        </div>
      )}
    </AuthLayout>
  );
}
