// SmallDeviceToast.jsx
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

export default function SmallDeviceToast({
  message = "This website is not optimized for small devices.",
  breakpoint = 768, // px
  position = "bottom-right", // or "bottom-right"
  autoClose = 8000, // ms
  onlyOnSmall = true, // set false to always show
}) {
  const shownOnce = useRef(false); // avoids duplicate in React 18 StrictMode (dev)

  useEffect(() => {
    if (shownOnce.current) return;
    shownOnce.current = true;
    if (typeof window === "undefined") return;

    const small = window.matchMedia(`(max-width: ${breakpoint}px)`).matches;
    if (onlyOnSmall && !small) return;

    toast.info(message, {
      position,
      autoClose,
      closeOnClick: true,
      draggable: true,
      hideProgressBar: false,
    });
  }, [message, breakpoint, position, autoClose, onlyOnSmall]);

  return null;
}
