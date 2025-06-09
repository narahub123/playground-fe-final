import { selectUsername } from "@shared/@common/models/selectors";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Input, Text } from "@shared/@common/ui/components";
import { useSelector } from "react-redux";
import { setUsername } from "@shared/@common/models/slices/userSlice";
import { USERNAME_MAX } from "@shared/@common/constants";
import { useAppDispatch } from "@app/store";
import { useInput } from "@shared/@common/ui/components/Input";

interface InputUsernameProps {
  className?: string;
  disabled?: boolean;
  isValid:
    | {
        [key: string]: boolean;
      }
    | boolean;
  setIsValid: React.Dispatch<
    React.SetStateAction<
      | {
          [key: string]: boolean;
        }
      | boolean
    >
  >;
}

const InputUsername = ({
  className,
  disabled = false,
  isValid,
  setIsValid,
}: InputUsernameProps) => {
  const dispatch = useAppDispatch();
  // 언어 설정
  const { label, error } = useLanguageContent(["profilepage", "InputUsername"]);

  const maxLength = USERNAME_MAX;

  const field = "username";

  const inputValue = useSelector(selectUsername);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!validateMaxLength(value, maxLength)) return;

    dispatch(setUsername(value));

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
      maxLength={maxLength}
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

export default InputUsername;
