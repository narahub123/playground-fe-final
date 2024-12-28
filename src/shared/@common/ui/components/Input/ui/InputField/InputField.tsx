import { useAppDispatch } from "@app/store";
import { useInputContext } from "../../context";
import styles from "./InputField.module.css";
import { useEffect, useMemo } from "react";

interface InputFieldProps {}

const InputField = ({}: InputFieldProps) => {
  const dispatch = useAppDispatch();
  // InputContext를 통해 필요한 값 불러오기
  const {
    inputValue,
    setInputValue,
    inputRef,
    setInputRef,
    field,
    showPassword,
    maxLength,
    setErrorMessage,
    error,
    setIsValid,
  } = useInputContext();

  const { regExp, defaultErrorMsg, errorList, empty } = error;

  // 문자열을 정규 표현식으로 변경
  const defaultErrorRegex = useMemo(() => new RegExp(regExp), [regExp]);
  const errorRegexList = useMemo(
    () => (errorList || []).map((err) => new RegExp(err.regExp)),
    [errorList]
  );

  // inputRef 업데이트
  useEffect(() => {
    if (!inputRef) return;

    setInputRef(inputRef);
  }, [inputRef]);

  // onChange 이벤트 핸들러: inputValue 업데이트
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // value가 maxlength보다 긴 경우
    if (maxLength && value.length > maxLength && errorList) {
      setErrorMessage(errorList[1].errorMsg);
      return;
    }

    dispatch(setInputValue(value));

    // 빈문자열인 경우
    if (value === "" && empty) {
      setErrorMessage(empty);
      setIsValid(false);
    }

    // 유효성 검사: 최소 글자수 이전
    for (const regex of errorRegexList) {
      if (!errorList) return;
      if (!regex.test(value)) {
        setErrorMessage(
          errorList.find((err) => err.regExp === regex.source)?.errorMsg || ""
        );
        setIsValid(false);
        return;
      }
    }

    // 유효성 검사 : 최소 글자수 이후
    if (!defaultErrorRegex.test(value)) {
      setErrorMessage(defaultErrorMsg);
      setIsValid(false);
    } else {
      setErrorMessage("");
      setIsValid(true);
    }
  };

  return (
    <input
      type={field === "password" && !showPassword ? "password" : "text"}
      className={styles["input__field"]}
      value={inputValue} // 기본 값
      ref={inputRef} // input 참조
      id={field} // label과 연결
      onChange={(e) => handleChange(e)}
    />
  );
};

export default InputField;
