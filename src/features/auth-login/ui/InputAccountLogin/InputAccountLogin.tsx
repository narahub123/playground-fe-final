import { useEffect, useState } from "react";
import { determineInputValueType } from "@features/auth-login/utils";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Input, Text } from "@shared/@common/ui/components";
import { useInput } from "@shared/@common/ui/components/Input";
import {
  checkEmailDuplicateInSignupAPI,
  checkUserIdDuplicateInSignupAPI,
} from "@shared/auth/apis";

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
  inputValue: { [key: string]: string };
  setInputValue: React.Dispatch<
    React.SetStateAction<{ [key: string]: string }>
  >;
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

  // useEffect(() => {
  //   const type = determineInputValueType(value);

  //   const checkUserExistence = async () => {
  //     if (value === "") return;

  //     let isValid = false;

  //     if (type === "email") {
  //       const response = await checkEmailDuplicateInSignupAPI(value);

  //       const { isDuplicate } = response;

  //       isValid = isDuplicate;
  //     } else if (type === "phone") {
  //     } else if (type === "userId") {
  //       const response = await checkUserIdDuplicateInSignupAPI(value);

  //       const { isDuplicate } = response;

  //       isValid = isDuplicate;
  //     }

  //     if (!isValid) {
  //       setInputValue({ [type]: "" });

  //       updateErrorAndValidation(errMsg(type), false);
  //     } else {
  //       setInputValue({ [type]: value });
  //       updateErrorAndValidation("", true);
  //     }

  //     isValid
  //       ? setInputValue((prev) => ({
  //           ...prev,
  //           [type]: value,
  //         }))
  //       : setInputValue((prev) => ({
  //           ...prev,
  //           [type]: "",
  //         }));
  //   };

  //   checkUserExistence();
  // }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const type = determineInputValueType(value);

    setInputValue({ [type]: value });

    const checkUserExistence = async () => {
      if (value === "") return;

      let isValid = false;

      if (type === "email") {
        const response = await checkEmailDuplicateInSignupAPI(value);

        const { isDuplicate } = response;

        isValid = isDuplicate;
      } else if (type === "phone") {
      } else if (type === "userId") {
        const response = await checkUserIdDuplicateInSignupAPI(value);

        const { isDuplicate } = response;

        isValid = isDuplicate;
      }

      if (!isValid) {
        updateErrorAndValidation(errMsg(type), false);
      } else {
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
      inputValue={Object.values(inputValue)[0]}
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
