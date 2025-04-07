import styles from "./EmojiRecent.module.css";
import { forwardRef } from "react";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Text } from "@shared/@common/ui/components";
import { Emoji } from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";
import { selectRecentEmojis } from "@shared/pages/ui/PostEditor/models/selectors";
import { useSelector } from "react-redux";

interface EmojiRecentProps {}

const EmojiRecent = forwardRef<HTMLDivElement, EmojiRecentProps>(({}, ref) => {
  const recentEmojis = useSelector(selectRecentEmojis);
  // 언어 설정
  const { title, clearBtn } = useLanguageContent(["components", "EmojiRecent"]);

  return (
    <div className={styles["emoji__recent"]} ref={ref}>
      <div className={styles["emoji__recent__header"]}>
        <Text type="heading3">{title}</Text>
        <Button
          variant="ghost"
          isValid
          onClick={() => {
            // 최근 이모지 목록 비우기
          }}
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
