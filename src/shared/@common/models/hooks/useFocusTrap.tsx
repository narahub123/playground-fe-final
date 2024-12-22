import { useEffect } from "react";

interface useFocusTrapProps {
  containerRef: React.RefObject<HTMLElement>; // 감싸는 요소
  finalFocusRef?: React.RefObject<HTMLElement>; // 마지막에 클릭했던 요소
  isOn?: boolean; // 포커스 트랩 사용 여부
}

const getFocusableElems = (container: HTMLElement) => {
  return Array.from(
    container.querySelectorAll(
      'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((el) => !el.hasAttribute("disabled"));
};

const useFocusTrap = ({
  containerRef,
  finalFocusRef,
  isOn = true,
}: useFocusTrapProps) => {
  if (!isOn) return;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const focusableElems = getFocusableElems(container);
    if (focusableElems.length === 0) return;
    console.log("포커스 가능한 요소들", focusableElems);
    const firstElem = focusableElems[0] as HTMLElement;
    console.log("첫 요소", firstElem);

    const lastElem = focusableElems[focusableElems.length - 1] as HTMLElement;
    console.log("마지막 요소", lastElem);

    const moveNextElem = () => {
      const curIndex = focusableElems.findIndex(
        (el) => el === document.activeElement
      );
      // 다음 인덱스
      const nextIndex =
        curIndex + 1 >= focusableElems.length ? 0 : curIndex + 1;
      console.log("다음 인덱스", nextIndex);
      // 다음 요소
      const nextElem = focusableElems[nextIndex] as HTMLElement;
      console.log("다음 요소", nextElem);
      nextElem.focus();
    };

    const movePrevElem = () => {
      const curIndex = focusableElems.findIndex(
        (el) => el === document.activeElement
      );

      // 이전 인덱스
      const prevIndex =
        curIndex - 1 < 0 ? focusableElems.length - 1 : curIndex - 1;
      console.log("이전 인덱스", prevIndex);

      // 이전 요소
      const prevElem = focusableElems[prevIndex] as HTMLElement;
      console.log("이전 요소", prevElem);
      prevElem.focus();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === firstElem) {
          // Shift + Tab -> 마지막 요소로 이동
          e.preventDefault();
          lastElem.focus();
        } else if (!e.shiftKey && document.activeElement === lastElem) {
          // Tab -> 첫 번째 요소로 이동
          e.preventDefault();
          firstElem.focus();
        }
      } else if (e.key === "ArrowLeft" && finalFocusRef) {
        const finalFocus = finalFocusRef.current as HTMLElement;
        finalFocus.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        e.stopPropagation();
        movePrevElem();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        e.stopPropagation();
        moveNextElem();
      } else if (e.key === "Enter" && finalFocusRef) {
        finalFocusRef.current?.focus();
      } // enter 키를 누르면 포커스가 모달창 이전으로 돌아감
    };

    // 키보드 이벤트 리스너 추가
    container.addEventListener("keydown", handleKeyDown);

    return () => {
      // 클린업: 이벤트 리스너 제거
      container.removeEventListener("keydown", handleKeyDown);
    };
  }, [containerRef]);
  return;
};

export default useFocusTrap;
