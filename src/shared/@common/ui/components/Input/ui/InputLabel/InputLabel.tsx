import { joinClassNames } from "@shared/@common/utils";
import { useInputContext } from "../../context";
import styles from "./InputLabel.module.css";
import Text from "../../../Text/Text";

interface InputLabelProps {}

const InputLabel = ({}: InputLabelProps) => {
  // InputContext에서 필요한 값 불러오기
  const { label, isFocused } = useInputContext();

  return (
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
