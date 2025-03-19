import styles from "./EmojiTabs.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface EmojiTabsProps {
  className?: string;
  disabled?: boolean;
}

const EmojiTabs = ({ className, disabled = false }: EmojiTabsProps) => {
  // 언어 설정
  const {} = useLanguageContent(["components", "EmojiTabs"]);

  const classNames = joinClassNames([styles["emojitabs"], className]);

  return <div className={classNames}>EmojiTabs</div>;
};

export default EmojiTabs;
