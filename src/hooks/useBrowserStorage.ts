import { useEffect, useRef, useState } from "react";

/**
 * Hook to save and retrieve state from the browsers local storage.
 *
 * @param storage Defaults to "session"
 * @example
 * ```ts
 * const [token, setToken, clearToken] = useBrowserStorage("token", "1234", "local");
 * ```
 */
export const useBrowserStorage = <T = unknown>(
	key: string,
	initialValue: T,
	storage: "local" | "session" = "session",
): [value: T, setValue: (newValue: T | ((newValue: T) => T)) => void, clearValue: () => void] => {
	const windowRef = useRef(storage === "local" ? window.localStorage : window.sessionStorage);

	const [currentValue, setCurrentValue] = useState<T>(initialValue);

	useEffect(() => {
		try {
			const item = windowRef.current.getItem(key);

			setCurrentValue(item ? JSON.parse(item) : initialValue);
		} catch (_) {
			console.error(`Error getting ${key}`);

			setCurrentValue(initialValue);
		}
	}, [key, initialValue]);

	function setValue(newValue: T | ((value: T) => T)) {
		try {
			setCurrentValue((prevValue) => {
				const _newValue = newValue instanceof Function ? newValue(prevValue) : newValue;

				windowRef.current.setItem(key, JSON.stringify(_newValue));
				return _newValue;
			});
		} catch (error) {
			console.error(`Error saving ${key}`);
		}
	}

	function clearValue() {
		try {
			windowRef.current.removeItem(key);
		} catch (error) {
			console.error(`Error removing ${key}`);
		}
	}

	return [currentValue, setValue, clearValue];
};
