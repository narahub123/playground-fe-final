import styles from "./EmojiSearch.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface EmojiSearchProps {
  className?: string;
  disabled?: boolean;
}

const EmojiSearch = ({ className, disabled = false }: EmojiSearchProps) => {
  // 언어 설정
  const {} = useLanguageContent(["components", "EmojiSearch"]);

  const classNames = joinClassNames([styles["emojisearch"], className]);

  return <div className={classNames}>EmojiSearch</div>;
};

export default EmojiSearch;
