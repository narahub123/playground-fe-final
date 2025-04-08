import styles from "./CircularProgressBar.module.css";
import { POST_LENGTH_MAX } from "@shared/@common/constants";
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

  const warningCond =
    POST_LENGTH_MAX - textLength <= 10 && POST_LENGTH_MAX - textLength > 0;
  const errorCond = POST_LENGTH_MAX - textLength <= 0;
  const textInvisibleCond = POST_LENGTH_MAX - textLength > 10;
  const svgInvisibleCond = POST_LENGTH_MAX - textLength < -4;

  return (
    <div className={classNames}>
      <span
        className={joinClassNames([
          styles["text"],
          warningCond ? styles["text--warning"] : "",
          errorCond ? styles["text--error"] : "",
          textInvisibleCond ? styles["text--invisible"] : "",
        ])}
      >
        {POST_LENGTH_MAX - textLength}
      </span>
      <svg width={30} height={30} className={styles["svg"]}>
        <circle
          r={12}
          cx={15}
          cy={15}
          className={joinClassNames([
            styles["progress"],
            warningCond ? styles["progress--warning"] : "",
            errorCond ? styles["progress--error"] : "",
            svgInvisibleCond ? styles["progress--invisible"] : "",
          ])}
        />
        <circle
          r={12}
          cx={15}
          cy={15}
          className={styles["border"]}
          style={{
            strokeDasharray: 2 * Math.PI * 12,
            strokeDashoffset: `${-Math.min(
              (textLength / POST_LENGTH_MAX) * 2 * Math.PI * 12,
              2 * Math.PI * 12
            )}`,
          }}
        />
      </svg>
    </div>
  );
};

export default CircularProgressBar;
