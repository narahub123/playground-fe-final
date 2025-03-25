import { createLine, setCaretPosition } from "../utils";
import { ICaretInfo } from "../types";

const useNewLine = () => {
  const createNewLine = (caretInfo?: ICaretInfo) => {
    if (!caretInfo) return;
    console.log("여깁니다.");
    const { curLine, nextLine, textEditor, curPos, curText, curSegment } =
      caretInfo;

    const [row, col] = (curSegment as HTMLDivElement).dataset["offset"]
      ?.split("-")
      .map(Number) || [0, 0];

    console.log("라인 row", row);

    console.log("커서 현재 위치", curPos);
    console.log("현재 텍스트의 길이", curText.length);

    const remainedText = curText.slice(0, curPos);
    const movedText = curText.slice(curPos);

    console.log("남을 텍스트", remainedText);
    console.log("이동할 텍스트", movedText);

    const nextSegments = Array.from(curLine.childNodes).slice(col + 1);

    console.log("커서 이후 요소들", nextSegments);

    // 남는 텍스트를 현재 요소에 삽입
    if (remainedText) {
      curSegment.textContent = remainedText;
    } else {
      const [row, col] = (curSegment as HTMLElement).dataset["offset"]
        ?.split("-")
        .map(Number) || [0, 0];

      // 현재 세그먼트 이전 세그먼트가 있는 경우: 현재 세그먼트 삭제
      if (col > 0) {
        (curSegment as HTMLElement).remove();
      } else {
        // 현재 세그먼트 이전 세그먼트가 없는 경우: br 추가
        (curSegment as HTMLElement).innerHTML = `<br data-text={true} />`;
      }
    }

    // 삽입될 새 줄
    const newLine = createLine({
      text: movedText,
      row: row + 1,
      col: 0,
      siblings: nextSegments,
    });

    if (!nextLine) {
      console.log("다음 줄 없음");
      textEditor.appendChild(newLine as Node);
    } else {
      console.log("다음 줄 있음");
      textEditor.insertBefore(newLine, nextLine);

      console.log("추가 후 텍스트 에디터", textEditor);
      const nextLines = Array.from(textEditor.childNodes).filter(
        (_, index) => index > row + 1
      );
      console.log("추가 후 텍스트 에디터의 추가 후 라인들", nextLines);

      nextLines.forEach((line, index) => {
        const newRow = row + 2 + index;
        (line as HTMLElement).dataset["offset"] = newRow.toString();

        const spans = Array.from(line.childNodes);

        spans.forEach(
          (span, col) =>
            ((span as HTMLElement).dataset["offset"] = `${newRow}-${col}`)
        );

        return line;
      });
    }

    setCaretPosition(newLine, 0);
  };
  return createNewLine;
};

export default useNewLine;
