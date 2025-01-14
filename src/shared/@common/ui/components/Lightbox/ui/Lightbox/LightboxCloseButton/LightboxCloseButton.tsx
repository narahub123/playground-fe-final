import styles from "./LightboxCloseButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { Icon } from "@shared/@common/ui/icons";
import { useLightboxContext } from "@shared/@common/ui/components/Lightbox/hooks";

interface LightboxCloseButtonProps {
  className?: string;
}

const LightboxCloseButton = ({ className }: LightboxCloseButtonProps) => {
  // 언어 설정
  const { iconTitle } = useLanguageContent([
    "components",
    "LightboxCloseButton",
  ]);

  const classNames = joinClassNames([
    styles["lightbox__close__button"],
    className,
  ]);

  const { onClose } = useLightboxContext();

  return (
    <div className={styles[`lightbox__close__button__wrapper`]}>
      <Icon
        iconName="close"
        title={iconTitle}
        onClick={onClose}
        className={classNames}
      />
    </div>
  );
};

export default LightboxCloseButton;
