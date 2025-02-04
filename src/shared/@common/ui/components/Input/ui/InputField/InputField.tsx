import { useInputContext } from "../../hooks";
import styles from "./InputField.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface InputFieldProps {
  className?: string;
}

const InputField = ({ className }: InputFieldProps) => {
  const { field, setIsFocused, handleChange, inputValue, disabled, isValid } =
    useInputContext();

  const classNames = joinClassNames([
    styles["input__field"],
    disabled ? styles[`input__field--disabled`] : "",
    className,
  ]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <input
      type="text"
      className={classNames}
      id={field}
      value={inputValue}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
      disabled={disabled}
      aria-disabled={disabled} // disabled 모드
      aria-required={true} // 필수 입력 필드
      aria-invalid={!isValid} // 유효성 실패 여부
    />
  );
};

export default InputField;
