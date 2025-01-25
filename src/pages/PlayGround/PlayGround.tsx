import styles from "./PlayGround.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getLogin } from "@shared/auth/models/selectors";
import { PagesLayout } from "@shared/pages/layouts";
import {
  getBgTheme,
  getColorTheme,
  getFontSize,
} from "@shared/@common/models/selectors";
import { TextHeader } from "@test/ui/components";
import { AuthLayout } from "@shared/auth/layouts";
import { ToastContextProvider } from "@shared/@common/ui/components/Toast/context";
import { AlertContextProvider } from "@shared/@common/ui/components/Alert/context";

const PlayGround = () => {
  // 로그인 여부
  const login = useSelector(getLogin);

  // 배경 테마
  const bgTheme = useSelector(getBgTheme);

  // 색상 테마
  const colorTheme = useSelector(getColorTheme);

  // 글꼴 크기
  const fontSize = useSelector(getFontSize);

  // 현재 포커스 요소
  useEffect(() => {
    const handleFocusChange = () => {
      console.log(
        "현재 포커스 요소",
        document.activeElement as HTMLElement | null
      );
    };

    // 포커스 또는 블러 이벤트 감지
    window.addEventListener("focus", handleFocusChange, true);
    window.addEventListener("blur", handleFocusChange, true);

    // 초기 포커스 설정
    handleFocusChange();

    return () => {
      window.removeEventListener("focus", handleFocusChange, true);
      window.removeEventListener("blur", handleFocusChange, true);
    };
  }, []);

  // 배경 테마 적용하기
  useEffect(() => {
    document.documentElement.dataset.bgTheme = bgTheme;
  }, [bgTheme]);

  // 색상 테마 적용하기
  useEffect(() => {
    document.documentElement.dataset.colorTheme = colorTheme;
  }, [colorTheme]);

  // 글꼴 적용하기
  useEffect(() => {
    document.documentElement.dataset.fontSize = fontSize;
  }, [fontSize]);

  return (
    <ToastContextProvider>
      <AlertContextProvider>
        <div className={styles.playground}>
          <TextHeader />
          {login ? <PagesLayout /> : <AuthLayout />}
        </div>
      </AlertContextProvider>
    </ToastContextProvider>
  );
};

export default PlayGround;
