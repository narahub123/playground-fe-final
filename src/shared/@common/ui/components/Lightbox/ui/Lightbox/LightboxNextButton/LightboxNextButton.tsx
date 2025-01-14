import styles from "./LightboxNextButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { Icon } from "@shared/@common/ui/icons";
import { useLightboxContext } from "@shared/@common/ui/components/Lightbox/hooks";

interface LightboxNextButtonProps {
  className?: string;
}

const LightboxNextButton = ({ className }: LightboxNextButtonProps) => {
  // 언어 설정
  const { iconTitle } = useLanguageContent([
    "components",
    "LightboxNextButton",
  ]);

  const classNames = joinClassNames([
    styles["lightbox__next__button"],
    className,
  ]);

  const { moveNextImage } = useLightboxContext();

  return (
    <div className={styles[`lightbox__next__button__wrapper`]}>
      <Icon
        iconName="arrowRight"
        title={iconTitle}
        onClick={moveNextImage}
        className={classNames}
      />
    </div>
  );
};

export default LightboxNextButton;
