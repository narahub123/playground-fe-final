import {
  selectFollowings,
  selectUserId,
} from "@shared/@common/models/selectors";
import styles from "./PostHeader.module.css";
import { joinClassNames } from "@shared/@common/utils";
import {
  findFirstReposter,
  RepostIcon,
  RepostInfo,
  usePostContext,
} from "@shared/pages/ui/Post";
import { useSelector } from "react-redux";

interface PostHeaderProps {
  className?: string;
}

const PostHeader = ({ className }: PostHeaderProps) => {
  const classNames = joinClassNames([styles["post__header"], className]);

  const { actions } = usePostContext();
  const { reposts } = actions;
  const followings = useSelector(selectFollowings);
  const userId = useSelector(selectUserId);

  const firstReposter = findFirstReposter(reposts, [userId, ...followings]);

  return (
    <header className={classNames}>
      {/* 비어 있거나 , repost 아이콘 혹은 connector가 올 수 있음 */}
      <div className={styles["left"]}>{firstReposter && <RepostIcon />}</div>
      {/* 비어 있거나 혹은 repost info가 올 수 있음 */}
      <div className={styles["right"]}>
        {firstReposter && <RepostInfo firstReposter={firstReposter!} />}
      </div>
    </header>
  );
};

export default PostHeader;
