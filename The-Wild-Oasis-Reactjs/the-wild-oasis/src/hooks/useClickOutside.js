import { useEffect, useRef } from "react";

export function useClickOutside(handler) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        e.stopPropagation(); // Prevents the event from bubbling up to parent elements to avoid multiple triggers of click outside handlers
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
      document.addEventListener("click", handleClick, false); //setting useCapture to false to ensure the event is captured during the bubbling phase
      return () => document.removeEventListener("click", handleClick, false);
    },
    [handler]
  );
 
  return ref;
}
