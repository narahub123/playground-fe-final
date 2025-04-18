import styles from "./PostActionIcon.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { postActionIcons } from "@shared/pages/ui/Post";

interface PostActionIconProps {
  className?: string;
  iconName: keyof typeof postActionIcons;
  iconTitle: string;
  left?: string;
  right?: string;
}

const PostActionIcon = ({
  className,
  iconName,
  iconTitle,
  left,
  right,
}: PostActionIconProps) => {
  // 언어 설정

  const classNames = joinClassNames([styles["post__action__icon"], className]);

  const Comp = postActionIcons[iconName];

  return (
    <div className={classNames} style={{ left, right }} data-title={iconTitle}>
      <Comp className={styles["icon"]} />
    </div>
  );
};

export default PostActionIcon;
