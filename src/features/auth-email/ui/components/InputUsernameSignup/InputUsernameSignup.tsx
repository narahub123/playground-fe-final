import { useLanguageContent } from "@shared/@common/models/hooks";
import { Text } from "@shared/@common/ui/components";
import { USERNAME_MAX } from "@shared/@common/constants";
import { useSelector } from "react-redux";
import { getUsernameInSignup } from "@shared/auth/models/selectors";
import { setUsernameInSignup } from "@shared/auth/models/slices/signupSlice";
import { useAppDispatch } from "@app/store";
import { Input } from "@shared/@common/ui/components";
import { useInput } from "@shared/@common/ui/components/Input";

interface InputUsernameSignupProps {
  isValid:
    | {
        [key: string]: boolean; // 각 필드에 대한 유효성 상태를 업데이트하는 함수입니다. 필드 이름을 키로 하고, boolean 값을 업데이트합니다.
      }
    | boolean; // 전체 유효성 상태를 업데이트하는 함수입니다. 모든 입력 필드에 대한 유효성 상태를 한 번에 업데이트할 수 있습니다.;
  setIsValid: React.Dispatch<
    React.SetStateAction<
      | {
          [key: string]: boolean; // 각 필드에 대한 유효성 상태를 업데이트하는 함수입니다. 필드 이름을 키로 하고, boolean 값을 업데이트합니다.
        }
      | boolean // 전체 유효성 상태를 업데이트하는 함수입니다. 모든 입력 필드에 대한 유효성 상태를 한 번에 업데이트할 수 있습니다.
    >
  >; // `isValid`의 값을 업데이트하는 함수입니다. 객체일 경우, 각 필드의 유효성 상태를 개별적으로 업데이트하거나, boolean 값일 경우 전체 유효성 상태를 한 번에 업데이트할 수 있습니다.
  className?: string;
  disabled?: boolean;
}

const InputUsernameSignup = ({
  className,
  disabled = false,
  isValid,
  setIsValid,
}: InputUsernameSignupProps) => {
  const dispatch = useAppDispatch();
  // 언어 설정
  const { label, error } = useLanguageContent([
    "components",
    "InputUsernameSignup",
  ]);

  const maxLength = USERNAME_MAX;

  const field = "username";

  const inputValue = useSelector(getUsernameInSignup);

  const setInputValue = setUsernameInSignup;

  const {
    errorMessage,
    validateBasicRules,
    validateMaxLength,
    clearErrorAndValidation,
  } = useInput({
    setIsValid,
    field,
    error,
  });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!validateMaxLength(value, maxLength)) return;

    dispatch(setInputValue(value));

    // 기본 에러 확인
    if (!validateBasicRules(value)) return;

    // 모든 유효성 검사를 통과한 경우
    clearErrorAndValidation();
  };

  return (
    <Input
      className={className}
      label={label}
      field={field}
      maxLength={USERNAME_MAX}
      inputValue={inputValue}
      handleChange={handleChange}
      isValid={typeof isValid === "object" ? isValid[field] ?? false : isValid}
      disabled={disabled}
    >
      <Input.Main>
        <Input.Bottom>
          <Input.Field />
        </Input.Bottom>
      </Input.Main>
      <Input.Extra>
        <Text type="expl" status="error">
          {errorMessage}
        </Text>
      </Input.Extra>
    </Input>
  );
};

export default InputUsernameSignup;
