import {
  ICaretInfo,
  isInlineSegment,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";

const setCaretPosition = (
  linesRef: React.MutableRefObject<(HTMLDivElement | null)[]>,
  caretInfo: ICaretInfo | null
) => {
  if (!caretInfo) return;
  const { curRow } = caretInfo;
  // 커서 위치 지정
  setTimeout(() => {
    console.log(
      "--------------------- setCaretPosition 시작 --------------------------"
    );
    const selection = window.getSelection();
    if (!selection) return;
    const newLine = linesRef.current[curRow + 1];
    if (!newLine) return;
    const firstSegment = newLine.firstChild;
    if (!firstSegment) return;

    console.log(`열 ${curRow + 1}`, firstSegment);

    const isInline = isInlineSegment(firstSegment);
    console.log(isInline);

    const firstChildNode = firstSegment.firstChild;
    if (!firstChildNode) return;

    const childNode = isInline ? firstChildNode.firstChild : firstChildNode;
    if (!childNode) return;
    console.log("자식 노드", childNode);
    const textNode =
      childNode.nodeName === "BR" ? childNode : childNode.firstChild;
    if (!textNode) return;
    console.log("텍스트 노드", textNode);

    const range = document.createRange();
    range.setStart(textNode, 0);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);

    console.log(
      "--------------------- setCaretPosition 종료 --------------------------"
    );
  }, 4);
};

export default setCaretPosition;
