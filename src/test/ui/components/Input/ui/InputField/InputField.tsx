import { useInputContext } from "../../hooks";
import styles from "./InputField.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface InputFieldProps {
  className?: string;
}

const InputField = ({ className }: InputFieldProps) => {
  const { field, setIsFocused, handleChange, inputValue } = useInputContext();

  const classNames = joinClassNames([styles["input__field"], className]);

  const handleFocus = () => {
    console.log("포커스");
    setIsFocused(true);
  };

  const handleBlur = () => {
    console.log("블러");
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
    />
  );
};

export default InputField;
