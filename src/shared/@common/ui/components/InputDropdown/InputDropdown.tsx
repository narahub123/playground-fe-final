import { joinClassNames } from "@shared/@common/utils";
import styles from "./InputDropdown.module.css";
import Input from "../Input/Input";
import Dropdown from "../Dropdown/Dropdown";
import { useEffect, useRef, useState } from "react";
import { DropdownItemType } from "@shared/@common/types";
import { useAppDispatch } from "@app/store";
import Portal from "../Portal/Portal";

interface InputDropdownProps {
  field: string;
  fieldName: string;
  inputValue: string;
  setInputValue: (value: any) => { type: string; payload: any };
  list: DropdownItemType[];
  disabled?: boolean;
}

const InputDropdown = ({
  field,
  fieldName,
  inputValue,
  setInputValue,
  list,
  disabled = false,
}: InputDropdownProps) => {
  const dispatch = useAppDispatch();
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (!containerRef) return;

    const container = containerRef.current as HTMLElement;

    const clickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (!container.contains(target)) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };

    const handleBlur = () => {
      setIsOpen(false);
    };

    document.addEventListener("click", (e) => clickOutside(e));
    window.addEventListener("blur", handleBlur);

    return () => {
      document.removeEventListener("click", (e) => clickOutside(e));
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  // 드롭 다운 클릭시에도 focus 유지를 위해서 isOpen 추가
  const focusCond = isFocused || isOpen;
  return (
    <div
      className={joinClassNames([styles[`input-dropdown`]])}
      ref={containerRef}
    >
      <div
        className={joinClassNames([
          styles[`input__wrapper`],
          focusCond ? styles[`input__wrapper--focused`] : "",
        ])}
        onMouseDown={
          disabled
            ? undefined
            : (e) => {
                e.preventDefault();
                console.log("클릭");

                setIsOpen(!isOpen);
                setIsFocused(true);
                // 포커스 주기
                buttonRef.current?.focus();
              }
        }
        onFocus={
          disabled
            ? undefined
            : (e) => {
                e.preventDefault();
                setTimeout(() => {
                  // mousedown 이후에 실행시키기 위해서
                  setIsFocused(true);
                  setIsOpen(true);
                }, 100);
              }
        }
        onBlur={
          disabled
            ? undefined
            : () => {
                setIsFocused(false);
                setIsOpen(false);
              }
        }
        onKeyDown={
          disabled
            ? undefined
            : (e) => {
                const curIndex = list.findIndex(
                  (item) => item.value === inputValue
                );
                if (e.key === "ArrowDown") {
                  const nextIndex =
                    curIndex + 1 > list.length - 1 ? 0 : curIndex + 1;
                  dispatch(setInputValue(list[nextIndex].value as string));
                } else if (e.key === "ArrowUp") {
                  const prevIndex =
                    curIndex - 1 < 0 ? list.length - 1 : curIndex - 1;
                  dispatch(setInputValue(list[prevIndex].value as string));
                } else if (e.key === "Enter") {
                  setIsOpen(!isOpen);
                }
              }
        }
        tabIndex={disabled ? -1 : 0}
        ref={buttonRef}
      >
        <Input
          field={field}
          fieldName={fieldName}
          inputValue={inputValue}
          setInputValue={setInputValue}
          mode="dropdown"
          list={list}
          isOpen={isOpen}
          disabled={disabled}
        />
      </div>
      <Portal id="dropdown">
        <Dropdown
          isOpen={isOpen}
          inputValue={inputValue}
          setInputValue={setInputValue}
          list={list}
          parentRef={containerRef}
          finalClickRef={buttonRef}
        />
      </Portal>
    </div>
  );
};

export default InputDropdown;
