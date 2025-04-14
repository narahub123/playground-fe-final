import { useRef, useState } from "react";
import { IRect } from "@shared/pages/ui/Post";

const useHoverDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rect, setRect] = useState<IRect>({});
  const timeoutRef = useRef<number | null>(null);

  const onClose = () => setIsOpen(false);

  const handleMouseEnter = (ref?: React.RefObject<HTMLElement>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (ref) {
      const target = ref.current!;

      const { top, left } = target.getBoundingClientRect();

      setRect({ top: top + 30, left: left * 0.5 });
    }

    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
      setRect({});
    }, 100); // 잠깐 delay 줘서 드롭다운 안으로 이동 시간 확보
  };

  return { isOpen, onClose, rect, handleMouseEnter, handleMouseLeave };
};

export default useHoverDropdown;
