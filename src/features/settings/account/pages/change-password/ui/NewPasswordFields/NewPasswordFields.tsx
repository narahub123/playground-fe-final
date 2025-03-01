import styles from "./NewPasswordFields.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { ReactNode } from "react";

interface NewPasswordFieldsContainerProps {
  children: ReactNode;
  className?: string;
}

const NewPasswordFieldsContainer = ({
  className,
  children,
}: NewPasswordFieldsContainerProps) => {
  const classNames = joinClassNames([
    styles["new__password__fields"],
    className,
  ]);

  return <div className={classNames}>{children}</div>;
};

export default NewPasswordFieldsContainer;
