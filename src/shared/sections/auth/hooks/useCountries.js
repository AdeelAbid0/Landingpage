import { useMemo } from "react";
import { useClientQuery } from "@/api/apiService";
import { API_URL } from "@/api/apiUrl";

/**
 * GET /Country/AllLocationsLookup - powers the Signup "Select Country"
 * field. Mirrors getAllCountriesApi in prodoo-reactjs's landingPageApi.js.
 */
export const useCountries = () => {
  const query = useClientQuery({
    queryKeys: ["countries"],
    url: API_URL.Lookup.countries,
    // Country list barely changes; keep it fresh for an hour instead of
    // the default 5 minutes.
    staleTime: 60 * 60 * 1000,
  });

  const options = useMemo(
    () =>
      (query.data?.items ?? []).map((country) => ({
        value: country.CountryId,
        label: country.CountryName,
      })),
    [query.data],
  );

  return { ...query, options };
};
