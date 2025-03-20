import styles from "./EmojiList.module.css";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import {
  Emoji,
  IEmoji,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";
import { forwardRef } from "react";

interface EmojiListProps {
  className?: string;
  tabName: string;
  emojiList: IEmoji[];
}

const EmojiList = forwardRef<HTMLDivElement, EmojiListProps>(
  ({ className, tabName, emojiList }, ref) => {
    const classNames = joinClassNames([styles["emoji__list"], className]);

    return (
      <div className={classNames} ref={ref}>
        <div className={styles["emoji__list__header"]}>
          <Text type="heading3">{tabName}</Text>
        </div>
        <div className={styles["emoji__list__content__wrapper"]}>
          <div className={styles["emoji__list__content"]}>
            {emojiList.map((emoji) => (
              <Emoji emoji={emoji} key={emoji.char} />
            ))}
          </div>
        </div>
      </div>
    );
  }
);

export default EmojiList;
