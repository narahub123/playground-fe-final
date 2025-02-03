import { ReactNode, useLayoutEffect, useRef, useState } from "react";
import styles from "./SelectListbox.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useSelectContext } from "../../hooks";
import Portal from "../../../Portal/Portal";

interface SelectListboxProps {
  children: ReactNode;
  className?: string;
}

const SelectListbox = ({ children, className }: SelectListboxProps) => {
  const listboxRef = useRef<HTMLDivElement>(null);

  const { field, selectRef } = useSelectContext();

  const [rect, setRect] = useState<{
    top: number;
    left: number;
    height: number;
    width: number;
  }>({
    top: 0,
    left: 0,
    height: 0,
    width: 0,
  });

  useLayoutEffect(() => {
    if (!selectRef.current) return;

    // 부모 요소
    const parent = selectRef.current; // select여야 함

    // 부모 요소가 없거나 select가 아닌 경우 종료
    if (!parent || !parent.className.includes("select")) return;

    const setPosition = () => {
      // 부모 요소의 top, bottom 가져오기
      const { top, bottom, left, width } = parent?.getBoundingClientRect();

      // 현재 스크린의 높이
      const screenHeight = window.visualViewport?.height || 0;

      // 현재 스크린의 높이 - 부모요소의 bottom : 부모 요소의 하단부터 화면 하단까지의 거리
      const distance = screenHeight - bottom;

      // top : 부모요소의 top으로 화면 상단부터 부모요소의 상단까지의 거리 : 상단 거리
      // distace: 부모요소의 bottom부터 화면 하단까지의 거리: 하단 거리
      // 상단 거리가 하단 거리보다 긴 경우
      if (top > distance) {
        // 부모 요소의 상단에 위치
        setRect({
          top: 0, // 화면의 top에서부터 시작
          height: top - 2,
          left,
          width,
        });
      } else {
        // 하단 거리가 상단 거리보다 긴 경우
        // 부모 요소의 하단에 위치
        setRect({
          top: bottom + 2, // 부모의 bottom + 2(2는 outline크기)에서부터 시작
          height: distance - 2, // 하단 거리에서 outline 크기만큼 뺌
          left,
          width,
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
    <Portal id={`select-${field}`}>
      {/* 스크롤을 listbox의 보더와 맞추기 위한 div */}
      <div
        className={styles[`select__listbox__container`]}
        ref={listboxRef}
        style={{
          height: rect.height,
          top: `${rect.top}px`,
          left: `${rect.left}px`,
          width: `${rect.width}px`,
        }}
        onMouseDown={(e) => e.stopPropagation()}
        role="listbox"
      >
        <ul className={classNames} style={{ height: rect.height }}>
          {children}
        </ul>
      </div>
    </Portal>
  );
};

export default SelectListbox;
