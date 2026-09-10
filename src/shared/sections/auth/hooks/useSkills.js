import { useMemo } from "react";
import { useClientQuery } from "@/api/apiService";
import { API_URL } from "@/api/apiUrl";

/**
 * GET /Skills/SkillsLookup?filter= - the searchable "Skills" lookup on
 * Signup step 3. Mirrors SkillsLookup in prodoo-reactjs's
 * landingPageApi.js.
 */
export const useSkills = (searchKey = "a") => {
  const filter = searchKey || "a";

  const query = useClientQuery({
    queryKeys: ["skills", filter],
    url: API_URL.Lookup.skills(filter),
  });

  const options = useMemo(
    () =>
      (query.data?.items ?? []).map((skill) => ({
        value: String(skill.SkillId),
        label: skill.SkillValue,
      })),
    [query.data],
  );

  return { ...query, options };
};
