import { useSelector } from "react-redux";
import { Input } from "@shared/@common/ui/components";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { getPasswordInSignup } from "@features/auth-setting/models/selectors";
import { setPasswordInSignup } from "@features/auth-setting/models/slices/signupSlice";
import { PASSWORD_MAX } from "@shared/@common/constants";
import {
  getPassword,
  getPasswordCheck,
} from "@shared/@common/models/selectors";
import {
  setPassword,
  setPasswordCheck,
} from "@shared/@common/models/slices/userSlice";

interface InputPasswordProps {
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
  label?: "password" | "confirm" | "current";
  field?: "password" | "password_confirm" | "password_check";
  usedIn?: "signup";
}

const InputPassword = ({
  isValid,
  setIsValid,
  label = "password",
  field = "password",
  usedIn,
}: InputPasswordProps) => {
  const selector =
    field === "password" || field === "password_confirm"
      ? usedIn === "signup"
        ? getPasswordInSignup
        : getPassword
      : getPasswordCheck;

  const inputValue = useSelector(selector);

  const setInputValue =
    field === "password" || field === "password_confirm"
      ? usedIn === "signup"
        ? setPasswordInSignup
        : setPassword
      : setPasswordCheck;

  const { passwordLabel, passwordError } = useLanguageContent([
    "components",
    "InputPassword",
  ]);
  return (
    <Input
      field={field}
      label={passwordLabel[label]}
      inputValue={inputValue}
      setInputValue={setInputValue}
      error={passwordError}
      isValid={isValid}
      setIsValid={setIsValid}
      maxLength={PASSWORD_MAX}
    >
      <Input.Main>
        <Input.Top>
          <Input.Label />
        </Input.Top>
        <Input.Bottom>
          <Input.Field />
          <Input.ActionIcon />
        </Input.Bottom>
      </Input.Main>
      <Input.Error />
    </Input>
  );
};

export default InputPassword;
