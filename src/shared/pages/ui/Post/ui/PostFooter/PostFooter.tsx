import styles from "./PostFooter.module.css";

import { joinClassNames } from "@shared/@common/utils";
import { ReactNode } from "react";

interface PostFooterProps {
  className?: string;
  children: ReactNode;
}

const PostFooter = ({ className, children }: PostFooterProps) => {
  const classNames = joinClassNames([styles["post__footer"], className]);

  return <footer className={classNames}>{children}</footer>;
};

export default PostFooter;
