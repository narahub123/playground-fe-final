import styles from "../ui/InputActionIcon/InputActionIcon.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useInputContext } from "../context";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Icons } from "@shared/@common/ui/icons";

/**
 * `useInputActionIconProps` 커스텀 훅
 * - `InputActionIcon` 컴포넌트에서 아이콘 속성과 관련된 데이터를 처리합니다.
 *
 * @param {keyof typeof Icons} [icon] 아이콘 이름 (선택)
 * @param {string} [title] 아이콘 접근성 제목 (선택)
 * @param {string} [subClassName] 추가 스타일 클래스 (선택)
 * @param {() => void} [handleClick] 클릭 핸들러 함수 (선택)
 * @returns {{
 *   iconName: keyof typeof Icons | undefined, // 아이콘 이름 (Icons 객체의 키)
 *   iconTitle: string | undefined, // 아이콘의 접근성 제목 (아이콘의 역할 설명)
 *   onClick: (() => void) | undefined, // 클릭 이벤트 핸들러 함수
 *   className: string, // 아이콘의 스타일 클래스 이름
 * }} 아이콘 설정 속성 객체
 */
const useInputActionIconProps = (
  icon?: keyof typeof Icons,
  title?: string,
  subClassName?: string,
  handleClick?: () => void
) => {
  const { field, showPassword, setShowPassword, inputRef } = useInputContext();
  const { iconTitle } = useLanguageContent(["components", "Input"]);

  /**
   * 아이콘 이름 설정
   * - `icon`이 제공되면 사용, 그렇지 않으면 필드에 따라 아이콘 자동 설정.
   */
  const iconName: keyof typeof Icons | undefined = icon
    ? icon
    : field.includes("password")
    ? showPassword
      ? "eyeoff"
      : "eye"
    : undefined;

  /**
   * 아이콘 접근성 제목 설정
   * - `title`이 제공되면 사용, 그렇지 않으면 필드 및 상태에 따라 자동 설정.
   */
  const icontitle = title
    ? title
    : field.includes("password")
    ? showPassword
      ? iconTitle["password"].eyeoff
      : iconTitle["password"].eye
    : undefined;

  /**
   * 클릭 핸들러 설정
   * - `handleClick`이 제공되면 사용, 그렇지 않으면 필드에 따라 기본 동작 설정.
   */
  const onClick = handleClick
    ? handleClick
    : field.includes("password")
    ? () => {
        // 클릭 전 커서 위치 저장
        const cursorPosition = inputRef?.current?.selectionStart ?? 0;

        setShowPassword(!showPassword);

        // 클릭 후 저장한 위치를 적용: input type 변경 후 적용해야 하기 때문에 setTimeout 사용
        setTimeout(() => {
          if (inputRef?.current) {
            inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
          }
        }, 0);
      }
    : undefined;

  /**
   * 스타일 클래스 설정
   * - 기본 스타일과 추가 클래스(`subClassName`)를 병합.
   */
  const className = joinClassNames([styles[`input__action`], subClassName]);

  return {
    /** 아이콘 이름 (Icons 객체의 키) */
    iconName,
    /** 아이콘의 접근성 제목 (아이콘의 역할 설명) */
    iconTitle: icontitle,
    /** 클릭 이벤트 핸들러 함수 */
    onClick,
    /** 아이콘의 스타일 클래스 이름 */
    className,
  };
};

export default useInputActionIconProps;
