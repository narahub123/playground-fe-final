import styles from "./Segment.module.css";
import { useEffect, useRef } from "react";
import { ISegmentProps } from "@shared/pages/ui/PostEditor/ui/TextEditor";

const Segment = ({ row, col, text }: ISegmentProps) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (spanRef.current && spanRef.current.innerText.trim() === "") {
      spanRef.current.innerHTML = `<br data-text="true" />`;
    }
  }, [text]);

  return (
    <span
      ref={spanRef}
      className={styles["segment"]}
      data-offset={`${row}-${col}`}
    >
      {text || ""}
    </span>
  );
};

export default Segment;
