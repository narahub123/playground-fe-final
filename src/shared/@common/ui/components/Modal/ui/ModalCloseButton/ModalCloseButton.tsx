import styles from "./ModalCloseButton.module.css";
import { useModalContext } from "@shared/@common/ui/components/Modal/hooks";
import { Icon } from "@shared/@common/ui/icons";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

/**
 * ModalCloseButtonProps 는 ModalCloseButton 컴포넌트에 전달되는 속성들을 정의합니다.
 */
interface ModalCloseButtonProps {
  /**
   * 추가적인 클래스명을 지정할 수 있는 프로퍼티. 기존 className에 덧붙여짐
   * @type {string}
   */
  className?: string;
}

/**
 * 모달 닫기 버튼 컴포넌트입니다.
 * `onClose` 함수를 실행하여 모달을 닫습니다.
 *
 * @returns {JSX.Element} 모달을 닫는 버튼 아이콘입니다.
 */
const ModalCloseButton = ({ className }: ModalCloseButtonProps) => {
  const { onClose } = useModalContext();

  const { iconTitle } = useLanguageContent([
    "components",
    "Modal",
    "ModalCloseButton",
  ]);

  return (
    <Icon
      iconName="close"
      title={iconTitle}
      onClick={onClose}
      className={joinClassNames([styles["modal__close__button"], className])}
    />
  );
};

export default ModalCloseButton;
