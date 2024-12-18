import Text from "@shared/@common/ui/components/Text/Text";
import styles from "./AuthPage.module.css";
import { AuthButton } from "@shared/auth/ui/components";
import { google, kakao, naver } from "@shared/@common/assets";

const AuthPage = () => {
  const signinList = [
    { text: "구글로 회원 가입", img: google },
    { text: "네이버로 회원 가입", img: naver },
    { text: "카카오로 회원 가입", img: kakao },
    { text: "이메일로 회원 가입" },
  ];
  const loginList = [
    { text: "구글로 로그인", img: google },
    { text: "네이버로 로그인", img: naver },
    { text: "카카오로 로그인", img: kakao },
    { text: "이메일로 로그인" },
  ];
  return (
    <div className={styles[`auth-page`]}>
      <header className={styles.header}>
        <Text text="안녕하세요. 여기는 PlayGround 입니다." />
      </header>
      <main className={styles.main}>
        <div className={styles.section}>
          <Text text="처음이신가요?" type="heading3" />
          <ul className={styles.list}>
            {signinList.map((item, idx) => (
              <AuthButton key={idx} item={item} />
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <Text text="이미 가입하셨나요?" type="heading3" />
          <ul className={styles.list}>
            {loginList.map((item, idx) => (
              <AuthButton key={idx} item={item} />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;
