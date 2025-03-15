import { useCallback } from "react";
import { isInlineSegment } from "../utils";
import { ICaretInfo } from "../types";

const useCaretInfo = () => {
  const getCaretInfo = useCallback((): ICaretInfo | null => {
    const selection = window.getSelection();
    if (!selection) {
      console.error("selection 객체 생성 실패");
      return null;
    }

    const curPos = selection.focusOffset;

    const curNode = selection.focusNode;
    if (!curNode) {
      console.error("현재 노드 생성 실패");
      return null;
    }

    console.log("현재 노드", curNode);

    const curText = curNode.textContent || "";

    const curTextSpan =
      curNode.nodeType === 3
        ? curNode.parentNode
        : (curNode as HTMLElement).dataset["text"]
        ? curNode
        : curNode.firstChild;
    console.log("curTextSapn", curTextSpan);

    if (!curTextSpan) {
      if (!curTextSpan) {
        console.error("curTextSpan 생성 실패");
      }
      return null;
    }

    const curWrapperSpan = (curTextSpan as HTMLElement).dataset["offset"]
      ? curTextSpan
      : curTextSpan.parentNode;
    if (!curWrapperSpan || !(curWrapperSpan as HTMLElement).dataset["offset"]) {
      if (!curWrapperSpan) {
        console.error("curWrapperSpan 생성 실패");
      } else {
        console.error("적합하지 않은 curWrapperSpan");
      }

      return null;
    }

    const curTextBlock = curWrapperSpan.parentNode;
    if (!curTextBlock) {
      console.error("curTextBlock 생성 실패");
      return null;
    }

    const curSegment = (
      curTextBlock.nodeName === "SPAN" ? curTextBlock : curWrapperSpan
    ) as HTMLSpanElement;

    if (!curSegment || curSegment.nodeName !== "SPAN") {
      if (!curSegment) {
        console.error("curSegment 생성 실패");
      } else {
        console.error("적합하지 않은 curSegment");
      }
      return null;
    }

    const offset = isInlineSegment(curSegment)
      ? (curSegment.firstChild as HTMLSpanElement).dataset["offset"]
      : (curSegment as HTMLSpanElement).dataset["offset"];

    if (!offset) {
      console.error("offset 생성 실패");
      return null;
    }

    const [curRow, curCol] = offset.split("-").map(Number);

    if (isNaN(curRow) || isNaN(curCol)) {
      console.error("잘못된 offset 값 생성");
      return null;
    }

    const curLine = curSegment.parentNode as HTMLDivElement;

    if (!curLine || curLine.nodeName !== "DIV") {
      if (!curLine) {
        console.error("curLine 생성 실패");
      } else {
        console.error("적합하지 않은 curLine");
      }
      return null;
    }

    return {
      curPos,
      curText,
      curRow,
      curCol,
      curSegment,
      curLine,
    };
  }, []);

  return getCaretInfo;
};

export default useCaretInfo;
