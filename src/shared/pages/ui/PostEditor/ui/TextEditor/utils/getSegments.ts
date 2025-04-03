import {
  getInlineTexts,
  ISegment,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";

const getSegments = (line: string): ISegment[] => {
  console.log("----------------- getSegments 시작 -----------------------");

  const segments: ISegment[] = [];

  // 검색을 시작할 위치
  let curIndex = 0;

  // 인라인 텍스트 배열
  const inlines = getInlineTexts(line);

  for (const inline of inlines) {
    const index = line.indexOf(inline, curIndex);

    // inline이 있는 경우
    if (index !== -1) {
      // index가 0이 아닌 경우: 0인 경우에는 인라인으로 시작한다는 말임
      if (index !== 0) {
        // 일반 세그먼트 추가
        segments.push({ type: "plain", text: line.slice(curIndex, index) });
      }

      // 인라인 세그먼트 추가
      segments.push({
        type: "inline",
        text: inline,
      });
    }

    // 검색 위치 변경
    curIndex = index + inline.length;
  }

  // 인라인 이후에도 문자열이 있는 경우
  if (curIndex < line.length) {
    // 인라인 이후의 일반 세그먼트 추가
    segments.push({
      type: "plain",
      text: line.slice(curIndex),
    });
  }

  // 라인이 없는 경우
  if (!line) {
    // 인라인 이후의 일반 세그먼트 추가
    segments.push({
      type: "plain",
      text: "",
    });
  }

  console.log("----------------- getSegments 종료 -----------------------");
  return segments;
};

export default getSegments;
