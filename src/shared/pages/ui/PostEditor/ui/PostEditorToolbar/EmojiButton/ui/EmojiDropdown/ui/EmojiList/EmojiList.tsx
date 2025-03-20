import styles from "./EmojiList.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import {
  Emoji,
  IEmoji,
  SkintoneType,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";

interface EmojiListProps {
  className?: string;
  tabName: string;
  emojiList: IEmoji[];
  setCurEmoji: React.Dispatch<React.SetStateAction<IEmoji | null>>;
  curSkinTone: SkintoneType;
}

const EmojiList = ({
  className,
  tabName,
  emojiList,
  setCurEmoji,
  curSkinTone,
}: EmojiListProps) => {
  // 언어 설정
  const {} = useLanguageContent(["components", "EmojiList"]);

  const classNames = joinClassNames([styles["emoji__list"], className]);

  return (
    <div className={classNames}>
      <div className={styles["emoji__list__header"]}>
        <Text type="heading3">{tabName}</Text>
      </div>
      <div className={styles["emoji__list__content__wrapper"]}>
        <div className={styles["emoji__list__content"]}>
          {emojiList.map((emoji) => (
            <Emoji
              emoji={emoji}
              key={emoji.char}
              setCurEmoji={setCurEmoji}
              curSkinTone={curSkinTone}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmojiList;
