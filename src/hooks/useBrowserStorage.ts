import { useEffect, useRef, useState } from "react";

/**
 * Hook to save and retrieve state from the browsers local storage.
 */
export const useLocalStorage = <State = unknown>(
  storageKey: string,
  initialValue: State,
  storageType: "localStorage" | "sessionStorage" = "localStorage"
): [
  value: State,
  setValue: (value: State | ((value: State) => State)) => void,
  clearValue: () => void
] => {
  const storage = useRef(window[storageType]);

  const [storedValue, setStoredValue] = useState<State>(initialValue);

  useEffect(() => {
    try {
      const item = storage.current.getItem(storageKey);

      setStoredValue(item ? JSON.parse(item) : initialValue);
    } catch (_) {
      console.log(`Error getting ${storageKey} from local storage`);

      setStoredValue(initialValue);
    }
  }, [storageKey, initialValue]);

  function setValue(newValue: State | ((value: State) => State)) {
    try {
      // Allow value to be a function so we have same API as useState
      let valueToStore;

      setStoredValue((prevState) => {
        valueToStore = newValue instanceof Function ? newValue(prevState) : newValue;

        return valueToStore;
      });

      storage.current.setItem(storageKey, JSON.stringify(valueToStore));
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
