import { useClientQuery } from "@/api/apiService";
import { API_URL } from "@/api/apiUrl";

// Global system labels — fetched once on app load (see
// components/providers/SystemLabelLoader.js) and read from the shared
// React Query cache everywhere else, so no page triggers its own fetch.
export const useSystemLabel = () => {
  return useClientQuery({
    queryKeys: ["systemLabel"],
    url: API_URL.SystemLabel.systemLabel(1),
  });
};
