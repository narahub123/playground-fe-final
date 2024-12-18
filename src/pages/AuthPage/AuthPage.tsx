import styles from "./AuthPage.module.css";

const AuthPage = () => {
  const signinList = [
    "구글로 회원 가입",
    "네이버로 회원 가입",
    "카카오로 회원 가입",
    "이메일로 회원 가입",
  ];
  const loginList = [
    "구글로 로그인",
    "네이버로 로그인",
    "카카오로 로그인",
    "이메일로 로그인",
  ];
  return (
    <div className={styles[`auth-page`]}>
      <header className={styles.header}>
        안녕하세요. 여기는 PlayGround 입니다.
      </header>
      <main className={styles.main}>
        <div className={styles.section}>
          <h3 className={styles.heading}>처음이신가요?</h3>
          <ul className={styles.list}>
            {signinList.map((item, idx) => (
              <li key={idx} className={styles.button}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <h3 className={styles.heading}>이미 가입하셨나요?</h3>
          <ul className={styles.list}>
            {loginList.map((item, idx) => (
              <li key={idx} className={styles.button}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;
