import styles from "./Emoji.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Button } from "@shared/@common/ui/components";
import {
  getEmojiWithSkinTone,
  IEmoji,
  useEmojiContext,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";
import { useAppDispatch } from "@app/store";
import {
  setEmoji,
  setRecentEmojis,
} from "@shared/pages/ui/PostEditor/models/slices/postEditorSlice";
import { selectSkintone } from "@shared/pages/ui/PostEditor/models/selectors";
import { useSelector } from "react-redux";

interface EmojiProps {
  className?: string;
  disabled?: boolean;
  emoji: IEmoji;
}

const Emoji = ({ className, disabled = false, emoji }: EmojiProps) => {
  const dispatch = useAppDispatch();
  const classNames = joinClassNames([styles["emoji"], className]);
  const skintoneType = useSelector(selectSkintone);

  const { setCurEmoji } = useEmojiContext();

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
        dispatch(setRecentEmojis(emoji));

        // 텍스트에 이모지 추가
        const selectedEmoji = getEmojiWithSkinTone(emoji, skintoneType);
        dispatch(setEmoji(selectedEmoji));
      }}
      isValid={!disabled}
      className={classNames}
      aria-label={emoji.name}
      variant="ghost"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={styles["emoji__icon"]}>
        {getEmojiWithSkinTone(emoji, skintoneType)}
      </span>
    </Button>
  );
};

export default Emoji;
