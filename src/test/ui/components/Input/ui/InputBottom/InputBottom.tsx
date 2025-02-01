import styles from "./InputBottom.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface InputBottomProps {
  className?: string;
  disabled?: boolean;
}

const InputBottom = ({ className, disabled = false }: InputBottomProps) => {
  const classNames = joinClassNames([styles["input__bottom"], className]);

  return <div className={classNames}>InputBottom</div>;
};

export default InputBottom;
