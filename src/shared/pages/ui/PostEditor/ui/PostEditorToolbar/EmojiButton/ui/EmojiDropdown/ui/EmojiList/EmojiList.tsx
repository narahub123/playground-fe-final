import styles from "./EmojiList.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";

interface EmojiListProps {
  className?: string;
  disabled?: boolean;
  tabName: string;
}

const EmojiList = ({
  className,
  disabled = false,
  tabName,
}: EmojiListProps) => {
  // 언어 설정
  const {} = useLanguageContent(["components", "EmojiList"]);

  const classNames = joinClassNames([styles["emojilist"], className]);

  return (
    <div className={classNames}>
      <Text type="heading3">{tabName}</Text>
    </div>
  );
};

export default EmojiList;
