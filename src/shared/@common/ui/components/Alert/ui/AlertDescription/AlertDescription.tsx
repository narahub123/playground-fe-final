import styles from "./AlertDescription.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface AlertDescriptionProps {
  className?: string;
  disabled?: boolean;
}

const AlertDescription = ({
  className,
  disabled = false,
}: AlertDescriptionProps) => {
  const classNames = joinClassNames([styles["alert__description"], className]);

  return <div className={classNames}>AlertDescription</div>;
};

export default AlertDescription;
