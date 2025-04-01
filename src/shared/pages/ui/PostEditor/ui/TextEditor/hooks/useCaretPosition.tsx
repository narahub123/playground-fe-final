import { useEffect } from "react";
import { ICaretPosition } from "../types";

interface useCaretPositionProps {
  textEditorRef: React.RefObject<HTMLDivElement>;
  caretPosition: ICaretPosition;
}

const useCaretPosition = ({
  textEditorRef,
  caretPosition,
}: useCaretPositionProps) => {
  useEffect(() => {
    if (!textEditorRef.current) return;
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const textEditor = textEditorRef.current;

    const { caretPos, row, col } = caretPosition;

    const segment = textEditor.children[row].children[col] as HTMLElement;

    let textNode: Node;

    // inline 세그먼트
    if (
      segment instanceof HTMLSpanElement &&
      segment.className.includes("inline")
    ) {
      textNode = segment.firstChild!.firstChild!.firstChild!;
    } else {
      // plain 세그먼트
      textNode = segment.firstChild!.firstChild!;
    }

    const range = document.createRange();
    range.setStart(textNode, caretPos);
    range.collapse(true);

    selection.removeAllRanges();
    selection.addRange(range);
  }, [caretPosition]);
};

export default useCaretPosition;
