import styles from "./LIghtboxPrevButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { Icon } from "@shared/@common/ui/components";
import useLightboxContext from "../../../hooks/useLightboxContext";

interface LIghtboxPrevButtonProps {
  className?: string;
}

const LIghtboxPrevButton = ({ className }: LIghtboxPrevButtonProps) => {
  // 언어 설정
  const { iconTitle } = useLanguageContent([
    "components",
    "LIghtboxPrevButton",
  ]);

  const classNames = joinClassNames([
    styles["lightbox__prev__button"],
    className,
  ]);

  const { movePrevImage } = useLightboxContext();

  return (
    <div className={styles[`lightbox__prev__button__wrapper`]}>
      <Icon
        iconName="arrowLeft"
        iconTitle={iconTitle}
        onClick={movePrevImage}
        subClassName={classNames}
      />
    </div>
  );
};

export default LIghtboxPrevButton;
