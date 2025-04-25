import { Outlet } from "react-router-dom";
import styles from "./PostPage.module.css";
import { PostPageHeader } from "@features/post-page";

const PostPage = () => {
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
