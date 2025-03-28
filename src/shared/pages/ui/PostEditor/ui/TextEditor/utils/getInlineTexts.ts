import { inlineRegExpArr } from "@shared/pages/ui/PostEditor/ui/TextEditor";

const getInlineTexts = (line: string): string[] => {
  console.log("----------------- getInlineTexts 시작 -----------------------");
  const inlines: {
    text: string;
    index: number;
  }[] = [];

  for (const regExp of inlineRegExpArr) {
    // 인라인 텍스트를 추출해서 inlines 배열에 추가하기
    // 추출할 때 해당 단어의 위치도 같이 저장
    line.match(regExp)?.forEach((inline) => {
      inlines.push({
        text: inline,
        index: line.indexOf(inline),
      });
    });
  }

  // 인덱스를 이용해 순서를 정렬하고 텍스트만 반환함
  const sortedInlines = inlines
    .sort((a, b) => a.index - b.index)
    .map((inline) => inline.text);

  console.log("----------------- getInlineTexts 종료 -----------------------");
  return sortedInlines;
};

export default getInlineTexts;
