import { useEffect, useMemo, useState } from "react";
import { ButtonIsValidType, FieldType } from "./types";
import ButtonRegExp from "./regExps";
import { SignupState } from "@features/auth-setting/models/slices/signupSlice";
import { UserState } from "../../slices/userSlice";

/**
 * 유효성 검사 객체의 값을 확인하는 함수입니다.
 *
 * @param validObj 유효성 검사 결과를 나타내는 객체 혹은 boolean 값
 * @returns 유효성 검사 결과
 */
const validationChecker = (validObj: boolean | { [key: string]: boolean }) =>
  typeof validObj === "boolean"
    ? validObj
    : Object.values(validObj).every(Boolean);

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
  sliceState: SignupState | UserState;
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
}: useValidationCheckerProps) => {
  const [isValid, setIsValid] = useState<ButtonIsValidType>(false);

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

  /**
   * 유효성 검사 결과를 반환하는 메모이제이션된 값
   */
  const validationResult = useMemo(() => validationChecker(isValid), [isValid]);

  return {
    isValid, // 각 필드의 유효성 결과
    setIsValid, // 유효성 상태를 설정하는 함수
    validationResult, // 전체 유효성 검사 결과
  };
};

export default useValidationChecker;
