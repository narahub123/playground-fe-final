import styles from "./InputTop.module.css";
import { ComponentType, ReactNode } from "react";
import { joinClassNames } from "@shared/@common/utils";
import { useInputContext } from "@shared/@common/ui/components/Input1/context";
import InputCounter from "../InputCounter/InputCounter";
import InputBottom from "../InputBottom/InputBottom";
import { useValidateChildren } from "@shared/@common/models/hooks";

/**
 * `InputTop` 컴포넌트에 전달되는 props를 정의하는 인터페이스입니다.
 */
interface InputTopProps {
  /**
   * `InputTop` 내부에 렌더링될 자식 노드입니다.
   */
  children: ReactNode;
  /**
   * 추가적인 클래스명을 지정할 수 있는 프로퍼티. 기존 className에 덧붙여짐
   * @type {string}
   */
  className?: string;
}

/**
 * `InputTop` 컴포넌트는 입력 필드의 상단 섹션을 담당하며,
 * `InputBottom` 컴포넌트를 자식 컴포넌트로 허용하지 않고,
 * 드롭다운을 사용하는 경우 `InputCounter` 컴포넌트를 자식 컴포넌트로 허용하지 않습니다.
 *
 * @component
 * @param {InputTopProps} props - 컴포넌트에 전달되는 props
 * @returns {JSX.Element} - 렌더링된 `InputTop` 컴포넌트
 */
const InputTop = ({ children, className }: InputTopProps) => {
  /**
   * `useInputContext` 훅을 통해 입력 필드의 상태와 관련된 데이터를 가져옵니다.
   * - `focusCond`: 현재 입력 필드가 포커스 상태로 인지되는 조건
   * - `list`: 드롭다운에 표시할 항목 배열 (있을 수도 있고 없을 수도 있음)
   */
  const { focusCond, list } = useInputContext();

  // 유효하지 않은 컴포넌트
  /**
   * 현재 컴포넌트에서 자식 컴포넌트로 유효하지 않는 컴포넌트 배열 - InputBottom
   */
  const invalidComponents: ComponentType<any>[] = [InputBottom];

  // 드롭다운(list)가 있는 경우
  if (list) {
    // InputCounter를 InputTop안에서 사용 불가
    invalidComponents.push(InputCounter);
  }

  /**
   * `validateChildren` 함수는 전달된 `children`에서
   * 유효하지 않은 컴포넌트를 필터링하여 반환한 유효한 자식 컴포넌트
   */
  const filteredChildren = useValidateChildren({ children, invalidComponents });

  /**
   * `joinClassNames` 유틸리티를 사용하여 동적으로 클래스 이름을 결합합니다.
   * - `input__top--focused`: 포커스 상태일 때 적용
   * - `input__top--unfocused`: 포커스가 없을 때 적용
   */
  const classNames = joinClassNames([
    styles["input__top"],
    focusCond // isFocused 가 true 이거나 inputValue 가 빈문자열이 아닐 때
      ? styles["input__top--focused"]
      : styles["input__top--unfocused"],
    className,
  ]);
  return (
    /**
     * 렌더링된 상위 div는 동적으로 클래스 이름을 할당받고,
     * 필터링된 자식 요소를 포함합니다.
     */
    <div className={classNames}>{filteredChildren}</div>
  );
};

export default InputTop;
