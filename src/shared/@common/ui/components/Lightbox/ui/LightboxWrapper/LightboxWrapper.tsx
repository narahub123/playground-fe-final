import styles from "./LightboxWrapper.module.css";
import { joinClassNames } from "@shared/@common/utils";
import Portal from "../../../Portal/Portal";

interface LightboxWrapperProps {
  className?: string;
  disabled?: boolean;
}

const LightboxWrapper = ({ className }: LightboxWrapperProps) => {
  const classNames = joinClassNames([styles["lightbox__wrapper"], className]);

  return (
    <Portal id="lightbox">
      <div className={classNames}>LightboxWrapper</div>
    </Portal>
  );
};

export default LightboxWrapper;
