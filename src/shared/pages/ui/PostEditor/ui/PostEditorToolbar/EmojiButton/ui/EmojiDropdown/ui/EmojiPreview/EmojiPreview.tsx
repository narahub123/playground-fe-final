import { useSelector } from "react-redux";
import styles from "./EmojiPreview.module.css";
import {
  defaultEmojiPreviews,
  getEmojiWithSkinTone,
  SkintonePicker,
  useEmojiContext,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";
import { selectSkintone } from "@shared/pages/ui/PostEditor/models/selectors";

const EmojiPreview = () => {
  const skintoneType = useSelector(selectSkintone);
  const { curEmoji } = useEmojiContext();
  const defaultPreview = defaultEmojiPreviews.find(
    (item) => item.name === skintoneType
  )!;

  return (
    <div className={styles["emoji__preview"]}>
      <div className={styles["emoji__preview__wrapper"]}>
        <div className={styles["emoji__preview__bigger__emoji"]}>
          <div className={styles["bigger__emoji"]}>
            {curEmoji
              ? getEmojiWithSkinTone(curEmoji, skintoneType)
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
