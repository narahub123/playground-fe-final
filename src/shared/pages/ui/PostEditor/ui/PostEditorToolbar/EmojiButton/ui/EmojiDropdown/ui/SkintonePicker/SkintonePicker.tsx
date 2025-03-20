import styles from "./SkintonePicker.module.css";
import { useState } from "react";
import {
  ISkinTone,
  SkintoneDot,
  skinTones,
  useEmojiContext,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";

const SkintonePicker = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { curSkinTone, setCurSkinTon } = useEmojiContext();

  const handleClick = (skintone?: ISkinTone) => {
    if (skintone?.name) {
      // 스킨톤 선택
      setCurSkinTon(skintone);
    }

    setIsOpen(!isOpen);
  };

  return (
    <div className={styles["skintone__picker"]}>
      {isOpen ? (
        <div className={styles["skintone__list"]}>
          {skinTones.map((skintone) => (
            <SkintoneDot
              key={skintone.name}
              skintone={skintone}
              onClick={() => handleClick(skintone)}
              isCurSkinTone={curSkinTone.name === skintone.name}
            />
          ))}
        </div>
      ) : (
        <SkintoneDot
          skintone={curSkinTone}
          onClick={handleClick}
          isCurSkinTone={true}
        />
      )}
    </div>
  );
};

export default SkintonePicker;
