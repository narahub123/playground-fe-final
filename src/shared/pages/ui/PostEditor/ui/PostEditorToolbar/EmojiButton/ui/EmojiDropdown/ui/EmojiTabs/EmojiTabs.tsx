import { useEffect, useState } from "react";
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
  const [sections, setSecions] = useState<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const headers = headersRefs.current;
    if (!headers || headers.length === 0) return;

    setSecions(headers);
  }, []);
  const handleClick = (index: number) => {
    setCurTab(index);

    if (!sections[index]) {
      sections[1]?.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    sections[index]?.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <div className={styles["emoji__tabs"]}>
      {(tabs as IEmoji[]).map((emoji, index) => (
        <EmojiTab
          key={index}
          tabInfo={emoji}
          isCurTab={curTab === index}
          onClick={() => handleClick(index)}
          disabled={Boolean(!sections[index])}
        />
      ))}
    </div>
  );
};

export default EmojiTabs;
