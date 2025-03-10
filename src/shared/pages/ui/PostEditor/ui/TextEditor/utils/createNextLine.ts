import { createLine } from "./createElement";

const createNextLine = () => {
  const selection = window.getSelection();
  if (!selection) return;
  console.log(selection);
  // 커서가 있는 노드
  const curNode = selection.focusNode;
  if (!curNode) return;
  console.log(curNode.nodeType === 3); // 텍스트인 경우 cf) nodeType === 1 element

  // 커서가 있는 아이템(span)
  const curItem =
    curNode.nodeType === 3 ? curNode.parentElement : (curNode as HTMLElement);
  if (!curItem) return;

  // 행, 열 알아내기
  const offset = curItem.dataset["offset"];
  const row = Number(offset?.split("-")[0]);
  const col = Number(offset?.split("-")[1]);
  console.log("행", row, "열", col);

  // 새줄 생성하기
  const newLine = createLine(row + 1, 0);
  console.log(newLine);

  // 현재 줄
  const curLine = curItem.parentElement;
  if (!curLine) return;
  console.log("현재줄", curLine);

  // 현재 줄의 다음 형제 줄
  const nextLine = curLine.nextElementSibling;
  console.log("다음 줄", nextLine);

  // 에디터
  const editor = curLine.parentElement;
  if (!editor) return;
  console.log("에디터", editor);

  // 다음 줄이 존재하는 경우 다음 줄 전에 삽입
  if (nextLine) {
    editor.insertBefore(newLine, nextLine);
    // 다음 줄이 존재하지 않는 경우 마지막에 삽입
  } else {
    // 에디터에 새로운 줄 삽입
    editor.appendChild(newLine);
  }

  // 새로운 줄로 커서 이동
  const range = document.createRange();
  range.setStart(newLine, 0);
  range.setEnd(newLine, 0);
  selection.removeAllRanges();
  selection.addRange(range);
};

export default createNextLine;
