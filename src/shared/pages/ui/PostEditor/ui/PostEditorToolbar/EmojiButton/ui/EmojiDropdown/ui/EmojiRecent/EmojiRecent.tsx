import { Button, Text } from "@shared/@common/ui/components";
import styles from "./EmojiRecent.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { IEmoji } from "../../types";
import Emoji from "../Emoji/Emoji";

interface EmojiRecentProps {
  setCurEmoji: React.Dispatch<React.SetStateAction<IEmoji | null>>;
}

const EmojiRecent = ({ setCurEmoji }: EmojiRecentProps) => {
  // 언어 설정
  const { title, clearBtn } = useLanguageContent(["components", "EmojiRecent"]);

  const recentList: IEmoji[] = [
    { char: "🐙", name: "문어" },
    { char: "🛢", name: "석유통" },
    { char: "👚", name: "여성 옷" },
    { char: "☂", name: "우산" },
    { char: "🏋️‍♂️", name: "남성 바벨 들기" },
    { char: "🏀", name: "농구공" },
    { char: "🕐", name: "한 시" },
    { char: "🎴", name: "고스톱" },
    { char: "☯", name: "음양" },
    { char: "☯", name: "음양" },
    { char: "☯", name: "음양" },
    { char: "☯", name: "음양" },
    { char: "☯", name: "음양" },
    { char: "☯", name: "음양" },
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
      <div className={styles["emoji__recent__content__wrapper"]}>
        <div className={styles["emoji__recent__content"]}>
          {recentList.map((emoji, index) => (
            <Emoji emoji={emoji} key={index} setCurEmoji={setCurEmoji} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmojiRecent;
