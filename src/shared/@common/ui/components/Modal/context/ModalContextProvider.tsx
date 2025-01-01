import { ReactNode } from "react";
import ModalContext from "./ModalContext";
import { ModalContextType } from "../types";

/**
 * 모달 컨텍스트 Provider에서 사용되는 상태를 정의 하는 타입
 */
interface ModalContextProviderProps {
  /**
   * ModalContextProvider를 통해서 자식 컴포넌트에 제공되는 ModalContext 값
   */
  value: ModalContextType;
  /**
   * ModalContext를 사용할 자식 컴포넌트들
   */
  children: ReactNode;
}

/**
 * ModalContext를 제공하는 컴포넌트.
 *
 * 이 컴포넌트는 `ModalContext`에 값을 제공하며, 그 값을 하위 컴포넌트들이 사용할 수 있게 합니다.
 *
 * @param {Object} props - 컴포넌트의 props
 * @param {ModalContextType} props.value - 제공할 ModalContext 값
 * @param {ReactNode} props.children - ModalContext를 사용할 자식 컴포넌트들
 *
 * @returns {JSX.Element} ModalContext.Provider를 감싸는 컴포넌트
 */
const ModalContextProvider = ({
  value,
  children,
}: ModalContextProviderProps) => {
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalContextProvider;
