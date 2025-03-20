import styles from "./EmojiDropdown.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Dropdown } from "@shared/@common/ui/components";
import {
  EmojiContextProvider,
  EmojiList,
  EmojiPreview,
  EmojiRecent,
  EmojiSearch,
  EmojiTabs,
  IEmoji,
  IEmojiContext,
  ISkinTone,
  skinTones,
  useEmojiData,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";
import { useCallback, useRef, useState } from "react";

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

  const headersRefs = useRef<(HTMLDivElement | null)[]>([]);

  const intialTab = useCallback(() => {
    if (headersRefs.current[0]) return 0;
    else return 1;
  }, [headersRefs.current]);

  const [curTab, setCurTab] = useState(intialTab);
  const [keyword, setKeyword] = useState("");
  const [curEmoji, setCurEmoji] = useState<IEmoji | null>(null);
  const [curSkinTone, setCurSkinTon] = useState<ISkinTone>(skinTones[0]);

  const emojis = useEmojiData();

  const tabNames = (tabs as IEmoji[])
    .filter((_, index) => index !== 0)
    .map((tab) => tab.name);

  const value: IEmojiContext = {
    curTab,
    setCurTab,
    keyword,
    setKeyword,
    curEmoji,
    setCurEmoji,
    curSkinTone,
    setCurSkinTon,
    headersRefs,
    tabs,
  };

  return (
    <EmojiContextProvider value={value}>
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
            <EmojiSearch />
          </div>
          <div className={styles["emoji__tabs__wrapper"]}>
            <EmojiTabs />
          </div>
          <div className={styles["emoji__list__container"]}>
            <div className={styles["emoji__recent__wrapper"]}>
              <EmojiRecent ref={(el) => (headersRefs.current[0] = el)} />
            </div>
            <div className={styles["emoji__list__wrapper"]}>
              {tabNames.map((tabName, index) => (
                <EmojiList
                  tabName={tabName}
                  emojiList={emojis[index]}
                  key={index}
                  ref={(el) => (headersRefs.current[index + 1] = el)}
                />
              ))}
            </div>
          </div>
          <div className={styles["emoji__preview__wrapper"]}>
            <EmojiPreview />
          </div>
        </div>
      </Dropdown>
    </EmojiContextProvider>
  );
};

export default EmojiDropdown;
