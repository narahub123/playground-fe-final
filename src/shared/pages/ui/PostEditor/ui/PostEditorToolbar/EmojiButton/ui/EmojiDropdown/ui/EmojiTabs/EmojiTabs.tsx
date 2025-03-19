import styles from "./EmojiTabs.module.css";
import {
  EmojiTab,
  IEmoji,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";

interface EmojiTabsProps {
  curTab: number;
  setCurTab: React.Dispatch<React.SetStateAction<number>>;
  tabs: IEmoji[];
}

const EmojiTabs = ({ curTab, setCurTab, tabs }: EmojiTabsProps) => {
  const handleClick = (index: number) => {
    setCurTab(index);
  };

  return (
    <div className={styles["emoji__tabs"]}>
      {(tabs as IEmoji[]).map((emoji, index) => (
        <EmojiTab
          key={index}
          tabInfo={emoji}
          isCurTab={curTab === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default EmojiTabs;
