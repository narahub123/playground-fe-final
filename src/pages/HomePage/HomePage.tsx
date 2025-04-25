import styles from "./HomePage.module.css";
import { HomeTab } from "@features/home/ui";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useState } from "react";
import { PostEditor } from "@shared/pages/ui";
import { useSelector } from "react-redux";
import { selectPosts } from "@shared/@common/models/selectors";
import { Post } from "@shared/pages/ui/Post";

interface IHomeTab {
  text: string;
  field: string;
}

const HomePage = () => {
  const posts = useSelector(selectPosts);
  const [tabSelection, setTabSelection] = useState("following");
  // 언어 설정
  const { tabs } = useLanguageContent(["home", "HomePage"]);

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
      <div>
        {posts.map((post, index) => (
          <Post key={`${post._id}${index}`} post={post}>
            <Post.Content>
              <Post.Header />
              <Post.Main>
                <Post.Left />
                <Post.Right>
                  <Post.Meta />
                  <Post.Text />
                  <Post.Media />
                  <Post.Vote />
                  <Post.Actions className={styles["actions"]} />
                </Post.Right>
              </Post.Main>
            </Post.Content>
          </Post>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
