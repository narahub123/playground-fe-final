import styles from "./PostRight.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { ReactNode } from "react";

interface PostRightProps {
  className?: string;
  children: ReactNode;
}

const PostRight = ({ className, children }: PostRightProps) => {
  const classNames = joinClassNames([styles["post__right"], className]);

  return <div className={classNames}>{children}</div>;
};

export default PostRight;
