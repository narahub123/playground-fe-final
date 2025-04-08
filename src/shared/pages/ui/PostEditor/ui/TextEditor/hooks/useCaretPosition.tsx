import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectCaretPosition,
  selectInnerHtml,
} from "../../../models/selectors";

interface useCaretPositionProps {
  textEditorRef: React.RefObject<HTMLDivElement>;
}

const useCaretPosition = ({ textEditorRef }: useCaretPositionProps) => {
  const caretPosition = useSelector(selectCaretPosition);
  const innertHtml = useSelector(selectInnerHtml);
  useEffect(() => {
    if (!textEditorRef.current) return;
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
    console.log(
      "----------------- useCaretPosition 시작 -----------------------"
    );

    const textEditor = textEditorRef.current;

    if (innertHtml) {
      textEditor.innerHTML = innertHtml;
    }

    const { caretPos, row, col } = caretPosition;
    console.log(caretPos, row, col);

    // 현재 커서 위치
    let curPos = caretPos;

    // 현재 세그먼트
    let curCol = col;

    const segment = textEditor.children[row].children[col] as HTMLElement;

    let curSegment = segment;
    console.log("현재 세그먼트", curSegment);

    // 세그먼트가 사라진 경우
    if (!curSegment) {
      console.log("현재 세그먼트가 사라진 경우");
      curSegment = textEditor.children[row].children[col - 1] as HTMLElement;

      const prevText = curSegment.textContent || "";

      // 이미 dom에 반영이 되어 있기 때문에 문자열의 길이를 넣어야 함 주의할 것!
      curPos = prevText.length;
    }

    const curText = curSegment.textContent || "";

    // 현재 문자열의 길이가 현재 커서의 위치보다 작은 경우
    // 다음 세그먼트로 이동해야 함
    if (curSegment && curText.length < curPos) {
      console.log("현재 문자열의 길이가 현재 커서의 위치보다 작은 경우");
      // 커서 위치를 다음 세그먼트로 이동
      curCol += 1;

      // 다음 세그먼트
      curSegment = textEditor.children[row].children[col + 1] as HTMLElement;

      // 다음 세그먼트에서의 커서의 위치
      curPos = caretPos - curText.length;
    }

    let textNode: Node;

    // inline 세그먼트
    if (
      curSegment instanceof HTMLSpanElement &&
      curSegment.className.includes("inline")
    ) {
      console.log("인라인 세그먼트인 경우");
      textNode = curSegment.firstChild!.firstChild!.firstChild!;
    } else {
      console.log("일반 세그먼트인 경우");
      // plain 세그먼트
      if (curSegment.firstChild && curSegment.firstChild.nodeName === "BR") {
        textNode = curSegment;
      } else {
        textNode = curSegment.firstChild!.firstChild!;
      }
    }

    console.log("텍스트 노드", textNode);

    const range = document.createRange();
    range.setStart(textNode, curPos);
    range.collapse(true);

    selection.removeAllRanges();
    selection.addRange(range);

    console.log(
      "----------------- useCaretPosition 종료 -----------------------"
    );
  }, [caretPosition]);
};

export default useCaretPosition;
