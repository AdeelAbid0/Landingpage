import { useClientMutation } from "@/api/apiService";
import { API_URL } from "@/api/apiUrl";

/**
 * POST /Account/Register - creates the account. Mirrors signUpApi in
 * prodoo-reactjs's landingPageApi.js; the payload shape (PascalCase root
 * fields, plus lowercase roleId/skills for freelancers - see
 * handleSubmit() in the legacy Signup.jsx) is whatever that endpoint
 * expects, kept as-is here.
 */
export const useSignUp = () =>
  useClientMutation({
    url: API_URL.Account.register,
    method: "POST",
  });
