import { HASHTAG_REGEX } from "../constants";
import { ICaretInfo, InlineType } from "../types";
import { createInlineSegment, createSegment } from "./createElement";
import { isInlineSegment, isSegment } from "./elementChecker";
import rearrangeOffset from "./rearrangeOffset";
import setCaretPosition from "./setCaretPosition";

// 텍스트에서 inline을 제외한 텍스트 분리하기
const extractTextArr = (text: string, inlines: string[]): string[] => {
  const results: string[] = [];
  let currentIndex = 0;

  for (const inline of inlines) {
    const index = text.indexOf(inline, currentIndex);

    if (index !== -1) {
      results.push(text.slice(currentIndex, index));

      currentIndex = index + inline.length;
    }
  }

  if (currentIndex < text.length) {
    results.push(text.slice(currentIndex));
  }

  return results;
};

const insertNewSegment = (
  newNode: Node,
  parent: Node,
  nextNode: Node | null
) => {
  if (nextNode) {
    parent.insertBefore(newNode, nextNode);
  } else {
    parent.appendChild(newNode);
  }
};

const insertNewSegments = (inlines: string[], caretInfo: ICaretInfo) => {
  const { curLine, curSegmentOffset, curSegment, curPos, curText } = caretInfo;
  const { row, col } = curSegmentOffset;

  const textArr = extractTextArr(curText, inlines);

  let sumOfLength = 0;
  let cursorPos = 0;
  let caretCol = 0;

  const nextSegments = Array.from(curLine.childNodes).filter(
    (_, idx) => col < idx
  );

  const nextSegment = nextSegments[0];

  for (let i = 0; i < textArr.length; i++) {
    const text = textArr[i];
    const inline = inlines[i];

    const textLength = text.length;
    const inlineLength = inline?.length || 0;

    // 첫 문자열

    // 그 외
    // 세그먼트 생성
    const newCol = col + 2 * i;
    const segment = createSegment({ text, row, col: newCol });

    // text가 배열의 첫문자열인 경우
    if (i === 0) {
      // text가 빈문자열인 경우 : 현재 세그먼트 삭제
      if (!text) {
        (curSegment as HTMLElement).remove();
      } else {
        // text가 빈문자열이 아닌 경우 : 현재 세그먼트에 text 삽입
        curSegment.firstChild!.textContent = text;
      }
    } else if (i === textArr.length - 1) {
      // text가 배열의 마지막인 경우
      if (text) {
        // 문자열이 있는 경우에만 삽입
        insertNewSegment(segment, curLine, nextSegment);
      }
    } else {
      insertNewSegment(segment, curLine, nextSegment);
    }

    // 인라인 세그먼트 생성
    const inilneSegment = createInlineSegment({
      text: inline,
      row,
      col: newCol + 1,
    });

    // 인라인 문자열이 있는 경우에만 삽입
    if (inline) {
      insertNewSegment(inilneSegment, curLine, nextSegment);
    }

    console.log("현재 위치", curPos);
    if (curPos <= sumOfLength + textLength + inlineLength) {
      cursorPos = curPos - sumOfLength - textLength; // -1이 나오는 오류
      caretCol = newCol + 1;
    } else {
      sumOfLength += textLength + inlineLength;
    }
  }

  if (nextSegments.length > 0) {
    const newCol = col + textArr.length + inlines.length;
    rearrangeOffset(nextSegments, row, newCol);
  }

  return { cursorPos, caretCol };
};

const detectInlineType = (text: string): InlineType => {
  return new RegExp(HASHTAG_REGEX).test(text) ? "hashtag" : null;
};

const extractInlineMatches = (
  text: string,
  inlineType: InlineType
): RegExpMatchArray | null => {
  const regExp = inlineType === "hashtag" ? HASHTAG_REGEX : null;

  return regExp ? text.match(regExp) : null;
};

const processInlineElements = (caretInfo: ICaretInfo) => {
  const { curLine, curText } = caretInfo;

  const inlineType = detectInlineType(curText);
  if (!inlineType) return;

  const inlines = extractInlineMatches(curText, inlineType);

  if (!inlines) {
    console.log("인라인이 존재하지 않음");
    return;
  }

  console.log("인라인 배열", inlines);

  const { cursorPos, caretCol } = insertNewSegments(inlines, caretInfo);

  const caretNode = curLine.childNodes[caretCol];

  console.log("cursorPos", cursorPos);

  // 커서 위치 지정하기
  setCaretPosition(caretNode, cursorPos);

  if (inlineType === "hashtag") {
    console.log("해시 태그인 경우");
  }
};

const handleInlineSegment = (caretInfo: ICaretInfo) => {
  const { curText, curSegment, curSegmentOffset, curPos, curLine } = caretInfo;
  const { row, col } = curSegmentOffset;

  const inlineType = detectInlineType(curText);
  console.log("인라인 타입", inlineType);
  const inlineSegment: Node = curSegment.parentNode!;

  const prevSegment = inlineSegment.previousSibling;
  const nextSegments = Array.from(curLine.childNodes).filter(
    (_, index) => index > col
  );

  const nextSegment = nextSegments[0];

  const inlines = extractInlineMatches(curText, inlineType);
  if (!inlines) {
    // 인라인 배열이 없는 경우 : 인라인을 세그먼트로 변경
    console.log("인라인 배열이 없는 경우");

    let combintedText: string = curText;
    let caretPos = 0;
    let caretNode = inlineSegment;

    let newCol = col;
    // 1) 다음 세그먼트가 있는지 확인
    // 다음 세그먼트가 있고 세그먼트인 경우
    if (nextSegment && isSegment(nextSegment)) {
      console.log("다음 세그먼트가 있고 세그먼트인 경우");
      const nextText = nextSegment.textContent || "";

      // 다음 텍스트를 현재 텍스트에 병합
      combintedText += nextText;

      // 다음 세그먼트 삭제
      nextSegment.remove();

      // 다음 형제 세그먼트는 현재 세그먼트보다 하나 큰 숫자부터 시작해야 함
      newCol += 1;

      // nextSegments도 수정
      nextSegments.splice(0, 1);

      // 커서 위치 및 커서 노드
      caretPos = curPos; // 현재 위치 유지
      caretNode = inlineSegment; // 현재 노드 유지
    }

    // 이전 세그먼트가 있고 세그먼트인 경우
    if (prevSegment && isSegment(prevSegment)) {
      console.log("이전 세그먼트가 있고 세그먼트인 경우");

      const prevText = prevSegment.textContent || "";

      // 이전 텍스트와 현재 텍스트 병합
      const newText = prevText + combintedText;

      // 종합 텍스트를 이전 세그먼트에 삽입
      prevSegment.firstChild!.textContent = newText;

      // 현재 세그먼트 삭제
      (inlineSegment as HTMLElement).remove();

      // 다음 형제 세그먼트는 현재 세그먼트가 삭제된 것을 반영해서 -1 작은 숫자로 시작함
      newCol -= 1;

      // 커서 위치 및 노드
      // 이전 텍스트에서 현재 텍스트를 합한 값
      caretPos = prevText.length + curPos;
      // 이전 세그먼트로 이동
      caretNode = prevSegment;
    } else {
      // 이전 세그먼트가 없거나 이전 세그먼트가 세그먼트가 아닌 경우
      // 합친 텍스트를 현재 세그먼트에 삽입
      const segment = createSegment({ text: combintedText, row, col });

      // 현재 세그먼트를 인라인에서 세그먼트로 변경
      curLine.replaceChild(segment, inlineSegment);

      // 변경된 것이 없으므로 형제 세그먼트는 현재의 번호를 유지
      // 현재 세그먼트: 세그먼트로 변경된 세그먼트여야 함, 현재 위치 유지
      caretPos = curPos;
      caretNode = segment;
    }

    // 커서 위치 수정
    setCaretPosition(caretNode, caretPos);

    // 다음 세그먼트 col 수정
    rearrangeOffset(nextSegments, row, newCol);

    return;
  }

  console.log("인라인 배열", inlines);

  const textArr = extractTextArr(curText, inlines);
  textArr.splice(0, 1); // 해시태그 이전 텍스트 삭제
  console.log("인라인이 아닌 텍스트 배열", textArr);

  //인라인이 아닌 텍스트가 존재하는 경우
  if (textArr.length > 0) {
    let sumOfTextLength = inlines[0].length;
    let cursorPos = 0;
    let caretCol = col;

    curSegment.firstChild!.textContent = inlines[0];

    console.log("현재 요소 이후의 형제 요소들", nextSegments);

    for (let i = 0; i < textArr.length; i++) {
      const text = textArr[i];
      const newCol = col + i + 1;

      const segment = createSegment({ text, row, col: newCol });

      // 다음 세그먼트가 있는 경우
      if (nextSegment) {
        // 다음 요소가 inlineSegment인 경우
        if (isInlineSegment(nextSegment)) {
          curLine.insertBefore(segment, nextSegment);
        } else {
          // 다음 요소가 세그먼트인 경우
          const nextText = nextSegment.textContent || "";
          const combinedText = text + nextText;

          nextSegment.firstChild!.textContent = combinedText;
        }

        rearrangeOffset(nextSegments, row, newCol);
      } else {
        curLine.appendChild(segment);
      }

      if (curPos <= sumOfTextLength + textArr[i].length) {
        cursorPos = curPos - sumOfTextLength;
        caretCol = newCol;
      } else {
        sumOfTextLength += textArr[i].length;
      }
    }

    console.log(cursorPos);
    console.log(caretCol);

    console.log(curLine);

    const caretNode = curLine.childNodes[caretCol];
    console.log("커서가 놓일 세그먼트", caretNode);

    setCaretPosition(caretNode, cursorPos);
  }
};

export { processInlineElements, handleInlineSegment };
