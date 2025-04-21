import styles from "./PostAction.module.css";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import {
  formatNumber,
  PostActionIcon,
  PostActionType,
  RepostDropdown,
  ShareDropdown,
  usePostContext,
} from "@shared/pages/ui/Post";
import { useState } from "react";

interface PostActionProps {
  className?: string;
  action: PostActionType;
}

const PostAction = ({ action }: PostActionProps) => {
  const [isRepostOpen, setIsRepostOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const { actions } = usePostContext();

  const className =
    action === "reposts"
      ? styles["green"]
      : action === "likes"
      ? styles["red"]
      : styles["cornflower"];

  const handleRepostOpen = () => {
    setIsRepostOpen(!isRepostOpen);
  };
  const handleShareOpen = () => {
    setIsShareOpen(!isShareOpen);
  };

  const handleClick: Record<PostActionType, () => void> = {
    comments: () => {},
    reposts: handleRepostOpen,
    likes: () => {},
    views: () => {},
    bookmarks: () => {},
    share: handleShareOpen,
  };

  return (
    <span className={joinClassNames([styles["action__wrapper"], className])}>
      {action === "reposts" && isRepostOpen && <RepostDropdown />}
      {action === "share" && isShareOpen && <ShareDropdown />}
      <PostActionIcon
        left={action === "share" ? undefined : "-0.5rem"}
        right={action === "share" ? "-0.5rem" : undefined}
        className={styles["icon"]}
        onClick={handleClick[action]}
        action={action}
      />
      {action !== "bookmarks" && action !== "share" && (
        <Text className={styles["stat"]}>
          {formatNumber(
            action === "views" ? actions[action] : actions[action].length
          )}
        </Text>
      )}
    </span>
  );
};

export default PostAction;
