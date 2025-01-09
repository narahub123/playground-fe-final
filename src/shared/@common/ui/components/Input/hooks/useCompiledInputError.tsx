import { useMemo } from "react";
import { useInputContext } from "../context";
import {
  CompileErrorType,
  InputErrorKeyType,
  InputErrorType,
} from "@shared/@common/ui/components/Input/types";

/**
 * `useCompiledInputError` 훅은 `useInputContext`에서 받아온 `error` 객체를 처리하여,
 * 각 에러 키에 대한 컴파일된 정규 표현식(`regExp`)과 에러 메시지(`errorMessage`)를 포함하는
 * 객체를 반환합니다. `error` 객체가 없을 경우 빈 객체를 반환합니다.
 *
 * 각 에러 키의 의미는 다음과 같습니다:
 * - `EMPTY`: 값이 비어있을 때 발생하는 에러
 * - `FORBIDDEN`: 허용되지 않은 값이 들어왔을 때 발생하는 에러
 * - `UNDER_MINIMUM`: 최소 길이 조건을 만족하지 못할 때 발생하는 에러
 * - `INCOMPLETE`: 필수 정보가 부족할 때 발생하는 에러
 * - `EXCEED`: 값이 너무 길어서 조건을 초과할 때 발생하는 에러
 * - `FORMAT`: 형식이 올바르지 않을 때 발생하는 에러
 * - `DUPLICATE`: 이미 동일한 값으로 저장된 값이 있는 경우 발생하는 오류.
 * - `DISCONNECT`: 서버와 연결이 되지 않는 경우 발생하는 에러.
 *
 * @returns {Partial<Record<InputErrorKeyType, CompileErrorType>>}
 * - 에러 키(`InputErrorKeyType`)를 기반으로 각 에러의 정규 표현식과 메시지를 포함한 객체를 반환합니다.
 * - 반환 객체는 일부 키만 포함될 수 있으며, 각 키는 `CompileErrorType` 구조를 가집니다.
 */
const useCompiledInputError = (): Partial<
  Record<InputErrorKeyType, CompileErrorType>
> => {
  // `useInputContext` 훅을 통해 `error` 객체를 가져옵니다.
  const { error } = useInputContext();

  // `error` 객체가 존재하지 않으면 빈 객체를 반환합니다.
  const compiledError = useMemo(() => {
    if (!error) {
      return {}; // error가 없으면 빈 객체를 반환
    }

    // `error` 객체의 키와 값을 순회하며 새로운 형태의 객체로 변환합니다.
    return Object.fromEntries(
      // `Object.entries`로 `error` 객체를 배열로 변환한 후, 각 항목을 처리합니다.
      (Object.entries(error) as [InputErrorKeyType, InputErrorType][]).map(
        ([key, value]) => [
          key, // 에러의 키는 그대로 사용
          {
            regExp: new RegExp(value.regExp), // 정규 표현식 문자열을 RegExp 객체로 변환
            errorMessage: value.errorMessage, // 에러 메시지는 그대로 사용
          },
        ]
      )
    ) as Partial<Record<InputErrorKeyType, CompileErrorType>>; // 반환되는 객체 타입을 명시적으로 설정
  }, [error]); // `error` 객체가 변경될 때마다 `compiledError`가 다시 계산됩니다.

  // 최종적으로 가공된 `compiledError` 객체를 반환합니다.
  return compiledError;
};

export default useCompiledInputError;
