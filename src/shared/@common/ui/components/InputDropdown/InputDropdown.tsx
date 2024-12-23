import { joinClassNames } from "@shared/@common/utils";
import styles from "./InputDropdown.module.css";
import Input from "../Input/Input";
import Dropdown from "../Dropdown/Dropdown";
import { useSelector } from "react-redux";
import { getUsernameInSignin } from "@features/auth-setting/models/selectors";
import { setUsernameInSignIn } from "@features/auth-setting/models/slices/signinSlice";
import { useRef, useState } from "react";
import { DropdownItemType } from "@shared/@common/types";
import { createPortal } from "react-dom";
import { useAppDispatch } from "@app/store";

interface InputDropdownProps {
  list: DropdownItemType[];
}

const InputDropdown = ({ list }: InputDropdownProps) => {
  const dispatch = useAppDispatch();
  const inputValue = useSelector(getUsernameInSignin);
  const setInputValue = setUsernameInSignIn;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

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
        onClick={() => setIsOpen(!isOpen)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={(e) => {
          const curIndex = list.findIndex((item) => item.value === inputValue);
          if (e.key === "ArrowDown") {
            const nextIndex = curIndex + 1 > list.length - 1 ? 0 : curIndex + 1;
            dispatch(setInputValue(list[nextIndex].value as string));
          } else if (e.key === "ArrowUp") {
            const prevIndex = curIndex - 1 < 0 ? list.length - 1 : curIndex - 1;
            dispatch(setInputValue(list[prevIndex].value as string));
          } else if (e.key === "Enter") {
            setIsOpen(!isOpen);
          }
        }}
        tabIndex={0}
      >
        <Input
          field="username"
          fieldName="사용자 이름"
          inputValue={inputValue}
          setInputValue={setInputValue}
          mode="dropdown"
          list={list}
          isOpen={isOpen}
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
