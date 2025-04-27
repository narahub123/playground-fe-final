import { IPost } from "@shared/@common/types";
import styles from "./PostCommentContainer.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useEffect, useState } from "react";
import { fetchWithAuth } from "@shared/pages/utils";
import Post from "..";

interface PostCommentContainerProps {
  className?: string;
  postId: string;
}

const PostCommentContainer = ({
  className,
  postId,
}: PostCommentContainerProps) => {
  const [comments, setComments] = useState<IPost[]>([]);

  const getComments = async (postId: string) => {
    try {
      const result = await fetchWithAuth(`/posts/${postId}/comments`);
      if (result.success) {
        setComments(result.data.comments);
      } else {
        console.error("댓글 조회 실패");
      }
    } catch (error) {
      console.error("댓글 조회 중 에러 발생", error);
    }
  };

  useEffect(() => {
    // 댓글 불러오기
    getComments(postId);
  }, []);

  const classNames = joinClassNames([
    styles["post__comment__container"],
    className,
  ]);

  if (comments.length === 0) return null;

  return (
    <div className={classNames}>
      {comments.map((comment, index) => (
        <Post post={comment} key={index} className={styles["post"]}>
          <Post.Content>
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
        </Post>
      ))}
    </div>
  );
};

export default PostCommentContainer;
