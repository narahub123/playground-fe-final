import { ReactNode } from "react";
import styles from "./PostContent.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface PostContentProps {
  className?: string;
  children: ReactNode;
}

const PostContent = ({ className, children }: PostContentProps) => {
  const classNames = joinClassNames([styles["post__content"], className]);

  return <div className={classNames}>{children}</div>;
};

export default PostContent;
