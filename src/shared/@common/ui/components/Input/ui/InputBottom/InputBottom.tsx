import { ComponentType, ReactNode } from "react";
import styles from "./InputBottom.module.css";
import { useInputContext } from "../../context";
import { joinClassNames } from "@shared/@common/utils";
import InputTop from "../InputTop/InputTop";
import { validateChildren } from "../../utils";

/**
 * `InputBottom` 컴포넌트에 전달되는 props를 정의하는 인터페이스입니다.
 */
interface InputBottomProps {
  /**
   * `InputBottom` 내부에 렌더링될 자식 노드입니다.
   */
  children: ReactNode;
}

/**
 * `InputBottom` 컴포넌트는 입력 필드의 하단 섹션을 담당하며,
 * `InputTop` 컴포넌트를 자식 컴포넌트로 허용하지 않습니다.
 *
 * @component
 * @param {InputBottomProps} props - 컴포넌트에 전달되는 props
 * @returns {JSX.Element} - 렌더링된 `InputBottom` 컴포넌트
 */
const InputBottom = ({ children }: InputBottomProps) => {
  /**
   * `useInputContext` 훅을 통해 입력 필드의 상태와 관련된 데이터를 가져옵니다.
   * - `focusCond`: 현재 입력 필드가 포커스 상태로 인지되는 조건
   */
  const { focusCond } = useInputContext();

  /**
   * 현재 컴포넌트에서 자식 컴포넌트로 유효하지 않는 컴포넌트 배열 - `InputTop`
   */
  const invalidComponents: ComponentType<any>[] = [InputTop];

  /**
   * `validateChildren` 함수는 전달된 `children`에서
   * 유효하지 않은 컴포넌트를 필터링하여 반환한 유효한 자식 컴포넌트
   */
  const filteredChildren = validateChildren(children, invalidComponents);

  return (
    /**
     * 렌더링된 상위 div는 동적으로 클래스 이름을 할당받고,
     * 필터링된 자식 요소를 포함합니다.
     */
    <div
      className={joinClassNames([
        styles["input__bottom"],
        focusCond // 포커스 상태 변화
          ? styles["input__bottom--focused"]
          : styles["input__bottom--unfocused"],
      ])}
    >
      {filteredChildren}
    </div>
  );
};

export default InputBottom;
