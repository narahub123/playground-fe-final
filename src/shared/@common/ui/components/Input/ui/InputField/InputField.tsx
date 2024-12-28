import { useInputContext } from "../../context";
import styles from "./InputField.module.css";
import { useEffect } from "react";

interface InputFieldProps {}

const InputField = ({}: InputFieldProps) => {
  // InputContext를 통해 필요한 값 불러오기
  const { inputValue, inputRef, setInputRef, field } = useInputContext();

  // inputRef 업데이트
  useEffect(() => {
    if (!inputRef) return;

    setInputRef(inputRef);
  }, [inputRef]);

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
