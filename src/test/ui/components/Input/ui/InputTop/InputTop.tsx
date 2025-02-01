import styles from "./InputTop.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface InputTopProps {
  className?: string;
  disabled?: boolean;
}

const InputTop = ({ className, disabled = false }: InputTopProps) => {
  const classNames = joinClassNames([styles["input__top"], className]);

  return <div className={classNames}>InputTop</div>;
};

export default InputTop;
