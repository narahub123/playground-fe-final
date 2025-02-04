import styles from "./InputError.module.css";
import { useInputContext } from "@shared/@common/ui/components/Input1/context";
import { Text } from "@shared/@common/ui/components";

interface InputErrorProps {
  /**
   * 추가적인 클래스명을 지정할 수 있는 프로퍼티. 기존 className에 덧붙여짐
   * @type {string}
   */
  className?: string;
}

/**
 * `InputError` 컴포넌트
 * - 현재 Input 컴포넌트의 에러 메시지를 표시합니다.
 * - 접근성을 고려하여 `aria-live`와 `role="alert"` 속성을 사용합니다.
 *
 * @returns {JSX.Element | null} 에러 메시지를 렌더링하는 JSX 요소. 에러 메시지가 없으면 `null` 반환.
 */
const InputError = ({ className }: InputErrorProps) => {
  // 컨텍스트에서 에러 메시지 가져오기
  const { errorMessage } = useInputContext();

  // 에러 메시지가 없는 경우 렌더링하지 않음
  if (!errorMessage) return null;

  return (
    <div
      id="error-message"
      role="alert" // 에러 메시지임을 스크린 리더에 알림
      aria-live="polite" // 에러 메시지가 업데이트될 때 읽어줌
      className={className}
    >
      <Text
        className={styles["input__error"]} // 에러 스타일 클래스
        type="expl" // Text 컴포넌트에서 설명 유형으로 표시
        status="error" // 에러 상태로 표시
      >
        {errorMessage}
      </Text>
    </div>
  );
};

export default InputError;
