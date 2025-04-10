import { PostActions } from "@shared/pages/ui/Post";
import styles from "./PostFooter.module.css";

import { joinClassNames } from "@shared/@common/utils";

interface PostFooterProps {
  className?: string;
}

const PostFooter = ({ className }: PostFooterProps) => {
  const classNames = joinClassNames([styles["post__footer"], className]);

  return (
    <footer className={classNames}>
      <PostActions />
    </footer>
  );
};

export default PostFooter;
