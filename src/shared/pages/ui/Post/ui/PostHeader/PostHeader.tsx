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
}

const PostHeader = ({ className }: PostHeaderProps) => {
  const classNames = joinClassNames([styles["post__header"], className]);

  const { type } = usePostContext();

  const isShowingConnector = false;

  if (type === "comment" || type === "post" || !type) return null;

  return (
    <header className={classNames}>
      {/* 비어 있거나 , repost 아이콘 혹은 connector가 올 수 있음 */}
      <div className={styles["left"]}>
        {<RepostIcon />}
        {isShowingConnector && <LineConnector />}
      </div>
      {/* 비어 있거나 혹은 repost info가 올 수 있음 */}
      <div className={styles["right"]}>{<RepostInfo />}</div>
    </header>
  );
};

export default PostHeader;
