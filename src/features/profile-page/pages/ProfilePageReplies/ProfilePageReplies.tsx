import { useAppDispatch } from "@app/store";
import styles from "./ProfilePageReplies.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectPage,
  selectPosts,
  selectUser,
} from "@shared/@common/models/selectors";
import {
  setIsFeedLoaing,
  setPosts,
} from "@shared/@common/models/slices/feedSlice";
import { fetchWithAuth } from "@shared/pages";
import { useEffect } from "react";
import { Post } from "@shared/pages/ui/Post";

interface ProfilePageRepliesProps {
  className?: string;
}

const ProfilePageReplies = ({ className }: ProfilePageRepliesProps) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { userId: userHandle } = useSelector(selectUser);
  const posts = useSelector(selectPosts);
  const page = useSelector(selectPage);
  const classNames = joinClassNames([
    styles["profile__page__replies"],
    className,
  ]);

  const getPosts = async (userId: string) => {
    const isCurrentUser = userId === userHandle;
    dispatch(setIsFeedLoaing(true));

    try {
      const api = isCurrentUser
        ? `/posts/me/with-replies?skip=${page}`
        : `/posts/${userId}/with-replies?skip=${page}`;

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
  }, [pathname]);

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

export default ProfilePageReplies;
