import { useState } from "react";
import useCompiledInputError from "./useCompiledInputError";

interface useInputProps {
  setIsValid: React.Dispatch<
    React.SetStateAction<
      | {
          [key: string]: boolean; // 각 필드에 대한 유효성 상태를 업데이트하는 함수입니다. 필드 이름을 키로 하고, boolean 값을 업데이트합니다.
        }
      | boolean // 전체 유효성 상태를 업데이트하는 함수입니다. 모든 입력 필드에 대한 유효성 상태를 한 번에 업데이트할 수 있습니다.
    >
  >; // `isValid`의 값을 업데이트하는 함수입니다. 객체일 경우, 각 필드의 유효성 상태를 개별적으로 업데이트하거나, boolean 값일 경우 전체 유효성 상태를 한 번에 업데이트할 수 있습니다.
  field: string;
  error: {
    [key: string]: {
      regExp?: string;
      errorMessage: string;
    };
  };
}

const useInput = ({ setIsValid, field, error }: useInputProps) => {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    EMPTY,
    FORBIDDEN,
    UNDER_MINIMUM,
    INCOMPLETE,
    FORMAT,
    EXCEED,
    DUPLICATE,
    DISCONNECT,
    REQUIRED,
    MISMATCH,
  } = useCompiledInputError(error);

  const errorOrder = [EMPTY, FORBIDDEN, UNDER_MINIMUM, INCOMPLETE, FORMAT];

  // 에러 메시지와 isValid 업데이트
  const updateErrorAndValidation = (message: string, validState?: boolean) => {
    // 기본 메시지와 같다면 업데이트 안함
    if (errorMessage !== message || message === "") {
      // 에러 메시지 업데이트
      setErrorMessage((prev) => {
        if (prev === message) return prev;
        else return message;
      });

      // validState가 제공되는 경우에만 유효성 업데이트
      validState !== undefined &&
        setIsValid((prev) => {
          if (typeof prev === "object" && prev !== null) {
            if (prev[field] !== validState) {
              return { ...prev, [field]: validState };
            }
            return prev;
          } else {
            if (prev !== validState) {
              return validState;
            } else return prev;
          }
        });
    }
  };

  const validateBasicRules = (value: string) => {
    for (const error of errorOrder) {
      if (error && !value.match(error.regExp)) {
        updateErrorAndValidation(error.errorMessage, false);
        return false;
      }
    }
    return true;
  };

  // 중복 확인
  const validateDupulicateAsync = async (
    api: (value: string) => Promise<{
      isDuplicate: any;
      type: string;
    }>,
    value: string
  ) => {
    const { isDuplicate, type } = await api(value);

    if (isDuplicate) {
      if (type === "duplicate") {
        updateErrorAndValidation(DUPLICATE?.errorMessage || "", false);
      } else if (type === "disconnect") {
        updateErrorAndValidation(DISCONNECT?.errorMessage || "", false);
      }

      return false;
    }

    return true;
  };

  // 값 업데이트 하기 전에 실행되어야 함
  const validateMaxLength = (value: string, maxLength: number) => {
    if (maxLength && value.length > maxLength && EXCEED) {
      if (errorMessage !== EXCEED.errorMessage) {
        setErrorMessage(EXCEED.errorMessage);
      }
      return false;
    }
    return true;
  };

  // 요구조건을 충족하는지 여부 확인, 값 업데이트 이전에 실행되어야 함
  // 비밀번호 업데이트 시 사용됨
  // inputValue는 입력값이 아닌 다른 컴포넌트에서 입력된 값을 의미함
  // 유효성 검사 중 가장 먼저 실행되어야 함
  const validateRequiredField = (inputValue: string) => {
    if (REQUIRED && !inputValue) {
      updateErrorAndValidation(REQUIRED?.errorMessage);
      return false;
    }
    return true;
  };

  // 기존 값과 일치하는지 여부를 확인하는 함수
  // 유효성 검사를 하지 않음 주의!!!
  const validateMatch = (inputValue: string, value: string) => {
    if (inputValue !== value && MISMATCH) {
      updateErrorAndValidation(MISMATCH.errorMessage, false);
      return false;
    }
    return true;
  };

  const clearErrorAndValidation = () => {
    updateErrorAndValidation("", true);
  };

  return {
    errorMessage,
    updateErrorAndValidation,
    validateBasicRules,
    validateDupulicateAsync,
    validateMaxLength,
    validateRequiredField,
    validateMatch,
    clearErrorAndValidation,
  };
};

export default useInput;
