import styles from "./EmojiList.module.css";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import {
  Emoji,
  IEmoji,
  SkintoneType,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";
import { forwardRef } from "react";

interface EmojiListProps {
  className?: string;
  tabName: string;
  emojiList: IEmoji[];
  setCurEmoji: React.Dispatch<React.SetStateAction<IEmoji | null>>;
  curSkinTone: SkintoneType;
}

const EmojiList = forwardRef<HTMLDivElement, EmojiListProps>(
  ({ className, tabName, emojiList, setCurEmoji, curSkinTone }, ref) => {
    const classNames = joinClassNames([styles["emoji__list"], className]);

    return (
      <div className={classNames} ref={ref}>
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
  }
);

export default EmojiList;
