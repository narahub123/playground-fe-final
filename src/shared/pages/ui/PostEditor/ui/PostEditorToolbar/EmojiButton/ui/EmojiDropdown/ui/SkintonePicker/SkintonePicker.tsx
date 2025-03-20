import styles from "./SkintonePicker.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import {
  ISkinTone,
  SkintoneDot,
  skinTones,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/EmojiButton";
import { useState } from "react";

interface SkintonePickerProps {
  className?: string;
  curSkinTone: ISkinTone;
  setCurSkinTon: React.Dispatch<React.SetStateAction<ISkinTone>>;
}

const SkintonePicker = ({
  className,
  curSkinTone,
  setCurSkinTon,
}: SkintonePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  // 언어 설정
  const {} = useLanguageContent(["components", "SkintonePicker"]);

  const classNames = joinClassNames([styles["skintone__picker"], className]);

  const handleClick = (skintone?: ISkinTone) => {
    if (skintone?.name) {
      // 스킨톤 선택
      setCurSkinTon(skintone);
    }

    setIsOpen(!isOpen);
  };

  return (
    <div className={classNames}>
      {isOpen ? (
        <div className={joinClassNames([styles["skintone__list"]])}>
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
