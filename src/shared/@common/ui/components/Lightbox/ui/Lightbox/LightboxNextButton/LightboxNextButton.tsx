import styles from "./LightboxNextButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { Icon } from "@shared/@common/ui/components";

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

  return (
    <div className={styles[`lightbox__next__button__wrapper`]}>
      <Icon
        iconName="arrowRight"
        iconTitle={iconTitle}
        onClick={() => {}}
        subClassName={classNames}
      />
    </div>
  );
};

export default LightboxNextButton;
