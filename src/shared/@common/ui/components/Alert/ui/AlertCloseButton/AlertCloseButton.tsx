import styles from "./AlertCloseButton.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface AlertCloseButtonProps {
  className?: string;
  disabled?: boolean;
}

const AlertCloseButton = ({
  className,
  disabled = false,
}: AlertCloseButtonProps) => {
  const classNames = joinClassNames([
    styles["alert__close__button"],
    className,
  ]);

  return <div className={classNames}>AlertCloseButton</div>;
};

export default AlertCloseButton;
