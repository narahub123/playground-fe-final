import styles from "./PostActionIcon.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { postActionIcons, PostActionType } from "@shared/pages/ui/Post";

interface PostActionIconProps {
  className?: string;
  iconName: keyof typeof postActionIcons;
  action: PostActionType;
  left?: string;
  right?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const PostActionIcon = ({
  className,
  left,
  right,
  onClick,
  action,
  iconName,
}: PostActionIconProps) => {
  // 언어 설정
  const { title } = useLanguageContent(["post", "PostActionIcon"]);

  const classNames = joinClassNames([styles["post__action__icon"], className]);

  const Comp = postActionIcons[iconName];

  return (
    <div
      className={classNames}
      style={{ left, right }}
      data-title={title[action]}
      onClick={onClick}
    >
      <Comp className={styles["icon"]} />
    </div>
  );
};

export default PostActionIcon;
