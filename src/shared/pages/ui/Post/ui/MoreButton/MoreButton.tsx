import styles from "./MoreButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Icon } from "@shared/@common/ui/icons";
import { joinClassNames } from "@shared/@common/utils";

interface MoreButtonProps {
  className?: string;
}

const MoreButton = ({ className }: MoreButtonProps) => {
  // 언어 설정
  const { title } = useLanguageContent(["post", "MoreButton"]);

  const classNames = joinClassNames([styles["more__button"], className]);

  const handleClick = () => {};

  return (
    <Icon
      className={classNames}
      iconName="more"
      data-title={title}
      onClick={handleClick}
    />
  );
};

export default MoreButton;
