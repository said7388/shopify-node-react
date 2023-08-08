import { useMemo } from "react";
import { useQuery } from "react-query";
import { useAuthenticatedFetch } from "./useAuthenticatedFetch";

export const useAppQuery = ({ url = {} }) => {
  const authenticatedFetch = useAuthenticatedFetch();
  const fetch = useMemo(() => {
    return async () => {
      const response = await authenticatedFetch(url);
      return response.json();
    };
  }, [url]);

  return useQuery(url, fetch, {
    refetchOnWindowFocus: false,
  });
};
