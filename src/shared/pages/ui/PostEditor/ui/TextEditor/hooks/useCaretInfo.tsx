import { useEffect, useState } from "react";
import { isInlineSegment } from "../utils";

const useCaretInfo = () => {
  const [caretInfo, setCaretInfo] = useState<{ [key: string]: any } | null>(
    null
  );
  const selection = window.getSelection();

  useEffect(() => {
    if (!selection) return console.log("selection 객체 생성 실패");

    // 현재 커서 위치
    const curPos = selection.focusOffset;
    setCaretInfo((prev) => ({
      ...prev,
      curPos,
    }));

    // 현재 노드
    const curNode = selection.focusNode;
    if (!curNode) {
      setCaretInfo(null);
      return console.log("curNode 생성 실패");
    }

    setCaretInfo((prev) => ({
      ...prev,
      curNode,
    }));

    const curText = curNode.textContent || "";
    setCaretInfo((prev) => ({
      ...prev,
      curText,
    }));

    // 현재 노드의 wrapper
    const curWrapper =
      curNode.nodeType === 3 || curNode.nodeName === "Br"
        ? curNode.parentNode
        : curNode;
    if (!curWrapper) return console.log("curwrapper 생성 실패");

    const curWrapperParent = curWrapper.parentNode;
    if (!curWrapperParent) return console.log("curWrapperParent 생성 실패");

    const curSegment = isInlineSegment(curWrapperParent)
      ? curWrapperParent
      : curWrapper;

    if (!curSegment) return console.log("curSegment 생성 실패");

    setCaretInfo((prev) => ({
      ...prev,
      curSegment,
    }));

    const offset = (curWrapper as HTMLElement).dataset["offset"];
    if (!offset) return console.log("현재 세그먼트의 offset 가져오기 실패");

    const [curRow, curCol] = offset.split("-").map(Number);

    setCaretInfo((prev) => ({
      ...prev,
      curRow,
    }));

    setCaretInfo((prev) => ({
      ...prev,
      curCol,
    }));

    const curLine = curSegment.parentNode;
    if (!curLine) return console.log("curLine 생성 실패");
    setCaretInfo((prev) => ({
      ...prev,
      curLine,
    }));
  }, [selection]);

  return caretInfo;
};

export default useCaretInfo;
