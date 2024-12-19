import styles from "./AuthPage.module.css";
import Text from "@shared/@common/ui/components/Text/Text";
import { AuthButton } from "@shared/auth/ui/components";
import {
  useDisClosure,
  useLanguageContent,
} from "@shared/@common/models/hooks";
import { AuthButtonItemType } from "@shared/auth/types";
import { Modal } from "@shared/@common/ui/components";

const AuthPage = () => {
  // 언어 설정
  const { title, heading1, signinList, heading2, loginList } =
    useLanguageContent(["pages", "AuthPage"]);

  const { isOpen, onOpen, onClose } = useDisClosure();

  return (
    <div className={styles[`auth-page`]}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Overlay />
        <Modal.Container>
          <Modal.CloseButton />
          <Modal.Content>
            <Modal.Header>헤던</Modal.Header>
            <Modal.Body>바디</Modal.Body>
            <Modal.Footer>푸터</Modal.Footer>
          </Modal.Content>
        </Modal.Container>
      </Modal>
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
              <AuthButton key={idx} item={item} handleClick={onOpen} />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;
