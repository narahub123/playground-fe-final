import styles from "./Emoji.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Button } from "@shared/@common/ui/components";
import {
  getEmojiWithSkinTone,
  IEmoji,
  useEmojiContext,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";
import { useAppDispatch } from "@app/store";
import { setEmoji } from "@shared/pages/ui/PostEditor/models/slices/postEditorSlice";
import { useSelector } from "react-redux";
import { selectSkintoneType } from "@shared/@common/models/selectors";
import { setRecentEmojis } from "@shared/@common/models/slices/userSlice";
import { fetchWithAuth } from "@shared/pages/utils";
import { useToast } from "@shared/@common/ui/components/Toast/hooks";
import { useAPIError } from "@shared/@common/models/hooks";
import { ErrorDescriptionCodeType } from "@shared/@common/types";

interface EmojiProps {
  className?: string;
  disabled?: boolean;
  emoji: IEmoji;
}

const Emoji = ({ className, disabled = false, emoji }: EmojiProps) => {
  const dispatch = useAppDispatch();
  const classNames = joinClassNames([styles["emoji"], className]);
  const skintoneType = useSelector(selectSkintoneType);

  const { setCurEmoji } = useEmojiContext();

  const handleMouseEnter = () => {
    setCurEmoji(emoji);
  };

  const handleMouseLeave = () => {
    setCurEmoji(null);
  };

  const toast = useToast();
  const { getErrorDescription } = useAPIError();

  const handleClick = async () => {
    // 텍스트에 이모지 추가
    const selectedEmoji = getEmojiWithSkinTone(emoji, skintoneType);
    dispatch(setEmoji(selectedEmoji));

    // 최근 이모지 목록에 추가
    const result = await fetchWithAuth(
      "/users/me",
      { method: "PATCH" },
      { recentEmoji: emoji }
    );
    try {
      if (result.success) {
        dispatch(setRecentEmojis(emoji));
      } else {
        const errorCode = Object.values(
          result.error.details
        )[0] as ErrorDescriptionCodeType;

        if (errorCode === "UPDATE_RECENT_EMOJIS_FAILED") {
          toast({
            description: getErrorDescription(errorCode),
            type: "error",
          });
        }
      }
    } catch (error) {}
  };

  return (
    <Button
      onClick={handleClick}
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
