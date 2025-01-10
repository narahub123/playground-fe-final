import styles from "./LightboxBottom.module.css";
import { ReactNode } from "react";
import { joinClassNames } from "@shared/@common/utils";

interface LightboxBottomProps {
  children: ReactNode;
  className?: string;
}

const LightboxBottom = ({ children, className }: LightboxBottomProps) => {
  const classNames = joinClassNames([styles["lightbox__bottom"], className]);

  return <div className={classNames}>{children}</div>;
};

export default LightboxBottom;
