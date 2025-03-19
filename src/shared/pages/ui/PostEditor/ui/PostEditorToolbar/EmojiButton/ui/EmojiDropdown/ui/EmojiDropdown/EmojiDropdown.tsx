import styles from "./EmojiDropdown.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Dropdown } from "@shared/@common/ui/components";
import {
  EmojiList,
  EmojiRecent,
  EmojiSearch,
  EmojiTabs,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";
import { useState } from "react";

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
  const { tabs } = useLanguageContent(["components", "EmojiDropdown"]);

  const [curTab, setCurTab] = useState(0);

  const [keyword, setKeyword] = useState("");

  console.log(keyword);

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
      <div className={styles["emoji__dropdown__container"]}>
        <div className={styles["emoji__search__wrapper"]}>
          <EmojiSearch keyword={keyword} setKeyword={setKeyword} />
        </div>
        <div className={styles["emoji__tabs__wrapper"]}>
          <EmojiTabs curTab={curTab} setCurTab={setCurTab} tabs={tabs} />
        </div>
        <div className={styles["emoji__recent__wrapper"]}>
          <EmojiRecent />
        </div>
        <div className={styles["emoji__list__wrapper"]}>
          <EmojiList tabName={tabs[curTab].title} />
        </div>
      </div>
    </Dropdown>
  );
};

export default EmojiDropdown;
