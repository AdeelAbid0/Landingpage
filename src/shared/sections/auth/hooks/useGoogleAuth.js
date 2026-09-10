import { useGoogleLogin } from "@react-oauth/google";

/**
 * Mirrors handleGoogleSignIn in prodoo-reactjs's Login.jsx / Signup.jsx:
 * runs the implicit OAuth flow, then hits Google's userinfo endpoint to
 * resolve the profile (email, id, given_name, family_name) since the
 * access token alone doesn't carry it. `onSuccess` receives that profile.
 */
export const useGoogleAuth = ({ onSuccess, onError }) =>
  useGoogleLogin({
    flow: "implicit",
    onSuccess: (tokenResponse) => {
      fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenResponse.access_token}`,
      )
        .then((res) => res.json())
        .then((data) => onSuccess?.(data));
    },
    onError: () => {
      console.error("Google login failed");
      onError?.();
    },
  });
