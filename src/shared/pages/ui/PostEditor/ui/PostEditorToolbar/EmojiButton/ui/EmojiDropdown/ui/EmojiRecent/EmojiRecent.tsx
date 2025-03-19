import { Button, Text } from "@shared/@common/ui/components";
import styles from "./EmojiRecent.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { IEmojiTab } from "../../types";
import Emoji from "../Emoji/Emoji";

interface EmojiRecentProps {}

const EmojiRecent = ({}: EmojiRecentProps) => {
  // 언어 설정
  const { title, clearBtn } = useLanguageContent(["components", "EmojiRecent"]);

  const recentList: IEmojiTab[] = [
    { emoji: "🐙", title: "문어" },
    { emoji: "🛢", title: "석유통" },
    { emoji: "👚", title: "여성 옷" },
    { emoji: "☂", title: "우산" },
    { emoji: "🏋️‍♂️", title: "남성 바벨 들기" },
    { emoji: "🏀", title: "농구공" },
    { emoji: "🕐", title: "한 시" },
    { emoji: "🎴", title: "고스톱" },
    { emoji: "☯", title: "음양" },
    { emoji: "☯", title: "음양" },
    { emoji: "☯", title: "음양" },
    { emoji: "☯", title: "음양" },
    { emoji: "☯", title: "음양" },
    { emoji: "☯", title: "음양" },
  ];

  return (
    <div className={styles["emoji__recent"]}>
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
      <div className={styles["emoji__recent__content"]}>
        <div className={styles["emoji__recent__content__wrapper"]}>
          {recentList.map((emoji) => (
            <Emoji emoji={emoji} key={emoji.emoji} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmojiRecent;
