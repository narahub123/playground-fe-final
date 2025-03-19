import styles from "./EmojiRecent.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface EmojiRecentProps {
  className?: string;
  disabled?: boolean;
}

const EmojiRecent = ({ className, disabled = false }: EmojiRecentProps) => {
  // 언어 설정
  const {} = useLanguageContent(["components", "EmojiRecent"]);

  const classNames = joinClassNames([styles["emojirecent"], className]);

  return <div className={classNames}>EmojiRecent</div>;
};

export default EmojiRecent;
