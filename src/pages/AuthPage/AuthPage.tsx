import styles from "./AuthPage.module.css";
import { Text } from "@shared/@common/ui/components";
import { AuthButton } from "@shared/auth/ui/components";
import {
  useDisclosure,
  useLanguageContent,
} from "@shared/@common/models/hooks";
import { AuthButtonItemType } from "@shared/auth/types";
import { AuthModal } from "@features/auth-email/ui/components";

const AuthPage = () => {
  // 언어 설정
  const { title, heading1, signupList, heading2, loginList } =
    useLanguageContent(["pages", "AuthPage"]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={styles[`auth-page`]}>
      <AuthModal isOpen={isOpen} onClose={onClose} />
      <header className={styles.header}>
        <Text type="heading1">{title}</Text>
      </header>
      <main className={styles.main}>
        <div className={styles.section}>
          <Text type="heading3">{heading1}</Text>
          <ul className={styles.list}>
            {(signupList as AuthButtonItemType[]).map((item, idx) => (
              <AuthButton key={idx} item={item} handleClick={onOpen} />
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <Text type="heading3">{heading2}</Text>
          <ul className={styles.list}>
            {(loginList as AuthButtonItemType[]).map((item, idx) => (
              <AuthButton key={idx} item={item} handleClick={onOpen} />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;
