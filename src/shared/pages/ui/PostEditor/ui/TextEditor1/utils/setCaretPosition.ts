// 커서 위치 지정 함수
const setCaretPosition = (item: Node, offset: number) => {
  const firstChild = item.firstChild ? item.firstChild : item;

  const selection = window.getSelection();
  const range = document.createRange();
  range.setStart(firstChild, offset);
  range.setEnd(firstChild, offset);
  selection?.removeAllRanges();
  selection?.addRange(range);
};

export default setCaretPosition;
