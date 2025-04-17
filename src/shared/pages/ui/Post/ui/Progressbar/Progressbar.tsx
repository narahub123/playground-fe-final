import styles from "./Progressbar.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { IVideoTime } from "@shared/pages/ui/Post";

interface ProgressbarProps {
  className?: string;
  time: IVideoTime;
  handleTime: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Progressbar = ({ className, time, handleTime }: ProgressbarProps) => {
  const classNames = joinClassNames([styles["progressbar"], className]);

  const { currentTime, duration } = time;

  const rate = currentTime / duration;
  const progress = `${rate * 100}`;

  const thumbPos =
    rate === 0
      ? "-5px"
      : rate === 1
      ? `calc(${progress}% - 20px)`
      : `calc(${progress}% - 12.5px)`;

  return (
    <div className={classNames}>
      <div className={styles["wrapper"]}>
        <div className={styles["bars__wrapper"]} onClick={handleTime}>
          <div className={styles["bars"]}>
            <div className={styles["rail"]} />
            <div
              className={styles["progress"]}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className={styles["thumb__wrapper"]} style={{ left: thumbPos }}>
          <div className={styles["thumb"]} />
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
