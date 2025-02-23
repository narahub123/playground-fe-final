import { LoginInputValueType } from "@features/auth-login/types";
import { determineInputValueType } from "@features/auth-login/utils";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { getUser } from "@shared/@common/models/selectors";
import { UserState } from "@shared/@common/models/slices/userSlice";
import { Input, Text } from "@shared/@common/ui/components";
import { useInput } from "@shared/@common/ui/components/Input";
import {
  checkEmailDuplicateInSignupAPI,
  checkPhoneDuplicationInSignupAPI,
  checkUserIdDuplicateInSignupAPI,
} from "@shared/auth/apis";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

interface InputAccountLoginProps {
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
  inputValue: LoginInputValueType;
  setInputValue: React.Dispatch<React.SetStateAction<LoginInputValueType>>;
  className?: string;
  disabled?: boolean;
}

const InputAccountLogin = ({
  inputValue,
  setInputValue,
  isValid,
  setIsValid,
  className,
  disabled = false,
}: InputAccountLoginProps) => {
  const { state } = useLocation();
  const user = useSelector(getUser);
  // 언어 설정
  const { label, error, errMsg } = useLanguageContent([
    "components",
    "InputAccountLogin",
  ]);

  const field = "email, phone, userId";

  const { errorMessage, updateErrorAndValidation } = useInput({
    setIsValid,
    field,
    error,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const type = determineInputValueType(value);

    setInputValue((prev) => ({ ...prev, [type]: value }));

    const checkUserExistence = async () => {
      if (value === "") return;

      let response = null;

      if (type === "email") {
        response = await checkEmailDuplicateInSignupAPI(value);
      } else if (type === "phone") {
        response = await checkPhoneDuplicationInSignupAPI(value);
      } else if (type === "userId") {
        response = await checkUserIdDuplicateInSignupAPI(value);
      }

      const { isDuplicate } = response.data;

      if (!isDuplicate) {
        updateErrorAndValidation(errMsg(type), false);
      } else {
        if (state && state.api === "addAccount") {
          const isCurrentUser = user[type as keyof UserState] === value;
          const accountGroupIds = user.accountGroup
            .filter((account) => account.userId !== user.userId)
            .map((account) => account.userId);
          const hasAccountGroupId = accountGroupIds.includes(value);

          if (isCurrentUser) {
            updateErrorAndValidation("현재 유저입니다.", false);
            return;
          } else if (hasAccountGroupId) {
            updateErrorAndValidation("이미 목록에 있는 유저입니다.", false);
          }
        }
        updateErrorAndValidation("", true);
      }
    };

    checkUserExistence();
  };

  return (
    <Input
      className={className}
      label={label}
      field={field}
      inputValue={
        Object.keys(inputValue).includes("email")
          ? (inputValue["email"] as string)
          : Object.keys(inputValue).includes("phone")
          ? (inputValue["phone"] as string)
          : (inputValue["userId"] as string)
      }
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

export default InputAccountLogin;
