import { joinClassNames } from "@shared/@common/utils";
import { useInputContext } from "../../context";
import styles from "./InputLabel.module.css";
import Text from "../../../Text/Text";

interface InputLabelProps {}

const InputLabel = ({}: InputLabelProps) => {
  // InputContext에서 필요한 값 불러오기
  const { label, field, isFocused } = useInputContext();
  
  return (
    <label
      className={joinClassNames([
        styles["input__label"],
        isFocused ? styles["input__label--focused"] : "",
      ])}
      htmlFor={field} // input 요소와 연결하기 위해서 input의 id 값 적용
    >
      <Text text={label} />
    </label>
  );
};

export default InputLabel;
