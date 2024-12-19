import styles from "./AuthPage.module.css";
import Text from "@shared/@common/ui/components/Text/Text";
import { AuthButton } from "@shared/auth/ui/components";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { AuthButtonItemType } from "@shared/auth/types";

const AuthPage = () => {
  // 언어 설정
  const { title, heading1, signinList, heading2, loginList } =
    useLanguageContent(["pages", "AuthPage"]);

  return (
    <div className={styles[`auth-page`]}>
      <header className={styles.header}>
        <Text text={title} />
      </header>
      <main className={styles.main}>
        <div className={styles.section}>
          <Text text={heading1} type="heading3" />
          <ul className={styles.list}>
            {(signinList as AuthButtonItemType[]).map((item, idx) => (
              <AuthButton key={idx} item={item} />
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <Text text={heading2} type="heading3" />
          <ul className={styles.list}>
            {(loginList as AuthButtonItemType[]).map((item, idx) => (
              <AuthButton key={idx} item={item} />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;
