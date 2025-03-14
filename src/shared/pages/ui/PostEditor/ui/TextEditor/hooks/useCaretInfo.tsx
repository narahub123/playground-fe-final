import { useCallback } from "react";
import { isInlineSegment } from "../utils";
import { ICaretInfo } from "../types";

const useCaretInfo = () => {
  const getCaretInfo = useCallback((): ICaretInfo | null => {
    const selection = window.getSelection();
    if (!selection) return null;

    const curPos = selection.focusOffset;
    const curNode = selection.focusNode;
    if (!curNode) return null;

    const curText = curNode.textContent || "";
    const curSegment =
      curNode.nodeType === 3 || curNode.nodeName === "BR"
        ? curNode.parentNode
        : curNode;

    if (!curSegment || !(curSegment instanceof HTMLElement)) return null;

    const offset = curSegment.dataset["offset"];
    if (!offset) return null;

    const [curRow, curCol] = offset.split("-").map(Number);

    const curParent = curSegment.parentNode;
    if (!curParent) return null;

    const curLine = (
      isInlineSegment(curParent) ? curParent.parentNode : curParent
    ) as HTMLDivElement;

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
