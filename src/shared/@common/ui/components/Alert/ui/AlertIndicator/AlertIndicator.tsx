import styles from "./AlertIndicator.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface AlertIndicatorProps {
  className?: string;
  disabled?: boolean;
}

const AlertIndicator = ({
  className,
  disabled = false,
}: AlertIndicatorProps) => {
  const classNames = joinClassNames([styles["alert__indicator"], className]);

  return <div className={classNames}>AlertIndicator</div>;
};

export default AlertIndicator;
