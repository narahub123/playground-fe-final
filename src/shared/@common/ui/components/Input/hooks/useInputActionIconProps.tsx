import styles from "../ui/InputActionIcon/InputActionIcon.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useInputContext } from "../context";
import { useLanguageContent } from "@shared/@common/models/hooks";
import Icons from "@shared/@common/ui/icons";

const useInputActionIconProps = () => {
  const { field, showPassword, setShowPassword, inputRef } = useInputContext();

  const { iconTitle } = useLanguageContent(["components", "Input"]);

  // 아이콘 이름
  const iconName: keyof typeof Icons | undefined =
    field === "password" ? (showPassword ? "eyeoff" : "eye") : undefined;

  // 아이콘 설명
  const icontitle =
    field === "password"
      ? showPassword
        ? iconTitle[field].eyeoff
        : iconTitle[field].eye
      : undefined;

  // 클릭 핸들러
  const handleClick =
    field === "password"
      ? () => {
          // 클릭전 커서 위치 저장
          const cursorPosition = inputRef?.current?.selectionStart ?? 0;

          setShowPassword(!showPassword);

          // 클릭 후 저장한 위치를 적용: input type 변경 후 적용해야 하기 때문에 setTimeput 사용
          setTimeout(() => {
            if (inputRef?.current) {
              inputRef.current.setSelectionRange(
                cursorPosition,
                cursorPosition
              );
            }
          }, 0);
        }
      : undefined;

  const subClassName = joinClassNames([styles[`input__action`]]);

  return {
    iconName,
    iconTitle: icontitle,
    handleClick,
    subClassName,
  };
};

export default useInputActionIconProps;
