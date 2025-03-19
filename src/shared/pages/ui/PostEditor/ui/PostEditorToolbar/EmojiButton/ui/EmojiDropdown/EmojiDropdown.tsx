import styles from "./EmojiDropdown.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Dropdown } from "@shared/@common/ui/components";

interface EmojiDropdownProps {
  disabled?: boolean;
  isOpen: boolean;
  onClose: () => void;
  lastClickedRef: React.RefObject<HTMLElement>;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

const EmojiDropdown = ({
  disabled = false,
  isOpen,
  onClose,
  lastClickedRef,
  top,
  bottom,
  left,
  right,
}: EmojiDropdownProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "EmojiDropdown"]);

  return (
    <Dropdown
      isOpen={isOpen}
      lastClickedRef={lastClickedRef}
      name="emoji"
      onClose={onClose}
      top={top}
      left={left}
      bottom={bottom}
      right={right}
      className={styles["emoji__dropdown"]}
      disabled={disabled}
    >
      <div>
        <div>검색</div>
        <div>탭들</div>
        <div>최근</div>
        <div>리스트</div>
      </div>
    </Dropdown>
  );
};

export default EmojiDropdown;
