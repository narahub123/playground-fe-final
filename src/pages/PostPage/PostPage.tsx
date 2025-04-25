import { Outlet } from "react-router-dom";
import styles from "./PostPage.module.css";

const PostPage = () => {
  return (
    <div className={styles["post__page"]}>
      <header>
        <span>뒤로가기 아이콘</span>
        <span>게시물</span>
      </header>
      <Outlet />
    </div>
  );
};

export default PostPage;
