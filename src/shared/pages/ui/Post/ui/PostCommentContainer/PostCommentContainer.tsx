import { IPost } from "@shared/@common/types";
import styles from "./PostCommentContainer.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useEffect, useState } from "react";
import { fetchWithAuth } from "@shared/pages/utils";

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

  console.log(comments);

  return <div className={classNames}>PostCommentContainer</div>;
};

export default PostCommentContainer;
