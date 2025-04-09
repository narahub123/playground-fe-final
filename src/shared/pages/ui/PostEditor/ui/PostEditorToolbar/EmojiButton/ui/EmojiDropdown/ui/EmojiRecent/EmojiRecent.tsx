import styles from "./EmojiRecent.module.css";
import { forwardRef } from "react";
import { useAPIError, useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Text } from "@shared/@common/ui/components";
import { Emoji } from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";
import { useSelector } from "react-redux";
import { selectRecentEmojis } from "@shared/@common/models/selectors";
import { fetchWithAuth } from "@shared/pages/utils";
import { useAppDispatch } from "@app/store";
import { ErrorTitleCodeType } from "@shared/@common/types";
import { useToast } from "@shared/@common/ui/components/Toast/hooks";
import { clearRecentEmojis } from "@shared/@common/models/slices/userSlice";

interface EmojiRecentProps {}

const EmojiRecent = forwardRef<HTMLDivElement, EmojiRecentProps>(({}, ref) => {
  const dispatch = useAppDispatch();
  const recentEmojis = useSelector(selectRecentEmojis);
  // 언어 설정
  const { title, clearBtn } = useLanguageContent(["components", "EmojiRecent"]);

  const toast = useToast();
  const { getErrorTitle } = useAPIError();

  const handleClearRecentEmojis = async () => {
    const result = await fetchWithAuth("/users/recent-emojis", {
      method: "DELETE",
    });
    try {
      if (result.success) {
        dispatch(clearRecentEmojis());
      } else {
        const errorCode = result.code as ErrorTitleCodeType;

        if (errorCode === "CLEAR_RECENT_EMOJIS_FAILED") {
          toast({
            description: getErrorTitle(errorCode),
            type: "error",
          });
        }
      }
    } catch (error) {}
  };

  return (
    <div className={styles["emoji__recent"]} ref={ref}>
      <div className={styles["emoji__recent__header"]}>
        <Text type="heading3">{title}</Text>
        <Button
          variant="ghost"
          isValid
          onClick={handleClearRecentEmojis}
          fontColor="colorTheme"
          className={styles["clear__button"]}
        >
          {clearBtn}
        </Button>
      </div>
      <div className={styles["emoji__recent__content__wrapper"]}>
        <div className={styles["emoji__recent__content"]}>
          {recentEmojis.map((emoji, index) => (
            <Emoji emoji={emoji} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default EmojiRecent;
