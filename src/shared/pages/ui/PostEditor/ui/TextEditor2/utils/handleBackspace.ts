import React from "react";
import {
  createSegment,
  detectInlineType,
  ICaretInfo,
  isInlineSegment,
  isSegment,
  setCaretPosition,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";
import rearrangeOffset from "./rearrangeOffset";

const handleBackspace = (
  e: React.KeyboardEvent<HTMLDivElement>,
  caretInfo: ICaretInfo | undefined
) => {
  if (!caretInfo) return;
  const {
    curPos,
    curSegment,
    curText,
    curSegmentOffset,
    nextSegments,
    prevSegment,
    curLine,
  } = caretInfo;
  const { row, col } = curSegmentOffset;

  const inlineSegment = curSegment.parentNode!;

  // inline 세그먼트이고 현재 커서가 offset === 1인 경우
  if (curPos === 1 && isInlineSegment(inlineSegment)) {
    console.log("inline 세그먼트이고 현재 커서가 offset === 1인 경우");
    const deletedText = curText.slice(1);
    console.log("첫 문자를 삭제하고 남은 텍스트", deletedText);

    // 남은 텍스트가 인라인 조건을 충족하는 지 확인
    const inilneType = detectInlineType(deletedText);

    // 인라인 조건을 충족하지 않는 경우
    if (!inilneType) {
      e.preventDefault();
      console.log("남은 텍스트가 인라인 조건을 충족하지 않는 경우");

      // 병합할 텍스트
      let combinedText: string = deletedText;

      const nextSegment = nextSegments[0];

      // 현재 세그먼트의 curLine안에서의 위치
      let newCol = 0;

      // 커서 위치 조정
      let caretPos = 0;
      let caretNode: Node = inlineSegment;

      // 다음 세그먼트가 존재하고 세그먼트인 경우
      if (nextSegments.length > 0 && isSegment(nextSegment)) {
        // 다음 텍스트
        const nextText = nextSegment.textContent || "";

        // 남은 텍스트 뒤에 다음 텍스트 추가
        combinedText += nextText;

        // 다음 세그먼트 삭제
        (nextSegment as HTMLElement).remove();

        // 다음 세그먼트 조정
        nextSegments.splice(0, 1);

        // 세그먼트의 위치
        newCol = col;

        // 커서 위치
        caretPos = 0;
        caretNode = inlineSegment;
      }

      // 이전 세그먼트가 존재하고 세그먼트인 경우
      if (prevSegment && isSegment(prevSegment)) {
        const prevText = prevSegment.textContent || "";

        // 이전 텍스트에 합성 텍스트 추가
        const newText = prevText + combinedText;

        // 병합한 텍스트를 이전 세그먼트에 추가
        prevSegment.firstChild!.textContent = newText;

        // 현재 세그먼트 삭제
        (inlineSegment as HTMLElement).remove();

        // 세그먼트의 위치
        newCol = col - 1;

        // 커서의 위치 : 이전 세그먼트의 마지막으로 이동
        caretPos = prevText.length;
        caretNode = prevSegment;
      } else {
        // 이전 세그먼트가 존재하지 않거나 이전 세그먼트가 세그먼트가 아닌 경우
        // 새로운 세그먼트 생성
        const newSegment = createSegment({ text: combinedText, row, col });

        // 기존 인라인을 세그먼트로 대체
        curLine.replaceChild(newSegment, inlineSegment);

        // 현재 세그먼트의 위치
        newCol = col; // 현재 위치 유지

        // 커서의 위치: 새로운 세그먼트의 0에 유치하게 됨
        caretPos = 0; // 0
        caretNode = newSegment;
      }

      // 세그먼트 조정
      rearrangeOffset(nextSegments, row, newCol + 1);

      // 커서 위치 조정
      setCaretPosition(caretNode, caretPos);
    }
    // 인라인 조건을 충족하는 경우
    else {
      console.log("남은 텍스트가 인라인 조건을 충족하는 경우");
      // 아직은 추가 조작 없음
      // 기존 인라인 타입과 변형된 인라인 타입이 동일한 지 비교 필요? :필요 없을 것 같음
    }
  }
};

export default handleBackspace;
