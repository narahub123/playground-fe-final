import styles from "./PostText.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface PostTextProps {
  className?: string;
}

const PostText = ({ className }: PostTextProps) => {
  const classNames = joinClassNames([styles["post__text"], className]);

  return <div className={classNames}>PostText</div>;
};

export default PostText;
