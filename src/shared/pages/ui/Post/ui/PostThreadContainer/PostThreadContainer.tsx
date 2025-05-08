import styles from "./PostThreadContainer.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useEffect, useState } from "react";
import { Post, usePostContext } from "@shared/pages/ui/Post";
import { IPost } from "@shared/@common/types";
import { POST_THREAD_MAX } from "@shared/@common/constants";

interface PostThreadContainerProps {
  className?: string;
  isCommentType?: boolean;
  isPostPage?: boolean;
}

const PostThreadContainer = ({
  className,
  isCommentType = false,
  isPostPage = true,
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

  const filteredEntries = isPostPage
    ? entries
    : entries.slice(entries.length - POST_THREAD_MAX);

  return (
    <div className={classNames}>
      {filteredEntries.map((entry, index) => (
        <Post post={entry} key={index} postType="thread">
          <Post.Content>
            <Post.Header isCommentType={isCommentType} />
            <Post.Main>
              <Post.Left
                isShowingConnector={
                  isCommentType && index !== filteredEntries.length - 1
                }
              />
              <Post.Right>
                <Post.Meta />
                <Post.Text className={styles["margin"]} />
                <Post.Media className={styles["margin"]} />
                {isPostPage && index === thread.length - 1 && <Post.Stats />}
                <Post.Actions
                  className={styles["actions"]}
                  isPostPage={isPostPage && index === thread.length - 1}
                />
              </Post.Right>
            </Post.Main>
          </Post.Content>
        </Post>
      ))}
    </div>
  );
};

export default PostThreadContainer;
