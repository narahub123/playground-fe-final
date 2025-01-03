import {
  EMAIL_SPECIAL_CHARACTERS,
  PASSWORD_MAX,
  PASSWORD_MIN,
  PASSWORD_SPECIAL_CHARECTERS,
  USERNAME_MIN,
} from "./constants";

/**
 * 빈 문자열이 아닌지 확인하는 정규 표현식
 *
 * - 입력 값이 최소한 하나 이상의 문자를 포함해야 유효합니다.
 *
 * @constant
 * @type {string}
 * @example
 * const regex = new RegExp(EMPTY);
 * console.log(regex.test("hello")); // true
 * console.log(regex.test("")); // false
 */
export const EMPTY = `^.+$`;

/**
 * 사용자 이름의 최소 길이를 확인하는 정규 표현식
 *
 * - 입력 값의 길이가 최소 `USERNAME_MIN`자 이상이어야 합니다.
 * - `${USERNAME_MIN}`은 사용자 이름의 최소 길이를 정의한 상수입니다.
 *
 * @constant
 * @type {string}
 * @example
 * const regex = new RegExp(USERNAME_UNDER_MINIMUM);
 * console.log(regex.test("john")); // true, 최소 길이 이상
 * console.log(regex.test("ab")); // false, 최소 길이 미만
 */
export const USERNAME_UNDER_MINIMUM = `^.{${USERNAME_MIN},}$`;

/**
 * 비밀번호가 최소 길이를 충족하는지 확인하는 정규 표현식입니다.
 * 이 표현식은 비밀번호가 최소 길이 이상이며 공백을 포함하지 않도록 제한합니다.
 *
 * - `${PASSWORD_MIN}`은 최소 길이로 정의된 상수입니다. (예: 최소 비밀번호 길이는 8자리)
 *
 * @constant
 * @type {string}
 * @example
 * // 비밀번호 예시: "mypassword123"
 */
export const PASSWORD_UNDER_MINIMUM = `^[^\\s]{${PASSWORD_MIN},}$`;

/**
 * 비밀번호에 허용되는 특수문자들을 나열한 문자열입니다.
 * 이 문자열에 포함된 문자들은 비밀번호에 포함될 수 있는 특수문자입니다.
 *
 * - `${PASSWORD_SPECIAL_CHARECTERS}`는 허용된 특수문자들을 정의한 상수입니다. (예: "!@#$%^&*()_+={\[\\]:;\"'<>,.?/\\|-")
 *
 * @constant
 * @type {string}
 * @example
 * // 비밀번호 예시: "password123!" (허용된 특수문자 포함)
 */
export const PASSWORD_FORBIDDEN = `^[A-Za-z0-9${PASSWORD_SPECIAL_CHARECTERS}]*$`;

/**
 * 비밀번호가 강력한 조건을 충족하는지 확인하는 정규 표현식입니다.
 * 이 표현식은 비밀번호가 다음의 조건을 만족하는지 검사합니다:
 * - 적어도 하나의 대문자, 소문자, 숫자, 특수문자를 포함해야 함
 * - 공백을 포함하지 않으며 최소 및 최대 길이를 충족해야 함
 *
 * - `${PASSWORD_MIN}`과 `${PASSWORD_MAX}`는 각각 비밀번호의 최소 및 최대 길이를 정의한 상수입니다.
 * - `${PASSWORD_SPECIAL_CHARECTERS}`는 허용된 특수문자들을 정의한 상수입니다.
 *
 * @constant
 * @type {string}
 * @example
 * // 비밀번호 예시: "Password123!" (대소문자, 숫자, 특수문자 포함)
 */
export const PASSWORD_INCOMPLETE = `^(?=(.*[A-Z]))(?=(.*[a-z]))(?=(.*[0-9]))(?=.*[${PASSWORD_SPECIAL_CHARECTERS}])[^\\s]{${PASSWORD_MIN},${PASSWORD_MAX}}$`;

/**
 * 이메일 유효성 검사에 사용하는 정규 표현식입니다.
 *
 * @constant {string} EMAIL_FORMAT
 * @description
 * - 이 정규 표현식은 RFC 5322 표준을 기반으로 이메일 주소의 형식을 검사합니다.
 * - 로컬 부분(도메인 앞부분)은 아래의 규칙을 따릅니다:
 *   1. 영문자, 숫자, 그리고 특수문자 `!#$%&'*+/=?^_\`{|}~`를 허용합니다.
 *   2. 점(`.`)은 문자 사이에만 올 수 있으며, 연속될 수 없습니다.
 *   3. 점(`.`)으로 시작하거나 끝나는 로컬 부분은 허용되지 않습니다.
 * - 도메인 부분(도메인 뒷부분)은 아래의 규칙을 따릅니다:
 *   1. 숫자, 영문자, `-`, `.`를 포함할 수 있습니다.
 *   2. 연속된 특수문자는 허용되지 않으며, 특수문자로 시작하거나 끝날 수 없습니다.
 *   3. 최상위 도메인(TLD)은 최소 2글자 이상이어야 하며, 다중 TLD도 허용됩니다(예: `.co.kr`).
 *
 * @example
 * const email = "user.name+tag@example.com";
 * const isValid = new RegExp(EMAIL_FORMAT).test(email);
 * console.log(isValid); // true
 *
 * @example
 * const email = "user%name@example.org";
 * const isValid = new RegExp(EMAIL_FORMAT).test(email);
 * console.log(isValid); // true
 *
 * @example
 * const invalidEmail = ".username@example.com";
 * const isValid = new RegExp(EMAIL_FORMAT).test(invalidEmail);
 * console.log(isValid); // false
 *
 * @example
 * const invalidEmail = "user..name@example.com";
 * const isValid = new RegExp(EMAIL_FORMAT).test(invalidEmail);
 * console.log(isValid); // false
 */
export const EMAIL_FORMAT = `^[0-9a-zA-Z${EMAIL_SPECIAL_CHARACTERS}]+([.][0-9a-zA-Z${EMAIL_SPECIAL_CHARACTERS}]+)*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\\.[a-zA-Z]{2,}(\\.[a-zA-Z]{2,})?$`;
