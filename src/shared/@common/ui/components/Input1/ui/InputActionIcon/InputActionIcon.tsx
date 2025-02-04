import { useInputActionIconProps } from "@shared/@common/ui/components/Input1/hooks";
import { Icons, Icon } from "@shared/@common/ui/icons";

interface InputActionIconProps {
  /**
   * 사용할 아이콘 이름
   * - `Icons` 객체의 키 값 중 하나를 사용합니다.
   */
  icon?: keyof typeof Icons;

  /**
   * 아이콘의 접근성 제목
   * - `aria-label`로 사용되며, 접근성 및 툴팁 용도로 활용됩니다.
   */
  title?: string;

  /**
   * 추가적인 스타일 클래스
   * - 아이콘 컴포넌트에 적용할 사용자 정의 스타일 클래스입니다.
   */
  subClassName?: string;

  /**
   * 아이콘 클릭 시 호출되는 이벤트 핸들러
   * - 아이콘을 클릭하면 실행될 콜백 함수입니다.
   */
  handleClick?: () => void;
}

/**
 * `InputActionIcon` 컴포넌트
 * - 입력 필드와 함께 사용되는 액션 아이콘입니다.
 *
 * @param {InputActionIconProps} props 컴포넌트에 전달할 속성
 * @returns {JSX.Element | null} 아이콘 요소 또는 `null`
 */
const InputActionIcon = ({
  icon,
  title,
  subClassName,
  handleClick,
}: InputActionIconProps) => {
  /**
   * 아이콘 속성 처리
   * - 사용자 정의 속성을 기반으로 최종 아이콘 속성을 설정합니다.
   */
  const { iconName, iconTitle, onClick, className } = useInputActionIconProps(
    icon,
    title,
    subClassName,
    handleClick
  );

  /**
   * 아이콘 이름이 없는 경우 렌더링하지 않음
   * - `iconName`이 `undefined`일 경우 컴포넌트를 렌더링하지 않습니다.
   */
  if (!iconName) return null;

  return (
    <Icon
      iconName={iconName}
      title={iconTitle}
      onClick={onClick}
      className={className}
    />
  );
};

export default InputActionIcon;
