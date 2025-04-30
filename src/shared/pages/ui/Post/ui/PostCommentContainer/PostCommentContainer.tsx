import { IPost } from "@shared/@common/types";
import styles from "./PostCommentContainer.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useEffect, useState } from "react";
import Post from "..";
import { usePostContext } from "../../hooks";

interface PostCommentContainerProps {
  className?: string;
}

const PostCommentContainer = ({ className }: PostCommentContainerProps) => {
  const [comments, setComments] = useState<IPost[]>([]);

  const { comments: initialComments } = usePostContext();

  useEffect(() => {
    // 댓글 불러오기
    setComments(initialComments);
  }, [initialComments]);

  const classNames = joinClassNames([
    styles["post__comment__container"],
    className,
  ]);

  if (comments.length === 0) return null;

  return (
    <div className={classNames}>
      {comments.map((comment, index) => (
        <Post post={comment} key={index}>
          <Post.Content>
            <Post.Header />
            <Post.Main>
              <Post.Left />
              <Post.Right>
                <Post.Meta />
                <Post.Text className={styles["margin"]} />
                <Post.Media className={styles["margin"]} />
                <Post.Actions className={styles["actions"]} />
              </Post.Right>
            </Post.Main>
          </Post.Content>
          <Post.Bottom />
        </Post>
      ))}
    </div>
  );
};

export default PostCommentContainer;
