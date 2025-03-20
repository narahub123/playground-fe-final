import styles from "./EmojiPreview.module.css";
import {
  defaultEmojiPreviews,
  getEmojiWithSkinTone,
  SkintonePicker,
  useEmojiContext,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";

const EmojiPreview = () => {
  const { curEmoji, curSkinTone } = useEmojiContext();
  const defaultPreview = defaultEmojiPreviews.find(
    (item) => item.name === curSkinTone.name
  )!;
  return (
    <div className={styles["emoji__preview"]}>
      <div className={styles["emoji__preview__wrapper"]}>
        <div className={styles["emoji__preview__bigger__emoji"]}>
          <div className={styles["bigger__emoji"]}>
            {curEmoji
              ? getEmojiWithSkinTone(curEmoji, curSkinTone.name)
              : defaultPreview.char}
          </div>
        </div>
        {curEmoji && (
          <div className={styles["emoji__preview__name"]}>{curEmoji.name}</div>
        )}
        <SkintonePicker />
      </div>
    </div>
  );
};

export default EmojiPreview;
