"use client";

import { useState } from "react";
import Link from "next/link";
import { Divider } from "antd";
import { isValidEmail } from "@/lib/validators";
import Button from "@/shared/ui/Button";
import InputText from "@/shared/ui/InputText";
import Checkbox from "@/shared/ui/Checkbox";
import GoogleIcon from "@/assets/icons/google-icon.svg";
import EyeIcon from "@/assets/icons/eye.svg";
import EyeSlashIcon from "@/assets/icons/eye-slash.svg";
import SmsIcon from "@/assets/icons/sms.svg";
import LockIcon from "@/assets/icons/lock.svg";
import ArrowIcon from "@/assets/icons/arrow-outline.svg";
import AuthLayout from "./components/AuthLayout";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [invalid, setInvalid] = useState({ email: false, password: false });
  const [isRemembered, setIsRemembered] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setInvalid((prev) => ({
      ...prev,
      [name]: name === "email" ? !isValidEmail(value) : !value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValid = isValidEmail(form.email);
    const passwordValid = form.password.length >= 6;

    if (!emailValid || !passwordValid) {
      setInvalid({ email: !emailValid, password: !passwordValid });
      return;
    }

    // TODO: wire to the real auth endpoint once /auth/login is ported to
    // src/api/apiUrl.js (see loginAction.js in the prodoo-reactjs app).
    setIsLoading(true);
  };

  return (
    <AuthLayout>
      <h1 className="m-0! text-[20px]! font-bold! text-foreground lg:text-[28px]!">
        Welcome back
      </h1>
      <p className="m-0! mt-3 text-[13px]! font-normal! text-muted-foreground lg:text-[16px]!">
        Please enter your email or log in with google.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-11 flex flex-col gap-6 lg:gap-5"
      >
        <div className="flex w-full flex-col gap-2">
          <InputText
            name="email"
            type="email"
            value={form.email}
            onChange={handleFieldChange}
            label="Email"
            placeholder="Enter your email"
            status={invalid.email ? "error" : ""}
            className="bg-[#F4F2FE]!"
            prefixIcon={<SmsIcon />}
          />
          {invalid.email && (
            <span className="text-left text-sm text-danger">
              Please enter a valid email address.
            </span>
          )}
        </div>

        <div className="flex w-full flex-col gap-2">
          <InputText
            name="password"
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={handleFieldChange}
            label="Password"
            placeholder="At least 8 characters."
            status={invalid.password ? "error" : ""}
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
          {invalid.password && (
            <span className="text-left text-sm text-danger">
              Password must be at least 8 characters.
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <Checkbox
            checked={isRemembered}
            onChange={() => setIsRemembered((prev) => !prev)}
            label="Remember me"
          />
          <Link
            href="/forgot-password"
            className="m-0! text-[13px] font-normal text-primary lg:text-[16px]"
          >
            Forgot Password?
          </Link>
        </div>

        <Button
          type="primary"
          htmlType="submit"
          label="Login"
          isLoading={isLoading}
          width="full"
          suffixIcon={<ArrowIcon className="rotate-90" />}
          className="rounded-xl!"
        />

        <div className="flex h-9 items-center">
          <Divider plain className="m-0!">
            Or
          </Divider>
        </div>

        {/* TODO: wire Google sign-in once @react-oauth/google + a client ID are configured. */}
        <button
          type="button"
          className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#F4F2FE] lg:h-12"
        >
          <GoogleIcon className="h-5! w-5! shrink-0" />
          <span className="text-sm! font-medium text-foreground ">
            Continue with Google
          </span>
        </button>

        <p className="m-0! text-[16px] font-medium text-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-primary">
            Sign up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
