import { joinClassNames } from "@shared/@common/utils";
import styles from "./Dropdown.module.css";
import { DropdownItemType } from "@shared/@common/types";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "@app/store";

interface DropdownProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  inputValue: string;
  setInputValue: (value: any) => { type: string; payload: any };
  list: DropdownItemType[];
  parentRef?: React.RefObject<HTMLElement>; // 부모 요소
}

const Dropdown = ({
  isOpen,
  setIsOpen,
  inputValue,
  setInputValue,
  list,
  parentRef,
}: DropdownProps) => {
  const dispatch = useAppDispatch();
  const [parentRect, setParentRect] = useState<{
    top: number;
    left: number;
    width: number;
  }>({
    top: 0,
    left: 0,
    width: 0,
  });

  const { top, left, width } = parentRect;
  // 부모 요소의 위치
  useEffect(() => {
    if (!parentRef) return;

    const parent = parentRef.current as HTMLElement;

    const rect = parent.getBoundingClientRect();

    setParentRect({
      top: rect.top,
      left: rect.left,
      width: rect.width,
    });
  }, []);
  return (
    <div
      className={joinClassNames([
        styles[`dropdown`],
        isOpen ? styles[`dropdown--open`] : styles[`dropdown--close`],
      ])}
      style={{
        top: `${top + 59.6}px`,
        left: `${left}px`,
        width: `${width}px`,
      }}
    >
      <ul className={joinClassNames([styles[`dropdown__list`]])}>
        {list.map((item, index) => {
          const selectedCond = item.value === inputValue;
          return (
            <li
              key={index}
              className={joinClassNames([
                styles[`dropdown__item`],
                selectedCond ? styles[`dropdown__item`] : "",
              ])}
              onClick={() => {
                dispatch(setInputValue(item.value));
              }}
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
