import { useState } from "react";

interface useInputProps {
  setIsValid?: React.Dispatch<
    React.SetStateAction<
      | {
          [key: string]: boolean; // 각 필드에 대한 유효성 상태를 업데이트하는 함수입니다. 필드 이름을 키로 하고, boolean 값을 업데이트합니다.
        }
      | boolean // 전체 유효성 상태를 업데이트하는 함수입니다. 모든 입력 필드에 대한 유효성 상태를 한 번에 업데이트할 수 있습니다.
    >
  >; // `isValid`의 값을 업데이트하는 함수입니다. 객체일 경우, 각 필드의 유효성 상태를 개별적으로 업데이트하거나, boolean 값일 경우 전체 유효성 상태를 한 번에 업데이트할 수 있습니다.
}

const useInput = ({ setIsValid }: useInputProps) => {
  const [errorMessage, setErrorMessage] = useState("");

  //
  const updateErrorAndValidation = (
    message: string,
    validState: boolean,
    field: string
  ) => {
    // 기본 메시지와 같다면 업데이트 안함
    if (errorMessage !== message) {
      // 에러 메시지 업데이트
      setErrorMessage(message);

      // setIsValid가 제공되는 경우에만 유효성 업데이트
      setIsValid &&
        setIsValid((prev) => {
          if (typeof prev === "object" && prev !== null) {
            if (prev[field] !== validState) {
              return { ...prev, [field]: validState };
            }
            return prev;
          }
          return validState;
        });
    }
  };
  return {
    errorMessage,
    updateErrorAndValidation,
  };
};

export default useInput;
