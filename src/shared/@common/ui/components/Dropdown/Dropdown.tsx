import styles from "./Dropdown.module.css";
import { useRef } from "react";
import { useAppDispatch } from "@app/store";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { DropdownItemType } from "@shared/@common/types";
import { useFocusTrap, useLanguageContent } from "@shared/@common/models/hooks";

interface DropdownProps {
  list: DropdownItemType[];
  selection: string | number;
  setSelection: (value: any) => { type: string; payload: any };
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isFocusTrapOn?: boolean; // 포커스 트랩 사용 여부
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
}

const Dropdown = ({
  list,
  selection, // inputValue
  setSelection, // setInputValue
  isOpen,
  setIsOpen,
  isFocusTrapOn = true,
  setSearch,
}: DropdownProps) => {
  const dispatch = useAppDispatch();
  const containerRef = useRef<HTMLDivElement>(null);

  const { emptyResult } = useLanguageContent(["components", "Dropdown"]);

  useFocusTrap({ containerRef, isOn: isFocusTrapOn });

  // 선택 함수
  const handleSelection = (value: string | number) => {
    dispatch(setSelection(value));
    if (setSearch) {
      setSearch(
        list?.find((item) => item.value === value)?.text || (value as string)
      );
    }
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
        {list.length === 0 ? (
          <Text text={emptyResult} subClassName={styles[`dropdown__item`]} />
        ) : (
          list.map((item, idx) => {
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
                tabIndex={isFocusTrapOn ? 0 : -1}
              >
                {item.text}
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default Dropdown;
