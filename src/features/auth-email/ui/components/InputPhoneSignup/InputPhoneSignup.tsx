import { useAppDispatch } from "@app/store";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Input, Text } from "@shared/@common/ui/components";
import { useInput } from "@shared/@common/ui/components/Input";
import {
  getPhoneInSignup,
  getPhoneOauthInSignup,
} from "@shared/auth/models/selectors";
import { setPhoneInSignup } from "@shared/auth/models/slices/signupSlice";
import { useSelector } from "react-redux";

interface InputPhoneSignupProps {
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

const InputPhoneSignup = ({
  isValid,
  setIsValid,
  className,
  disabled = false,
}: InputPhoneSignupProps) => {
  const dispatch = useAppDispatch();
  // 언어 설정
  const { label, error } = useLanguageContent([
    "components",
    "InputPhoneSignup",
  ]);

  const field = "phone";

  // Oauth에서 가져와서 저장한 정보인지 확인
  const isFromOauth = useSelector(getPhoneOauthInSignup);

  const inputValue = useSelector(getPhoneInSignup);

  const setInputValue = setPhoneInSignup;

  const { errorMessage, validateBasicRules, clearErrorAndValidation } =
    useInput({
      setIsValid,
      field,
      error,
    });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    dispatch(setInputValue(value));

    // 기본 에러 확인
    if (!validateBasicRules(value)) return;

    // 휴대폰 중복 검사 추가 필요

    // 모든 유효성 검사를 통과한 경우
    clearErrorAndValidation();
  };
  return (
    <Input
      className={className}
      label={label}
      field={field}
      inputValue={inputValue}
      handleChange={handleChange}
      isValid={typeof isValid === "object" ? isValid[field] ?? false : isValid}
      disabled={disabled || isFromOauth} // oauth에서 가져온 정보는 disabled를 해서 변경 불가하게 함
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

export default InputPhoneSignup;
