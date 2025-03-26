import { useEffect } from "react";
import {
  processInlineElements,
  createLine,
  createSegment,
  createTextSpan,
  isSegment,
  isTextSpan,
  setCaretPosition,
  useCaretInfo,
} from "@shared/pages/ui/PostEditor/ui/TextEditor";

const useMaintainTextEditorStructure = () => {
  const caretInfo = useCaretInfo();

  useEffect(() => {
    if (!caretInfo) return;

    const { curNode, curSegment, curText } = caretInfo;

    // 현재 노드가 text__editor인 경우
    if (
      curNode.nodeType === 1 &&
      (curNode as HTMLElement).className.includes("text__editor")
    ) {
      const line = createLine({ text: "", row: 0, col: 0 });
      // 라인 추가
      curNode.appendChild(line);

      // 커서 설정
      setCaretPosition(line, 0);
    } else if (
      // 현재 노드가 line인 경우
      curNode.nodeType === 1 &&
      (curNode as HTMLElement).className.includes("line")
    ) {
      // 현재 노드의 첫 요소 BR인 경우 삭제
      if (curNode.firstChild?.nodeName === "BR") curNode.firstChild.remove();

      const segment = createSegment({ text: "", row: 0, col: 0 });

      // 현재 노드에 segment 추가
      curNode.appendChild(segment);

      setCaretPosition(segment, 0);
    } else if (curNode.nodeType === 3) {
      // 현재 노드가 텍스트 노드인 경우

      // 현재 노드의 부모 요소
      const wrapperElem = curNode.parentElement!;

      // 현재 노드의 부모 요소가 segment인 경우 : 즉 textSpan이 없는 경우
      if (wrapperElem.className.includes("segment")) {
        console.log("textSpan이 없는 경우");

        curSegment.textContent = "";
        const textSpan = createTextSpan(curText);

        curSegment.appendChild(textSpan);

        setCaretPosition(textSpan, curText.length);
      } else if (isTextSpan(wrapperElem)) {
        // 현재 노드가 textSpan 안에 있는 경우
        console.log("현재 노드가 textSpan 안에 있는 경우");

        if (isSegment(curSegment)) {
          console.log("현재 세그먼트가 inline이 아닌 경우");
          processInlineElements(caretInfo);
        }
      }
    }
  }, [caretInfo]);
};

export default useMaintainTextEditorStructure;
