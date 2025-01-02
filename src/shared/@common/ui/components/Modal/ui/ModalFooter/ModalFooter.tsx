import styles from "./ModalFooter.module.css";
import { ComponentType, ReactNode } from "react";
import { useValidateChildren } from "@shared/@common/models/hooks";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalBody from "../ModalBody/ModalBody";
import { joinClassNames } from "@shared/@common/utils";

/**
 * `ModalFooter` 컴포넌트에 전달되는 props입니다.
 * `children` prop을 통해 모달 바닥글에 포함될 요소들을 전달합니다.
 *
 * @interface ModalFooterProps
 * @property {ReactNode} children - 모달 바닥글로 렌더링될 자식 요소들입니다.
 */
interface ModalFooterProps {
  /**
   * 모달 바닥글에 포함될 자식 요소입니다.
   * 버튼, 링크, 텍스트 등 다양한 형태의 자식 요소들이 될 수 있습니다.
   *
   * @type {ReactNode}
   * @description `ModalFooter`의 콘텐츠로 렌더링될 자식 요소입니다.
   */
  children: ReactNode;
  /**
   * 추가적인 클래스명을 지정할 수 있는 프로퍼티. 기존 className에 덧붙여짐
   * @type {string}
   */
  className?: string;
}

/**
 * 모달의 바닥글을 렌더링하는 컴포넌트입니다.
 * `ModalHeader`와 `ModalBody`는 `ModalFooter` 내에서 사용할 수 없습니다.
 *
 * @component
 * @param {Object} props - 컴포넌트에 전달되는 속성들
 * @param {ReactNode} props.children - 모달 바닥글로 렌더링될 자식 요소들입니다.
 *
 * @returns {JSX.Element} 모달 바닥글을 렌더링하는 `div` 요소입니다.
 *
 * @example
 * <ModalFooter>
 *   <button>닫기</button>
 * </ModalFooter>
 */
const ModalFooter = ({ children, className }: ModalFooterProps) => {
  /**
   * `ModalHeader`와 `ModalBody` 컴포넌트는 `ModalFooter` 내에서 사용할 수 없습니다.
   * 이를 처리하기 위해 `useValidateChildren` 훅을 사용하여 자식 요소들을 검증합니다.
   *
   * @type {ComponentType<any>[]}
   * @description 사용할 수 없는 컴포넌트를 포함한 배열입니다.
   */
  const invalidComponents: ComponentType<any>[] = [ModalHeader, ModalBody];

  /**
   * `useValidateChildren` 훅을 사용하여 `ModalHeader`와 `ModalBody`가
   * 포함되지 않은 유효한 자식 요소들만 필터링합니다.
   *
   * @type {ReactNode}
   * @description 필터링된 자식 요소들입니다.
   */
  const filteredChildren = useValidateChildren({ children, invalidComponents });

  return (
    <div className={joinClassNames([styles["modal__footer"], className])}>
      {filteredChildren}
    </div>
  );
};

export default ModalFooter;
