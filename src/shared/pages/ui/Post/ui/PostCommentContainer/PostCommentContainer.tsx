import styles from "./PostCommentContainer.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface PostCommentContainerProps {
  className?: string;
}

const PostCommentContainer = ({ className }: PostCommentContainerProps) => {
  const classNames = joinClassNames([
    styles["post__comment__container"],
    className,
  ]);

  return <div className={classNames}>PostCommentContainer</div>;
};

export default PostCommentContainer;
