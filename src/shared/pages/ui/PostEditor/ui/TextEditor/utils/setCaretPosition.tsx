import {
  isInlineSegment,
  logEnd,
  logError,
  logStart,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";

const setCaretPosition = (segment: HTMLSpanElement, offset: number) => {
  // 커서 위치 지정
  const message = "setCaretPosition";
  logStart(message);

  const selection = window.getSelection();
  if (!selection) return;

  const isInline = isInlineSegment(segment);
  console.log(isInline);

  const firstChildNode = segment.firstChild;
  if (!firstChildNode) return;

  const childNode = isInline ? firstChildNode.firstChild : firstChildNode;

  if (!childNode) {
    logError("자식노드 생성 실패", childNode);
    return;
  }

  const textNode =
    childNode.nodeName === "BR" ? childNode : childNode.firstChild;

  if (!textNode) {
    logError("텍스트노드 생성 실패", childNode);
    return;
  }

  const range = document.createRange();
  range.setStart(textNode, offset);
  range.collapse(true);
  selection.removeAllRanges();
  selection.addRange(range);

  logEnd(message);
};

export default setCaretPosition;
