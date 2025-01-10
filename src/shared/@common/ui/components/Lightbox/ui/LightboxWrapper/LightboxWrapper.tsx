import styles from "./LightboxWrapper.module.css";
import { ReactNode } from "react";
import { joinClassNames } from "@shared/@common/utils";
import { Portal } from "@shared/@common/ui/components";

interface LightboxWrapperProps {
  children: ReactNode;
  className?: string;
}

const LightboxWrapper = ({ className, children }: LightboxWrapperProps) => {
  const classNames = joinClassNames([styles["lightbox__wrapper"], className]);

  return (
    <Portal id="lightbox">
      <div className={classNames}>{children}</div>
    </Portal>
  );
};

export default LightboxWrapper;
