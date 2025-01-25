import styles from "./AlertRoot.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface AlertRootProps {
  className?: string;
  disabled?: boolean;
}

const AlertRoot = ({ className, disabled = false }: AlertRootProps) => {
  const classNames = joinClassNames([styles["alert__root"], className]);

  return <div className={classNames}>AlertRoot</div>;
};

export default AlertRoot;
