import {
  ICaretInfo,
  isInlineSegment,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";

const handleSelectionChange = (
  setCaretInfo: React.Dispatch<React.SetStateAction<ICaretInfo | undefined>>
) => {
  const selection = window.getSelection();
  if (!selection) return;

  const curPos = selection.focusOffset;
  console.log("현재 커서 위치", curPos);

  const curNode = selection.focusNode;
  if (!curNode) return;
  console.log("현재 노드", curNode);

  const curText = curNode.textContent || "";
  console.log("현재 텍스트", curText);

  const curWrapperElem = curNode.parentElement;
  if (!curWrapperElem) return;
  console.log("현재 노드를 감싸는 요소", curWrapperElem);

  const containerElem = curWrapperElem.parentNode;
  if (!containerElem) return;

  // 현재 노드가 텍스트 노드인 경우 부모 노드 아닌 경우 현재 노드가 현재 요소가 됨
  const curSegment = curWrapperElem.dataset["text"]
    ? containerElem
    : curNode.nodeType === 1 &&
      (curNode as HTMLElement).className.includes("segment")
    ? curNode
    : curWrapperElem;
  if (
    !curSegment ||
    !(curSegment as HTMLElement).className.includes("segment")
  ) {
    console.log("에러", curSegment);

    return;
  }
  console.log("현재 요소", curSegment);

  const [row, col] = (curSegment as HTMLElement).dataset["offset"]
    ?.split("-")
    .map(Number) || [0, 0];

  const curLine = isInlineSegment(curSegment.parentNode!)
    ? curSegment.parentNode!.parentNode
    : curSegment.parentNode;
  if (!curLine) return;
  console.log("현재 라인", curLine);

  const nextLine = curLine.nextSibling;
  console.log("다음 라인", nextLine);

  const textEditor = curLine.parentNode;
  if (!textEditor) return;
  console.log("텍스트 에디터", textEditor);

  console.log("업데이트 됨");

  const caretInfo: ICaretInfo = {
    curPos,
    curNode,
    curText,
    curSegment,
    curSegmentOffset: { row, col },
    curLine,
    nextLine,
    textEditor,
  };

  setCaretInfo(caretInfo);
};

export default handleSelectionChange;
