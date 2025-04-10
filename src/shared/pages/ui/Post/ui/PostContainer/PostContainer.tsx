import styles from "./PostContainer.module.css";
import { ReactNode } from "react";
import { joinClassNames } from "@shared/@common/utils";
import { PostContextProvider } from "../../context";
import { IPostContext } from "../../types";

interface PostContainerProps {
  className?: string;
  children: ReactNode;
}

const PostContainer = ({ className, children }: PostContainerProps) => {
  const classNames = joinClassNames([styles["post__container"], className]);

  const value: IPostContext = {};

  return (
    <PostContextProvider value={value}>
      <article className={classNames}>{children}</article>
    </PostContextProvider>
  );
};

export default PostContainer;
