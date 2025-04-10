import styles from "./PostRight.module.css";
import { joinClassNames } from "@shared/@common/utils";
import {
  PostText,
  PostMeta,
  PostMedia,
  PostVote,
  PostStats,
  PostActions,
} from "@shared/pages/ui/Post";

interface PostRightProps {
  className?: string;
}

const PostRight = ({ className }: PostRightProps) => {
  const classNames = joinClassNames([styles["post__right"], className]);

  return (
    <div className={classNames}>
      <PostMeta />
      <PostText />
      <PostMedia />
      <PostVote />
      <PostStats />
      <PostActions />
    </div>
  );
};

export default PostRight;
