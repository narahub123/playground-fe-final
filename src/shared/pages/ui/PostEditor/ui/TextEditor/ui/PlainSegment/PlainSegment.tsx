import { useEffect, useRef } from "react";
import styles from "./PlainSegment.module.css";

interface PlainSegmentProps {
  text: string;
  row: number;
  col: number;
}

const PlainSegment = ({ text, row, col }: PlainSegmentProps) => {
  const segmentRef = useRef<HTMLSpanElement>(null);

  // textSpan 생성
  useEffect(() => {
    if (!segmentRef.current) return;

    const segment = segmentRef.current;

    if (text.length > 0) {
      segment.innerHTML = `<span data-text='true'>${text}</span>`;
    } else {
      segment.innerHTML = `<br data-text='true'/>`;
    }
  }, [text]);

  return (
    <span
      className={styles["plain__segment"]}
      data-offset={`${row}-${col}`}
      ref={segmentRef}
    />
  );
};

export default PlainSegment;
