import { useEffect, useRef } from "react";
import styles from "./Segment.module.css";
import { ISegmentProps } from "@shared/pages/ui/PostEditor/ui/TextEditor";

const Segment = ({ row, col, text }: ISegmentProps) => {
  const segmentRef = useRef<HTMLSpanElement>(null);
  console.log("세그먼트 안 텍스트", text);

  useEffect(() => {
    if (!segmentRef.current) return;
    const segment = segmentRef.current;
    if (segment && text.length === 0) {
      segment.innerHTML = `<br data-text={true}/>`;
    } else {
      segment.innerHTML = `<span data-text={true}>${text}</span>`;
    }
  }, [text]);

  return (
    <span
      className={styles["segment"]}
      data-offset={`${row}-${col}`}
      ref={segmentRef}
    ></span>
  );
};

export default Segment;
