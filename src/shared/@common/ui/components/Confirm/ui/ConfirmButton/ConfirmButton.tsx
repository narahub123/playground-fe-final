import { ColorBasic, VariantType } from "@shared/@common/types";
import Button from "../../../Button/Button";
import styles from "./ConfirmButton.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { ReactNode } from "react";

interface ConfirmButtonProps {
  className?: string;
  children: ReactNode;
  onClick: () => void;
  bgColor?: ColorBasic;
  variant?: VariantType;
}

const ConfirmButton = ({
  className,
  children,
  onClick,
  bgColor,
  variant,
}: ConfirmButtonProps) => {
  const classNames = joinClassNames([styles["confirm__button"], className]);

  return (
    <Button
      isValid
      onClick={onClick}
      rounded="2xl"
      bgColor={bgColor}
      variant={variant}
      className={classNames}
    >
      {children}
    </Button>
  );
};

export default ConfirmButton;
