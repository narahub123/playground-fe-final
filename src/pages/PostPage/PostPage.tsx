import { Outlet, useLocation } from "react-router-dom";
import styles from "./PostPage.module.css";
import {
  PostPageHeader,
  selectPostLoading,
  setIsCommentType,
  setPost,
  setPostLoading,
} from "@features/post-page";
import { useEffect } from "react";
import { useAppDispatch } from "@app/store";
import { fetchWithAuth } from "@shared/pages";
import { useSelector } from "react-redux";
import { Spinner } from "@shared/@common/ui/components";

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

        dispatch(setPost(response));
        dispatch(setIsCommentType(postId !== response._id));
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
