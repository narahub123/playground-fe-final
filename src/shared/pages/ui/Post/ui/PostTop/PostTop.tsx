import styles from "./PostTop.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface PostTopProps {
  className?: string;
}

const PostTop = ({ className }: PostTopProps) => {
  const classNames = joinClassNames([styles["post__top"], className]);

  return <div className={classNames} />;
};

export default PostTop;
