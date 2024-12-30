import styles from "./InputField.module.css";
import { useEffect } from "react";
import { useAppDispatch } from "@app/store";
import { useInputContext } from "../../context";
import { useCompiledInputError } from "../../hooks";
import Text from "../../../Text/Text";
import { joinClassNames } from "@shared/@common/utils";

/**
 * `InputField` 컴포넌트는 입력 필드를 렌더링하고, 입력값과 유효성 검사, 에러 메시지 처리를 담당합니다.
 * 이 컴포넌트는 텍스트 필드 혹은 드롭다운을 렌더링할 수 있으며, 유효성 검사와 관련된 로직을 처리합니다.
 *
 * @returns {JSX.Element} - 렌더링된 `Text` 또는 `input` 요소
 */
const InputField = () => {
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
    errorMessage,
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

  /**
   * `inputRef`가 변경될 때마다, 이를 `setInputRef`로 설정합니다.
   *
   * @returns {void}
   */
  useEffect(() => {
    if (!inputRef) return;

    setInputRef(inputRef);
  }, [inputRef]);

  /**
   * onChange 이벤트 핸들러: inputValue를 업데이트하고 유효성 검사를 수행합니다.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - input 요소의 change 이벤트 객체
   *
   * @returns {void} - 반환값 없음
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // maxlength가 설정되어 있고, 입력값이 maxlength를 초과한 경우
    if (maxLength && value.length > maxLength && errorMsgList) {
      // 에러 메시지가 존재하지 않으면 종료
      if (!errorMsgList[1]) return;

      // 에러 메시지가 변경되었는지 확인 후 변경되었으면 에러 메시지 설정
      if (errorMessage !== errorMsgList[1]) {
        setErrorMessage(errorMsgList[1]);
        return;
      }
    }

    // 입력값이 변경되면 상태를 업데이트
    dispatch(setInputValue(value));

    // 정규 표현식이 제공된 경우에만 유효성 검사 진행
    if (typeof defaultErrorRegex !== "string") {
      // 빈 문자열인 경우 처리
      if (value === "" && empty) {
        // 에러 메시지가 변경되었는지 확인 후 변경되었으면 에러 메시지 설정
        if (errorMessage !== empty) {
          setErrorMessage(empty);
          setIsValid(false); // 유효성 실패
        }
        return;
      }

      // 유효성 검사: 각 정규 표현식을 통해 유효성 체크
      for (const regex of errorRegexList) {
        if (!errorMsgList) return; // errorMsgList가 없으면 종료
        if (!regex.test(value)) {
          // 유효성 검사 실패 시 해당 에러 메시지를 가져오고, 설정하기
          const index = errorRegexList.findIndex(
            (err) => err.source === regex.source
          );
          const errorMsg = errorMsgList[index] || "";

          // 에러 메시지가 변경되었는지 확인 후 변경되었으면 에러 메시지 설정
          if (errorMessage !== errorMsg) {
            setErrorMessage(errorMsg);
            setIsValid(false); // 유효성 실패
            return;
          }
        }
      }

      // 유효성 검사: 최소 글자수 이후 검사
      if (!defaultErrorRegex.test(value)) {
        // 기본 정규식에 맞지 않으면 에러 메시지 설정
        if (errorMessage !== defaultErrorMsg) {
          setErrorMessage(defaultErrorMsg);
          setIsValid(false); // 유효성 실패
        }
      } else {
        // 유효성 검사 성공 시 에러 메시지를 지우고 유효성 성공
        if (errorMessage !== "") {
          setErrorMessage(""); // 에러 메시지를 리셋
          setIsValid(true); // 유효성 성공
        }
      }
    }
  };

  /**
   * InputField에 사용될 클래스 이름입니다.
   *
   * `joinClassNames` 유틸리티를 사용하여 동적으로 클래스 이름을 결합합니다.
   * - `input__field--disabled`: 비활성화 상태일 때 적용
   *
   * @type {string}
   */
  const className = joinClassNames([
    styles["input__field"],
    disabled ? styles["input__field--disabled"] : "",
  ]);

  return (
    <>
      {/* list 존재 여부로 드롭다운 존재 여부 판단 */}
      {list ? (
        /**
         * 드롭다운이 존재하는 경우, 선택된 항목의 텍스트를 표시합니다.
         * @component Text
         * @prop {string} text - 드롭다운 항목 중 선택된 항목의 텍스트. 값이 없으면 inputValue를 표시.
         * @prop {string} className - 추가적인 클래스 이름
         */
        <Text
          text={
            list.find((item) => item.value === inputValue)?.text || inputValue
          }
          subClassName={className}
        />
      ) : (
        /**
         * 드롭다운이 존재하지 않는 경우, 기본 input 필드를 렌더링합니다.
         * @element input
         * @prop {string} type - 입력 필드의 유형 (password는 showPassword 상태에 따라 결정)
         * @prop {string} className - 입력 필드의 CSS 클래스
         * @prop {string} value - 입력 필드의 현재 값
         * @prop {React.RefObject<HTMLInputElement>} ref - 입력 필드의 참조 객체
         * @prop {string} id - 입력 필드와 연결된 label의 id
         * @prop {function} onChange - 입력 값 변경 시 호출되는 이벤트 핸들러. disabled 상태에서는 undefined.
         * @prop {boolean} disabled - 입력 필드 비활성화 여부
         * @prop {boolean} aria-required - 입력 필드가 필수인지 여부
         * @prop {boolean} aria-invalid - 입력 필드의 유효성 여부 (true일 경우 유효하지 않음)
         * @prop {string} aria-describedby - 에러 메시지와 연결된 설명 요소의 id
         */
        <input
          type={field === "password" && !showPassword ? "password" : "text"}
          className={className}
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
