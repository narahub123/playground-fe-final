import styles from "./InputNumber.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useInputContext } from "@shared/@common/ui/components/Input";

interface InputNumberProps {
  className?: string;
}

const InputNumber = ({ className }: InputNumberProps) => {
  const {
    field,
    inputValue,
    handleChange,
    disabled,
    isValid,
    setIsFocused,
    min,
    max,
  } = useInputContext();

  const classNames = joinClassNames([
    styles["input__number"],
    disabled ? styles[`input__number--disabled`] : "",
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
      type="number"
      id={field}
      value={Number(inputValue)}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      disabled={disabled}
      className={classNames}
      min={min}
      max={max}
      aria-disabled={disabled} // disabled 모드
      aria-required={true} // 필수 입력 필드
      aria-invalid={!isValid} // 유효성 실패 여부
    />
  );
};

export default InputNumber;
