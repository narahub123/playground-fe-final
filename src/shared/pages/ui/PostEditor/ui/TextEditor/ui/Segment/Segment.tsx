import styles from "./Segment.module.css";
import { useEffect, useRef } from "react";
import {
  ISegmentProps,
  isInlineSegment,
  useTextEditorContext,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";
import { useCaretInfo } from "../../hooks";

const Segment = ({ row, col, text }: ISegmentProps) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const { setLines } = useTextEditorContext();

  useEffect(() => {
    if (spanRef.current && spanRef.current.innerText.trim() === "") {
      spanRef.current.innerHTML = `<br data-text="true" />`;
    }
  }, [text]);

  const caretInfo = useCaretInfo();

  useEffect(() => {
    if (!caretInfo) return;
    const { curRow, curCol, curText, curSegment } = caretInfo;

    // 줄 업데이트
    setLines((prev) => {
      const newLines = [...prev];

      const curLineSegments = newLines[curRow].segments;

      curLineSegments.splice(curCol, 1, {
        type: isInlineSegment(curSegment) ? "inline" : "plain",
        row: curRow,
        col: curCol,
        text: curText,
      });

      return newLines;
    });
  }, [caretInfo]);

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
