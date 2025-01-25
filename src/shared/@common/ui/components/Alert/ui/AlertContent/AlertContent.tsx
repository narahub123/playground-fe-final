import styles from "./AlertContent.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface AlertContentProps {
  className?: string;
  disabled?: boolean;
}

const AlertContent = ({ className, disabled = false }: AlertContentProps) => {
  const classNames = joinClassNames([styles["alert__content"], className]);

  return <div className={classNames}>AlertContent</div>;
};

export default AlertContent;
