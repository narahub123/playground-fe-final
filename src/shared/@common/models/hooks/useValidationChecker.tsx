import { useEffect, useState } from "react";

/**
 * 유효성 검사를 수행하는 함수
 *
 * @param {boolean | { [key: string]: boolean }} validObj - 유효성 검사 결과를 담고 있는 객체 또는 boolean 값
 * @returns {boolean} - 유효성 검사 결과 (모든 값이 true일 경우 true)
 */
const validationChecker = (validObj: boolean | { [key: string]: boolean }) => {
  if (typeof validObj === "boolean") {
    // validObj가 boolean일 경우 해당 값을 그대로 반환
    return validObj;
  } else {
    // validObj가 객체일 경우, 모든 값이 true인지 확인
    return Object.values(validObj).every((isValid) => isValid);
  }
};

/**
 * 유효성 검사 결과를 관리하는 커스텀 훅
 *
 * @param {boolean | { [key: string]: boolean }} validObj - 부모에서 전달된 유효성 검사 결과 (객체 또는 boolean 값)
 * @returns {{ validation: boolean }} - 유효성 검사 결과를 포함한 객체
 *
 * @example
 * const { validation } = useValidationChecker({ field1: true, field2: false });
 * console.log(validation); // false
 */
const useValidationChecker = (
  validObj: boolean | { [key: string]: boolean }
) => {
  // 유효성 검사 결과를 저장하는 state
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // 유효성 검사 결과를 계산
    const result = validationChecker(validObj);

    // 이전 값과 비교하여 변경 시에만 업데이트
    setIsValid((prev) => (prev === result ? prev : result));
  }, [validObj]); // validObj가 변경될 때마다 실행

  return {
    validation: isValid, // 유효성 검사 결과 반환
  };
};

export default useValidationChecker;
