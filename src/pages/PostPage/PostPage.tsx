import { Outlet, useLocation } from "react-router-dom";
import styles from "./PostPage.module.css";
import {
  PostPageHeader,
  selectPost,
  selectPostLoading,
  setPost,
  setPostLoading,
} from "@features/post-page";
import { useEffect } from "react";
import { useAppDispatch } from "@app/store";
import { fetchWithAuth } from "@shared/pages";
import { useSelector } from "react-redux";

const PostPage = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const post = useSelector(selectPost);
  const loading = useSelector(selectPostLoading);

  const getPost = async (postId: string) => {
    dispatch(setPostLoading(true));
    try {
      const result = await fetchWithAuth(`/posts/${postId}`);

      if (result.success) {
        const response = result.data.post;

        dispatch(setPost(response));
      } else {
        console.error("포스트 조회 실패");
      }
    } catch (error) {
      console.error("포스트 조회 도중 에러 발생", error);
    } finally {
      dispatch(setPostLoading(true));
    }
  };

  useEffect(() => {
    const postId = pathname.split("status/")[1];

    getPost(postId);
  }, [pathname]);

  console.log(post);
  console.log(loading);

  return (
    <div className={styles["post__page"]}>
      <PostPageHeader />
      <main className={styles["main"]}>
        <Outlet />
      </main>
    </div>
  );
};

export default PostPage;
