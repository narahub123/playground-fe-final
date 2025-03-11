import { HASHTAGREGEX } from "../../../constants";
import { createInlineItem, createItem } from "./createElement";

const handleHashtag = () => {
  const selection = window.getSelection();
  if (!selection) return;
  const curNode = selection.focusNode;
  if (!curNode) return;
  console.log("현재 노드", curNode);

  const curPos = selection.focusOffset;
  console.log("현재 커서 위치", curPos);

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
        // newInlineItem과 nextItem의 span 비교
        // nextItem에 className이 없는 경우
        const isSameItem = !nextItem.className;

        // 같은 아이템인 경우
        if (isSameItem) {
          const nextFirstChild = nextItem.firstChild;
          console.log(nextFirstChild);

          if (!nextFirstChild) return;
          const newText = hashtag[0] + nextFirstChild.textContent;
          nextItem.firstChild.textContent = newText;

          // 새로운 텍스트가 hashtag에 적합하지 확인
          const isHashtag = HASHTAGREGEX.test(newText);

          // 해시태그가 아닌 경우
          if (!isHashtag) {
            // inline 아이템을 일반 item으로 변경
            curLine.replaceChild(nextFirstChild, nextItem);
          }

          if (!nextFirstChild.firstChild) return;
          // 커서 위치 지정
          const range = document.createRange();
          range.setStart(nextFirstChild.firstChild, hashtag[0].length);
          range.setEnd(nextFirstChild.firstChild, hashtag[0].length);
          selection.removeAllRanges();
          selection.addRange(range);

          return;

          // 다른 아이템인 경우
        } else {
          curLine.insertBefore(newInlineItem, nextItem);
        }

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

      const nextItem = curParent.nextElementSibling as HTMLElement;

      if (nextItem) {
        // hashtagAfterItem과 nextItem이 동일한 span인지 확인
        // hashtageAfterItem이 item이므로 nextItem도 item인지 확인
        const isSameItem = nextItem.className.includes("text__editor__item");

        // 같은 종류의 아이템인 경우
        if (isSameItem) {
          // hashtagAfter를 nextItem의 textContent에 합침
          nextItem.textContent = hashtagAfter + nextItem.textContent;

          // 커서 위치 지정
          const range = document.createRange();
          const firstChild = nextItem.firstChild;
          if (!firstChild) return;
          range.setStart(firstChild, 1);
          range.setEnd(firstChild, 1);
          selection.removeAllRanges();
          selection.addRange(range);

          return;
          // 다른 종류의 아이템인 경우
        } else {
          // 다음 아이템 이전에 hashtagAfterItem을 삽입
          curLine.insertBefore(hashtagAfterItem, nextItem);

          // 나중에 offset 변경이 필요하게 될 수도 있음: 현재는 불필요
        }
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
    const nextItem = curParent.nextElementSibling;
    const prevItem = curParent.previousElementSibling;
    // 이후 아이템이 있는 경우
    if (nextItem) {
      // 현재 아이템과 이후 아이템을 비교
      const isSameItem = nextItem.className.includes("text__editor__item");

      // 현재 아이템과 이후 아이템이 같은 종류의 아이템인 경우
      if (isSameItem) {
        // 현재 아이템에 이후 아이템의 텍스트 추가
        const nextText = nextItem.textContent || "";

        curItem.innerHTML = curItem.textContent + nextText;

        // 이 후 아이템 삭제
        nextItem.remove();
      }
    }

    // 이전 아이템이 있는 경우
    if (prevItem) {
      // 현재 아이템과 이전 아이템을 비교
      const isSameItem = prevItem.className.includes("text__editor__item");

      // 현재 아이템과 이후 아이템이 같은 종류의 아이템인 경우
      if (isSameItem) {
        // 이전 텍스트
        const prevText = prevItem.textContent || "";

        // 이전 아이템에 현재 아이템의 텍스트 추가
        prevItem.textContent = prevText + curItem.textContent;

        // 현재 부모 삭제
        curParent.remove();

        // 커서 위치 지정
        const range = document.createRange();

        const firstChild = prevItem.firstChild ? prevItem.firstChild : prevItem;

        range.setStart(firstChild, prevText.length + curPos);
        range.setEnd(firstChild, prevText.length + curPos);

        selection.removeAllRanges();
        selection.addRange(range);
        return;
      }
    }

    // 이후 아이템이 없거나 이후 아이템과 현재 아이템이 다른 종류인 경우
    // 현재 아이템이 현재 부모를 대체
    curLine.replaceChild(curItem, curParent);

    // 커서 위치 지정
    const range = document.createRange();

    const firstChild = curItem.firstChild ? curItem.firstChild : curItem;

    range.setStart(firstChild, curPos);
    range.setEnd(firstChild, curPos);

    selection.removeAllRanges();
    selection.addRange(range);
  }
};

export default handleHashtag;
