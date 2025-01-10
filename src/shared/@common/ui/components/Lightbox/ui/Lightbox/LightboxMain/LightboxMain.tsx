import { ReactNode } from "react";
import styles from "./LightboxMain.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface LightboxMainProps {
  children: ReactNode;
  className?: string;
}

const LightboxMain = ({ children, className }: LightboxMainProps) => {
  const classNames = joinClassNames([styles["lightbox__main"], className]);

  return <div className={classNames}>{children}</div>;
};

export default LightboxMain;
