import { ReactNode } from "react";
import styles from "./PostMain.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface PostMainProps {
  className?: string;
  children: ReactNode;
}

const PostMain = ({ className, children }: PostMainProps) => {
  const classNames = joinClassNames([styles["post__main"], className]);

  return <main className={classNames}>{children}</main>;
};

export default PostMain;
