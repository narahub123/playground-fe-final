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

  // 커서 위치 정보 가져오기
  const { caretPos, row: curRow, col: curCol } = getCaretPosition();
  console.log("커서 위치 정보", caretPos, curRow, curCol);

  let newCaretPos = caretPos;
  let newCol = curCol;

  // 복사 붙여넣기가 이루어지는 요소
  const textEditor = e.currentTarget;

  // lines 생성
  const lines = getLines(textEditor);

  const htmlLines: string[] = [];
  for (let row = 0; row < lines.length; row++) {
    const line = lines[row];

    let segments = getSegments(line);

    // 현재 row와 같은 경운
    if (row === curRow) {
      // 붙여 넣기가 이루어질 세그먼트
      const curSegment = textEditor.children[curRow].children[
        curCol
      ] as HTMLElement;
      console.log("붙여넣기 세그먼트", curSegment);

      // 세그먼트 안의 텍스트 가져오기
      const curText = curSegment.textContent || "";
      console.log("붙여넣기를 할 세그먼트 안의 텍스트", curText);

      // 커서 위치를 기준으로 현재 텍스트 분리하기
      const textBefore = curText.slice(0, caretPos);
      const textAfter = curText.slice(caretPos);

      // 세그먼트 안에 들어갈 새로운 텍스트 생성하기
      const newText = textBefore.concat(pastedText).concat(textAfter);
      console.log("새로운 텍스트", newText);

      const newSegments = getSegments(newText);
      console.log("새로운 세그먼트들", newSegments);

      // 새로 생성된 세그먼트의 마지막 세그먼트
      const lastSegment = newSegments[newSegments.length - 1];

      newCaretPos =
        newSegments.length === 1
          ? newCaretPos + pastedText.length
          : lastSegment.text.length - textAfter.length;
      newCol += newSegments.length - 1;

      segments.splice(curCol, 1, ...newSegments);
    }
    console.log("세그먼트 텍스트들", segments);

    // 생성된 세그먼트 합치기
    const joinedSegments = segments.map((segment) => segment.text).join("");

    // 세그먼트 새로 생성하기
    const newSegments = getSegments(joinedSegments);

    // 세그먼트들을 html로 변경하기
    const htmlSegments = convertToHtmlSegments(newSegments, row);

    console.log("세그먼트 html", htmlSegments);

    const htmlLine = convertToHtmlLine(htmlSegments, row);

    htmlLines.push(htmlLine);

    setCaretPosition({ caretPos: newCaretPos, row, col: newCol });
  }

  textEditor.innerHTML = `${htmlLines.join("")}`;

  console.log("--------------- handlePaste 종료 ---------------");
};

export default handlePaste;
