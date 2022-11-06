import { useCallback, useState } from "react";

export const NewState = Object.freeze({
  open: true,
  close: false,
});

/**
 * Hook to toggle an active state.
 */
export const useToggleState = (
  defaultState = false
): [isTrue: boolean, toggleState: (newState?: boolean) => void] => {
  const [isTrue, setIsTrue] = useState(defaultState);

  const toggleState = useCallback((newState?: boolean) => {
    setIsTrue((prevState) => {
      if (typeof newState === "boolean") {
        return newState;
      }

      return !prevState;
    });
  }, []);

  return [isTrue, toggleState];
};
