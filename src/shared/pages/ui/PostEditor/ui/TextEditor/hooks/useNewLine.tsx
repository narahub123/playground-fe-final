import { useAppDispatch } from "@app/store";
import {
  convertToHtmlLine,
  convertToHtmlSegments,
  getCaretPosition,
  getLines,
  getSegments,
  ICaretPosition,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";
import { setCaretPosition } from "../../../models/slices/postEditorSlice";

const useNewLine = () => {
  const dispatch = useAppDispatch();
  const handleNewLine = (textEditor: HTMLDivElement) => {
    console.log("----------------- handleNewLine 시작 -----------------------");
    const lines = getLines(textEditor);

    const { caretPos, row: curRow, col: curCol } = getCaretPosition();

    // 현재 커서 뒤에 텍스트가 있는 경우
    // 현재 줄의 세그먼트 생성
    const curSegments = getSegments(lines[curRow]);

    // 현재 세그먼트 이전 세그먼트들의 텍스트
    const segmentBeforeTexts = curSegments
      .slice(0, curCol)
      .map((s) => s.text)
      .join("");

    // 현재 세그먼트 이후 세그먼트들의 텍스트
    const segmentAfterTexts = curSegments
      .slice(curCol + 1)
      .map((s) => s.text)
      .join("");

    // 현재 세그먼트의 텍스트
    const curSegmentText = curSegments[curCol].text;

    // 커서 이전 텍스트
    const textBefore = curSegmentText.slice(0, caretPos);

    // 커서 이후 텍스트
    const textAfter = curSegmentText.slice(caretPos);

    // 현재 줄에 남을 텍스트
    const remainingText = segmentBeforeTexts + textBefore;

    // 다음 줄로 이동할 텍스트
    const movedText = textAfter + segmentAfterTexts;

    // 현재 줄 대체
    lines.splice(curRow, 1, remainingText);

    // 새줄 추가
    lines.splice(curRow + 1, 0, movedText);

    console.log("새줄을 포함한 lines", lines);

    const htmlLines: string[] = [];
    for (let row = 0; row < lines.length; row++) {
      const line = lines[row];

      const segments = getSegments(line);

      const htmlSegments = convertToHtmlSegments(segments, row);

      const htmlLine = convertToHtmlLine(htmlSegments, row);

      htmlLines.push(htmlLine);
    }

    textEditor.innerHTML = `${htmlLines.join("")}`;

    const newCaretPosition: ICaretPosition = {
      caretPos: 0,
      row: curRow + 1,
      col: 0,
    };

    dispatch(setCaretPosition(newCaretPosition));

    console.log("----------------- handleNewLine 종료 -----------------------");
  };
  return handleNewLine;
};

export default useNewLine;
