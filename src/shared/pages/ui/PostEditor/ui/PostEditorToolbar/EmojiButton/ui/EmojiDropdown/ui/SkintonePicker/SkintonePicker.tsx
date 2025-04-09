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
import { fetchWithAuth } from "@shared/pages/utils";
import { useToast } from "@shared/@common/ui/components/Toast/hooks";
import { ErrorDescriptionCodeType } from "@shared/@common/types";
import { useAPIError } from "@shared/@common/models/hooks";

const SkintonePicker = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const skintoneType = useSelector(selectSkintoneType);

  const toast = useToast();
  const { getErrorDescription } = useAPIError();

  const handleClick = async (skintone?: ISkinTone) => {
    if (skintone?.name) {
      const result = await fetchWithAuth(
        "/users/me",
        { method: "PATCH" },
        {
          skintoneType: skintone?.name,
        }
      );
      try {
        if (result.success) {
          dispatch(setSkintoneType(skintone?.name));
        } else {
          const errorCode = Object.values(
            result.error.details
          )[0] as ErrorDescriptionCodeType;

          if (errorCode === "UPDATE_SKINTONE_FAILED") {
            toast({
              description: getErrorDescription(errorCode),
              type: "error",
            });
          }
        }
      } catch (error) {}
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
