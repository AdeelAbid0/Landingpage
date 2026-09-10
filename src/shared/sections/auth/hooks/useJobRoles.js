import { useMemo } from "react";
import { useClientQuery } from "@/api/apiService";
import { API_URL } from "@/api/apiUrl";

/**
 * GET /Profiles/ProfileLookup?filter= - the searchable "Primary job role"
 * lookup on Signup step 3. Mirrors RolesLookup in prodoo-reactjs's
 * landingPageApi.js (the search term is re-fetched on every keystroke via
 * the Select's onSearch, same as the legacy app).
 */
export const useJobRoles = (searchKey = "a") => {
  const filter = searchKey || "a";

  const query = useClientQuery({
    queryKeys: ["jobRoles", filter],
    url: API_URL.Lookup.roles(filter),
  });

  const options = useMemo(
    () =>
      (query.data?.items ?? []).map((role) => ({
        value: String(role.ProfileId),
        label: role.ProfileValue,
      })),
    [query.data],
  );

  return { ...query, options };
};
