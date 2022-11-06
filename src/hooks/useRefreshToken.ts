import { useCallback, useState } from "react";

/**
 * Hook with state to cause a useEffect refresh if called.
 */
export const useRefreshToken = (): [token: number, refresh: () => void] => {
  const [token, setToken] = useState(0);

  const refresh = useCallback(() => {
    setToken((prevState) => (prevState += 1));
  }, []);

  return [token, refresh];
};
