import styles from "./InputCounter.module.css";
import { useInputContext } from "../../context";
import { joinClassNames } from "@shared/@common/utils";
import Text from "../../../Text/Text";

interface InputCounterProps {}

const InputCounter = ({}: InputCounterProps) => {
  // InputContext에서 필요한 값 불러오기
  const { maxLength, inputValue, isFocused } = useInputContext();

  return (
    <Text
      text={`${inputValue.length} / ${maxLength}`}
      subClassName={joinClassNames([
        styles["input__counter"],
        isFocused // 포커스 상태 변화
          ? styles["input__counter--focused"] // 포커스 인 경우 보임
          : styles["input__counter--unfocused"], // 블러스인 경우 안 보임
      ])}
    />
  );
};

export default InputCounter;
