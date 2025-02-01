import styles from "./InputDropdown.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface InputDropdownProps {
  className?: string;
  disabled?: boolean;
}

const InputDropdown = ({ className, disabled = false }: InputDropdownProps) => {
  const classNames = joinClassNames([styles["input__dropdown"], className]);

  return <div className={classNames}>InputDropdown</div>;
};

export default InputDropdown;
