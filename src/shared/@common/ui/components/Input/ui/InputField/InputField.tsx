import { useAppDispatch } from "@app/store";
import { useInputContext } from "../../context";
import styles from "./InputField.module.css";
import { useEffect } from "react";

interface InputFieldProps {}

const InputField = ({}: InputFieldProps) => {
  const dispatch = useAppDispatch();
  // InputContext를 통해 필요한 값 불러오기
  const { inputValue, setInputValue, inputRef, setInputRef, field } =
    useInputContext();

  // inputRef 업데이트
  useEffect(() => {
    if (!inputRef) return;

    setInputRef(inputRef);
  }, [inputRef]);

  // onChange 이벤트 핸들러: inputValue 업데이트
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    dispatch(setInputValue(value));
  };
  return (
    <input
      className={styles["input__field"]}
      value={inputValue} // 기본 값
      ref={inputRef} // input 참조
      id={field} // label과 연결
      onChange={(e) => handleChange(e)}
    />
  );
};

export default InputField;
