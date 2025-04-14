import { useRef, useState } from "react";

const useHoverDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 100); // 잠깐 delay 줘서 드롭다운 안으로 이동 시간 확보
  };

  return { isOpen, handleMouseEnter, handleMouseLeave };
};

export default useHoverDropdown;
