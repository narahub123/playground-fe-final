import { joinClassNames } from "@shared/@common/utils";
import styles from "./Dropdown.module.css";
import { DropdownItemType } from "@shared/@common/types";
import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "@app/store";

interface DropdownProps {
  isOpen: boolean;
  inputValue: string;
  setInputValue: (value: any) => { type: string; payload: any };
  list: DropdownItemType[];
  parentRef?: React.RefObject<HTMLElement>; // 부모 요소
  finalClickRef?: React.RefObject<HTMLElement>; // dropdown을 연 버튼
}

const Dropdown = ({
  isOpen,
  inputValue,
  setInputValue,
  list,
  parentRef,
  finalClickRef,
}: DropdownProps) => {
  const dispatch = useAppDispatch();
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [parentRect, setParentRect] = useState<{
    top: number;
    left: number;
    height: number;
    width: number;
  } | null>(null);

  const [listHeight, setListHeight] = useState(0);

  // 부모 요소의 위치
  useEffect(() => {
    if (!parentRef) return;

    const updateParentPosition = () => {
      const parent = parentRef.current as HTMLElement;

      const rect = parent.getBoundingClientRect();

      setParentRect({
        top: rect.top,
        left: rect.left,
        height: rect.height,
        width: rect.width,
      });
    };

    window.addEventListener("resize", updateParentPosition);
    window.addEventListener("scroll", updateParentPosition);

    updateParentPosition();

    return () => {
      window.removeEventListener("resize", updateParentPosition);
      window.removeEventListener("scroll", updateParentPosition);
    };
  }, []);
  // list 높이 동적 적용
  useEffect(() => {
    if (!parentRef) return;

    const updateHeight = () => {
      const parent = parentRef?.current;

      const bottom = parent?.getBoundingClientRect().bottom || 0;
      const height = window.innerHeight - bottom;

      setListHeight(height);
    };

    window.addEventListener("resize", updateHeight);

    updateHeight();

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);
  // 선택된 요소로 이동
  useEffect(() => {
    if (!isOpen || !parentRect) return;

    const curIndex = list.findIndex((item) => item.value === inputValue) || 0;

    const selected = itemRefs.current[curIndex];

    selected?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [inputValue, isOpen, parentRect]);

  if (!parentRect) return null;

  const { top, left, width, height } = parentRect;

  return (
    <div
      className={joinClassNames([
        styles[`dropdown`],
        isOpen ? styles[`dropdown--open`] : styles[`dropdown--close`],
      ])}
      style={
        parentRef
          ? {
              top: `${top + height + 2}px`,
              left: `${left}px`,
              width: `${width}px`,
            }
          : undefined
      }
    >
      <ul
        className={joinClassNames([styles[`dropdown__list`]])}
        style={{ height: listHeight }}
      >
        {list.map((item, index) => {
          const selectedCond = item.value === inputValue;
          return (
            <li
              key={index}
              className={joinClassNames([
                styles[`dropdown__item`],
                selectedCond ? styles[`dropdown__item--selected`] : "",
              ])}
              onMouseDown={() => {
                dispatch(setInputValue(item.value));
                if (finalClickRef) {
                  setTimeout(() => {
                    // inputdropdown의 mousedown과 충돌하는 것을 방지하기 위해서
                    finalClickRef.current?.focus();
                  }, 0);
                }
              }}
              ref={(el) => (itemRefs.current[index] = el)}
            >
              {item.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
