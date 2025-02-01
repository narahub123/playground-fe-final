import styles from "./InputField.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface InputFieldProps {
  className?: string;
  disabled?: boolean;
}

const InputField = ({ className, disabled = false }: InputFieldProps) => {
  const classNames = joinClassNames([styles["input__field"], className]);

  return <div className={classNames}>InputField</div>;
};

export default InputField;
