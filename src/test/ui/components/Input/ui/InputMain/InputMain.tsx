import styles from "./InputMain.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface InputMainProps {
  className?: string;
  disabled?: boolean;
}

const InputMain = ({ className, disabled = false }: InputMainProps) => {
  const classNames = joinClassNames([styles["input__main"], className]);

  return <div className={classNames}>InputMain</div>;
};

export default InputMain;
