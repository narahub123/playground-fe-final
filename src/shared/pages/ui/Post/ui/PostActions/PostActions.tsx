import styles from "./PostActions.module.css";
import { joinClassNames } from "@shared/@common/utils";
import {
  PostAction,
  PostActionType,
  usePostContext,
} from "@shared/pages/ui/Post";

interface PostActionsProps {
  className?: string;
}

const PostActions = ({ className }: PostActionsProps) => {
  const classNames = joinClassNames([styles["post__actions"], className]);

  const { actions } = usePostContext();

  return (
    <div className={classNames}>
      {Object.keys(actions).map((action) => (
        <PostAction key={action} action={action as PostActionType} />
      ))}
      <div className={styles["right"]}>
        {(["bookmarks", "share"] as PostActionType[]).map((action) => (
          <PostAction key={action} action={action as PostActionType} />
        ))}
      </div>
    </div>
  );
};

export default PostActions;
