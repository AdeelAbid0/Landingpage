"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";

// Mirrors the <GoogleOAuthProvider> wrapping in prodoo-reactjs's App.jsx -
// same client id, same job (makes useGoogleLogin work anywhere below it).
const GOOGLE_CLIENT_ID =
  "937962890378-0v1mdfv3bdv70tfutsps8jo4ivino06m.apps.googleusercontent.com";

export default function GoogleAuthProvider({ children }) {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      {children}
    </GoogleOAuthProvider>
  );
}
