import styles from "./EmojiList.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface EmojiListProps {
  className?: string;
  disabled?: boolean;
}

const EmojiList = ({ className, disabled = false }: EmojiListProps) => {
  // 언어 설정
  const {} = useLanguageContent(["components", "EmojiList"]);

  const classNames = joinClassNames([styles["emojilist"], className]);

  return <div className={classNames}>EmojiList</div>;
};

export default EmojiList;
