import styles from "./EmojiPreview.module.css";
import {
  defaultEmojiPreviews,
  getEmojiWithSkinTone,
  IEmoji,
  ISkinTone,
  SkintonePicker,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";

interface EmojiPreviewProps {
  curEmoji: IEmoji | null;
  curSkinTone: ISkinTone;
  setCurSkinTon: React.Dispatch<React.SetStateAction<ISkinTone>>;
}

const EmojiPreview = ({
  curEmoji,
  curSkinTone,
  setCurSkinTon,
}: EmojiPreviewProps) => {
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
        <SkintonePicker
          curSkinTone={curSkinTone}
          setCurSkinTon={setCurSkinTon}
        />
      </div>
    </div>
  );
};

export default EmojiPreview;
