import { useMemo } from "react";
import { useInputContext } from "../context";

// 문자열을 정규 표현식으로 변경
const useCompiledInputError = () => {
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

  const defaultErrorRegex = useMemo(() => new RegExp(regExp), [regExp]);

  const errorRegexList = useMemo(
    () => (errorList || []).map((err) => new RegExp(err.regExp)),
    [errorList]
  );

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
