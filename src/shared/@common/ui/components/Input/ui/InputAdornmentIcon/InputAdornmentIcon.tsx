import { joinClassNames } from "@shared/@common/utils";
import Icon from "../../../Icon/Icon";
import { useInputContext } from "../../context";
import styles from "./InputAdornmentIcon.module.css";

interface InputAdornmentIconProps {}

const InputAdornmentIcon = ({}: InputAdornmentIconProps) => {
  const { field, isValid } = useInputContext();

  // 필드에 따른 아이콘 자동 설정
  const iconName =
    field === "search" // 검색
      ? "search"
      : field === "userId" // 유저 아아디
      ? isValid
        ? "valid"
        : "invalid"
      : "wrongName"; // 필드에 설정된 아이콘이 없는 경우

  const subClassName =
    field === "userId" // 유저 아이디
      ? isValid // 유효성 상태
        ? styles[`input__adornment--valid`]
        : styles[`input__adornment--invalid`]
      : "";

  return (
    <Icon iconName={iconName} subClassName={joinClassNames([subClassName])} />
  );
};

export default InputAdornmentIcon;
