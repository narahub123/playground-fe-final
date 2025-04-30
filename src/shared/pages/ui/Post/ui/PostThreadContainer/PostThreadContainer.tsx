import styles from "./PostThreadContainer.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useEffect, useState } from "react";
import { Post, usePostContext } from "@shared/pages/ui/Post";
import { IPost } from "@shared/@common/types";

interface PostThreadContainerProps {
  className?: string;
  isCommentType?: boolean;
}

const PostThreadContainer = ({
  className,
  isCommentType = false,
}: PostThreadContainerProps) => {
  const [entries, setEntries] = useState<IPost[]>([]);

  const { thread } = usePostContext();

  useEffect(() => {
    setEntries(thread);
  }, [thread]);

  const classNames = joinClassNames([
    styles["post__thread__container"],
    className,
  ]);

  if (!entries || entries.length === 0) return null;

  return (
    <div className={classNames}>
      {entries.map((entry, index) => (
        <Post post={entry} key={index}>
          <Post.Content>
            <Post.Header isCommentType={isCommentType} />
            <Post.Main>
              <Post.Left
                isShowingConnector={
                  isCommentType && index !== entries.length - 1
                }
              />
              <Post.Right>
                <Post.Meta />
                <Post.Text className={styles["margin"]} />
                <Post.Media className={styles["margin"]} />
                <Post.Actions className={styles["actions"]} />
              </Post.Right>
            </Post.Main>
          </Post.Content>
        </Post>
      ))}
    </div>
  );
};

export default PostThreadContainer;
