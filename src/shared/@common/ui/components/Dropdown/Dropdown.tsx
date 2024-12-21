import styles from "./Dropdown.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useAppDispatch } from "@app/store";
import { DropdownItemType } from "@shared/@common/types";
import { useFocusTrap } from "@shared/@common/models/hooks";
import { useRef } from "react";

interface DropdownProps {
  list: DropdownItemType[];
  selection: string | number;
  setSelection: (value: any) => { type: string; payload: any };
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown = ({
  list,
  selection,
  setSelection,
  isOpen,
  setIsOpen,
}: DropdownProps) => {
  const dispatch = useAppDispatch();
  const containerRef = useRef<HTMLDivElement>(null);

  const {} = useFocusTrap({ containerRef });

  // 선택 함수
  const handleSelection = (value: string | number) => {
    dispatch(setSelection(value));
  };

  // 클릭 핸들러
  const handleClick = (value: string | number) => {
    handleSelection(value);
    setIsOpen(false);
  };

  return (
    <div
      className={joinClassNames([
        styles[`dropdown`],
        isOpen ? styles[`dropdown--open`] : styles[`dropdown--close`],
      ])}
      ref={containerRef}
    >
      <ul className={joinClassNames([styles[`dropdown__list`]])}>
        {list.map((item, idx) => {
          // 선택 조건
          const selectionCond = selection === item.value;

          return (
            <li
              className={joinClassNames([
                styles[`dropdown__item`],
                selectionCond ? styles[`dropdown__item--selected`] : "",
              ])}
              key={item.value || idx}
              onClick={() => handleClick(item.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleClick(item.value);
                }
              }}
              tabIndex={0}
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
