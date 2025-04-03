import {
  convertToHtmlLine,
  convertToHtmlSegments,
  getCaretPosition,
  getLines,
  getSegments,
  ICaretPosition,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";

const handlePaste = (
  e: React.ClipboardEvent<HTMLDivElement>,
  setCaretPosition: React.Dispatch<React.SetStateAction<ICaretPosition>>
) => {
  console.log("--------------- handlePaste 시작 ---------------");
  e.preventDefault();

  // 붙여 넣기 텍스트
  const pastedText = e.clipboardData.getData("text");
  console.log(pastedText);

  // 줄 바꿈을 기준으로 복붙 텍스트 나누기
  const splitPastedText = pastedText.split("\n");
  console.log("복붙 텍스트 라인", splitPastedText);

  // 첫번째 줄
  const splitFirstLine = splitPastedText[0];
  console.log("복붙 첫번째 라인", splitFirstLine);

  // 나머지 줄
  const splitRestLines = splitPastedText.slice(1);
  console.log("복붙 나머지 라인", splitRestLines);

  // 커서 위치 정보 가져오기
  const { caretPos, row: curRow, col: curCol } = getCaretPosition();
  console.log("커서 위치 정보", caretPos, curRow, curCol);

  let newCaretPos = caretPos;
  let newRow = curRow;
  let newCol = curCol;

  // 복사 붙여넣기가 이루어지는 요소
  const textEditor = e.currentTarget;

  // lines 생성
  const lines = getLines(textEditor);

  // 새로운 라인
  const newLines = [...lines];

  // 커서가 위치한 라인
  const curLine = lines[curRow];

  const curSegments = getSegments(curLine);

  // 커서 이전 세그먼트 텍스트
  const segmentsBefore = curSegments
    .slice(0, curCol)
    .map((segment) => segment.text)
    .join("");
  console.log("커서 이전 세그먼트 텍스트", segmentsBefore);

  // 커서 이후 세그먼트 텍스트
  const segmentsAfeter = curSegments
    .slice(curCol + 1)
    .map((segment) => segment.text)
    .join("");
  console.log("커서 이후 세그먼트 텍스트", segmentsAfeter);

  // 커서 세그먼트 텍스트
  const curSegment = curSegments[curCol].text;
  console.log("커서 세그먼트 텍스트", curSegment);

  // 커서 이전 텍스트
  const textBefore = curSegment.slice(0, caretPos);
  console.log("커서 이전 텍스트", textBefore);

  // 커서 이후 텍스트
  const textAfter = curSegment.slice(caretPos);
  console.log("커서 이후 텍스트", textAfter);

  // 새로운 현재 세그먼트 텍스트
  const newCurSegment =
    textBefore + splitFirstLine + (splitRestLines.length > 0 ? "" : textAfter);

  // 새로운 현재 라인
  const newCurLine =
    segmentsBefore +
    newCurSegment +
    (splitRestLines.length > 0 ? "" : segmentsAfeter);

  const newCurSegments = getSegments(newCurLine);

  // 커서 위치 지정
  // 기존 세그먼트의 개수와 새로운 세그먼트의 개수가 같은 경우
  if (curSegments.length === newCurSegments.length) {
    // 현재 커서 위치에서 추가된 텍스트의 길이 추가
    newCaretPos += splitFirstLine.length;

    // 세그먼트와 줄은 유지
  } else {
    // 기존 세그먼트의 개수와 새로운 세그먼트의 개수가 같지 않은 경우
    const modifiedCurSegment = textBefore + splitFirstLine;
    const segments = getSegments(modifiedCurSegment).map((seg) => seg.text);

    const lastSegment = segments[segments.length - 1];

    // 커서 위치
    newCaretPos = lastSegment.length; // 마지막 세그먼트의 길이
    newCol += segments.length - 1; // 마지막 세그먼트의 위치

    // 현재 줄은 유지함
  }

  // 새로운 현재 라인으로 변경하기
  newLines.splice(curRow, 1, newCurLine);

  // 나머지 라인 처리 : 나머지 라인이 존재하는 경우
  if (splitRestLines.length > 0) {
    const lastLine = splitRestLines[splitRestLines.length - 1];
    const segments = getSegments(lastLine).map((segment) => segment.text);
    const lastSegment = segments[segments.length - 1];
    const newLastSegment = lastSegment + textAfter + segmentsAfeter;

    // 마지막 세그먼트의 텍스트 변경
    segments.splice(segments.length - 1, 1, newLastSegment);

    const newLastLine = segments.join("");

    // 나머지 라인의 마지막 라인 변경
    splitRestLines.splice(splitRestLines.length - 1, 1, newLastLine);

    // 커서 지정
    newCaretPos = lastSegment.length; // 변경 전 마지막 세그먼트의 길이
    newRow = curRow + splitRestLines.length; // 마지막 라인
    newCol = segments.length - 1; // 변경 전 마지막 세그먼트의 위치
  }

  // 나머지 라인 추가
  newLines.splice(curRow + 1, 0, ...splitRestLines);

  console.log("새로운 줄", newLines);

  const htmlLines: string[] = [];
  for (let row = 0; row < newLines.length; row++) {
    const line = newLines[row];

    let segments = getSegments(line);

    // 세그먼트들을 html로 변경하기
    const htmlSegments = convertToHtmlSegments(segments, row);

    console.log("세그먼트 html", htmlSegments);

    const htmlLine = convertToHtmlLine(htmlSegments, row);

    htmlLines.push(htmlLine);
  }

  console.log(htmlLines);

  textEditor.innerHTML = `${htmlLines.join("")}`;
  const newCaretPosition = { caretPos: newCaretPos, row: newRow, col: newCol };
  console.log("새로운 커서 위치", newCaretPosition);

  setCaretPosition({ caretPos: newCaretPos, row: newRow, col: newCol });

  console.log("--------------- handlePaste 종료 ---------------");
};

export default handlePaste;
