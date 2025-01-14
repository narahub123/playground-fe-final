import styles from "./LIghtboxPrevButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { Icon } from "@shared/@common/ui/icons";
import { useLightboxContext } from "@shared/@common/ui/components/Lightbox/hooks";

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
        title={iconTitle}
        onClick={movePrevImage}
        className={classNames}
      />
    </div>
  );
};

export default LIghtboxPrevButton;
