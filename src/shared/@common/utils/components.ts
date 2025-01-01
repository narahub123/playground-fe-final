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

export { joinClassNames };
