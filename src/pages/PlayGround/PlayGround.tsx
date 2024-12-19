import styles from "./PlayGround.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getLogin } from "@features/auth-setting/models/selectors";
import { PagesLayout } from "@shared/pages/layouts";
import AuthLayout from "@shared/auth/layouts/AuthLayout/AuthLayout";
import { getBgTheme, getColorTheme } from "@shared/@common/models/selectors";
import { TextHeader } from "@test/ui/components";

const PlayGround = () => {
  // 로그인 여부
  const login = useSelector(getLogin);

  // 배경 테마
  const bgTheme = useSelector(getBgTheme);

  console.log("색상 테마", bgTheme);

  // 색상 테마
  const colorTheme = useSelector(getColorTheme);

  // 배경 테마 적용하기
  useEffect(() => {
    document.documentElement.dataset.bgTheme = bgTheme;
  }, [bgTheme]);

  // 색상 테마 적용하기
  useEffect(() => {
    document.documentElement.dataset.colorTheme = colorTheme;
  }, [colorTheme]);

  return (
    <div className={styles.playground}>
      <TextHeader />
      {login ? <PagesLayout /> : <AuthLayout />}
    </div>
  );
};

export default PlayGround;
