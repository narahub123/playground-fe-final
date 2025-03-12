import { createItem, createLine } from "./createElement";

const preserveEditorStructure = () => {
  const selection = window.getSelection();
  if (!selection) return;
  const curNode = selection.focusNode;
  if (!curNode) return;

  const curItem =
    curNode.nodeType === 3 ? curNode.parentElement : (curNode as HTMLElement);
  if (!curItem) return;

  // 현재 아이템이 line인 경우
  if (curItem.nodeName === "DIV" && curItem.dataset["offset"]) {
    const firstChild = curItem.firstChild;
    if (firstChild?.nodeName === "BR") firstChild?.remove();

    const row = Number(curItem.dataset["offset"]);
    const newSpan = createItem(row, 0);
    curItem.appendChild(newSpan)
    // 현재 아이템이 editor인 경우
  } else if (
    curItem.nodeName === "DIV" &&
    curItem.dataset["offset"] === undefined
  ) {
    const newLine = createLine(0, 0);

    curItem.appendChild(newLine);
  }
};

export default preserveEditorStructure;
