import styles from "./InputAdornmentIcon.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Icon } from "@shared/@common/ui/components";
import { useInputContext } from "@shared/@common/ui/components/Input/context";
import Icons from "@shared/@common/ui/icons";

interface InputAdornmentIconProps {
  /**
   * 사용할 아이콘 이름
   * - `Icons` 객체의 키 값 중 하나를 사용합니다.
   */
  icon?: keyof typeof Icons;

  /**
   * 추가적인 스타일 클래스
   * - 컴포넌트에 추가적으로 적용할 클래스 이름입니다.
   */
  subClassName?: string;
}

/**
 * `InputAdornmentIcon` 컴포넌트
 * - 입력 필드 옆에 표시되는 장식용 아이콘입니다.
 *
 * @param {InputAdornmentIconProps} props 컴포넌트에 전달할 속성
 * @returns {JSX.Element | null} 아이콘 요소 또는 `null`
 */
const InputAdornmentIcon = ({
  icon, // 아이콘 이름
  subClassName, // styles[이름]으로 아이콘 스타일 추가
}: InputAdornmentIconProps) => {
  const { field, isValid } = useInputContext();

  /**
   * 필드에 따라 아이콘 이름을 설정
   * - `icon`이 명시된 경우 이를 사용합니다.
   * - 필드가 검색(`search`)일 경우 기본 검색 아이콘을 사용합니다.
   * - 필드가 사용자 아이디(`userId`)일 경우 유효성 상태에 따라 다른 아이콘을 사용합니다.
   */
  const iconName = icon // icon이 있는 경우
    ? icon
    : field === "search" // 검색
    ? "search"
    : field === "userId" // 유저 아아디
    ? isValid
      ? "valid"
      : "invalid"
    : undefined; // 필드에 설정된 아이콘이 없는 경우

  /**
   * 스타일 클래스 이름을 조합
   * - 사용자 아이디 필드의 경우 유효성 상태에 따라 스타일을 설정합니다.
   * - `subClassName`이 전달된 경우 이를 추가합니다.
   */
  const style = joinClassNames([
    field === "userId" // 유저 아이디
      ? isValid // 유효성 상태
        ? styles[`input__adornment--valid`]
        : styles[`input__adornment--invalid`]
      : "",
    subClassName,
  ]);

  if (!iconName) return null;

  /**
   * 아이콘 컴포넌트 렌더링
   * - 지정된 아이콘 이름(`iconName`)과 스타일(`style`)을 사용하여 렌더링합니다.
   */
  return <Icon iconName={iconName} subClassName={style} />;
};

export default InputAdornmentIcon;
