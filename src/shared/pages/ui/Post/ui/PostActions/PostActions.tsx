import styles from "./PostActions.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface PostActionsProps {
  className?: string;
}

const PostActions = ({ className }: PostActionsProps) => {
  const classNames = joinClassNames([styles["post__actions"], className]);

  return <div className={classNames}>PostActions</div>;
};

export default PostActions;
