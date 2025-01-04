import styles from "./ModalBody.module.css";
import { ComponentType, ReactNode } from "react";
import { useValidateChildren } from "@shared/@common/models/hooks";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalFooter from "../ModalFooter/ModalFooter";
import { joinClassNames } from "@shared/@common/utils";

/**
 * `ModalBody` 컴포넌트에 전달되는 props입니다.
 * `children` prop을 통해 모달 본문에 포함될 요소들을 전달합니다.
 *
 * @interface ModalBodyProps
 * @property {ReactNode} children - 모달 본문으로 렌더링될 자식 요소들입니다.
 */
interface ModalBodyProps {
  /**
   * 모달 본문에 포함될 자식 요소입니다.
   * 텍스트, 이미지, 또는 다른 컴포넌트들이 될 수 있습니다.
   *
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
 * 모달의 본문 콘텐츠를 렌더링하는 컴포넌트입니다.
 * `ModalHeader`와 `ModalFooter`는 `ModalBody` 내에서 사용할 수 없습니다.
 *
 * @component
 * @param {Object} props - 컴포넌트에 전달되는 속성들
 * @param {ReactNode} props.children - 모달 본문으로 렌더링될 자식 요소들입니다.
 *
 * @returns {JSX.Element} 모달 본문을 렌더링하는 `div` 요소입니다.
 *
 * @example
 * <ModalBody>
 *   <p>모달 본문 내용이 여기에 표시됩니다.</p>
 * </ModalBody>
 */
const ModalBody = ({ children, className }: ModalBodyProps) => {
  /**
   * `ModalHeader`와 `ModalFooter` 컴포넌트는 `ModalBody` 내에서 사용할 수 없습니다.
   * 이를 처리하기 위해 `useValidateChildren` 훅을 사용하여 자식 요소들을 검증합니다.
   *
   * @type {ComponentType<any>[]}
   * @description 사용할 수 없는 컴포넌트를 포함한 배열입니다.
   */
  const invalidComponents: ComponentType<any>[] = [ModalHeader, ModalFooter];
  /**
   * `useValidateChildren` 훅을 사용하여 `ModalHeader`와 `ModalFooter`가
   * 포함되지 않은 유효한 자식 요소들만 필터링합니다.
   *
   * @type {ReactNode}
   * @description 필터링된 자식 요소들입니다.
   */
  const filteredChildren = useValidateChildren({ children, invalidComponents });

  return (
    <div
      className={joinClassNames([styles["modal__body"], "scroll", className])}
    >
      {filteredChildren}
    </div>
  );
};

export default ModalBody;
