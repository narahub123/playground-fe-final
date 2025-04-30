import styles from "./PostBottom.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface PostBottomProps {
  className?: string;
}

const PostBottom = ({ className }: PostBottomProps) => {
  const classNames = joinClassNames([styles["post__bottom"], className]);

  return <div className={classNames} />;
};

export default PostBottom;
