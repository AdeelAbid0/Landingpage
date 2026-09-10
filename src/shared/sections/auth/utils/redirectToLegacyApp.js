/**
 * Hands an authenticated session off to prodoo-reactjs (the two apps are
 * separate origins now, so localStorage can't just be shared). Mirrors
 * LandingPage.jsx's redirectLoginAuthCHeck() on that side: its
 * /redirected-login route reads `token` off the query string, resolves the
 * user with it (GET /User/GetUser with the token as the .ASPXAUTH header),
 * and saves both into its own storage before landing on the dashboard - so
 * a hard cross-origin redirect carrying the token is all this side has to
 * do. NEXT_PUBLIC_REDIRECT_URL points at wherever that app is running
 * (e.g. http://localhost:3002/ locally).
 */
export const redirectToLegacyApp = (token) => {
  const base = (process.env.NEXT_PUBLIC_REDIRECT_URL || "/").replace(/\/$/, "");
  // eslint-disable-next-line @next/next/no-location-assign-relative-destination -- cross-origin hand-off, not an internal Next.js route.
  window.location.href = `${base}/redirected-login?token=${encodeURIComponent(token)}`;
};
