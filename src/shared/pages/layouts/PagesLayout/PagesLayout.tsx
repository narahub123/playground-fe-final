import styles from "./PagesLayout.module.css";
import { Outlet } from "react-router";

const PagesLayout = () => {
  return (
    <div className={styles[`pages__layout`]}>
      <header role="banner" className={styles["pages__layout__header"]}>
        사이드 바
      </header>
      <main role="main" className={styles["pages__layout__main"]}>
        <div className={styles[`pages__layout__page`]}>
          <Outlet />
        </div>
        <aside className={styles[`pages__layout__sidebar`]}>기타</aside>
      </main>
    </div>
  );
};

export default PagesLayout;
