import styles from "./SkintonePicker.module.css";
import { useState } from "react";
import {
  ISkinTone,
  SkintoneDot,
  skinTones,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@app/store";
import { selectSkintoneType } from "@shared/@common/models/selectors";
import { setSkintoneType } from "@shared/@common/models/slices/userSlice";

const SkintonePicker = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const skintoneType = useSelector(selectSkintoneType);

  const handleClick = (skintone?: ISkinTone) => {
    if (skintone?.name) {
      dispatch(setSkintoneType(skintone?.name));
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
              isCurSkinTone={skintoneType === skintone.name}
            />
          ))}
        </div>
      ) : (
        <SkintoneDot
          skintone={skinTones.find((tone) => tone.name === skintoneType)!}
          onClick={handleClick}
          isCurSkinTone={true}
        />
      )}
    </div>
  );
};

export default SkintonePicker;
