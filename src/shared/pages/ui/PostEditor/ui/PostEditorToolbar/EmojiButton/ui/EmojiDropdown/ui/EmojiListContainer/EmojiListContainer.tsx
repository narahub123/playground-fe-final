import styles from "./EmojiListContainer.module.css";
import { joinClassNames } from "@shared/@common/utils";
import {
  EmojiList,
  IEmoji,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";

interface EmojiListContainerProps {
  tabNames: string[];
  emojiList: IEmoji[][];
  setCurEmoji: React.Dispatch<React.SetStateAction<IEmoji | null>>;
}

const EmojiListContainer = ({
  tabNames,
  emojiList,
  setCurEmoji,
}: EmojiListContainerProps) => {
  const classNames = joinClassNames([styles["emoji__list__container"]]);

  return (
    <div className={classNames}>
      {tabNames.map((tabName, index) => (
        <EmojiList
          tabName={tabName}
          emojiList={emojiList[index]}
          key={index}
          setCurEmoji={setCurEmoji}
        />
      ))}
    </div>
  );
};

export default EmojiListContainer;
