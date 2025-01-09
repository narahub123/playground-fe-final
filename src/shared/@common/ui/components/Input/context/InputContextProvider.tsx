import { ReactNode } from "react";
import InputContext from "./InputContext";
import { InputContextType } from "@shared/@common/ui/components/Input/types";

/**
 * InputContext를 제공하는 컴포넌트
 *
 * 이 컴포넌트는 `InputContext`에 값을 제공하며, 그 값을 하위 컴포넌트들이 사용할 수 있게 합니다.
 *
 * @param {Object} props - 컴포넌트의 props
 * @param {InputContextType} props.value - 제공할 InputContext 값
 * @param {ReactNode} props.children - InputContext를 사용할 자식 컴포넌트들
 *
 * @returns {JSX.Element} InputContext.Provider를 감싸는 컴포넌트
 */
const InputContextProvider = ({
  value,
  children,
}: {
  value: InputContextType;
  children: ReactNode;
}) => {
  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
};

export default InputContextProvider;
