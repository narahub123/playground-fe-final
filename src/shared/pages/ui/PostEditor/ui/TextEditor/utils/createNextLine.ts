import { createItem, createLine } from "./createElement";

const createNextLine = () => {
  const selection = window.getSelection();
  if (!selection) return;

  // 커서가 있는 노드
  const curNode = selection.focusNode;
  if (!curNode) return;

  // 현재 커서 위치
  const cursorPos = selection.focusOffset;

  // 현재 노드의 길이 : 빈 문자열인 경우 0
  const lengthOfCurNode = curNode.nodeValue?.length || 0;

  // 현재 노드의 길이와 현재 커서의 위치 비교
  const isCursorInMiddle = cursorPos !== lengthOfCurNode;

  // 현재 노드의 길이와 현재 커서의 위치가 같지 않은 경우
  // 커서 이전의 텍스트
  const remainedText = isCursorInMiddle
    ? curNode.nodeValue
      ? curNode.nodeValue?.slice(0, cursorPos)
      : null
    : null;

  // 커서 이후의 텍스트
  const extractedText = isCursorInMiddle
    ? curNode.nodeValue
      ? curNode.nodeValue?.slice(cursorPos)
      : null
    : null;

  // 커서가 있는 아이템(span)
  const curItem =
    curNode.nodeType === 3 ? curNode.parentElement : (curNode as HTMLElement);
  if (!curItem) return;
  console.log("현재 아이템", curItem);

  // 커서 이전 텍스트 삽입: 커서의 위치와 현재 노드의 길이가 다른 경우
  if (isCursorInMiddle) {
    // 남은 텍스트가 있는 경우
    if (remainedText) curNode.nodeValue = remainedText;
    else {
      // 남은 텍스트가 없는 경우 br 삽입
      curItem.innerHTML = `<br data-text={true}/>`;
    }
  }

  // 행, 열 알아내기
  const offset = curItem.dataset["offset"];
  const row = Number(offset?.split("-")[0]) || 0;
  const col = Number(offset?.split("-")[1]) || 0;
  console.log("행", row, "열", col);

  // 현재 커서의 위치와 현재 노드의 길이가 다른 경우 새로운 span 생성
  const newSpan = isCursorInMiddle
    ? createItem(row + 1, 0, extractedText)
    : null;

  // 현재 줄
  const curLine = curItem.parentElement;
  if (!curLine) return;

  // 현재 줄의 자식 요소
  const children = Array.prototype.slice.call(curLine.childNodes);

  // 현재 아이템이 현재 줄의 마지막에 존재하는지 확인
  const isCurItemInMiddle = col !== children.length - 1;

  // 현재 아이템 이후 아이템
  const curItemAfter = isCurItemInMiddle
    ? children.filter((_, index) => index > col)
    : [];

  // newSpan이 있다면 추출된 아이템에 추가
  const extractedItems = newSpan ? [newSpan, ...curItemAfter] : curItemAfter;

  // 추출된 아이템의 data-offset 수정
  const updatedExtractItems = extractedItems.map((item, index) => {
    item.dataset["offset"] = `${row + 1}-${index}`;
    return item;
  });

  // 현재 줄의 다음 형제 줄
  const nextLine = curLine.nextElementSibling;

  // 에디터
  const editor = curLine.parentElement;
  if (!editor) return;

  // 새줄 생성하기
  const newLine = createLine(row + 1, 0, updatedExtractItems);

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
  // newLine의 첫 자식 요소
  const firstChild = newLine.firstElementChild;
  if (firstChild) {
    range.setStart(firstChild, 0);
    range.setEnd(firstChild, 0);
  } else {
    range.setStart(newLine, 0);
    range.setEnd(newLine, 0);
  }
  selection.removeAllRanges();
  selection.addRange(range);
};

export default createNextLine;
