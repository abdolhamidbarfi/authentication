import { useState, useCallback } from "react";

type FetchState<T> = {
  pending: boolean;
  fulfilled: boolean;
  error: string | null;
  data: T | null;
};
export function useFetch<T = unknown>() {
  const [state, setState] = useState<FetchState<T>>({
    pending: false,
    fulfilled: false,
    error: null,
    data: null,
  });

  const runFetch = useCallback(async (url: string, options?: RequestInit) => {
    setState({ pending: true, fulfilled: false, error: null, data: null });

    try {
      const res = await fetch(url, options);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = (await res.json()) as T;

      setState({
        pending: false,
        fulfilled: true,
        error: null,
        data,
      });
    } catch (err: any) {
      setState({
        pending: false,
        fulfilled: false,
        error: err.message || "Something went wrong",
        data: null,
      });
    }
  }, []);

  return { ...state, runFetch };
}
