import styles from "./PostPageHeader.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { PRIMARY_LINK } from "@shared/@common/constants";
import { Button, Text } from "@shared/@common/ui/components";
import { Icon } from "@shared/@common/ui/icons";
import { joinClassNames } from "@shared/@common/utils";
import { useNavigate } from "react-router-dom";
import { CommentSortDropdown } from "@features/post-page";
import { useState } from "react";

interface PostPageHeaderProps {
  className?: string;
}

const PostPageHeader = ({ className }: PostPageHeaderProps) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  // 언어 설정
  const { main, iconTitle, reply } = useLanguageContent([
    "postpage",
    "PostPageHeader",
  ]);

  const classNames = joinClassNames([styles["post__page__header"], className]);

  const handleBackward = () => {
    navigate(-1);
  };

  const composeComment = () => {
    navigate(PRIMARY_LINK.COMPOSE_POST);
  };

  console.log(isOpen);

  return (
    <header className={classNames}>
      <div className={styles["wrapper"]}>
        <div className={styles["header__icon"]}>
          <Icon
            iconName="arrowLeft"
            onClick={handleBackward}
            title={iconTitle}
            className={styles["icon"]}
          />
        </div>
        <div className={styles["header__text"]}>
          <Text type="heading3">{main}</Text>
        </div>
        <div className={styles["header__comment"]}>
          <Button
            className={styles["comment__btn"]}
            isValid
            onClick={composeComment}
            bgColor="transparent"
            variant="outline"
            rounded="2xl"
            style={{ padding: `0.25rem 0.5rem` }}
          >
            {reply}
          </Button>
          <Icon
            iconName="notificationFiltersIcon"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(true);
            }}
          />
          <CommentSortDropdown isOpen={isOpen} onClose={onClose} />
        </div>
      </div>
    </header>
  );
};

export default PostPageHeader;
