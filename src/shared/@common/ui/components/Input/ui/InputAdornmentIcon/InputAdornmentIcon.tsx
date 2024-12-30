import styles from "./InputAdornmentIcon.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Icon } from "@shared/@common/ui/components";
import { useInputContext } from "@shared/@common/ui/components/Input/context";
import Icons from "@shared/@common/ui/icons";

interface InputAdornmentIconProps {
  icon?: keyof typeof Icons; // 아이콘 이름
  subClassName?: string; // 아이콘 스타일 추가
}

const InputAdornmentIcon = ({
  icon, // 아이콘 이름
  subClassName, // styles[이름]으로 아이콘 스타일 추가
}: InputAdornmentIconProps) => {
  const { field, isValid } = useInputContext();

  // 필드에 따른 아이콘 자동 설정
  const iconName = icon // icon이 있는 경우
    ? icon
    : field === "search" // 검색
    ? "search"
    : field === "userId" // 유저 아아디
    ? isValid
      ? "valid"
      : "invalid"
    : undefined; // 필드에 설정된 아이콘이 없는 경우

  const style = joinClassNames([
    field === "userId" // 유저 아이디
      ? isValid // 유효성 상태
        ? styles[`input__adornment--valid`]
        : styles[`input__adornment--invalid`]
      : "",
    subClassName,
  ]);

  if (!iconName) return null;
  return <Icon iconName={iconName} subClassName={style} />;
};

export default InputAdornmentIcon;
