import { useAppDispatch } from "@app/store";
import styles from "./ProfilePage.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import {
  selectPage,
  selectPosts,
  selectUser,
} from "@shared/@common/models/selectors";
import { Spinner } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { fetchWithAuth } from "@shared/pages";
import { Post } from "@shared/pages/ui/Post";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setPosts } from "@shared/@common/models/slices/feedSlice";

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch();
  // 언어 설정
  const {} = useLanguageContent(["pages", "ProfilePage"]);
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const { userId: userHandle } = useSelector(selectUser);
  const posts = useSelector(selectPosts);
  const page = useSelector(selectPage);

  const classNames = joinClassNames([styles["profile__page"], className]);

  const getPosts = async (userId: string) => {
    const isCurrentUser = userId === userHandle;
    setIsLoading(true);

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
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const userId = pathname.split("/")[1];

    getPosts(userId);
  }, [pathname]);

  return (
    <div className={classNames}>
      <div className={styles["feed"]}>
        {isLoading ? (
          <div className={styles["spinner__wrapper"]}>
            <Spinner color="cornflowerblue" size={1.5} />
          </div>
        ) : (
          posts.map((post, index) => {
            return (
              <Post key={`${post._id}${index}`} post={post} postType="post">
                <Post.Top />
                <Post.Content>
                  <Post.Header />
                  {(post._id || post.originalPost?._id) && (
                    <Post.Main>
                      <Post.Left
                        isShowingConnector={
                          post.thread && post.thread.length > 0
                        }
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
          })
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
