import {
  ICaretInfo,
  ILine,
  ISegment,
  isInlineSegment,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";

// 새 줄 생성하기
const createNewLine = (
  setLines: React.Dispatch<React.SetStateAction<ILine[]>>,
  linesRef: React.MutableRefObject<(HTMLDivElement | null)[]>,
  caretInfo: ICaretInfo | null
) => {
  console.log("createNewLine 진입 : 새 줄 생성");
  if (!caretInfo) {
    console.log("caretInfo 없음");

    return;
  }

  const { curPos, curText, curLine, curRow, curCol } = caretInfo;

  console.log(curPos);

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
      text: seg.innerText === "\n" ? "" : seg.innerText,
      row: curRow + 1,
      col: idx,
    })); // ISegment 형식으로 변경

  console.log(
    "커서 뒤 텍스트",
    textAfterCaret.length === 0,
    "커서 뒤 세그먼트",
    segmentsAfterCaret
  );

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

    console.log(newLines);

    // 현재 줄 이후의 줄들의 row변경
    const updatedLines = newLines.map((line) => {
      if (line.row > curRow) {
        const newSegments = [...line.segments];

        console.log("이동해야하는 segments", newSegments);

        const updatedSegments = newSegments.map((seg) => ({
          ...seg,
          row: seg.row + 1,
        }));
        return {
          row: line.row + 1, // 현재 row보다 하나 크게 만듦
          segments: updatedSegments,
        };
      } else return line;
    });

    console.log("업데이트된 라인들", updatedLines);

    // 새 줄에 현재 줄의 세그먼트 추가
    const nextRow = curRow + 1;
    updatedLines.splice(nextRow, 0, {
      row: nextRow,
      segments: [...segmentsToMove],
    });

    return updatedLines;
  });

  // 커서 위치 지정
  setTimeout(() => {
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
  }, 4);
};

export default createNewLine;
