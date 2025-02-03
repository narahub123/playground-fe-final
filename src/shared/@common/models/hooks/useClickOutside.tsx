import { useEffect } from "react";

interface useClickOutsideProps {
  containerRef: React.RefObject<HTMLElement>;
  toggle: () => void;
}

const useClickOutside = ({ containerRef, toggle }: useClickOutsideProps) => {
  const clickOutside = (e: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target as Node)
    ) {
      toggle();
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;
    window.addEventListener("mousedown", clickOutside);
    window.addEventListener("click", clickOutside);

    return () => {
      window.removeEventListener("mousedown", clickOutside);
      window.removeEventListener("click", clickOutside);
    };
  }, [containerRef]);
};

export default useClickOutside;
