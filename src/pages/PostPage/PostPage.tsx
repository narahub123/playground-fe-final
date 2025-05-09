import styles from "./PostPage.module.css";
import {
  PostPageHeader,
  selectPostLoading,
  setIsCommentType,
  setIsEnd,
  setPost,
  setPostLoading,
} from "@features/post-page";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useAppDispatch } from "@app/store";
import { fetchWithAuth } from "@shared/pages";
import { useSelector } from "react-redux";
import { Spinner } from "@shared/@common/ui/components";
import { COMMENT_LENGTH } from "@shared/@common/constants";

const PostPage = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const loading = useSelector(selectPostLoading);

  const getPost = async (postId: string) => {
    dispatch(setPostLoading(true));
    try {
      const result = await fetchWithAuth(`/posts/${postId}`);

      if (result.success) {
        const response = result.data.post;
        console.log(response);

        // 포스트 정보 추가
        dispatch(setPost(response));

        // 포스트가 comment 타입인지 여부
        dispatch(setIsCommentType(postId !== response._id));

        // 댓글 추가 요청 가능 여부
        if (!response.comments || response.comments.length < COMMENT_LENGTH) {
          dispatch(setIsEnd(true));
        }
      } else {
        console.error("포스트 조회 실패");
      }
    } catch (error) {
      console.error("포스트 조회 도중 에러 발생", error);
    } finally {
      dispatch(setPostLoading(false));
    }
  };

  useEffect(() => {
    const postId = pathname.split("status/")[1];

    getPost(postId);
  }, [pathname]);

  return (
    <div className={styles["post__page"]}>
      <PostPageHeader />
      <main className={styles["main"]}>
        {loading ? <Spinner color="cornflowerblue" size={1.5} /> : <Outlet />}
      </main>
    </div>
  );
};

export default PostPage;
