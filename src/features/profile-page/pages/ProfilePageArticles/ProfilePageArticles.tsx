import {
  selectPage,
  selectPosts,
  selectUser,
} from "@shared/@common/models/selectors";
import styles from "./ProfilePageArticles.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Post } from "@shared/pages/ui/Post";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@app/store";
import {
  setIsFeedLoaing,
  setPosts,
} from "@shared/@common/models/slices/feedSlice";
import { fetchWithAuth } from "@shared/pages";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface ProfilePageArticlesProps {
  className?: string;
}

const ProfilePageArticles = ({ className }: ProfilePageArticlesProps) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { userId: userHandle } = useSelector(selectUser);
  const posts = useSelector(selectPosts);
  const page = useSelector(selectPage);
  99;

  const classNames = joinClassNames([
    styles["profile__page__articles"],
    className,
  ]);

  const getPosts = async (userId: string) => {
    const isCurrentUser = userId === userHandle;
    dispatch(setIsFeedLoaing(true));

    try {
      const api = isCurrentUser
        ? `/posts/me/ariticles?skip=${page}`
        : `/posts/${userId}?skip=${page}`;

      const result = await fetchWithAuth(api);

      if (result.success) {
        dispatch(setPosts(result.data.posts));
      } else {
        console.error("포스트 가져오기 실패");
      }
    } catch (error) {
      console.error("포스트 가져오기 도중 에러 발생", error);
    } finally {
      dispatch(setIsFeedLoaing(false));
    }
  };

  useEffect(() => {
    const userId = pathname.split("/")[1];

    getPosts(userId);
  }, []);

  return (
    <div className={classNames}>
      {posts.map((post, index) => {
        return (
          <Post key={`${post._id}${index}`} post={post} postType="post">
            <Post.Top />
            <Post.Content>
              <Post.Header />
              {(post._id || post.originalPost?._id) && (
                <Post.Main>
                  <Post.Left
                    isShowingConnector={post.thread && post.thread.length > 0}
                  />
                  <Post.Right>
                    <Post.Meta />
                    <Post.Text />
                    <Post.Media />
                    <Post.Vote />
                    <Post.OriginalPost />
                    <Post.Actions className={styles["actions"]} />
                  </Post.Right>
                </Post.Main>
              )}
              <Post.Footer>
                <Post.MoreThread />
                <Post.Thread isCommentType={true} isPostPage={false} />
              </Post.Footer>
            </Post.Content>
            <Post.Bottom />
          </Post>
        );
      })}
    </div>
  );
};

export default ProfilePageArticles;
