import {
  ILine,
  ISegment,
  isInlineSegment,
  isPlainSegment,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";

// 새 줄 생성하기
const createNewLine = (
  setLines: React.Dispatch<React.SetStateAction<ILine[]>>,
  linesRef: React.MutableRefObject<(HTMLDivElement | null)[]>
) => {
  console.log("createNewLine 진입 : 새 줄 생성");

  const selection = window.getSelection();
  if (!selection) return;
  // 현재 커서 위치
  const curPos = selection.focusOffset;
  console.log("현재 커서 위치", curPos);
  // 현재 커서가 위치한 노드
  const curNode = selection.focusNode;
  if (!curNode) return;
  console.log("현재 노드", curNode);
  // 현재 커서가 위치한 노드의 텍스트
  const curText = curNode.textContent || "";
  console.log("현재 텍스트", curText);
  // 현재 커서가 위치한 segment
  const curSegment = curNode.nodeType === 3 ? curNode.parentNode : curNode;
  if (!curSegment) return;
  console.log("현재 새그먼트", curSegment);
  const offset = (curSegment as HTMLElement).dataset["offset"];
  if (!offset) return;
  const [curRow, curCol] = offset.split("-").map(Number);
  console.log("현재 행", curRow, "현재 열", curCol);

  // 현재 새그먼트의 부모
  const curParent = curSegment.parentNode;
  if (!curParent) return;
  console.log("현재 부모", curParent);

  // 현재 줄
  const curLine = isInlineSegment(curParent) ? curParent.parentNode : curParent;
  if (!curLine) return;
  console.log("현재 줄", curLine);

  // 커서 앞 텍스트
  const textBeforeCaret = curText.slice(0, curPos);
  console.log("커서 앞 텍스트", textBeforeCaret);

  // 현재 노드에 텍스트 삽입
  curNode.textContent = textBeforeCaret;

  // 커서 뒤 텍스트
  const textAfterCaret = curText.slice(curPos);
  console.log("커서 뒤 텍스트", textAfterCaret);

  setLines((prev) => {
    const newLines = [...prev];

    const nextRow = curRow + 1;
    newLines.splice(nextRow, 0, {
      row: nextRow,
      segments: [{ type: "plain", text: textAfterCaret }],
    });

    console.log(newLines);

    return newLines;
  });

  // 커서 위치 지정
  setTimeout(() => {
    const newLine = linesRef.current[curRow + 1];
    if (!newLine) return;
    const firstSegment = newLine.firstChild;
    if (!firstSegment) return;

    const isInline = isInlineSegment(firstSegment);
    console.log(isInline);

    const firstChildNode = firstSegment.firstChild;
    if (!firstChildNode) return;

    const textNode = isInline ? firstChildNode.firstChild : firstChildNode;
    if (!textNode) return;
    console.log("텍스트 노드", textNode);

    const range = document.createRange();
    range.setStart(textNode, 0);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
  }, 10);
};

export default createNewLine;
