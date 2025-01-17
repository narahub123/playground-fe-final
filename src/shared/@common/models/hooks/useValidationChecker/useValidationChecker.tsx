import { useEffect, useState } from "react";
import { ButtonIsValidType, FieldType } from "./types";
import ButtonRegExp from "./regExps";
import { SignupState } from "@shared/auth/models/slices/signupSlice";
import { UserState } from "../../slices/userSlice";
import { ScreenValidationType } from "@shared/@common/ui/components/Modal/types";
import { DisplayState } from "../../slices/displaySlice";

/**
 * 각 필드의 유효성을 검사하는 함수입니다.
 *
 * @param field 유효성을 검사할 필드
 * @param sliceState 유효성 검사를 위한 사용자 데이터
 * @returns 유효성 검사 결과 (true 또는 false)
 */
const validateField = (field: FieldType, sliceState: any) => {
  // 필드 값 가져오기
  const value =
    field === "year" || field === "month" || field === "date"
      ? sliceState["birth"][field]
      : sliceState[field];

  // 해당 필드에 대한 정규 표현식 가져오기
  const regExp = ButtonRegExp[field]
    ? new RegExp(ButtonRegExp[field] as string)
    : null;

  // 값 또는 정규식이 없으면 유효성 검사 실패
  if (!value || !regExp) return false;

  // 정규식 검사
  return regExp.test(value as string);
};

interface useValidationCheckerProps {
  /**
   * 유효성 검사를 진행할 필드 목록
   */
  fields: FieldType[];

  /**
   * 유효성 검사를 위한 사용자 데이터
   */
  sliceState: SignupState | UserState | DisplayState;

  /**
   * 화면 유효성 상태를 업데이트하는 선택적 상태 디스패치 함수.
   * `screenValidations` 상태를 업데이트하는 데 사용됩니다.
   *
   * @property {React.Dispatch<React.SetStateAction<ScreenValidationType>>} [setScreenValidations] - 유효성 상태를 업데이트하는 디스패치 함수 (선택적).
   */
  setScreenValidations?: React.Dispatch<
    React.SetStateAction<ScreenValidationType>
  >;

  /**
   * 스크린 이름
   */
  screenName?: string;
}

/**
 * 유효성 검사 훅으로, 주어진 필드 목록에 대해 유효성 검사 결과를 반환합니다.
 *
 * @param fields 유효성 검사할 필드 목록
 * @param sliceState 사용자 데이터 (예: 가입 정보를 담고 있는 상태)
 * @returns {Object} 유효성 검사 결과와 관련된 상태 값과 함수
 */
const useValidationChecker = ({
  fields,
  sliceState,
  setScreenValidations,
  screenName,
}: useValidationCheckerProps) => {
  const [isValid, setIsValid] = useState<ButtonIsValidType>(false);
  const [validationResult, setValidationResult] = useState(false);

  // 유효성 초기값 설정: 한번만 실행됨
  useEffect(() => {
    if (!sliceState || !fields || fields.length === 0) {
      setIsValid(false);
      return;
    }

    // fields의 원소가 1개일 때
    if (fields.length === 1) setIsValid(validateField(fields[0], sliceState));
    else {
      const validatedFields: ButtonIsValidType = {};

      fields.forEach((field) => {
        validatedFields[field] = validateField(field, sliceState);
      });

      setIsValid(validatedFields);
    }
  }, []); // 의존성 배열에 상태 변경이 없으므로 한번만 실행됨

  useEffect(() => {
    // 유효성 값을 계산
    const result =
      typeof isValid === "boolean"
        ? isValid // `boolean` 값 그대로 사용
        : Object.values(isValid).every(Boolean); // 모든 필드가 `true`인지 확인

    // 스크린 유효성 상태를 업데이트할 필요가 있는 경우
    if (setScreenValidations && screenName && result !== undefined) {
      setScreenValidations((prev) => {
        // 기존 값과 동일하면 업데이트하지 않음
        if (prev[screenName] === result) return prev;

        // 기존 값을 복사하고 새로운 값을 반영
        return {
          ...prev,
          [screenName]: result,
        };
      });
    }

    setValidationResult(result);
  }, [isValid]);

  return {
    isValid, // 각 필드의 유효성 결과
    setIsValid, // 유효성 상태를 설정하는 함수
    validationResult, // 전체 유효성 검사 결과
  };
};

export default useValidationChecker;
