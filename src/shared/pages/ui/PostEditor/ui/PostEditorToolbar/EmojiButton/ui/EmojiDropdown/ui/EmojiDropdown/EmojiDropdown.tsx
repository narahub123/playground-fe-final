import styles from "./EmojiDropdown.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Dropdown } from "@shared/@common/ui/components";
import {
  EmojiListContainer,
  EmojiPreview,
  EmojiRecent,
  EmojiSearch,
  EmojiTabs,
  IEmoji,
  ISkinTone,
  skinTones,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";
import { useState } from "react";
import useEmojiData from "../../hooks/useEmojiData";

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

  const [curEmoji, setCurEmoji] = useState<IEmoji | null>(null);
  const [curSkinton, setCurSkinton] = useState<ISkinTone>(skinTones[0]);

  const emojis = useEmojiData();

  const tabNames = (tabs as IEmoji[])
    .filter((_, index) => index !== 0)
    .map((tab) => tab.name);

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
        <div className={styles["emoji__list__container"]}>
          <div className={styles["emoji__recent__wrapper"]}>
            <EmojiRecent setCurEmoji={setCurEmoji} />
          </div>
          <div className={styles["emoji__list__wrapper"]}>
            <EmojiListContainer
              tabNames={tabNames}
              emojiList={emojis}
              setCurEmoji={setCurEmoji}
            />
          </div>
        </div>
        <div className={styles["emoji__preview__wrapper"]}>
          <EmojiPreview
            curEmoji={curEmoji}
            curSkinton={curSkinton}
            setCurSkinton={setCurSkinton}
          />
        </div>
      </div>
    </Dropdown>
  );
};

export default EmojiDropdown;
