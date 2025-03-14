import styles from "./Segment.module.css";
import { useEffect, useRef } from "react";
import { ISegmentProps } from "@shared/pages/ui/PostEditor/ui/TextEditor";

const Segment = ({ row, col, text }: ISegmentProps) => {
  const segmentRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (segmentRef.current && segmentRef.current.innerText.trim() === "") {
      segmentRef.current.innerHTML = `<br data-text="true" />`;
    }
  }, [text]);

  return (
    <span
      ref={segmentRef}
      className={styles["segment"]}
      data-offset={`${row}-${col}`}
    >
      {text || ""}
    </span>
  );
};

export default Segment;
