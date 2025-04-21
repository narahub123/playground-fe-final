import styles from "./PostAction.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import {
  formatNumber,
  PostActionIcon,
  postActionIcons,
  PostActionType,
  RepostDropdown,
  ShareDropdown,
} from "@shared/pages/ui/Post";

interface PostActionProps {
  className?: string;
  action: PostActionType;
}

const PostAction = ({ action }: PostActionProps) => {
  const iconName: keyof typeof postActionIcons =
    action === "comments"
      ? "commentOutline"
      : action === "reposts"
      ? "repost"
      : action === "likes"
      ? "likeOutline"
      : "view";

  const className =
    action === "reposts"
      ? styles["green"]
      : action === "likes"
      ? styles["red"]
      : styles["cornflower"];

  return (
    <span className={joinClassNames([styles["action__wrapper"], className])}>
      <PostActionIcon
        iconName={iconName}
        left={"-0.5rem"}
        className={styles["icon"]}
        // onClick={handleClick[action]}
        action={action}
      />
      <Text className={styles["stat"]}>{formatNumber(1000)}</Text>
    </span>
  );
};

export default PostAction;
