import styles from "./InputCounter.module.css";
import { useInputContext } from "@shared/@common/ui/components/Input/context";
import { joinClassNames } from "@shared/@common/utils";
import { Text } from "@shared/@common/ui/components";

interface InputCounterProps {
  /**
   * 추가적인 클래스명을 지정할 수 있는 프로퍼티. 기존 className에 덧붙여짐
   * @type {string}
   */
  className?: string;
}
/**
 * `InputCounter` 컴포넌트는 입력된 텍스트의 길이와 최대 길이를 표시합니다.
 * 포커스 상태에 따라 다른 스타일을 적용하며, 드롭다운이 있을 경우 그에 맞춰 길이를 계산합니다.
 *
 * @component
 * @returns {JSX.Element} - 렌더링된 `InputCounter` 컴포넌트
 */
const InputCounter = ({ className }: InputCounterProps) => {
  /**
   * `useInputContext` 훅을 통해 입력 필드의 상태와 관련된 데이터를 가져옵니다.
   * - `maxLength`: 입력 필드에 입력될 값의 최대 길이
   * - `inputValue`: 입력 필드에 입력된 값
   * - `isFocused`: 현재 입력 필드가 포커스인지 여부 상태
   * - `list`: 드롭다운에 표시할 항목 배열 (있을 수도 있고 없을 수도 있음)
   */
  const { maxLength, inputValue, isFocused, list } = useInputContext();

  /**
   * `length`는 현재 입력값(inputValue) 또는 선택된 항목의 길이를 나타냅니다.
   *
   * `list`가 존재하고, 선택된 `inputValue`와 일치하는 항목이 있을 경우,
   * 해당 항목의 `text`의 길이를 사용합니다. 그렇지 않으면 `inputValue`의 길이를 사용합니다.
   *
   * @type {number}
   */
  const length =
    list?.find((item) => item.value === inputValue)?.text.length ||
    inputValue.length;

  /**
   * `subClassName`은 포커스 상태에 따라 다르게 적용되는 클래스 이름을 결합한 값입니다.
   *
   * `isFocused`가 `true`일 경우 `input__counter--focused` 클래스를 추가하여 포커스 상태에서
   * 스타일을 적용하고, 그렇지 않으면 `input__counter--unfocused` 클래스를 추가하여 포커스가
   * 해제된 상태에서 다른 스타일을 적용합니다.
   *
   * @type {string}
   */
  const subClassName = joinClassNames([
    styles["input__counter"],
    isFocused // 포커스 상태 변화
      ? styles["input__counter--focused"] // 포커스 인 경우 보임
      : styles["input__counter--unfocused"], // 블러스인 경우 안 보임
    className,
  ]);

  return (
    /**
     * `Text` 컴포넌트를 반환합니다. 이 컴포넌트는 현재 입력된 텍스트의 길이와 최대 길이를 표시합니다.
     *
     * `text`는 현재 입력된 값의 길이와 최대 길이를 나타내는 문자열입니다. 형식은 `현재 길이 / 최대 길이`입니다.
     *
     * `subClassName`은 포커스 상태에 따라 다르게 적용되는 스타일 클래스를 포함합니다. 포커스 상태가 `true`일 경우
     * 포커스된 상태에서 스타일을 적용하고, 그렇지 않으면 포커스되지 않은 상태에서 다른 스타일을 적용합니다.
     *
     */
    <Text text={`${length} / ${maxLength}`} subClassName={subClassName} />
  );
};

export default InputCounter;
