import styles from "./InputLabel.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useInputContext } from "@shared/@common/ui/components/Input1/context";
import { Text } from "@shared/@common/ui/components";

interface InputLabelProps {
  /**
   * 추가적인 클래스명을 지정할 수 있는 프로퍼티. 기존 className에 덧붙여짐
   * @type {string}
   */
  className?: string;
}
/**
 * `InputLabel` 컴포넌트는 입력 필드에 관련된 라벨을 표시합니다.
 * 이 컴포넌트는 `InputContext`에서 제공하는 `label`과 `isFocused` 상태를 사용하여
 * 라벨의 텍스트와 스타일을 동적으로 렌더링합니다.
 *
 * @component
 * @returns {JSX.Element} - 렌더링된 `InputLabel` 컴포넌트
 */
const InputLabel = ({ className }: InputLabelProps) => {
  /**
   * `useInputContext` 훅을 사용하여 현재 입력 필드의 라벨 텍스트와 포커스 상태를 가져옵니다.
   * - `label`: 라벨에 표시될 텍스트
   * - `isFocused`: 입력 필드가 포커스 상태인지 여부
   * - `isValid`: inputValue의 값이 유효한지 여부
   */
  const { label, isFocused, isValid, inputValue } = useInputContext();

  return (
    /**
     * `Text` 컴포넌트를 사용하여 라벨 텍스트를 렌더링합니다.
     * - `text`: 라벨 텍스트
     * - `subClassName`: 포커스 상태와 inputValue의 유효성 상태에 따라 스타일을 동적으로 적용
     */
    <Text
      className={joinClassNames([
        styles["input__label"],
        isFocused
          ? isValid || inputValue === ""
            ? styles["input__label--focused"]
            : styles[`input__label--error`]
          : "",
        className,
      ])}
    >
      {label}
    </Text>
  );
};

export default InputLabel;
