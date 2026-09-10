import { useClientMutation } from "@/api/apiService";
import { API_URL } from "@/api/apiUrl";

/**
 * GET /Account/GetEmailConfirmationToken - the "Resend Email" action on
 * the Signup confirmation screen. Mirrors getEmailConfirmationTokenApi +
 * confirm() in prodoo-reactjs's Signup.jsx.
 */
export const useResendEmailConfirmation = () =>
  useClientMutation({
    url: API_URL.Account.getEmailConfirmationToken,
    method: "GET",
  });
