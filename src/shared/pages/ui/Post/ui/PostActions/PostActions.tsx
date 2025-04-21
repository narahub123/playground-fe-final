import styles from "./PostActions.module.css";
import { joinClassNames } from "@shared/@common/utils";
import {
  PostAction,
  PostActionIcon,
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
          <div className={styles["wrapper"]} key={action}>
            <PostActionIcon
              iconName={action === "bookmarks" ? "bookmarkOutline" : "share"}
              onClick={() => {}}
              left={action === "bookmarks" ? "0" : undefined}
              right={action === "share" ? "0" : undefined}
              className={styles["icon"]}
              action={action}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostActions;
