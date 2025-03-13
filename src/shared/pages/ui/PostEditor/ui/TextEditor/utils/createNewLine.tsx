import {
  ILine,
  ISegment,
  isInlineSegment,
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
  const curSegment =
    curNode.nodeType === 3 || curNode.nodeName === "BR"
      ? curNode.parentNode
      : curNode;
  if (!curSegment) return;
  console.log("현재 세그먼트", curSegment);
  const offset = (curSegment as HTMLElement).dataset["offset"];
  console.log("offset", offset);

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

  // 커서 뒤 텍스트
  const textAfterCaret = curText.slice(curPos);
  console.log("커서 뒤 텍스트", textAfterCaret);

  // 커서 뒤 세그먼트
  const segmentsAfterCaret: ISegment[] = Array.prototype.slice
    .call(curLine.childNodes) // childnodes to array
    .filter((_, index) => {
      return curPos === 0 ? index >= curCol : index > curCol;
    }) // 세그먼트 범위
    .map((seg, idx) => ({
      type: seg.className.includes("inline") ? "inline" : "plain",
      text: seg.innerText,
      row: curRow + 1,
      col: idx,
    })); // ISegment 형식으로 변경

  // 다음 줄에 들어 갈 세그먼트
  const segmentsToMove: ISegment[] =
    curPos > 0 && textAfterCaret.length > 0
      ? [
          { type: "plain", text: textAfterCaret, row: curRow + 1, col: 0 },
          ...segmentsAfterCaret.map((seg, idx) => ({
            ...seg,
            col: idx + 1,
          })),
        ] // type 나중에 점검해야 함
      : textAfterCaret.length === 0 && segmentsAfterCaret.length === 0
      ? [{ type: "plain", text: "", row: curRow + 1, col: 0 }]
      : [...segmentsAfterCaret];

  console.log("새 줄에 들어갈 세그먼트", segmentsToMove);

  // 새 줄 추가
  setLines((prev) => {
    const newLines = [...prev];

    // 현재 줄에서 커서 이후 세그먼트 삭제
    newLines[curRow] = {
      ...newLines[curRow],
      segments: newLines[curRow].segments
        ?.filter((_, idx) => idx <= curCol)
        .map((seg, index) => {
          if (index === curCol)
            return {
              ...seg,
              text: textBeforeCaret,
            };
          else return seg;
        }),
    };

    // 새 줄에 현재 줄의 세그먼트 추가
    const nextRow = curRow + 1;
    newLines.splice(nextRow, 0, {
      row: nextRow,
      segments: [...segmentsToMove],
    });

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
