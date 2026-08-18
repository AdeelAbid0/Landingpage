import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "./axiosInstance";

export const useClientQuery = ({
  queryKeys = [],
  url = "",
  enabled = true,
  staleTime = 5 * 60 * 1000, // 5 minutes
  select,
  placeholderData,
}) => {
  return useQuery({
    queryKey: queryKeys.length ? queryKeys : [url],
    queryFn: () => api.get(url).then((res) => res.data),
    enabled: enabled && !!url,
    staleTime,
    retry: 0,
    select,
    placeholderData,
  });
};

export const useClientMutation = ({
  queryKeys = [],
  invalidateKeys = [],
  url,
  method = "POST",
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: queryKeys.length ? queryKeys : undefined,
    mutationFn: async (payload) => {
      try {
        let finalUrl;
        let body = payload;

        if (typeof url === "function") {
          if (
            payload !== null &&
            typeof payload === "object" &&
            !(payload instanceof FormData) &&
            "id" in payload
          ) {
            const { id, ...rest } = payload;
            finalUrl = url(id);
            body = Object.keys(rest).length === 0 ? undefined : rest;
          } else {
            finalUrl = url(payload);
            body = undefined;
          }
        } else {
          finalUrl = url;
          if (!(payload instanceof FormData) && payload?.suffixUrl) {
            finalUrl = `${url}${payload.suffixUrl}`;
            const { suffixUrl, ...rest } = payload;
            body = Object.keys(rest).length === 0 ? undefined : rest;
          }
        }

        const response = await api({ method, url: finalUrl, data: body });
        return response.data;
      } catch (error) {
        throw error.response?.data || error;
      }
    },
    onSuccess: () => {
      if (invalidateKeys.length > 0) {
        invalidateKeys.forEach((key) => {
          queryClient.invalidateQueries({ queryKey: key });
        });
      }
    },
  });
};
