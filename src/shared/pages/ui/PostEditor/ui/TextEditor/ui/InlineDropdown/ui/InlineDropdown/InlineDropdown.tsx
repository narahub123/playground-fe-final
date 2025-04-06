import { Portal } from "@shared/@common/ui/components";
import Main from "../Main/Main";
import { IAccount } from "@shared/@common/types";

interface InlineDropdownProps {
  onClose: () => void;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  isLoading: boolean;
  curText: string;
  curIndex: number;
  options: (string | IAccount)[];
  onClick: (index?: number) => void;
}

const InlineDropdown = ({
  onClose,
  top,
  bottom,
  left,
  right,
  isLoading,
  curText,
  curIndex,
  options,
  onClick,
}: InlineDropdownProps) => {
  return (
    <Portal id="inline-dropdown">
      <Main
        onClose={onClose}
        top={top}
        bottom={bottom}
        left={left}
        right={right}
        isLoading={isLoading}
        curText={curText}
        curIndex={curIndex}
        options={options}
        onClick={onClick}
      />
    </Portal>
  );
};

export default InlineDropdown;
