/**
 * 주어진 클래스 이름 배열에서 `undefined` 또는 falsy 값을 제거하고, 공백으로 결합된 문자열을 반환합니다.
 *
 * @param {Array<string | undefined>} classNames - 클래스 이름 또는 `undefined` 값을 포함한 배열.
 * @returns {string} 유효한 클래스 이름만 공백으로 결합한 문자열.
 *
 */
const joinClassNames = (classNames: (string | undefined)[]) => {
  return classNames.filter(Boolean).join(" ");
};

/**
 * 주어진 문자열에서 숫자 값을 추출합니다.
 * 소수점을 제외한 모든 숫자가 아닌 문자를 제거한 후 숫자로 변환합니다.
 *
 * @param {string} text - 숫자와 숫자가 아닌 문자가 포함된 입력 문자열.
 * @returns {number} 문자열에서 추출된 숫자 값. 유효한 숫자가 없을 경우 0을 반환합니다.
 *
 * @example
 * getNumbersFromText("123.45px"); // 반환: 123.45
 * getNumbersFromText("abc100def"); // 반환: 100
 * getNumbersFromText("text"); // 반환: 0
 */
const getNumbersFromText = (text: string) => {
  return Number(text.replace(/[^0-9.]/g, ""));
};

export { joinClassNames, getNumbersFromText };
