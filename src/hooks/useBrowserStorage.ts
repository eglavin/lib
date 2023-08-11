import { useEffect, useRef, useState } from "react";

/**
 * Hook to save and retrieve state from the browsers local storage.
 *
 * Defaults to `localStorage`.
 */
export const useLocalStorage = <T = unknown>(
	storageKey: string,
	initialValue: T,
	storageType: "localStorage" | "sessionStorage" = "localStorage"
): [value: T, setValue: (newValue: T | ((newValue: T) => T)) => void, clearValue: () => void] => {
	const storage = useRef(window[storageType]);

	const [storedValue, setStoredValue] = useState<T>(initialValue);

	useEffect(() => {
		try {
			const item = storage.current.getItem(storageKey);

			setStoredValue(item ? JSON.parse(item) : initialValue);
		} catch (_) {
			console.log(`Error getting ${storageKey} from local storage`);

			setStoredValue(initialValue);
		}
	}, [storageKey, initialValue]);

	function setValue(newValue: T | ((value: T) => T)) {
		try {
			setStoredValue((prevState) => {
				const _newValue = newValue instanceof Function ? newValue(prevState) : newValue;

				storage.current.setItem(storageKey, JSON.stringify(_newValue));
				return _newValue;
			});
		} catch (error) {
			console.log(`Error saving ${storageKey} to local storage`);
		}
	}

	function clearValue() {
		try {
			storage.current.removeItem(storageKey);
		} catch (error) {
			console.log(`Error removing ${storageKey} from local storage`);
		}
	}

	return [storedValue, setValue, clearValue];
};
