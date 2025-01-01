import styles from "./ModalCloseButton.module.css";
import { useModalContext } from "@shared/@common/ui/components/Modal/hooks";
import { Icon } from "@shared/@common/ui/components";
import { useLanguageContent } from "@shared/@common/models/hooks";

/**
 * 모달 닫기 버튼 컴포넌트입니다.
 * `onClose` 함수를 실행하여 모달을 닫습니다.
 *
 * @returns {JSX.Element} 모달을 닫는 버튼 아이콘입니다.
 */
const ModalCloseButton = () => {
  const { onClose } = useModalContext();

  const { iconTitle } = useLanguageContent([
    "components",
    "Modal",
    "ModalCloseButton",
  ]);

  return (
    <Icon
      iconName="close"
      iconTitle={iconTitle}
      onClick={onClose}
      subClassName={styles["modal__close__button"]}
    />
  );
};

export default ModalCloseButton;
