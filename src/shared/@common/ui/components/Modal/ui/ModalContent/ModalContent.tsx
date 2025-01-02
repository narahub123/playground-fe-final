import { ReactNode } from "react";
import styles from "./ModalContent.module.css";
import { joinClassNames } from "@shared/@common/utils";

/**
 * ModalContentProps는 ModalContent 컴포넌트에 전달되는 속성들을 정의합니다.
 */
interface ModalContentProps {
  /**
   * 모달 콘텐츠 내부에 렌더링될 내용입니다.
   * @type {ReactNode}
   */
  children: ReactNode;
  /**
   * 추가적인 클래스명을 지정할 수 있는 프로퍼티. 기존 className에 덧붙여짐
   * @type {string}
   */
  className?: string;
}

/**
 * 모달의 콘텐츠 영역을 렌더링하는 컴포넌트입니다.
 * 이 컴포넌트는 모달 내부의 실제 콘텐츠를 포함하는 역할을 합니다.
 *
 * @component
 * @param {Object} props - 컴포넌트에 전달되는 속성들
 * @param {ReactNode} props.children - 모달 콘텐츠로 렌더링될 자식 요소입니다.
 *
 * @returns {JSX.Element} 모달 콘텐츠를 감싸는 `div` 요소입니다.
 *
 * @example
 * <ModalContent>
 *   <p>모달 내용이 여기에 표시됩니다.</p>
 * </ModalContent>
 */
const ModalContent = ({ children, className }: ModalContentProps) => {
  // 모달 콘텐츠를 감싸는 div 요소를 렌더링합니다.
  return (
    <div className={joinClassNames([styles["modal__content"], className])}>
      {children}
    </div>
  );
};

export default ModalContent;
