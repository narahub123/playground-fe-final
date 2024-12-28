import { useInputContext } from "../../context";
import styles from "./InputField.module.css";

interface InputFieldProps {}

const InputField = ({}: InputFieldProps) => {
  // InputContext를 통해 필요한 값 불러오기
  const { inputValue, inputRef, field } = useInputContext();

  return (
    <input
      className={styles["input__field"]}
      value={inputValue} // 기본 값
      ref={inputRef} // input 참조
      id={field} // label과 연결
    />
  );
};

export default InputField;
