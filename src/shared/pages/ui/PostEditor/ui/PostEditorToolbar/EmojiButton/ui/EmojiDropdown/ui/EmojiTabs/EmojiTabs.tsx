import styles from "./EmojiTabs.module.css";
import {
  EmojiTab,
  IEmoji,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";

interface EmojiTabsProps {
  curTab: number;
  setCurTab: React.Dispatch<React.SetStateAction<number>>;
  tabs: IEmoji[];
  headersRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const EmojiTabs = ({
  curTab,
  setCurTab,
  tabs,
  headersRefs,
}: EmojiTabsProps) => {
  const handleClick = (index: number) => {
    setCurTab(index);

    const headers = headersRefs.current;
    if (!headers) return;

    const section = headers[index];
    if (!section) {
      headers[1]?.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    section?.scrollIntoView({ block: "start", behavior: "smooth" });
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
