import { useEffect, useState } from "react";
import styles from "./Progressbar.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface ProgressbarProps {
  curText: string;
  isLoading: boolean;
}

const Progressbar = ({ curText, isLoading }: ProgressbarProps) => {
  const [percentage, setPercentage] = useState(0);
  const classNames = joinClassNames([styles["progressbar"]]);

  useEffect(() => {
    if (!isLoading) {
      setPercentage(100);
      return;
    }
    setPercentage(0);

    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return prev;
        }
        return prev + 20;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [curText]);

  return (
    <div className={classNames}>
      <div
        style={{ width: `${percentage}%` }}
        className={joinClassNames([
          styles["bar"],
          !isLoading ? styles["empty"] : "",
        ])}
      />
    </div>
  );
};

export default Progressbar;
