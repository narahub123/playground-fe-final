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
  const [isCommentType, setIsCommentType] = useState(false);

  const getPost = async (postId: string) => {
    try {
      const result = await fetchWithAuth(`/posts/${postId}`);

      if (result.success) {
        const post = result.data.post;
        setPost(post);
        setIsCommentType(postId !== post._id);
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
            <Post.Header />
            <Post.Main>
              {isCommentType && (
                <Post.Left isShowingConnector={isCommentType} />
              )}
              <Post.Right>
                <Post.Meta isPostPage={!isCommentType} />
                <Post.Text className={styles["margin"]} />
                <Post.Media className={styles["margin"]} />
                <Post.Vote className={styles["margin"]} />
                <Post.Stats />
                <Post.Actions
                  className={styles["actions"]}
                  isPostPage={!isCommentType}
                />
                {!isCommentType && <Post.CommentEditor isCommentType={false} />}
              </Post.Right>
            </Post.Main>

            <Post.Footer>
              <Post.Thread isCommentType={isCommentType} />
              {isCommentType && (
                <Post.CommentEditor
                  className={styles["commentEditor"]}
                  isCommentType={true}
                />
              )}
              <Post.Comments isCommentType={isCommentType} />
            </Post.Footer>
          </Post.Content>
        </Post>
      </div>
    </div>
  );
};

export default PostPageMain;
