import { ReactNode } from "react";
import Portal from "../Portal/Portal";
import DropdownMain from "./DropdownMain/DropdownMain";

interface DropdownProps {
  name: string;
  isOpen: boolean;
  onClose: () => void;
  lastClickedRef: React.RefObject<HTMLButtonElement>;
  children: ReactNode;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  className?: string;
  disabled?: boolean;
}

const Dropdown = ({
  name,
  isOpen,
  onClose,
  lastClickedRef,
  children,
  top,
  bottom,
  left,
  right,
  className,
  disabled = false,
}: DropdownProps) => {
  // 드롭다운이 닫힌 경우 실행 안함
  if (!isOpen || disabled) return null;

  return (
    <Portal id={`${name}-dropdown`}>
      <DropdownMain
        onClose={onClose}
        top={top}
        bottom={bottom}
        left={left}
        right={right}
        className={className}
        lastClickedRef={lastClickedRef}
      >
        {children}
      </DropdownMain>
    </Portal>
  );
};

export default Dropdown;
