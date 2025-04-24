import { Dropdown } from "@shared/@common/ui/components";
import {
  moreMyOptions,
  MoreOption,
  moreOptions,
  usePostContext,
  useUserRelationStatus,
} from "@shared/pages/ui/Post";

interface MoreDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  setIsReplyOpen: React.Dispatch<React.SetStateAction<boolean>>;
  top?: number;
  right?: number;
}

const MoreDropdown = ({
  isOpen,
  onClose,
  top,
  right,
  setIsReplyOpen,
}: MoreDropdownProps) => {
  const { isMyself } = useUserRelationStatus();

  const { author } = usePostContext();
  const { userId } = author;

  return (
    <Dropdown
      name="more"
      isOpen={isOpen}
      onClose={onClose}
      top={top}
      right={right}
    >
      {(isMyself(userId) ? moreMyOptions : moreOptions).map((option) => (
        <MoreOption
          option={option}
          key={option}
          setIsReplyOpen={setIsReplyOpen}
          onClose={onClose}
        />
      ))}
    </Dropdown>
  );
};

export default MoreDropdown;
