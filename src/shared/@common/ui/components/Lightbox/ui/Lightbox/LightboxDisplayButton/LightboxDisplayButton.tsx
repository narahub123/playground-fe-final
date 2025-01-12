import styles from "./LightboxDisplayButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { Icon } from "@shared/@common/ui/components";
import { useLightboxContext } from "@shared/@common/ui/components/Lightbox/hooks";

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

  const { isLightboxPostOpen, onOpenLightboxPost, onCloseLightboxPost } =
    useLightboxContext();

  if (isLightboxPostOpen === undefined) return null;

  const iconName = isLightboxPostOpen ? "closePost" : "displayPost";

  return (
    <div className={styles["lightbox__display__button__wrapper"]}>
      <Icon
        iconName={iconName}
        iconTitle={iconTitle}
        onClick={isLightboxPostOpen ? onCloseLightboxPost : onOpenLightboxPost}
        subClassName={classNames}
      />
    </div>
  );
};

export default LightboxDisplayButton;
