import styles from "./PagesLayout.module.css";
import { Outlet } from "react-router";


const PagesLayout = () => {
  return <div className={styles[`pages-layout`]}>
    <Outlet />
  </div>;
};

export default PagesLayout;
