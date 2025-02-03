import { ReactNode, useLayoutEffect, useRef, useState } from "react";
import styles from "./SelectListbox.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface SelectListboxProps {
  children: ReactNode;
  className?: string;
}

const SelectListbox = ({ children, className }: SelectListboxProps) => {
  const listboxRef = useRef<HTMLDivElement>(null);

  const [rect, setRect] = useState<{
    top?: string;
    bottom?: string;
    height: number;
  }>({
    top: undefined,
    bottom: undefined,
    height: 0,
  });

  useLayoutEffect(() => {
    if (!listboxRef.current) return;

    const listbox = listboxRef.current;

    // 부모 요소
    const parent = listbox.parentElement; // select여야 함

    // 부모 요소가 없거나 select가 아닌 경우 종료
    if (!parent || !parent.className.includes("select")) return;

    const setPosition = () => {
      // 부모 요소의 top, bottom 가져오기
      const { top, bottom } = parent?.getBoundingClientRect();

      // 현재 스크린의 높이
      const screenHeight = window.visualViewport?.height || 0;

      // 현재 스크린의 높이 - 부모요소의 bottom : 부모 요소의 하단부터 화면 하단까지의 거리
      const distance = screenHeight - bottom;

      // top : 부모요소의 top으로 화면 상단부터 부모요소의 상단까지의 거리 : 상단 거리
      // distace: 부모요소의 bottom부터 화면 하단까지의 거리: 하단 거리
      // 상단 거리가 하단 거리보다 긴 경우
      if (top > distance) {
        // 부모 요소의 상단에 위치
        setRect({ top: undefined, bottom: `${bottom - top}px`, height: top });
      } else {
        // 하단 거리가 상단 거리보다 긴 경우
        // 부모 요소의 하단에 위치
        setRect({
          top: `${bottom - top}px`,
          bottom: undefined,
          height: distance - 2, // 하단 거리에서 outline 크기만큼 뺌
        });
      }
    };

    setPosition();

    window.addEventListener("resize", setPosition);

    return () => {
      window.removeEventListener("resize", setPosition);
    };
  }, []);

  const classNames = joinClassNames([styles["select__listbox"], className]);

  return (
    // 스크롤을 listbox의 보더와 맞추기 위한 div
    <div
      className={styles[`select__listbox__container`]}
      ref={listboxRef}
      style={{ height: rect.height, top: rect.top, bottom: rect.bottom }}
      onMouseDown={(e) => e.stopPropagation()}
    >
      <ul className={classNames} style={{ height: rect.height }}>
        {children}
      </ul>
    </div>
  );
};

export default SelectListbox;
