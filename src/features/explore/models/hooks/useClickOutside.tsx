import { BaseSyntheticEvent, useEffect } from "react";

interface useClickOutsideProps {
  containerRef: React.RefObject<HTMLElement>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const useClickOutside = ({ containerRef, setIsOpen }: useClickOutsideProps) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const handleClickOutside = (e: BaseSyntheticEvent | MouseEvent) => {
      if (container && !container.contains(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return;
};

export default useClickOutside;
