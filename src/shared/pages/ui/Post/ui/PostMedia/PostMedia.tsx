import styles from "./PostMedia.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface PostMediaProps {
  className?: string;
}

const PostMedia = ({ className }: PostMediaProps) => {
  const classNames = joinClassNames([styles["post__media"], className]);

  return <div className={classNames}>PostMedia</div>;
};

export default PostMedia;
