import { useEffect } from "react";

interface useClickOutsideProps {
  containerRef: React.RefObject<HTMLElement>;
  toggle: () => void;
  lastClickedRef?: React.RefObject<HTMLElement>;
}

const useClickOutside = ({
  containerRef,
  toggle,
  lastClickedRef,
}: useClickOutsideProps) => {
  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (
        lastClickedRef &&
        containerRef.current &&
        !containerRef.current.contains(e.target as Node) &&
        !lastClickedRef.current?.contains(e.target as Node)
      ) {
        toggle();
        if (lastClickedRef) {
          setTimeout(() => {
            lastClickedRef.current?.focus();
          }, 100);
        }
      } else if (
        !lastClickedRef &&
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        toggle();
      }
    };
    window.addEventListener("mousedown", clickOutside);
    window.addEventListener("click", clickOutside);

    return () => {
      window.removeEventListener("mousedown", clickOutside);
      window.removeEventListener("click", clickOutside);
    };
  }, [containerRef]);
};

export default useClickOutside;
