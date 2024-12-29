import styles from "./InputField.module.css";
import { useEffect } from "react";
import { useAppDispatch } from "@app/store";
import { useInputContext } from "../../context";
import { useCompiledInputError } from "../../hooks";
import Text from "../../../Text/Text";
import { joinClassNames } from "@shared/@common/utils";

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
    isValid,
    setIsValid,
    list, // 드롭다운 목록
    disabled, // disabled 모드
  } = useInputContext();

  const {
    defaultErrorRegex,
    defaultErrorMsg,
    errorRegexList,
    errorMsgList,
    empty,
  } = useCompiledInputError();

  // inputRef 업데이트
  useEffect(() => {
    if (!inputRef) return;

    setInputRef(inputRef);
  }, [inputRef]);

  // onChange 이벤트 핸들러: inputValue 업데이트
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // value가 maxlength보다 긴 경우
    if (maxLength && value.length > maxLength && errorMsgList) {
      if (!errorMsgList[1]) return;

      setErrorMessage(errorMsgList[1]);
      return;
    }

    dispatch(setInputValue(value));

    // 정규 표현식이 제공되는 경우
    if (typeof defaultErrorRegex !== "string") {
      // 빈문자열인 경우
      if (value === "" && empty) {
        setErrorMessage(empty);
        setIsValid(false);
      }

      // 유효성 검사: 최소 글자수 이전
      for (const regex of errorRegexList) {
        if (!errorMsgList) return;
        if (!regex.test(value)) {
          const index = errorRegexList.findIndex(
            (err) => err.source === regex.source
          );
          setErrorMessage(errorMsgList[index] || "");
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
    }
  };

  return (
    <>
      {/* list 존재 여부로 드롭다운 존재 여부 판단 */}
      {list ? (
        // 드롭다운 존재하는 경우
        <Text
          text={
            list.find((item) => item.value === inputValue)?.text || inputValue
          }
          subClassName={joinClassNames([
            disabled ? styles[`input__field--disabled`] : "",
          ])}
        />
      ) : (
        <input
          type={field === "password" && !showPassword ? "password" : "text"}
          className={joinClassNames([
            styles["input__field"],
            disabled ? styles["input__field--disabled"] : "",
          ])}
          value={inputValue} // 기본 값
          ref={inputRef} // input 참조
          id={field} // label과 연결
          onChange={disabled ? undefined : (e) => handleChange(e)}
          disabled={disabled} // disabled 모드
          aria-required={true} // 필수 입력 필드
          aria-invalid={!isValid} // 유효성 실패 여부
          aria-describedby="error-message" // 에러 메시지를 포함한 추가적인 정보와 연결
        />
      )}
    </>
  );
};

export default InputField;
