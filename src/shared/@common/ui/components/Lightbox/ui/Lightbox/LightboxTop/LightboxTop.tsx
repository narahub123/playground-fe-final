import { ReactNode } from "react";
import styles from "./LightboxTop.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface LightboxTopProps {
  children: ReactNode;
  className?: string;
}

const LightboxTop = ({ children, className }: LightboxTopProps) => {
  const classNames = joinClassNames([styles["lightbox__top"], className]);

  return <div className={classNames}>{children}</div>;
};

export default LightboxTop;
