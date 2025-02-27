import { Button } from "@shared/@common/ui/components";
import styles from "./PasswordRecoveryButton.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { ReactNode } from "react";

interface PasswordRecoveryButtonProps {
  className?: string;
  children: ReactNode;
  handleClick: () => void;
}

const PasswordRecoveryButton = ({
  className,
  children,
  handleClick,
}: PasswordRecoveryButtonProps) => {
  const classNames = joinClassNames([
    styles["password__recovery__button"],
    className,
  ]);

  return (
    <Button
      onClick={handleClick}
      className={classNames}
      variant="plain"
      fontColor="colorTheme"
      fontSize="xs"
    >
      {children}
    </Button>
  );
};

export default PasswordRecoveryButton;
