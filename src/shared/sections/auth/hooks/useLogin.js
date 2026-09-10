import { useMutation } from "@tanstack/react-query";
import api from "@/api/axiosInstance";
import { API_URL } from "@/api/apiUrl";

/**
 * POST /Account/Login. Mirrors loginAuth in prodoo-reactjs's
 * loginAction.js: the backend returns the session token via the
 * `.aspxauth` response header rather than the JSON body, so this is a
 * bespoke hook (built on axios directly) instead of the generic
 * useClientMutation, which only ever returns `response.data`.
 *
 * On success the token/user are persisted the way axiosInstance's request
 * interceptor already expects (`localStorage.token`), so subsequent calls
 * pick it up automatically.
 *
 * TODO: once a real "remember me" story exists, honor `isRemembered` by
 * choosing between localStorage/sessionStorage - axiosInstance currently
 * only ever reads localStorage.
 */
export const useLogin = () =>
  useMutation({
    mutationFn: async ({ email, password }) => {
      const response = await api.post(API_URL.Account.login, {
        email,
        password,
      });
      const { data } = response;

      if (data?.success) {
        const token = response.headers?.[".aspxauth"];
        if (token) localStorage.setItem("token", token);
        if (data.items) localStorage.setItem("user", JSON.stringify(data.items));
      }

      return data;
    },
  });
