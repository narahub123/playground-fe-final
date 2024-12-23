import { joinClassNames } from "@shared/@common/utils";
import styles from "./InputDropdown.module.css";
import Input from "../Input/Input";
import Dropdown from "../Dropdown/Dropdown";
import { useSelector } from "react-redux";
import { getUsernameInSignin } from "@features/auth-setting/models/selectors";
import { setUsernameInSignIn } from "@features/auth-setting/models/slices/signinSlice";
import { useState } from "react";
import { DropdownItemType } from "@shared/@common/types";

interface InputDropdownProps {
  list: DropdownItemType[];
}

const InputDropdown = ({ list }: InputDropdownProps) => {
  const inputValue = useSelector(getUsernameInSignin);
  const setInputValue = setUsernameInSignIn;

  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={joinClassNames([styles[`input-dropdown`]])}>
      <Input
        field="username"
        fieldName="사용자 이름"
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <Dropdown
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        inputValue={inputValue}
        setInputValue={setInputValue}
        list={list}
      />
    </div>
  );
};

export default InputDropdown;
