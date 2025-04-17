import styles from "./Progressbar.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { IVideoTime } from "@shared/pages/ui/Post";
import { useEffect, useRef, useState } from "react";

interface ProgressbarProps {
  className?: string;
  time: IVideoTime;
  handleTime: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  handleCurrentTime: (newCurrentTime: number) => void;
}

const Progressbar = ({
  className,
  time,
  handleTime,
  handleCurrentTime,
}: ProgressbarProps) => {
  const classNames = joinClassNames([styles["progressbar"], className]);

  const barRef = useRef<HTMLDivElement>(null);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isPressed || !barRef.current) return;

      const { left, width } = barRef.current.getBoundingClientRect();
      const x = Math.min(Math.max(e.clientX - left, 0), width);
      const newRate = x / width;
      const newTime = newRate * duration;

      handleCurrentTime(newTime);
    };
    const handleMouseUp = () => {
      setIsPressed(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isPressed]);

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
        <div
          className={styles["bars__wrapper"]}
          onClick={handleTime}
          ref={barRef}
        >
          <div className={styles["bars"]}>
            <div className={styles["rail"]} />
            <div
              className={styles["progress"]}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className={styles["thumb__wrapper"]} style={{ left: thumbPos }}>
          <div
            className={styles["thumb"]}
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsPressed(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
