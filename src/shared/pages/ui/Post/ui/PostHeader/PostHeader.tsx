import styles from "./PostHeader.module.css";
import { joinClassNames } from "@shared/@common/utils";
import {
  LineConnector,
  RepostIcon,
  RepostInfo,
  usePostContext,
} from "@shared/pages/ui/Post";

interface PostHeaderProps {
  className?: string;
  isCommentType?: boolean;
}

const PostHeader = ({ className, isCommentType = false }: PostHeaderProps) => {
  const classNames = joinClassNames([styles["post__header"], className]);

  const { type } = usePostContext();

  if (type === "post" || !type) return null;

  return (
    <header className={classNames}>
      {/* 비어 있거나 , repost 아이콘 혹은 connector가 올 수 있음 */}
      <div className={styles["left"]}>
        {type === "repost" && <RepostIcon />}
        {type === "comment" && isCommentType && <LineConnector />}
      </div>
      {/* 비어 있거나 혹은 repost info가 올 수 있음 */}
      {type === "repost" && (
        <div className={styles["right"]}>{<RepostInfo />}</div>
      )}
      {type === "comment" && isCommentType && (
        <div className={styles["empty"]} />
      )}
    </header>
  );
};

export default PostHeader;
