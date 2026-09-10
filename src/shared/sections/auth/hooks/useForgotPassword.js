import { useClientMutation } from "@/api/apiService";
import { API_URL } from "@/api/apiUrl";

/**
 * GET /Account/SendEmail - sends the temporary-password email and also
 * powers the "Resend" action on the confirmation screen (same endpoint,
 * called again). Mirrors getForgotPasswordApi in prodoo-reactjs's
 * landingPageApi.js.
 */
export const useForgotPassword = () =>
  useClientMutation({
    url: API_URL.Account.forgotPassword,
    method: "GET",
  });
