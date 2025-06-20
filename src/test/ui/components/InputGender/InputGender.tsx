import { useLanguageContent } from "@shared/@common/models/hooks";
import { selectGender } from "@shared/@common/models/selectors";
import { setGender } from "@shared/@common/models/slices/userSlice";

import { getGenderInSignup } from "@shared/auth/models/selectors";
import { setGenderInSignup } from "@shared/auth/models/slices/signupSlice";
import { useSelector } from "react-redux";
import Input from "../Input/ui";

interface InputGenderProps {
  isSignup?: boolean;
  className?: string;
  disabled?: boolean;
  isValid?:
    | {
        [key: string]: boolean; // 각 필드에 대한 유효성 상태를 객체 형태로 저장. 필드 이름을 키로 하고, 유효성 상태(boolean)를 값으로 저장합니다.
      }
    | boolean; // 전체 유효성 상태를 나타내는 boolean 값. 모든 입력 필드에 대해 유효성 검사를 한 번에 처리하고자 할 때 사용됩니다.

  setIsValid?: React.Dispatch<
    React.SetStateAction<
      | {
          [key: string]: boolean; // 각 필드에 대한 유효성 상태를 업데이트하는 함수입니다. 필드 이름을 키로 하고, boolean 값을 업데이트합니다.
        }
      | boolean // 전체 유효성 상태를 업데이트하는 함수입니다. 모든 입력 필드에 대한 유효성 상태를 한 번에 업데이트할 수 있습니다.
    >
  >; // `isValid`의 값을 업데이트하는 함수입니다. 객체일 경우, 각 필드의 유효성 상태를 개별적으로 업데이트하거나, boolean 값일 경우 전체 유효성 상태를 한 번에 업데이트할 수 있습니다.
}

const InputGender = ({
  isSignup = false,
  className,
  disabled = false,
  isValid,
  setIsValid,
}: InputGenderProps) => {
  const selector = isSignup ? getGenderInSignup : selectGender;
  const inputValue = useSelector(selector);

  const setInputValue = isSignup ? setGenderInSignup : setGender;

  // 언어 설정
  const { label, list } = useLanguageContent(["components", "InputGender"]);

  return (
    <Input
      field="gender"
      label={label}
      inputValue={inputValue}
      setInputValue={setInputValue}
      list={list}
      className={className}
      isValid={isValid}
      setIsValid={setIsValid}
      disabled={disabled}
    >
      <Input.Main>
        <Input.Top>
          <Input.Label />
        </Input.Top>
        <Input.Bottom>
          <Input.Field />
        </Input.Bottom>
      </Input.Main>
      <Input.Dropdown />
    </Input>
  );
};

export default InputGender;
