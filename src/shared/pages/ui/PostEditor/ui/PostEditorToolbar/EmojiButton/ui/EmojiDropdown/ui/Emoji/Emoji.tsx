import styles from "./Emoji.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Button } from "@shared/@common/ui/components";
import {
  getEmojiWithSkinTone,
  IEmoji,
  useEmojiContext,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";

interface EmojiProps {
  className?: string;
  disabled?: boolean;
  emoji: IEmoji;
}

const Emoji = ({ className, disabled = false, emoji }: EmojiProps) => {
  const classNames = joinClassNames([styles["emoji"], className]);

  const { curSkinTone, setCurEmoji } = useEmojiContext();

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
        {getEmojiWithSkinTone(emoji, curSkinTone.name)}
      </span>
    </Button>
  );
};

export default Emoji;
