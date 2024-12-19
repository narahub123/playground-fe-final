import styles from "./AuthPage.module.css";
import { ReactNode } from "react";
import { Modal, Text } from "@shared/@common/ui/components";
import { AuthButton } from "@shared/auth/ui/components";
import {
  useDisclosure,
  useLanguageContent,
} from "@shared/@common/models/hooks";
import { AuthButtonItemType } from "@shared/auth/types";

const AuthPage = () => {
  // 언어 설정
  const { title, heading1, signinList, heading2, loginList } =
    useLanguageContent(["pages", "AuthPage"]);

  const { isOpen, onOpen, onClose, curPage, setcurPage } = useDisclosure();

  const pageList: ReactNode[] = [
    <Modal.Content>
      <Modal.Header>헤던</Modal.Header>
      <Modal.Body>바디</Modal.Body>
      <Modal.Footer>푸터</Modal.Footer>
    </Modal.Content>,
    <Modal.Content>
      <Modal.Header>헤던2</Modal.Header>
      <Modal.Body>바디2</Modal.Body>
      <Modal.Footer>푸터2</Modal.Footer>
    </Modal.Content>,
  ];

  return (
    <div className={styles[`auth-page`]}>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        lengthOfList={pageList.length}
        curPage={curPage}
        setCurPage={setcurPage}
      >
        <Modal.Overlay />
        <Modal.Container>
          <Modal.Indicator />
          <Modal.CloseButton />
          {pageList[curPage]}
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
