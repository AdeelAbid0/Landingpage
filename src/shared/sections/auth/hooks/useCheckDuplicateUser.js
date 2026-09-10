import { useClientMutation } from "@/api/apiService";
import { API_URL } from "@/api/apiUrl";

/**
 * GET /Account/CheckDuplicateUser - gates Signup step 1 -> step 2. Mirrors
 * CheckDuplicateUserApi + the CheckDuplicateUser() handler in
 * prodoo-reactjs's Signup.jsx.
 *
 * Modeled as a mutation (not a query) because it's fired imperatively on
 * "Continue", not on mount. useClientMutation already unwraps the axios
 * response to `response.data`, so callers read `result.success` /
 * `result.message` directly (the legacy app reads `res.data.success`
 * because its CheckDuplicateUserApi returns the raw axios response).
 */
export const useCheckDuplicateUser = () =>
  useClientMutation({
    url: API_URL.Account.checkDuplicateUser,
    method: "GET",
  });
