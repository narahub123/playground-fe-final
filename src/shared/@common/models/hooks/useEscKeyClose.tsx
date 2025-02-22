import { useEffect } from "react";

const useEscKeyClose = (onClose: () => void) => {
  const handleEsckey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEsckey);

    return () => window.removeEventListener("keydown", handleEsckey);
  }, [onClose]);
};

export default useEscKeyClose;
