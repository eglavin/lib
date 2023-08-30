import { useCallback, useState } from "react";

/**
 * Hook to toggle an active state.
 * @example
 * ```ts
 * const [isTrue, toggleState] = useToggleState(true);
 *
 * toggleState(); // isTrue = false
 * toggleState(true); // isTrue = true
 * toggleState(false); // isTrue = false
 * ```
 */
export const useToggleState = (
	defaultState = false,
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
