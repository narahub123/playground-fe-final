import { Button, Modal, Text } from "@shared/@common/ui/components";
import styles from "./PasswordScreen.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";

const PasswordScreen = () => {
  const { title, expl } = useLanguageContent(["components", "PasswordScreen"]);

  return (
    <div className={styles["password__screen"]}>
      <Modal.Body className={styles[`password__screen__body`]}>
        <Text text={title} type="heading2" />
        <Text text={expl} type="expl" />
        패스 워드 Input
      </Modal.Body>
      <Modal.Footer>
        <Button colorPalette="colorTheme" onClick={() => {}}>
          다음
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default PasswordScreen;
