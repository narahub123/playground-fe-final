import { ICaretPosition } from "../types";
import { convertToHtmlLine, convertToHtmlSegments } from "./convertToHtml";
import getLines from "./getLines";
import getSegments from "./getSegments";

// 새 줄 생성 함수
const handleNewLine = (
  textEditor: HTMLDivElement,
  caretPosition: ICaretPosition,
  setCaretPosition: React.Dispatch<React.SetStateAction<ICaretPosition>>
) => {
  console.log("----------------- handleNewLine 시작 -----------------------");
  const lines = getLines(textEditor);

  const { caretPos, row: curRow, col: curCol } = caretPosition;

  lines.splice(curRow + 1, 0, "");

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

  setCaretPosition(newCaretPosition);

  console.log("----------------- handleNewLine 종료 -----------------------");
};

export default handleNewLine;
