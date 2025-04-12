import { Dropdown } from "@shared/@common/ui/components";

interface MoreDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  top?: number;
  right?: number;
}

const MoreDropdown = ({ isOpen, onClose, top, right }: MoreDropdownProps) => {
  return (
    <Dropdown
      name="more"
      isOpen={isOpen}
      onClose={onClose}
      top={top}
      right={right}
    >
      MoreDropdown
    </Dropdown>
  );
};

export default MoreDropdown;
