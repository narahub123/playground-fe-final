import { ReactNode, useLayoutEffect, useRef, useState } from "react";
import styles from "./SelectListbox.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useSelectContext } from "../../hooks";
import Portal from "../../../Portal/Portal";
import { SELECT_OPTION_HEIGHT } from "@shared/@common/constants";

interface SelectListboxProps {
  children: ReactNode;
  className?: string;
}

const SelectListbox = ({ children, className }: SelectListboxProps) => {
  const listboxRef = useRef<HTMLDivElement>(null);

  const { field, selectRef, numberOfOptions } = useSelectContext();

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

    // 부모 요소 (Select 컨테이너)
    const selectElement = selectRef.current;

    // 부모 요소가 없거나 select 클래스가 포함되지 않은 경우 종료
    if (!selectElement || !selectElement.className.includes("select")) return;

    const updateListboxPosition = () => {
      // 부모 요소의 위치 및 크기 가져오기
      const {
        top: selectTop,
        bottom: selectBottom,
        left: selectLeft,
        width: selectWidth,
      } = selectElement.getBoundingClientRect();

      // 현재 화면의 높이
      const viewportHeight = window.visualViewport?.height || 0;

      // 부모 요소 하단부터 화면 하단까지의 거리
      const spaceBelow = viewportHeight - selectBottom;

      // 옵션 리스트의 예상 높이
      const listboxHeight = numberOfOptions * SELECT_OPTION_HEIGHT;

      // 리스트 박스의 위치 및 높이 설정
      setRect({
        top:
          selectTop > spaceBelow
            ? Math.max(selectTop - listboxHeight - 2, 0)
            : selectBottom + 2,
        height: Math.min(
          listboxHeight,
          selectTop > spaceBelow ? selectTop - 2 : spaceBelow - 2
        ),
        left: selectLeft,
        width: selectWidth,
      });
    };

    updateListboxPosition();

    window.addEventListener("resize", updateListboxPosition);

    return () => {
      window.removeEventListener("resize", updateListboxPosition);
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
