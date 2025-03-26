import { isInlineSegment, isLine, isSegment } from "./elementChecker";

const setCaretPosition = (node: Node, offset: number) => {
  const selection = window.getSelection();
  if (!selection) return;

  const range = document.createRange();

  let caretNode;

  if (isLine(node)) {
    console.log("노드가 라인인 경우");
    const firstChild = node.firstChild!;

    let segment: ChildNode;

    if (isInlineSegment(firstChild)) {
      segment = firstChild.firstChild!;
    } else {
      segment = firstChild;
    }

    const textSpan = segment.firstChild!;

    let textNode;
    if (textSpan.nodeName === "BR") {
      textNode = textSpan;
    } else {
      textNode = textSpan.firstChild!;
    }

    caretNode = textNode;
  } else if (isSegment(node)) {
    console.log("노드가 세그먼트인 경우");

    const textSpan = node.firstChild!;

    let textNode: ChildNode;
    if (textSpan.nodeName === "BR") {
      textNode = textSpan;
    } else {
      textNode = textSpan.firstChild!;
    }

    caretNode = textNode;
  } else if (isInlineSegment(node)) {
    console.log("노드가 인라인 세그먼트인 경우");
    const segment = node.firstChild!;

    const textSpan = segment.firstChild!;

    let textNode;
    if (textSpan.nodeName === "BR") {
      textNode = textSpan;
    } else {
      textNode = textSpan.firstChild!;
    }

    caretNode = textNode;
  } else {
    caretNode = node;
  }

  range.setStart(caretNode, offset);
  range.collapse(true);

  selection.removeAllRanges();
  selection.addRange(range);
};

export default setCaretPosition;
