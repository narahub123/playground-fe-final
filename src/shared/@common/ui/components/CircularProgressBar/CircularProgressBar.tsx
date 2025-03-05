import { POST_LENGTH_MAX } from "@shared/@common/constants";
import styles from "./CircularProgressBar.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface CircularProgressBarProps {
  className?: string;
  textLength: number;
}

const CircularProgressBar = ({
  className,
  textLength,
}: CircularProgressBarProps) => {
  const classNames = joinClassNames([
    styles["circular__progress__bar"],
    className,
  ]);

  return (
    <div className={classNames}>
      <svg width={30} height={30} className={styles["svg"]}>
        <circle r={10} cx={15} cy={15} className={styles["progress"]}></circle>
        <circle
          r={10}
          cx={15}
          cy={15}
          className={styles["border"]}
          style={{
            strokeDasharray: 2 * Math.PI * 10,
            strokeDashoffset: `${-(
              (textLength / POST_LENGTH_MAX) *
              2 *
              Math.PI *
              10
            )}`,
          }}
        ></circle>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
