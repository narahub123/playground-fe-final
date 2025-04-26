import styles from "./PostContainer.module.css";
import { ReactNode, useState } from "react";
import { joinClassNames } from "@shared/@common/utils";
import { PostContextProvider } from "../../context";
import { IPostContext } from "../../types";
import { IPost } from "@shared/@common/types";

interface PostContainerProps {
  className?: string;
  post: IPost | undefined;
  children: ReactNode;
}

const PostContainer = ({ className, children, post }: PostContainerProps) => {
  const classNames = joinClassNames([styles["post__container"], className]);
  const [mentions, setMentions] = useState<string[]>([]);

  if (!post) return null;

  const value: IPostContext = { ...post, mentions, setMentions };

  return (
    <PostContextProvider value={value}>
      <article className={classNames}>{children}</article>
    </PostContextProvider>
  );
};

export default PostContainer;
