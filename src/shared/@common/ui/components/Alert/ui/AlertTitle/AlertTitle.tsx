import styles from "./AlertTitle.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface AlertTitleProps {
  className?: string;
  disabled?: boolean;
}

const AlertTitle = ({ className, disabled = false }: AlertTitleProps) => {
  const classNames = joinClassNames([styles["alert__title"], className]);

  return <div className={classNames}>AlertTitle</div>;
};

export default AlertTitle;
