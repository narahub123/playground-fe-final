import styles from "./ModalCloseButton.module.css";
import { useModalContext } from "@shared/@common/ui/components/Modal/hooks";
import { Icon } from "@shared/@common/ui/components";

const ModalCloseButton = () => {
  const { onClose } = useModalContext();
  return (
    <Icon
      iconName="close"
      iconTitle="닫기"
      onClick={onClose}
      subClassName={styles["modal__close__button"]}
    />
  );
};

export default ModalCloseButton;
