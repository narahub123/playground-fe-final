import styles from "./LightboxDisplayButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { Icon } from "@shared/@common/ui/components";

interface LightboxDisplayButtonProps {
  className?: string;
}

const LightboxDisplayButton = ({ className }: LightboxDisplayButtonProps) => {
  // 언어 설정
  const { iconTitle } = useLanguageContent([
    "components",
    "LightboxDisplayButton",
  ]);

  const classNames = joinClassNames([
    styles["lightbox__display__button"],
    className,
  ]);

  return (
    <div className={styles["lightbox__display__button__wrapper"]}>
      <Icon
        iconName="displayPost"
        iconTitle={iconTitle}
        onClick={() => {}}
        subClassName={classNames}
      />
    </div>
  );
};

export default LightboxDisplayButton;
