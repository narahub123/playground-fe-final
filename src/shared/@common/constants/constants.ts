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

/**
 * 이메일 로컬 부분에서 허용되는 특수문자 집합입니다.
 *
 * @constant {string} EMAIL_SPECIAL_CHARACTERS
 * @description
 * - 이 상수는 RFC 5322 표준에 따라 이메일 로컬 부분(도메인 앞부분)에서 사용할 수 있는 특수문자를 정의합니다.
 * - 이 특수문자들은 로컬 부분에 올바르게 포함될 경우 유효한 이메일 주소로 간주됩니다.
 * - 단, 점(`.`)은 이 집합에 포함되지 않으며, 별도의 규칙(연속 금지, 시작/끝 금지)에 따라 처리됩니다.
 *
 * @example
 * const specialChars = EMAIL_SPECIALCHARACTERS.split('');
 * console.log(specialChars.includes('!')); // true
 * console.log(specialChars.includes('.')); // false
 *
 * @example
 * const isValidChar = (char) => EMAIL_SPECIALCHARACTERS.includes(char);
 * console.log(isValidChar('#')); // true
 * console.log(isValidChar('.')); // false
 */
export const EMAIL_SPECIAL_CHARACTERS =
  "\\!\\#\\$\\%\\&\\'*\\+\\/\\=?\\^_\\`\\{\\|\\}\\~";

/**
 * @constant USERID_SPECIAL_CHARACTERS
 * @description 유저 아이디에서 허용되는 특수 문자를 정의합니다.
 * 현재는 밑줄(`_`)만 허용하도록 설정되어 있습니다.
 * 이 값을 변경하여 추가적인 특수 문자를 허용할 수 있습니다.
 *
 * @example
 * const regex = new RegExp(`^[A-Za-z0-9${USERID_SPECIAL_CHARACTERS}]+$`);
 * regex.test("user_name"); // true
 */
export const USERID_SPECIAL_CHARACTERS = "_";

/**
 * @constant USERID_MIN
 * @description 유저 아이디의 최소 길이를 정의합니다.
 * 최소 길이는 4글자로 설정되어 있으며, 이를 변경하여 더 작은 값 또는 큰 값으로 설정할 수 있습니다.
 *
 * @example
 * const regex = new RegExp(`^[A-Za-z\\d${USERID_SPECIAL_CHARACTERS}]{${USERID_MIN},}$`);
 * regex.test("abc"); // false (4글자 미만이면 유효하지 않음)
 * regex.test("abcd"); // true (4글자로 유효)
 */
export const USERID_MIN = 4;

/**
 * @constant USERID_MAX
 * @description 유저 아이디의 최대 길이를 정의합니다.
 * 최대 길이는 30글자로 설정되어 있으며, 이를 변경하여 길이 제한을 조정할 수 있습니다.
 *
 * @example
 * const regex = new RegExp(`^[A-Za-z\\d${USERID_SPECIAL_CHARACTERS}]{${USERID_MIN},${USERID_MAX}}$`);
 * regex.test("a".repeat(31)); // false (길이가 31이면 유효하지 않음)
 * regex.test("valid_id_123"); // true (길이가 17글자로 유효)
 */
export const USERID_MAX = 30;
