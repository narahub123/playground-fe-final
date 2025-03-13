import styles from "./Segment.module.css";
import { useEffect, useRef } from "react";
import {
  ISegmentProps,
  isInlineSegment,
  useTextEditorContext,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";

const Segment = ({ row, col, text }: ISegmentProps) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const { setLines } = useTextEditorContext();

  useEffect(() => {
    if (spanRef.current && spanRef.current.innerText.trim() === "") {
      spanRef.current.innerHTML = `<br data-text="true" />`;
    }
  }, [text]);

  useEffect(() => {
    const selection = window.getSelection();
    if (!selection) return;
    const curNode = selection.focusNode;
    if (!curNode) return;
    console.log("현재 노드", curNode);

    const curPos = selection.focusOffset;
    console.log("현재 커서 위치", curPos);
    const curText = curNode.textContent || "";
    console.log("현재 텍스트", curText);
    const curSegment =
      curNode.nodeType === 3 || curNode.nodeName === "BR"
        ? curNode.parentNode
        : curNode;

    if (!curSegment) return;

    console.log("현재 세그먼트", curSegment);

    const offset = (curSegment as HTMLElement).dataset["offset"];
    if (!offset) return;
    const [curRow, curCol] = offset.split("-").map(Number);
    console.log("행", curRow, "열", curCol);
    const curParent = curSegment.parentNode;
    if (!curParent) return;

    console.log("컴포넌트 행, 열", `${row}-${col}`);

    // 줄 업데이트
    setLines((prev) => {
      const newLines = [...prev];

      const curLineSegments = newLines[curRow].segments;

      curLineSegments.splice(curCol, 1, {
        type: isInlineSegment(curParent) ? "inline" : "plain",
        row: curRow,
        col: curCol,
        text: curText,
      });

      return newLines;
    });
  }, []);

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
