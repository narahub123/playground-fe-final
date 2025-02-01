import styles from "./InputError.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface InputErrorProps {
  className?: string;
  disabled?: boolean;
}

const InputError = ({ className, disabled = false }: InputErrorProps) => {
  const classNames = joinClassNames([styles["input__error"], className]);

  return <div className={classNames}>InputError</div>;
};

export default InputError;
