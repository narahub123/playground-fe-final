import styles from "./DialDropdown.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface DialDropdownProps {
  className?: string;
  disabled?: boolean;
}

const Thumb = () => {
  return (
    <div className={styles["thumb__wrapper"]} style={{ bottom: -8 }}>
      <div className={styles["thumb"]} />
    </div>
  );
};

const DialDropdown = ({ className }: DialDropdownProps) => {
  const classNames = joinClassNames([styles["dial"], className]);

  return (
    <div className={classNames}>
      <div className={styles["wrapper"]}>
        <div className={styles["bars__wrapper"]}>
          <div className={styles["bars"]}>
            <div className={styles["volume"]} style={{ height: `40%` }} />
          </div>
        </div>
        <Thumb />
      </div>
    </div>
  );
};

export default DialDropdown;
