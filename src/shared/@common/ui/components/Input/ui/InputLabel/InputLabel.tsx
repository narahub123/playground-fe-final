import styles from "./InputLabel.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useInputContext } from "@shared/@common/ui/components/Input/context";
import { Text } from "@shared/@common/ui/components";

/**
 * `InputLabel` 컴포넌트는 입력 필드에 관련된 라벨을 표시합니다.
 * 이 컴포넌트는 `InputContext`에서 제공하는 `label`과 `isFocused` 상태를 사용하여
 * 라벨의 텍스트와 스타일을 동적으로 렌더링합니다.
 *
 * @component
 * @returns {JSX.Element} - 렌더링된 `InputLabel` 컴포넌트
 */
const InputLabel = () => {
  /**
   * `useInputContext` 훅을 사용하여 현재 입력 필드의 라벨 텍스트와 포커스 상태를 가져옵니다.
   * - `label`: 라벨에 표시될 텍스트
   * - `isFocused`: 입력 필드가 포커스 상태인지 여부
   */
  const { label, isFocused } = useInputContext();

  return (
    /**
     * `Text` 컴포넌트를 사용하여 라벨 텍스트를 렌더링합니다.
     * - `text`: 라벨 텍스트
     * - `subClassName`: 포커스 상태에 따라 스타일을 동적으로 적용
     */
    <Text
      text={label}
      subClassName={joinClassNames([
        styles["input__label"],
        isFocused ? styles["input__label--focused"] : "",
      ])}
    />
  );
};

export default InputLabel;
