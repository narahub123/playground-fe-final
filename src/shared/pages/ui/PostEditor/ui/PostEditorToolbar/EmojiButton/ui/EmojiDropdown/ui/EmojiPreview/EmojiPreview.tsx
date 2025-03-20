import styles from "./EmojiPreview.module.css";
import {
  defaultEmojiPreviews,
  IEmoji,
  ISkinTone,
  SkintonePicker,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";

interface EmojiPreviewProps {
  curEmoji: IEmoji | null;
  curSkinton: ISkinTone;
  setCurSkinton: React.Dispatch<React.SetStateAction<ISkinTone>>;
}

const EmojiPreview = ({
  curEmoji,
  curSkinton,
  setCurSkinton,
}: EmojiPreviewProps) => {
  const defaultPreview = defaultEmojiPreviews.find(
    (item) => item.name === curSkinton.name
  )!;
  return (
    <div className={styles["emoji__preview"]}>
      <div className={styles["emoji__preview__wrapper"]}>
        <div className={styles["emoji__preview__bigger__emoji"]}>
          <div className={styles["bigger__emoji"]}>
            {curEmoji ? curEmoji.char : defaultPreview.char}
          </div>
        </div>
        {curEmoji && (
          <div className={styles["emoji__preview__name"]}>{curEmoji.name}</div>
        )}
        <SkintonePicker curSkinton={curSkinton} setCurSkinton={setCurSkinton} />
      </div>
    </div>
  );
};

export default EmojiPreview;
