import { useEffect, useState } from "react";
import styles from "./PostPageMain.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { IPost } from "@shared/@common/types";
import { useLocation } from "react-router-dom";
import { fetchWithAuth } from "@shared/pages";
import { Post } from "@shared/pages/ui/Post";
import { useSelector } from "react-redux";
import { selectPosts } from "@shared/@common/models/selectors";

interface PostPageMainProps {
  className?: string;
}

const PostPageMain = ({ className }: PostPageMainProps) => {
  const classNames = joinClassNames([styles["post__page__main"], className]);
  const { pathname } = useLocation();
  const [post, setPost] = useState<IPost>();

  const posts = useSelector(selectPosts);

  const getPost = async (postId: string) => {
    try {
      const result = await fetchWithAuth(`/posts/${postId}`);

      if (result.success) {
        setPost(result.data.post);
      } else {
        console.error("포스트 조회 실패");
      }
    } catch (error) {
      console.error("포스트 조회 도중 에러 발생", error);
    }
  };

  // 포스트 정보 가져오기
  useEffect(() => {
    if (!pathname) return;

    const postId = pathname.split("status/")[1];

    const post = posts.find((p) => p._id === postId);

    if (post) {
      setPost(post);
    } else {
      getPost(postId);
    }
  }, [posts]);

  return (
    <div className={classNames}>
      <div className={styles["post"]}>
        <Post post={post}>
          <Post.Content>
            <Post.Main>
              <Post.Right>
                <Post.Meta isPostPage={true} />
                <Post.Text className={styles["margin"]} />
                <Post.Media className={styles["margin"]} />
                <Post.Vote className={styles["margin"]} />
                <Post.Stats />
                <Post.Actions className={styles["actions"]} isPostPage={true} />
                <Post.CommentEditor />
              </Post.Right>
            </Post.Main>
            <Post.Footer>
              <Post.CommentContainer postId={pathname.split("status/")[1]} />
            </Post.Footer>
          </Post.Content>
        </Post>
      </div>
      <div className={styles["comment__editor"]}>댓글 쓰기</div>
      <div className={styles["comment__list"]}>
        <div className={styles["comment__wrapper"]}>
          <div className={styles["comment"]}>댓글</div>
        </div>
        <div className={styles["comment__wrapper"]}>
          <div className={styles["comment"]}>댓글</div>
        </div>
        <div className={styles["comment__wrapper"]}>
          <div className={styles["comment"]}>댓글</div>
        </div>
        <div className={styles["comment__wrapper"]}>
          <div className={styles["comment"]}>댓글</div>
        </div>
      </div>
    </div>
  );
};

export default PostPageMain;
