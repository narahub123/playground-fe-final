import styles from "./Progressbar.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface ProgressbarProps {
  className?: string;
}

const Progressbar = ({ className }: ProgressbarProps) => {
  const classNames = joinClassNames([styles["progressbar"], className]);

  return (
    <div className={classNames}>
      <div className={styles["bars"]}>
        <div className={styles["rail"]} />
        <div className={styles["progress"]} style={{ width: "50%" }} />
      </div>
      <div className={styles["circle__wrapper"]} style={{ left: 255.2 - 12.5 }}>
        <div className={styles["circle"]} />
      </div>
    </div>
  );
};

export default Progressbar;
