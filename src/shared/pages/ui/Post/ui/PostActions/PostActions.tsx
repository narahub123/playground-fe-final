import styles from "./PostActions.module.css";
import { joinClassNames } from "@shared/@common/utils";
import {
  PostAction,
  PostActionIcon,
  PostActionType,
  ShareDropdown,
  usePostContext,
} from "@shared/pages/ui/Post";
import { useState } from "react";

interface PostActionsProps {
  className?: string;
  isPostPage?: boolean;
}

const PostActions = ({ className, isPostPage = false }: PostActionsProps) => {
  const classNames = joinClassNames([styles["post__actions"], className]);

  const [isShareOpen, setIsShareOpen] = useState(false);

  const { actions } = usePostContext();

  const filteredActions = isPostPage
    ? Object.keys(actions).filter((action) => action !== "views")
    : Object.keys(actions);

  const handleShareOpen = () => {
    setIsShareOpen(!isShareOpen);
  };

  return (
    <div className={classNames}>
      {isShareOpen && <ShareDropdown />}
      {filteredActions.map((action) => (
        <PostAction
          key={action}
          action={action as PostActionType}
          isPostPage={isPostPage}
          handleShareOpen={handleShareOpen}
        />
      ))}
      {isPostPage && (
        <div className={styles["share__wrapper"]}>
          <PostActionIcon
            iconName="share"
            action={"share"}
            left={"-0.5rem"}
            className={styles["icon"]}
            onClick={handleShareOpen}
          />
        </div>
      )}
    </div>
  );
};

export default PostActions;
