/**
 * 비밀번호의 최대 길이를 나타내는 상수입니다.
 * 이 값은 비밀번호 길이가 이보다 길어지지 않도록 제한하는 데 사용됩니다.
 *
 * @constant
 * @type {number}
 */
export const PASSWORD_MAX = 30; // 비밀번호 최대 길이

/**
 * 비밀번호의 최소 길이를 나타내는 상수입니다.
 * 이 값은 비밀번호 길이가 이보다 짧으면 안되도록 제한하는 데 사용됩니다.
 *
 * @constant
 * @type {number}
 */
export const PASSWORD_MIN = 8; // 비밀번호 최소 길이

/**
 * 비밀번호에 허용되는 특수문자들을 나열한 문자열입니다.
 * 이 문자열에 포함된 문자들은 비밀번호에 포함될 수 있는 특수문자입니다.
 *
 * @constant
 * @type {string}
 */
export const PASSWORD_SPECIAL_CHARECTERS = `!@#$%^&*()_+={\\[\\]:;"'<>,.?/\\\\|\\-`; // 비밀번호에 허용되는 특수문자

/**
 * 사용자 이름의 최소 길이를 정의하는 상수입니다.
 * 이 값은 사용자 이름이 최소한 이 길이 이상이어야 함을 나타냅니다.
 *
 * @constant
 * @type {number}
 */
export const USERNAME_MIN = 1; // 사용자 이름 최소 길이

/**
 * 사용자 이름의 최대 길이를 정의하는 상수입니다.
 * 이 값은 사용자 이름이 최대 이 길이 이하이어야 함을 나타냅니다.
 *
 * @constant
 * @type {number}
 */
export const USERNAME_MAX = 30; // 사용자 이름 최대 길이
