"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Divider, Radio, message } from "antd";
import { isValidEmail, isValidPassword } from "@/lib/validators";
import Button from "@/shared/ui/Button";
import InputText from "@/shared/ui/InputText";
import Select from "@/shared/ui/Select";
import Checkbox from "@/shared/ui/Checkbox";
import GoogleIcon from "@/assets/icons/google-icon.svg";
import SmsIcon from "@/assets/icons/sms-signup.svg";
import EmailIcon from "@/assets/icons/sms.svg";
import ProfileIcon from "@/assets/icons/profile-filled.svg";
import LockIcon from "@/assets/icons/lock.svg";
import EyeIcon from "@/assets/icons/eye.svg";
import EyeSlashIcon from "@/assets/icons/eye-slash.svg";
import FlagIcon from "@/assets/icons/flag.svg";
import ArrowIcon from "@/assets/icons/arrow-outline.svg";
import AuthLayout from "./components/AuthLayout";
import { useCountries } from "./hooks/useCountries";
import { useJobRoles } from "./hooks/useJobRoles";
import { useSkills } from "./hooks/useSkills";
import { useCheckDuplicateUser } from "./hooks/useCheckDuplicateUser";
import { useSignUp } from "./hooks/useSignUp";
import { useResendEmailConfirmation } from "./hooks/useResendEmailConfirmation";
import { useLogin } from "./hooks/useLogin";
import { useGoogleAuth } from "./hooks/useGoogleAuth";

const SELECT_ROUNDED_CLASS =
  "rounded-full! border! bg-[#F4F2FE]! h-11! md:h-12! [&_.ant-select-content]:text-left!";

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

// Mirrors Signup.jsx reading location.state.credentials in
// prodoo-reactjs: the login page stashes the Google profile in
// sessionStorage before routing here (no router-state hand-off in
// Next.js), so pick it up once, up front, and prefill the form the same
// way the legacy page does from its initial state.
const getInitialFormData = () => {
  if (typeof window === "undefined") return initialFormData;

  const stored = sessionStorage.getItem("googleCredentials");
  if (!stored) return initialFormData;

  sessionStorage.removeItem("googleCredentials");
  const credentials = JSON.parse(stored);
  return {
    ...initialFormData,
    email: credentials.email || "",
    firstName: credentials.given_name || "",
    lastName: credentials.family_name || "",
    password: credentials.id || "",
    confirmPassword: credentials.id || "",
  };
};

export default function SignupPage() {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(getInitialFormData);
  const [isDone, setIsDone] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [roleSearch, setRoleSearch] = useState("a");
  const [skillSearch, setSkillSearch] = useState("a");

  const { options: countryOptions, isLoading: isCountriesLoading } =
    useCountries();
  const { options: jobRoleOptions } = useJobRoles(roleSearch);
  const { options: skillOptions } = useSkills(skillSearch);
  const checkDuplicateUser = useCheckDuplicateUser();
  const signUp = useSignUp();
  const resendEmailConfirmation = useResendEmailConfirmation();
  const login = useLogin();

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
    if (currentStep !== 1) {
      setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
      return;
    }

    // useClientMutation already unwraps the axios response to
    // `response.data`, so `result` here is what the legacy app reads as
    // `res.data` (see useCheckDuplicateUser.js).
    checkDuplicateUser.mutate(formData.email, {
      onSuccess: (result) => {
        if (result?.success && result?.message === "UserExisted") {
          message.error("This email is already registered.");
          return;
        }
        setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
      },
      onError: () => {
        message.error("Something went wrong. Please try again.");
      },
    });
  };

  const handlePrevStep = () => {
    if (currentStep === 1) {
      router.push("/");
      return;
    }
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    const payload = {
      Email: formData.email,
      CountryId: formData.selectedCountry,
      FirstName: formData.firstName,
      IsFreelancer: formData.isFreelancer,
      LastName: formData.lastName,
      Password: formData.password,
      ...(formData.isFreelancer && {
        roleId: formData.primaryJobRole,
        skills: formData.skills.filter((skill) => skill !== null),
      }),
    };

    signUp.mutate(payload, {
      onSuccess: (result) => {
        if (result?.success) {
          setIsDone(true);
        } else {
          message.error(
            result?.message || "Something went wrong. Please try again.",
          );
        }
      },
      onError: (error) => {
        message.error(
          error?.message || "Something went wrong. Please try again.",
        );
      },
    });
  };

  // Mirrors loginToCore's social-login branch in prodoo-reactjs's
  // Signup.jsx: try logging the google account straight in (email +
  // google id as the password) in case it's already registered; if that
  // comes back "incorrect" (no account yet), prefill the form from the
  // profile instead of redirecting, since we're already on signup.
  const handleGoogleSuccess = (profile) => {
    const { email, id } = profile;

    login.mutate(
      { email, password: id },
      {
        onSuccess: (result) => {
          if (result?.success) {
            router.push("/");
          } else if (result?.message?.includes("incorrect")) {
            setFormData((prev) => ({
              ...prev,
              email: profile.email || "",
              firstName: profile.given_name || "",
              lastName: profile.family_name || "",
              password: profile.id || "",
              confirmPassword: profile.id || "",
            }));
          } else {
            message.error(
              result?.message || "Something went wrong. Please try again.",
            );
          }
        },
        onError: () => {
          message.error("Something went wrong. Please try again.");
        },
      },
    );
  };

  const handleGoogleSignIn = useGoogleAuth({ onSuccess: handleGoogleSuccess });

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
      <AuthLayout>
        <div className="flex w-full flex-col items-center px-8">
          <SmsIcon />
          <h1 className="m-0! text-[20px]! font-semibold! text-foreground lg:text-2xl!">
            Confirm your email address.
          </h1>
          <label className="m-0! mt-3! text-[13px]! font-normal! text-muted-foreground lg:text-[16px]!">
            Please take a second to make sure we have your correct email
            address.
          </label>
          <div className="mt-6 flex w-full gap-3">
            <Button
              type="default"
              label="Back"
              onClick={() => setIsDone(false)}
              prefixIcon={<ArrowIcon className="rotate-270" />}
              className="rounded-xl! shrink-0"
            />
            <Button
              type="primary"
              label="Confirm your email"
              onClick={openMailClient}
              className="rounded-xl! flex-1! lg:h-12!"
            />
          </div>
          <button
            type="button"
            onClick={() =>
              resendEmailConfirmation.mutate(formData.email, {
                onSuccess: () => message.success("Confirmation email sent."),
                onError: () =>
                  message.error(
                    "Could not resend the email. Please try again.",
                  ),
              })
            }
            disabled={resendEmailConfirmation.isPending}
            className="mt-9! text-sm! font-semibold text-primary disabled:opacity-50"
          >
            Resend Email
          </button>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout currentStep={currentStep} totalSteps={TOTAL_STEPS}>
      <div className="mt-16 lg:mt-0">
        <h1 className="m-0! text-[20px]! font-bold! text-foreground lg:text-2xl!">
          {currentStep === 1
            ? "Get Your Free Account."
            : "Complete your free Account Setup"}
        </h1>
        <p className="mt-3! text-[13px]! font-normal! text-muted-foreground! lg:text-[16px]!">
          {currentStep === 1
            ? "Please enter your details or Sign up with google"
            : formData.email}
        </p>
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
            className="bg-[#F4F2FE]!"
            prefixIcon={<EmailIcon />}
          />

          <Button
            type="primary"
            label="Continue"
            onClick={handleNextStep}
            disabled={!formData.email || !isValidEmail(formData.email)}
            isLoading={checkDuplicateUser.isPending}
            width="full"
            suffixIcon={<ArrowIcon className="rotate-90" />}
            className="rounded-xl!"
          />

          <div className="flex h-9 items-center">
            <Divider plain className="m-0!">
              Or
            </Divider>
          </div>

          <button
            type="button"
            onClick={() => handleGoogleSignIn()}
            className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#F4F2FE] lg:h-12"
          >
            <GoogleIcon className="h-5! w-5! shrink-0" />
            <span className="text-sm! font-medium text-foreground ">
              Continue with Google
            </span>
          </button>

          <p className="m-0! text-[16px] font-medium text-foreground">
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
              className="bg-[#F4F2FE]!"
              prefixIcon={<ProfileIcon />}
            />
            <InputText
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              label="Last Name"
              placeholder="Enter Last Name"
              className="bg-[#F4F2FE]!"
            />
          </div>

          <div className="flex w-full flex-col gap-2">
            <InputText
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleInputChange}
              label="Password"
              placeholder="At least 8 characters."
              className="bg-[#F4F2FE]!"
              prefixIcon={<LockIcon />}
              suffixIcon={
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="flex cursor-pointer items-center"
                >
                  {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                </button>
              }
            />
            {formData.password && !isValidPassword(formData.password) && (
              <span className="text-left text-xs text-danger">
                Minimum eight characters, at least one letter and one number.
              </span>
            )}
          </div>

          <div className="flex w-full flex-col gap-2">
            <InputText
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleInputChange}
              label="Confirm Password"
              placeholder="Confirm your password"
              className="bg-[#F4F2FE]!"
              prefixIcon={<LockIcon />}
              suffixIcon={
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                  className="flex cursor-pointer items-center"
                >
                  {showConfirmPassword ? <EyeSlashIcon /> : <EyeIcon />}
                </button>
              }
            />
            {passwordsMismatch && (
              <span className="text-left text-xs text-danger">
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
            filterOption={(input, option) =>
              option?.label?.toLowerCase().includes(input.toLowerCase())
            }
            loading={isCountriesLoading}
            prefix={<FlagIcon />}
            className={SELECT_ROUNDED_CLASS}
          />

          <div className="flex gap-3">
            <Button
              type="default"
              label="Back"
              onClick={handlePrevStep}
              prefixIcon={<ArrowIcon className="rotate-270" />}
              className="rounded-xl! shrink-0"
            />
            <Button
              type="primary"
              label="Continue"
              onClick={handleNextStep}
              suffixIcon={<ArrowIcon className="rotate-90" />}
              className="rounded-xl! flex-1!"
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
        </div>
      )}

      {currentStep === 3 && (
        <div className="mt-11 flex flex-col">
          <p className="mb-2! flex w-full justify-start">I am a</p>
          <Radio.Group
            value={formData.isFreelancer ? "freelancer" : "hiringManager"}
            onChange={(e) =>
              handleSelectChange(
                "isFreelancer",
                e.target.value === "freelancer",
              )
            }
            className="w-full"
          >
            <div className="flex w-full gap-3">
              <div className="flex h-11 w-full items-center rounded-full bg-[#F4F2FE] pl-4 lg:h-12">
                <Radio value="freelancer">Freelancer</Radio>
              </div>
              <div className="flex h-11 w-full items-center rounded-full bg-[#F4F2FE] pl-4 lg:h-12">
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
                  onChange={(value) =>
                    handleSelectChange("primaryJobRole", value)
                  }
                  onSearch={(value) => setRoleSearch(value || "a")}
                  showSearch
                  filterOption={false}
                  className={SELECT_ROUNDED_CLASS}
                />
              </div>

              <div className="mt-5 flex flex-col items-start gap-2">
                <label className="text-[16px]! font-normal text-foreground">
                  Top 3 skills
                </label>
                <div className="flex flex-col w-full! gap-3">
                  {[0, 1, 2].map((index) => (
                    <Select
                      key={index}
                      options={skillOptions}
                      placeholder={`Skill ${index + 1}`}
                      className={`${SELECT_ROUNDED_CLASS}`}
                      value={formData.skills[index]}
                      onChange={(value) => handleSkillChange(index, value)}
                      onSearch={(value) => setSkillSearch(value || "a")}
                      showSearch
                      filterOption={false}
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
                setFormData((prev) => ({
                  ...prev,
                  agreedToTerms: e.target.checked,
                }))
              }
            />
            {/* TODO: wire these to the Terms/Privacy/Agreement drawers once the
                signup-config CMS content (getSignUpConfigsApi) is ported. */}
            <span className="pl-2 text-sm lg:text-[16px]">
              Yes I understand and agree to the{" "}
              <span className="text-primary">
                ProDoo&apos;s Terms of services.
              </span>
              , including the{" "}
              <span className="text-primary">User agreement</span> and{" "}
              <span className="text-primary">Privacy policy</span>.
            </span>
          </div>

          <div className="mt-6 flex gap-3">
            <Button
              type="default"
              label="Back"
              onClick={handlePrevStep}
              prefixIcon={<ArrowIcon className="rotate-270" />}
              className="rounded-xl! shrink-0 max-w-21!"
            />
            <Button
              type="primary"
              label="Create Account"
              onClick={handleSubmit}
              disabled={!formData.agreedToTerms}
              isLoading={signUp.isPending}
              className="rounded-xl! flex-1!"
            />
          </div>
        </div>
      )}
    </AuthLayout>
  );
}
