import { RefObject, useEffect } from "react";

type Handler = (event: MouseEvent | TouchEvent) => void;
export const useOnClickOutside = (
  ref: RefObject<HTMLElement | null>,
  handler: Handler,
  isDropdown?: boolean
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      if (!ref.current.contains(event.target as Node)) {
        handler(event);
      }
      handler(event);
    };

    document.addEventListener(isDropdown ? "mousedown" : "click", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener(
        isDropdown ? "mousedown" : "click",
        listener
      );
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, isDropdown]);
};
