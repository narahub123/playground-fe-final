import { useMemo } from "react";
import { CompiledInputErrorType, useInputContext } from "../context";

/**
 * `useCompiledInputError` 훅은 입력 필드의 에러 정보를 정규 표현식과 메시지로 변환하여 제공합니다.
 *
 * @returns {CompiledInputError} 에러 정보를 담은 객체
 */
const useCompiledInputError = (): CompiledInputErrorType => {
  const { error } = useInputContext();
  const { regExp, defaultErrorMsg, errorList, empty } = error;

  if (!regExp)
    return {
      defaultErrorRegex: regExp, // string
      defaultErrorMsg,
      errorRegexList: [],
      errorMsgList: [],
      empty,
    };

  /** 기본 에러 정규 표현식을 생성 */
  const defaultErrorRegex = useMemo(() => new RegExp(regExp), [regExp]);

  /** 에러 목록의 각 정규 표현식을 생성 */
  const errorRegexList = useMemo(
    () => (errorList || []).map((err) => new RegExp(err.regExp)),
    [errorList]
  );

  /** 에러 목록의 메시지 배열을 생성 */
  const errorMsgList = useMemo(
    () => (errorList || []).map((err) => err.errorMsg),
    [errorList]
  );

  return {
    defaultErrorRegex, // RegExp
    defaultErrorMsg,
    errorRegexList,
    errorMsgList,
    empty,
  };
};

export default useCompiledInputError;
