import styles from "./InputField.module.css";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@app/store";
import { joinClassNames } from "@shared/@common/utils";
import { useInputContext } from "@shared/@common/ui/components/Input1/context";
import { useCompiledInputError } from "@shared/@common/ui/components/Input1/hooks";
import {
  checkEmailDuplicateInSignupAPI,
  checkUserIdDuplicateInSignupAPI,
} from "@shared/auth/apis";

interface InputFieldProps {
  /**
   * 추가적인 클래스명을 지정할 수 있는 프로퍼티. 기존 className에 덧붙여짐
   * @type {string}
   */
  className?: string;
}

/**
 * `InputField` 컴포넌트는 입력 필드를 렌더링하고, 입력값과 유효성 검사, 에러 메시지 처리를 담당합니다.
 * 이 컴포넌트는 텍스트 필드 혹은 드롭다운을 렌더링할 수 있으며, 유효성 검사와 관련된 로직을 처리합니다.
 *
 * @returns {JSX.Element} - 렌더링된 `Text` 또는 `input` 요소
 */
const InputField = ({ className }: InputFieldProps) => {
  const dispatch = useAppDispatch();

  /**
   * 상태: 비밀번호 확인 입력 값을 관리합니다.
   */
  const [passwordConfirmValue, setPasswordConfirmValue] = useState("");

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
    EMPTY,
    FORBIDDEN,
    UNDER_MINIMUM,
    INCOMPLETE,
    EXCEED,
    FORMAT,
    DUPLICATE,
    DISCONNECT,
    REQUIRED,
    MISMATCH,
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
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // password_confirm 필드이고 password 필드의 값이 없을 때
    if (field === "password_confirm" && !inputValue && REQUIRED) {
      setErrorMessage(REQUIRED.errorMessage);
      return; // 입력을 진행하지 않음
    }

    // 최대 길이를 초과하면 EXCEED 에러를 설정
    if (maxLength && value.length > maxLength && EXCEED) {
      if (errorMessage !== EXCEED.errorMessage) {
        setErrorMessage(EXCEED.errorMessage);
      }
      return;
    }

    // 입력값이 변경되면 상태를 업데이트
    // password_confirm은 내부 상태를 업데이트
    if (field === "password_confirm") setPasswordConfirmValue(value);
    // 그외는 전달 받은 reducer를 통해서 외부 상태를 업데이트
    else {
      const update = setInputValue(value);
      if (
        typeof update === "object" &&
        "type" in update &&
        "payload" in update
      ) {
        dispatch(update);
      } else {
        setInputValue(value); // 상태 업데이트
      }
    }

    // "password_confirm" 필드인 경우 유효성 검사를 진행하지 않고 입력 값과 password 필드의 값을 비교
    if (field === "password_confirm" && inputValue !== "" && MISMATCH) {
      const isMatching = value === inputValue; // 입력 값과 password 값이 일치하는지 확인

      const msg = isMatching ? "" : MISMATCH.errorMessage; // 일치 여부에 따른 에러 메시지 설정

      if (errorMessage === msg) return; // 기존 에러 메시지와 동일하면 상태 업데이트 생략

      setErrorMessage(msg); // 새로운 에러 메시지 설정

      setIsValid &&
        setIsValid((prev) => {
          // 현재 상태가 객체이고, null이 아닌 경우에만 처리
          if (prev && typeof prev === "object") {
            // 기존 상태 값과 비교하여 변경이 필요한 경우에만 업데이트
            if (prev[field] !== isMatching) {
              return { ...prev, [field]: isMatching };
            }
            return prev; // 값이 동일하면 기존 상태 반환
          }
          // 현재 상태가 객체가 아닌 경우 isMatching 값을 반환
          return isMatching;
        });

      return; // 유효성 검사 진행 중단
    }

    // password_check 유효성 검사를 하지 않음
    if (field === "password_check") {
      // 값이 존재한다면 true 없다면 false
      setIsValid &&
        setIsValid((prev) => {
          // 현재 상태가 객체이고, null이 아닌 경우에만 처리
          if (prev && typeof prev === "object") {
            // 기존 상태 값과 비교하여 변경이 필요한 경우에만 업데이트
            if (prev[field] !== Boolean(value)) {
              return { ...prev, [field]: Boolean(value) };
            }
            return prev; // 값이 동일하면 기존 상태 반환
          }
          // 현재 상태가 객체가 아닌 경우 isMatching 값을 반환
          return Boolean(value);
        });

      return; // 유효성 검사 진행 중단
    }

    // 각 규칙에 맞는 유효성 검사를 차례대로 수행
    if (EMPTY && !value.match(EMPTY.regExp)) {
      if (errorMessage !== EMPTY.errorMessage) {
        setErrorMessage(EMPTY.errorMessage);
        setIsValid &&
          setIsValid((prev) => {
            // typeof null도 "object"로 나오기 때문에, null을 체크하는 조건을 추가하여 예기치 않은 상황을 방지
            if (typeof prev === "object" && prev !== null) {
              // 기존 값과 동일한지 확인 후 값이 다르면 업데이트
              if (prev[field] !== false) {
                return { ...prev, [field]: false };
              }
              return prev; // 값이 같으면 기존 객체 그대로 반환
            }
            // 객체가 아니면 false로 설정
            return false;
          });
      }
      return;
    } else if (FORBIDDEN && !value.match(FORBIDDEN.regExp)) {
      if (errorMessage !== FORBIDDEN.errorMessage) {
        setErrorMessage(FORBIDDEN.errorMessage);
        setIsValid &&
          setIsValid((prev) => {
            // typeof null도 "object"로 나오기 때문에, null을 체크하는 조건을 추가하여 예기치 않은 상황을 방지
            if (typeof prev === "object" && prev !== null) {
              // 기존 값과 동일한지 확인 후 값이 다르면 업데이트
              if (prev[field] !== false) {
                return { ...prev, [field]: false };
              }
              return prev; // 값이 같으면 기존 객체 그대로 반환
            }
            // 객체가 아니면 false로 설정
            return false;
          });
      }
      return;
    } else if (UNDER_MINIMUM && !value.match(UNDER_MINIMUM.regExp)) {
      if (errorMessage !== UNDER_MINIMUM.errorMessage) {
        setErrorMessage(UNDER_MINIMUM.errorMessage);
        setIsValid &&
          setIsValid((prev) => {
            // typeof null도 "object"로 나오기 때문에, null을 체크하는 조건을 추가하여 예기치 않은 상황을 방지
            if (typeof prev === "object" && prev !== null) {
              // 기존 값과 동일한지 확인 후 값이 다르면 업데이트
              if (prev[field] !== false) {
                return { ...prev, [field]: false };
              }
              return prev; // 값이 같으면 기존 객체 그대로 반환
            }
            // 객체가 아니면 false로 설정
            return false;
          });
      }
      return;
    } else if (INCOMPLETE && !value.match(INCOMPLETE.regExp)) {
      if (errorMessage !== INCOMPLETE.errorMessage) {
        setErrorMessage(INCOMPLETE.errorMessage);
        setIsValid &&
          setIsValid((prev) => {
            // typeof null도 "object"로 나오기 때문에, null을 체크하는 조건을 추가하여 예기치 않은 상황을 방지
            if (typeof prev === "object" && prev !== null) {
              // 기존 값과 동일한지 확인 후 값이 다르면 업데이트
              if (prev[field] !== false) {
                return { ...prev, [field]: false };
              }
              return prev; // 값이 같으면 기존 객체 그대로 반환
            }
            // 객체가 아니면 false로 설정
            return false;
          });
      }
      return;
    } else if (FORMAT && !value.match(FORMAT.regExp)) {
      if (errorMessage !== FORMAT.errorMessage) {
        setErrorMessage(FORMAT.errorMessage);
        setIsValid &&
          setIsValid((prev) => {
            // typeof null도 "object"로 나오기 때문에, null을 체크하는 조건을 추가하여 예기치 않은 상황을 방지
            if (typeof prev === "object" && prev !== null) {
              // 기존 값과 동일한지 확인 후 값이 다르면 업데이트
              if (prev[field] !== false) {
                return { ...prev, [field]: false };
              }
              return prev; // 값이 같으면 기존 객체 그대로 반환
            }
            // 객체가 아니면 false로 설정
            return false;
          });
      }
      return;
    } else {
      const signupAPI =
        field === "email"
          ? checkEmailDuplicateInSignupAPI
          : field === "userId"
          ? checkUserIdDuplicateInSignupAPI
          : undefined;
      // 모든 유효성 검사를 통과하면 API를 통해서 중복 검사를 함
      if (signupAPI) {
        const { isDuplicate, type } = await signupAPI(value);

        if (isDuplicate) {
          if (type === "duplicate") {
            setErrorMessage(value + DUPLICATE?.errorMessage || "");
            setIsValid &&
              setIsValid((prev) => {
                // typeof null도 "object"로 나오기 때문에, null을 체크하는 조건을 추가하여 예기치 않은 상황을 방지
                if (typeof prev === "object" && prev !== null) {
                  // 기존 값과 동일한지 확인 후 값이 다르면 업데이트
                  if (prev[field] !== false) {
                    return { ...prev, [field]: false };
                  }
                  return prev; // 값이 같으면 기존 객체 그대로 반환
                }
                // 객체가 아니면 false로 설정
                return false;
              });
            return;
          } else if (type === "disconnect") {
            setErrorMessage(DISCONNECT?.errorMessage || "");
            setIsValid &&
              setIsValid((prev) => {
                // typeof null도 "object"로 나오기 때문에, null을 체크하는 조건을 추가하여 예기치 않은 상황을 방지
                if (typeof prev === "object" && prev !== null) {
                  // 기존 값과 동일한지 확인 후 값이 다르면 업데이트
                  if (prev[field] !== false) {
                    return { ...prev, [field]: false };
                  }
                  return prev; // 값이 같으면 기존 객체 그대로 반환
                }
                // 객체가 아니면 false로 설정
                return false;
              });
            return;
          }
        }
      }
      // 모든 유효성 검사를 통과하면 에러 메시지와 유효성 상태를 초기화
      setErrorMessage("");
      setIsValid &&
        setIsValid((prev) => {
          // typeof null도 "object"로 나오기 때문에, null을 체크하는 조건을 추가하여 예기치 않은 상황을 방지
          if (typeof prev === "object" && prev !== null) {
            // 기존 값과 동일한지 확인 후 값이 다르면 업데이트
            if (prev[field] !== true) {
              return { ...prev, [field]: true };
            }
            return prev; // 값이 같으면 기존 객체 그대로 반환
          }
          // 객체가 아니면 true로 설정
          return true;
        });
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
  const classNames = joinClassNames([
    styles["input__field"],
    disabled ? styles["input__field--disabled"] : "",
    className,
  ]);

  return (
    <input
      type={field.includes("password") && !showPassword ? "password" : "text"}
      className={classNames}
      value={
        field === "password_confirm"
          ? passwordConfirmValue
          : list?.find((item) => item.value === inputValue)?.text || inputValue
      } // 기본 값
      ref={inputRef} // input 참조
      id={field} // label과 연결
      onChange={disabled ? undefined : (e) => handleChange(e)}
      disabled={disabled} // disabled 모드
      aria-required={true} // 필수 입력 필드
      aria-invalid={!isValid} // 유효성 실패 여부
      aria-describedby={list ? undefined : "error-message"} // 에러 메시지를 포함한 추가적인 정보와 연결
      readOnly={list && list.length > 0 ? true : undefined}
    />
  );
};

export default InputField;
