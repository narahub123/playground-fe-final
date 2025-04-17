import { useEffect, useRef, useState } from "react";
import styles from "./DialDropdown.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface DialDropdownProps {
  className?: string;
  volume: number;
  handleVolume: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  handleCurrentVolume: (newVolume: number) => void;
  isOpen: boolean;
}

const DialDropdown = ({
  className,
  volume,
  handleVolume,
  handleCurrentVolume,
  isOpen,
}: DialDropdownProps) => {
  const classNames = joinClassNames([styles["dial"], className]);

  const volumeRef = useRef<HTMLDivElement>(null);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const handleMouseUp = () => {
      setIsPressed(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!volumeRef.current || !isPressed) return;
      e.preventDefault();

      const { top, height } = volumeRef.current.getBoundingClientRect();
      const y = 96 - Math.min(Math.max(e.clientY - top, 0), height);

      const newVolume = y / height;

      handleCurrentVolume(newVolume);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isPressed]);

  const thumbPos =
    volume === 0 ? -8 : volume === 1 ? 72 : Math.min(96 * volume - 8, 72);

  if (!isOpen) return null;

  return (
    <div className={classNames}>
      <div className={styles["wrapper"]}>
        <div
          className={styles["bars__wrapper"]}
          onClick={handleVolume}
          ref={volumeRef}
        >
          <div className={styles["bars"]}>
            <div
              className={styles["volume"]}
              style={{ height: `${96 * volume}px` }}
            />
          </div>
        </div>
        <div
          className={styles["thumb__wrapper"]}
          style={{ bottom: `${thumbPos}px` }}
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsPressed(true);
          }}
        >
          <div className={styles["thumb"]} />
        </div>
      </div>
    </div>
  );
};

export default DialDropdown;
