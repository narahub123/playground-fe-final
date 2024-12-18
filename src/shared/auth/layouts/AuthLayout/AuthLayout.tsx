import styles from "./AuthLayout.module.css";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className={styles[`auth-layout`]}>
      <Outlet />
    </div>
  );
};

export default AuthLayout;