import { ICaretInfo } from "@shared/pages/ui/PostEditor/ui/TextEditor";

const handleSelectionChange = (
  setCaretInfo: React.Dispatch<React.SetStateAction<ICaretInfo | undefined>>
) => {
  const selection = window.getSelection();
  if (!selection) return;
  const curNode = selection.focusNode;
  if (!curNode) return;
  console.log("현재 노드", curNode);
  const curElem = curNode.parentNode;
  if (!curElem) return;
  console.log("현재 요소", curElem);

  const caretInfo: ICaretInfo = {
    curNode,
  };

  setCaretInfo(caretInfo);
};

export default handleSelectionChange;
