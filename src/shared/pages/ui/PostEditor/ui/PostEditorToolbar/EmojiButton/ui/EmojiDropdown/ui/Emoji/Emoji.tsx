import { Button } from "@shared/@common/ui/components";
import styles from "./Emoji.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { IEmojiTab } from "../../types";

interface EmojiProps {
  className?: string;
  disabled?: boolean;
  emoji: IEmojiTab;
}

const Emoji = ({ className, disabled = false, emoji }: EmojiProps) => {
  const classNames = joinClassNames([styles["emoji"], className]);

  return (
    <Button
      onClick={() => {
        // 최근 이모지 목록에 추가
        // 텍스트에 이모지 추가
      }}
      isValid={!disabled}
      className={classNames}
      aria-label={emoji.title}
      variant="ghost"
    >
      <span className={styles["emoji__icon"]}>{emoji.emoji}</span>
    </Button>
  );
};

export default Emoji;
