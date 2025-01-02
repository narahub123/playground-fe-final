import styles from "./ModalHeader.module.css";
import { ComponentType, ReactNode } from "react";
import { useValidateChildren } from "@shared/@common/models/hooks";
import ModalBody from "../ModalBody/ModalBody";
import ModalFooter from "../ModalFooter/ModalFooter";
import { joinClassNames } from "@shared/@common/utils";

/**
 * `ModalHeader` 컴포넌트에 전달되는 props입니다.
 * `children` prop을 통해 모달 헤더에 포함될 요소들을 전달합니다.
 *
 * @interface ModalHeaderProps
 * @property {ReactNode} children - 모달 헤더로 렌더링될 자식 요소입니다.
 */
interface ModalHeaderProps {
  /**
   * 모달 헤더에 포함될 자식 요소입니다.
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
 * 모달의 헤더 영역을 렌더링하는 컴포넌트입니다.
 * 이 컴포넌트는 모달 콘텐츠의 상단 부분에 위치하며, 자식 요소들을 렌더링합니다.
 * `ModalBody`와 `ModalFooter`는 `ModalHeader` 내에서 사용될 수 없습니다.
 *
 * @component
 * @param {Object} props - 컴포넌트에 전달되는 속성들
 * @param {ReactNode} props.children - 모달 헤더로 렌더링될 자식 요소입니다.
 *
 * @returns {JSX.Element} 모달 헤더를 렌더링하는 `div` 요소입니다.
 *
 * @example
 * <ModalHeader>
 *   <h1>모달 제목</h1>
 * </ModalHeader>
 */
const ModalHeader = ({ children, className }: ModalHeaderProps) => {
  /**
   * `ModalBody`와 `ModalFooter` 컴포넌트는 `ModalHeader` 내에서 사용할 수 없습니다.
   * 이를 처리하기 위해 `useValidateChildren` 훅을 사용하여 자식 요소들을 검증합니다.
   *
   * @type {ComponentType<any>[]}
   * @description 사용할 수 없는 컴포넌트를 포함한 배열입니다.
   */
  const invalidComponents: ComponentType<any>[] = [ModalBody, ModalFooter];

  /**
   * `useValidateChildren` 훅을 사용하여 `ModalBody`와 `ModalFooter`가
   * 포함되지 않은 유효한 자식 요소들만 필터링합니다.
   *
   * @type {ReactNode}
   * @description 필터링된 자식 요소들입니다.
   */
  const filteredChildren = useValidateChildren({ children, invalidComponents });

  return (
    <div className={joinClassNames([styles["modal__header"], className])}>
      {filteredChildren}
    </div>
  );
};

export default ModalHeader;
