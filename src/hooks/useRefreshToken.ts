import { useCallback, useState } from "react";

/**
 * Stateful hook which can be used to refresh a useEffect if changed.
 */
export const useRefreshToken = (): [token: number, refresh: () => void] => {
	const [token, setToken] = useState(0);

	const refresh = useCallback(() => {
		setToken((prevState) => (prevState += 1));
	}, []);

	return [token, refresh];
};
