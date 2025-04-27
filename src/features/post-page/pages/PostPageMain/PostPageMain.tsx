import { useEffect, useState } from "react";
import styles from "./PostPageMain.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { IPost } from "@shared/@common/types";
import { useLocation } from "react-router-dom";
import { fetchWithAuth } from "@shared/pages";
import { Post } from "@shared/pages/ui/Post";

interface PostPageMainProps {
  className?: string;
}

const PostPageMain = ({ className }: PostPageMainProps) => {
  const classNames = joinClassNames([styles["post__page__main"], className]);
  const { pathname } = useLocation();
  const [post, setPost] = useState<IPost>();
  const [comment, setComment] = useState<IPost>();

  const getPost = async (postId: string) => {
    try {
      const result = await fetchWithAuth(`/posts/${postId}`);

      if (result.success) {
        const post: IPost = result.data.post;

        if (post.type === "comment") {
          const { originalPost, ...rest } = post;
          setPost(originalPost);
          setComment(rest);
        } else {
          setPost(result.data.post);
        }
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

    getPost(postId);
  }, [pathname]);

  if (!post) return null;

  return (
    <div className={classNames}>
      <div className={styles["post"]}>
        <Post post={post}>
          <Post.Content>
            <Post.Main>
              {comment && <Post.Left isShowingConnector={true} />}
              <Post.Right>
                <Post.Meta isPostPage={comment ? false : true} />
                <Post.Text className={styles["margin"]} />
                <Post.Media className={styles["margin"]} />
                <Post.Vote className={styles["margin"]} />
                <Post.Stats />
                <Post.Actions
                  className={styles["actions"]}
                  isPostPage={comment ? false : true}
                />
                {!comment && <Post.CommentEditor />}
              </Post.Right>
            </Post.Main>
            {!comment && (
              <Post.Footer>
                <Post.CommentContainer postId={pathname.split("status/")[1]} />
              </Post.Footer>
            )}
          </Post.Content>
        </Post>
      </div>
      {comment && (
        <div className={styles["comment"]}>
          <Post post={comment}>
            <Post.Content>
              <Post.Header />
              <Post.Main>
                <Post.Right>
                  <Post.Meta isPostPage={true} />
                  <Post.Text className={styles["margin"]} />
                  <Post.Media className={styles["margin"]} />
                  <Post.Vote className={styles["margin"]} />
                  <Post.Stats />
                  <Post.Actions
                    className={styles["actions"]}
                    isPostPage={true}
                  />
                  <Post.CommentEditor />
                </Post.Right>
              </Post.Main>
              <Post.Footer>
                <Post.CommentContainer postId={pathname.split("status/")[1]} />
              </Post.Footer>
            </Post.Content>
          </Post>
        </div>
      )}
    </div>
  );
};

export default PostPageMain;
