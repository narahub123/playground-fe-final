import { useEffect, useState } from "react";

interface useFocusTrapProps {
  containerRef: React.RefObject<HTMLElement>; // 감싸는 요소
  finalFocusRef?: React.RefObject<HTMLElement>; // 마지막에 클릭했던 요소
  isOn?: boolean; // 포커스 트랩 사용 여부
  firstFocus?: number; // 첫번째 포커스 요소의 인덱스
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
  firstFocus = 0,
}: useFocusTrapProps) => {
  const [focusableElems, setFocusableElems] = useState<Element[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const focusableElems = getFocusableElems(container);

    setFocusableElems(focusableElems);

    // MutationObserver 추가 (disabled 속성 변화 감지)
    const observer = new MutationObserver(() => {
      const updatedFocusableElems = getFocusableElems(container);
      if (updatedFocusableElems.length === 0) return;

      setFocusableElems((prevFocusableElems) => {
        if (prevFocusableElems === updatedFocusableElems) {
          return prevFocusableElems;
        }

        return updatedFocusableElems;
      });
    });

    observer.observe(container, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["disabled"],
    });

    return () => {
      observer.disconnect();
    };
  }, [containerRef.current]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (focusableElems.length === 0) return;
    console.log("포커스 가능한 요소들", focusableElems);

    const firstElem = focusableElems[0] as HTMLElement;
    console.log("첫 요소", firstElem);

    const lastElem = focusableElems[focusableElems.length - 1] as HTMLElement;
    console.log("마지막 요소", lastElem);

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
      } else if (e.key === "Enter" && finalFocusRef) {
        finalFocusRef.current?.focus();
      } // enter 키를 누르면 포커스가 모달창 이전으로 돌아감
    };

    // 현재 포커스 요소가 focusableElem에 포함되어 있다면 포커스 유지 아니면 첫번째 포커스 요소로 이동
    if (focusableElems.includes(document.activeElement as HTMLElement)) {
      (document.activeElement as HTMLElement).focus();
    } else if (focusableElems[firstFocus] as HTMLElement) {
      // 첫번째 포커스 요소 설정하기
      (focusableElems[firstFocus] as HTMLElement).focus();
    } else {
      firstElem.focus();
    }

    // 키보드 이벤트 리스너 추가
    container.addEventListener("keydown", handleKeyDown);

    return () => {
      // 클린업: 이벤트 리스너 제거
      container.removeEventListener("keydown", handleKeyDown);
    };
  }, [focusableElems]);

  if (!isOn) return;
  return;
};

export default useFocusTrap;
