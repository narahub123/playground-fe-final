import { Button } from "@shared/@common/ui/components";
import styles from "./Emoji.module.css";
import { joinClassNames } from "@shared/@common/utils";
import {
  IEmoji,
  SkintoneType,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";

interface EmojiProps {
  className?: string;
  disabled?: boolean;
  emoji: IEmoji;
  setCurEmoji: React.Dispatch<React.SetStateAction<IEmoji | null>>;
  curSkinTone: SkintoneType;
}

const Emoji = ({
  className,
  disabled = false,
  emoji,
  setCurEmoji,
  curSkinTone,
}: EmojiProps) => {
  const classNames = joinClassNames([styles["emoji"], className]);

  const handleMouseEnter = () => {
    setCurEmoji(emoji);
  };

  const handleMouseLeave = () => {
    setCurEmoji(null);
  };

  return (
    <Button
      onClick={() => {
        // 최근 이모지 목록에 추가
        // 텍스트에 이모지 추가
      }}
      isValid={!disabled}
      className={classNames}
      aria-label={emoji.name}
      variant="ghost"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={styles["emoji__icon"]}>
        {!emoji.skintone || curSkinTone === "default"
          ? emoji.char
          : curSkinTone === "light"
          ? emoji.skintone[0]
          : curSkinTone === "mediumLight"
          ? emoji.skintone[1]
          : curSkinTone === "medium"
          ? emoji.skintone[2]
          : curSkinTone === "mediumDark"
          ? emoji.skintone[3]
          : emoji.skintone[4]}
      </span>
    </Button>
  );
};

export default Emoji;
