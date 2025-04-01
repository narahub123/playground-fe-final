import { ICaretPosition } from "../types";

const getCaretPosition = (): ICaretPosition => {
  console.log("---------------- getCaretPosition 시작  ----------------");

  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0)
    return { caretPos: 0, row: 0, col: 0 };

  const range = selection.getRangeAt(0);
  let node = range.startContainer;
  console.log(node);

  let caretPos = range.startOffset;
  let caertPoss = selection.focusOffset;
  console.log("caretPos", caretPos);
  console.log(caertPoss);

  if (node.nodeType === Node.TEXT_NODE) {
    console.log("현재 노드", node);
    const parentElem = node.parentElement!;
    console.log("현재 노드의 부모 노드", parentElem);

    // 부모 요소가 세그먼트인 경우
    if (parentElem instanceof HTMLSpanElement && parentElem.dataset.offset) {
      node = parentElem;
    } else {
      // 부모 요소가 세그먼트가 아닌 경우
      node = node.parentElement!.parentElement!; // 세그먼트가 되되록 변경
    }
  }

  console.log("업데이트 된 노드", node);

  // 현재 노드가 세그먼트인 경우
  if (node instanceof HTMLSpanElement && node.dataset.offset) {
    const [row, col] = node.dataset.offset.split("-").map(Number);

    console.log("---------------- getCaretPosition 종료  ----------------");
    return {
      caretPos,
      row,
      col,
    };
  }

  console.log("node", node);
  console.log("caretPos", caretPos);

  console.log("---------------- getCaretPosition 종료  ----------------");
  return { caretPos: 0, row: 0, col: 0 };
};

export default getCaretPosition;
