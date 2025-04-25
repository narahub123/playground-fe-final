import styles from "./PostPageHeader.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { Icon } from "@shared/@common/ui/icons";
import { joinClassNames } from "@shared/@common/utils";
import { useNavigate } from "react-router-dom";

interface PostPageHeaderProps {
  className?: string;
}

const PostPageHeader = ({ className }: PostPageHeaderProps) => {
  const navigate = useNavigate();
  // 언어 설정
  const { main, iconTitle } = useLanguageContent([
    "postpage",
    "PostPageHeader",
  ]);

  const classNames = joinClassNames([styles["post__page__header"], className]);

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <header className={classNames}>
      <div className={styles["wrapper"]}>
        <span className={styles["header__icon"]}>
          <Icon
            iconName="arrowLeft"
            onClick={handleClick}
            title={iconTitle}
            className={styles["icon"]}
          />
        </span>
        <span className={styles["header__text"]}>
          <Text type="heading3">{main}</Text>
        </span>
      </div>
    </header>
  );
};

export default PostPageHeader;
