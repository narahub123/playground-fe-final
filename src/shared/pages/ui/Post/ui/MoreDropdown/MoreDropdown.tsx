import { Dropdown } from "@shared/@common/ui/components";
import { MoreOption, moreOptions } from "@shared/pages/ui/Post";

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
      {moreOptions.map((option) => (
        <MoreOption option={option} key={option} />
      ))}
    </Dropdown>
  );
};

export default MoreDropdown;
