// SmallDeviceToastOnRouteChange.jsx
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export default function SmallDeviceToastOnRouteChange({
  message = "SijanBro's Portfolio Website - made in Nov, 2025",
  breakpoint = 768,
  position = "bottom-right",
  autoClose = 8000,
  onlyOnSmall = true,
}) {
  const { pathname } = useLocation();
  const lastShownPath = useRef("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (lastShownPath.current === pathname) return; // guard quick re-fires
    lastShownPath.current = pathname;

    const small = window.matchMedia(`(max-width: ${breakpoint}px)`).matches;
    if (onlyOnSmall && !small) return;

    // tiny debounce avoids duplicate toasts during rapid transitions
    const t = setTimeout(() => {
      toast.info(message, {
        position,
        autoClose,
        closeOnClick: true,
        draggable: true,
        hideProgressBar: false,
      });
    }, 50);

    return () => clearTimeout(t);
  }, [pathname, message, breakpoint, position, autoClose, onlyOnSmall]);

  return null;
}
