import { useCallback } from "react";
import {
  isInlineSegment,
  ICaretInfo,
  logError,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";

const useCaretInfo = () => {
  const getCaretInfo = useCallback((): ICaretInfo | null => {
    console.log(
      "--------------------- getCaretInfo 시작 --------------------------"
    );

    const selection = window.getSelection();
    if (!selection) {
      logError("selection 객체 생성 실패", selection);
      return null;
    }

    const curPos = selection.focusOffset;

    const curNode = selection.focusNode;
    if (!curNode) {
      logError("현재 노드 생성 실패", curNode);
      return null;
    }

    const curText = curNode.textContent || "";

    const curTextSpan = curNode.nodeType === 3 ? curNode.parentNode : curNode;

    if (!curTextSpan) {
      logError("curTextSpan 생성 실패", curTextSpan);

      return null;
    }

    // lines가 업데이트되기 전에는 텍스트는 curWrapperSpan 안에 존재하고 curTextSpan은 존재하지 않음
    // 따라서 텍스트가 curWrapperSpan 안에 없는 경우에는 curTextSpan과 curWrapperSpan이 동일함
    const curWrapperSpan = (curTextSpan as HTMLElement).dataset["offset"]
      ? curTextSpan
      : curTextSpan.parentNode;
    if (!curWrapperSpan || !(curWrapperSpan as HTMLElement).dataset["offset"]) {
      if (!curWrapperSpan) {
        logError("curWrapperSpan 생성 실패", curWrapperSpan);
      } else {
        logError("적합하지 않은 curWrapperSpan", curWrapperSpan);
      }

      return null;
    }

    const curTextBlock = curWrapperSpan.parentNode;
    if (!curTextBlock) {
      logError("curTextBlock 생성 실패", curTextBlock);
      return null;
    }

    const curSegment = (
      curTextBlock.nodeName === "SPAN" ? curTextBlock : curWrapperSpan
    ) as HTMLSpanElement;

    if (!curSegment || curSegment.nodeName !== "SPAN") {
      if (!curSegment) {
        logError("curSegment 생성 실패", curSegment);
      } else {
        logError("적합하지 않은 curSegment", curSegment);
      }
      return null;
    }

    const offset = isInlineSegment(curSegment)
      ? (curSegment.firstChild as HTMLSpanElement).dataset["offset"]
      : (curSegment as HTMLSpanElement).dataset["offset"];

    if (!offset) {
      logError("offset 생성 실패", offset);
      return null;
    }

    const [curRow, curCol] = offset.split("-").map(Number);

    if (isNaN(curRow) || isNaN(curCol)) {
      logError("잘못된 offset 값 생성", { curRow, curCol });
      return null;
    }

    const curLine = curSegment.parentNode as HTMLDivElement;

    if (!curLine || curLine.nodeName !== "DIV") {
      if (!curLine) {
        logError("curLine 생성 실패", curLine);
      } else {
        logError("적합하지 않은 curLine", curLine);
      }
      return null;
    }

    console.log(
      "--------------------- getCaretInfo 종료 --------------------------"
    );
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
