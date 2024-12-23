import { joinClassNames } from "@shared/@common/utils";
import styles from "./InputDropdown.module.css";
import Input from "../Input/Input";
import Dropdown from "../Dropdown/Dropdown";
import { useSelector } from "react-redux";
import { getUsernameInSignin } from "@features/auth-setting/models/selectors";
import { setUsernameInSignIn } from "@features/auth-setting/models/slices/signinSlice";
import { useEffect, useRef, useState } from "react";
import { DropdownItemType } from "@shared/@common/types";
import { createPortal } from "react-dom";
import { useAppDispatch } from "@app/store";

interface InputDropdownProps {
  list: DropdownItemType[];
  disabled?: boolean;
}

const InputDropdown = ({ list, disabled = false }: InputDropdownProps) => {
  const dispatch = useAppDispatch();
  const inputValue = useSelector(getUsernameInSignin);
  const setInputValue = setUsernameInSignIn;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (!containerRef) return;

    const clickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (!containerRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", (e) => clickOutside(e));

    return () => {
      window.removeEventListener("click", (e) => clickOutside(e));
    };
  }, []);

  const focusCond = isFocused;
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
        onClick={disabled ? undefined : () => setIsOpen(!isOpen)}
        onFocus={disabled ? undefined : () => setIsFocused(true)}
        onBlur={disabled ? undefined : () => setIsFocused(false)}
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
      >
        <Input
          field="username"
          fieldName="사용자 이름"
          inputValue={inputValue}
          setInputValue={setInputValue}
          mode="dropdown"
          list={list}
          isOpen={isOpen}
          disabled={disabled}
        />
      </div>
      {createPortal(
        <Dropdown
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          inputValue={inputValue}
          setInputValue={setInputValue}
          list={list}
          parentRef={containerRef}
        />,
        document.getElementById("dropdown") as HTMLElement
      )}
    </div>
  );
};

export default InputDropdown;
