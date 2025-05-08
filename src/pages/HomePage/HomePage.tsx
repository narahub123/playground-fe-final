import styles from "./HomePage.module.css";
import { HomeTab } from "@features/home/ui";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useEffect, useState } from "react";
import { PostEditor } from "@shared/pages/ui";
import { useSelector } from "react-redux";
import { selectPage, selectPosts } from "@shared/@common/models/selectors";
import { Post } from "@shared/pages/ui/Post";
import { Spinner } from "@shared/@common/ui/components";
import { fetchWithAuth } from "@shared/pages";
import { useAppDispatch } from "@app/store";
import { setPosts } from "@shared/@common/models/slices/feedSlice";

interface IHomeTab {
  text: string;
  field: string;
}

const HomePage = () => {
  const dispatch = useAppDispatch();
  const posts = useSelector(selectPosts);
  const [tabSelection, setTabSelection] = useState("following");
  const [isLoading, setIsLoading] = useState(false);
  // 언어 설정
  const { tabs } = useLanguageContent(["home", "HomePage"]);
  const page = useSelector(selectPage);

  // 포스트 목록 가져오기
  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const result = await fetchWithAuth(`/posts?skip=${page}`);

        if (result.success) {
          console.log(result.data.posts);

          dispatch(setPosts(result.data.posts));
        } else {
          console.error("포스트 목록 조회 실패");
        }
      } catch (error) {
        console.error("포스트 목록 조회 중 에러 발생", error);
      } finally {
        setIsLoading(false);
      }
    };

    getPosts();
  }, [page]);

  const classNames = joinClassNames([styles["home__page"]]);

  return (
    <div className={classNames}>
      <nav className={styles["home__nav"]}>
        {(tabs as IHomeTab[]).map((tab) => (
          <HomeTab
            text={tab.text}
            field={tab.field}
            tabSelection={tabSelection}
            onClick={() => {
              setTabSelection(tab.field);
            }}
            key={tab.field}
          />
        ))}
      </nav>
      <div className={styles["home__write"]}>
        <div className={styles["home__write__container"]}>
          <PostEditor />
        </div>
      </div>
      <div>광고</div>
      <div className={styles["posts__wrapper"]}>
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

export default HomePage;
