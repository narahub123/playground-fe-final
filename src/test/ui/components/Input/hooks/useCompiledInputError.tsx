import { useMemo } from "react";

import {
  CompileErrorType,
  InputErrorKeyType,
  InputErrorKeyWithoutRegExp,
  InputErrorKeyWithRegExp,
  InputErrorType,
} from "@shared/@common/ui/components/Input1/types";

/**
 * 에러 키가 정규 표현식을 사용하는지 확인하는 함수입니다.
 *
 * @param key - 확인할 에러 키
 * @returns {boolean} - 정규 표현식을 사용하는 경우 true, 그렇지 않으면 false 반환
 */
function isWithRegExpKey(
  key: InputErrorKeyType
): key is InputErrorKeyWithRegExp {
  return [
    "EMPTY",
    "FORBIDDEN",
    "UNDER_MINIMUM",
    "INCOMPLETE",
    "FORMAT",
  ].includes(key);
}

/**
 * 에러 키가 정규 표현식을 사용하지 않는지 확인하는 함수입니다.
 *
 * @param key - 확인할 에러 키
 * @returns {boolean} - 정규 표현식을 사용하지 않는 경우 true, 그렇지 않으면 false 반환
 */
function isWithoutRegExpKey(
  key: InputErrorKeyType
): key is InputErrorKeyWithoutRegExp {
  return ["EXCEED", "DUPLICATE", "DISCONNECT", "REQUIRED", "MISMATCH"].includes(
    key
  );
}

const useCompiledInputError = (error: {
  [key: string]: {
    regExp?: string;
    errorMessage: string;
  };
}) => {
  const compiledError = useMemo(() => {
    // error 객체가 없으면 빈 객체 반환
    if (!error) {
      return {};
    }

    // error 객체를 순회하여 각 에러 키에 대한 컴파일된 정보를 반환
    return Object.fromEntries(
      Object.entries(error)
        .map(([key, value]) => {
          // 정규 표현식을 사용하는 에러의 경우
          if (isWithRegExpKey(key as InputErrorKeyType)) {
            return [
              key,
              {
                regExp: new RegExp(
                  (value as InputErrorType<InputErrorKeyWithRegExp>).regExp
                ),
                errorMessage: (value as InputErrorType<InputErrorKeyWithRegExp>)
                  .errorMessage,
              },
            ];
          }
          // 정규 표현식을 사용하지 않는 에러의 경우
          else if (isWithoutRegExpKey(key as InputErrorKeyType)) {
            return [
              key,
              {
                errorMessage: (
                  value as InputErrorType<InputErrorKeyWithoutRegExp>
                ).errorMessage,
              },
            ];
          }
          return undefined; // 조건에 맞지 않는 경우 undefined 반환
        })
        .filter((entry) => entry !== undefined) // undefined 값은 필터링하여 제거
    );
  }, [error]);

  // 컴파일된 에러 객체 반환
  return compiledError as {
    [K in InputErrorKeyType]?: CompileErrorType<K>;
  };
};

export default useCompiledInputError;
