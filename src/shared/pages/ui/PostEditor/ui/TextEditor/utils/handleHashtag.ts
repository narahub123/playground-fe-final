import { HASHTAGREGEX } from "../../../constants";
import { createInlineItem, createItem } from "./createElement";

const handleHashtag = () => {
  const selection = window.getSelection();
  if (!selection) return;
  const curNode = selection.focusNode;
  if (!curNode) return;
  console.log("현재 노드", curNode);
  const curText = curNode.textContent || "";
  console.log("현재 텍스트", curText);
  const curItem =
    curNode.nodeType === 3 ? curNode.parentElement : (curNode as HTMLElement);
  if (!curItem) return;
  console.log("현재 아이템", curItem);
  const offset = curItem.dataset["offset"];
  if (!offset) return;
  const [row, col] = offset?.split("-").map(Number);
  console.log("행", row, "열", col);

  const nextItem = curItem.nextElementSibling;
  console.log("다음 아이템", nextItem);

  const curParent = curItem.parentElement;
  if (!curParent) return;
  console.log("현재 부모", curParent);

  const curLine =
    curParent.nodeName === "DIV" ? curParent : curParent.parentElement;
  if (!curLine) return;
  console.log("현재 줄", curLine);

  // 현재 텍스테에 해시태그가 있는지 확인
  const hashtag = curText.match(HASHTAGREGEX);
  console.log(hashtag);

  // 해시 태그가 존재하는 경우
  if (hashtag) {
    if (curParent.nodeName === "DIV") {
      // 문자열 분리하기
      // 첫번째 해시 태그의 인덱스
      const hashtagIndex = curText.indexOf(hashtag[0]);
      const hashtagEndIndex = hashtagIndex + hashtag[0].length;
      console.log(hashtagIndex);

      const hashtagBefore = curText.slice(0, hashtagIndex);
      console.log("해시태그 이전 텍스트", `"${hashtagBefore}"`);

      const hashtagAfter = curText.slice(hashtagEndIndex);
      console.log("해시태그 이후 텍스트", `"${hashtagAfter}"`);

      // 현재 아이템에 해시태그 이전 텍스트 삽입
      if (hashtagBefore) curItem.innerHTML = hashtagBefore;
      else curItem.remove();

      // 해시태그 span 생성
      const newInlineItem = createInlineItem(row, col + 1, hashtag[0]);
      console.log("해시태그 span", newInlineItem);

      // 해시태그 span 삽입
      // 다음 아아템이 있는 경우
      if (nextItem) {
        curLine.insertBefore(newInlineItem, nextItem);
        // 다음 아아템이 없는 경우
      } else {
        curLine.appendChild(newInlineItem);
      }

      // 커서 위치 지정
      const range = document.createRange();

      const firstChild = newInlineItem.firstChild?.firstChild;

      if (firstChild) {
        range.setStart(firstChild, hashtag[0].length);
        range.setEnd(firstChild, hashtag[0].length);
      } else {
        range.setStart(newInlineItem, hashtag[0].length);
        range.setEnd(newInlineItem, hashtag[0].length);
      }

      selection.removeAllRanges();
      selection.addRange(range);
    } else {
      // 문자열 분리하기
      // 첫번째 해시 태그의 인덱스
      const hashtagIndex = curText.indexOf(hashtag[0]);
      const hashtagEndIndex = hashtagIndex + hashtag[0].length;
      console.log(hashtagIndex);

      const hashtagBefore = curText.slice(0, hashtagIndex);
      console.log("해시태그 이전 텍스트", `"${hashtagBefore}"`);

      const hashtagAfter = curText.slice(hashtagEndIndex);
      console.log("해시태그 이후 텍스트", `"${hashtagAfter}"`);

      if (!hashtagAfter) return;
      console.log("여기 옴?");

      curItem.innerHTML = hashtag[0];

      const hashtagAfterItem = createItem(row, col + 1, hashtagAfter);
      console.log(hashtagAfterItem);

      const nextItem = curParent.nextElementSibling;

      if (nextItem) {
        curLine.insertBefore(hashtagAfterItem, nextItem);
      } else {
        curLine.appendChild(hashtagAfterItem);
      }

      const range = document.createRange();

      const firstChild = hashtagAfterItem.firstChild;
      if (!firstChild) return;
      range.setStart(firstChild, hashtagAfter.length);
      range.setEnd(firstChild, hashtagAfter.length);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
  // 현재 부모가 span이고 hashtag가 존재하지 않는 경우
  if (curParent.nodeName === "SPAN" && !hashtag) {
    // 현재 아이템을 현재 부모 앞에 추가
    curLine.insertBefore(curItem, curParent);
    // 현재 아이템 삭제
    curParent.remove();
  }
};

export default handleHashtag;
