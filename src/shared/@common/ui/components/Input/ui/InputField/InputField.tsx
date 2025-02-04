import styles from "./InputField.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useInputContext } from "@shared/@common/ui/components/Input";

interface InputFieldProps {
  className?: string;
  isShown?: boolean;
}

const InputField = ({ isShown = true, className }: InputFieldProps) => {
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
      type={isShown && isShown ? "text" : "password"}
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
