import { useSelector } from "react-redux";
import styles from "./PlayGround.module.css";
import { getLogin } from "@features/auth-setting/models/selectors";
import { PagesLayout } from "@shared/pages/layouts";
import AuthLayout from "@shared/auth/layouts/AuthLayout/AuthLayout";
import { getBgTheme } from "@shared/@common/models/selectors";
import { useEffect } from "react";

const PlayGround = () => {
  // 로그인 여부
  const login = useSelector(getLogin);

  // 배경 테마
  const bgTheme = useSelector(getBgTheme);

  // 배경 테마 적용하기
  useEffect(() => {
    document.documentElement.dataset.bgTheme = bgTheme;
  }, [bgTheme]);

  return (
    <div className={styles.playground}>
      {login ? <PagesLayout /> : <AuthLayout />}
    </div>
  );
};

export default PlayGround;
