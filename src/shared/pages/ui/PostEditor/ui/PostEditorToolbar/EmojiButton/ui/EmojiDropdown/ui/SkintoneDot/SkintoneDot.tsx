import styles from "./SkintoneDot.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { LuCheck } from "react-icons/lu";
import { ISkinTone } from "../../types";

interface SkintoneDotProps {
  className?: string;
  skintone: ISkinTone;
  onClick: () => void;
  isCurSkinTone: boolean;
}

const SkintoneDot = ({
  className,
  skintone,
  onClick,
  isCurSkinTone,
}: SkintoneDotProps) => {
  const classNames = joinClassNames([styles["skintone__dot"], className]);

  return (
    <div className={classNames}>
      <div
        className={joinClassNames([
          styles["skintone__dot__icon__wrapper"],
          isCurSkinTone
            ? styles["skintone__dot__icon--selected"]
            : styles["skintone__dot__icon--unselected"],
        ])}
        style={
          {
            backgroundColor: `rgb(${skintone.color})`,
            "--color": skintone.color,
          } as unknown as React.CSSProperties
        }
        onClick={onClick}
        onTransitionEnd={onClick}
      >
        {isCurSkinTone ? (
          <LuCheck className={styles["skintone__dot__icon"]} />
        ) : null}
      </div>
    </div>
  );
};

export default SkintoneDot;
