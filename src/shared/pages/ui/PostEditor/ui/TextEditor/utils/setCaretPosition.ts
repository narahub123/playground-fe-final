const setCaretPosition = (node: Node, offset: number) => {
  const selection = window.getSelection();
  if (!selection) return;

  const range = document.createRange();

  let caretNode;

  if ((node as HTMLElement).className.includes("line")) {
    const segment = node.firstChild;

    if (!segment) return;

    const textNode = segment?.firstChild;
    if (!textNode) return;

    caretNode = textNode;
  } else if ((node as HTMLElement).className.includes("segment")) {
    console.log("여기");
    const textNode = node.firstChild;

    console.log("텍스트", textNode);

    if (!textNode) return;

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
