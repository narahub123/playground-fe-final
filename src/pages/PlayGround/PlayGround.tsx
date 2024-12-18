import { useSelector } from "react-redux";
import styles from "./PlayGround.module.css";
import { getLogin } from "@features/auth-setting/models/selectors";
import { PagesLayout } from "@shared/pages/layouts";
import AuthLayout from "@shared/auth/layouts/AuthLayout/AuthLayout";

const PlayGround = () => {
  // 로그인 여부
  const login = useSelector(getLogin);

  return (
    <div className={styles.playground}>
      {login ? <PagesLayout /> : <AuthLayout />}
    </div>
  );
};

export default PlayGround;
